module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    /* 		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
		],
 */
    'subject-empty': [2, 'never'],
    // 'subject-full-stop': [2, 'never', '.'],
    // 'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'dev',
        'build',
        'docs',
        'fix',
        'refactor',
        'test',
        'perf',
        'other',
      ],
    ],
  },
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing",
        enum: {
          feat: {
            description: 'A new feature',
            title: 'Feature',
            emoji: '✨',
          },
          dev: {
            description: 'Changes to development experience',
            title: 'Development',
            emoji: '💎',
          },
          build: {
            description:
              'Changes that affect the build, integration or deployment system',
            title: 'Build',
            emoji: '🛠',
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚',
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fix',
            emoji: '🐛',
          },
          refactor: {
            description:
              'A code improvement without affecting the user experience',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨',
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          other: {
            description: 'Other changes',
            title: 'Other',
            emoji: '♻️',
          },
        },
      },
      scope: {
        description:
          'What is the scope of this change (e.g. component or file name)',
      },
      subject: {
        description: 'Write a short description of the change',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
    },
  },
};

// module.exports = { extends: ['@commitlint/config-conventional'] };
