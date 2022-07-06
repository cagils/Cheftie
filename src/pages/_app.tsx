import {
  Box,
  ChakraProvider,
  cookieStorageManager,
  extendTheme,
  Flex,
  Icon,
  localStorageManager,
  VStack,
} from '@chakra-ui/react';
import { getCookie, setCookies } from 'cookies-next';
import { GetServerSidePropsContext, NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import Link from 'next/link';
import NextNProgress from 'nextjs-progressbar';
import { Account } from '../components/auth/Account';
import { LoginForm } from '../components/auth/LoginForm';
import { AuthProvider, useAuth } from '../lib/hooks/useAuth';
import { supabase } from '../lib/supabase';
import '../styles/globals.css';
import { customTheme } from '../styles/theme';

type GetLayout = (page: ReactNode) => ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

export default function App(props: MyAppProps) {
  const { Component, pageProps } = props;
  // const [session, setSession] = useState(null);

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  /*   const [user, setUser] = useState({});

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
        if (event === 'SIGNED_IN') {
          setUser({ loggedIn: true });
        }
        if (event === 'SIGNED_OUT') {
          setUser({});
        }
      }
    );
    checkUser();
    return () => {
      authListener.unsubscribe();
    };
  }, []); */

  /*   async function checkUser() {
    const user = await supabase.auth.user();
    if (user) {
      setUser({ loggedIn: true, user: user });
    }
  } */

  /*   async function handleAuthChange(event, session) {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    });
  } */

  /*   useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []); */

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Secret Cook Book</title>
      </Head>
      <ChakraProvider theme={customTheme}>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
      </ChakraProvider>
    </>
  );
}
