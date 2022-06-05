import { Box, Button, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { getCircularReplacer } from '../../lib/tools.js';
import { Ingredients } from '../Ingredients/Ingredients';

export const Recipe = ({ mode, recipeId }) => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useFormContext();

  function onFormError(data) {
    const name = Object.keys(data)[0];
    data = data[name];
    delete data.ref;
    alert(`${name}: ` + JSON.stringify(data, getCircularReplacer()));
  }

  function onFormSubmit(data) {
    const name = Object.keys(data)[0];
    data = data[name];
    delete data.ref;
    alert(`${name}: ` + JSON.stringify(data, getCircularReplacer()));
  }

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const loadRecipe = async () => {
      const response = await fetch(`/api/recipes/${recipeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      let data = await response.json();
      data = data.data[0];
      setRecipe(data);
      setLoading(false);
    };

    loadRecipe();
  }, [recipeId]);

  if (loading) {
    return (
      <Box>
        <Spinner />
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit, onFormError)}>
      <Box as="h1">{recipe.title}</Box>
      {recipe && <Ingredients ingredients={recipe.ingredients} />}

      <Box my="8px" align="end">
        <Button
          type="submit"
          color="white"
          variant="gradient"
          bgGradient="linear(to-r, purple.300, pink.300)"
          isLoading={isSubmitting}
        >
          Save Recipe
        </Button>
      </Box>
    </form>
  );
};