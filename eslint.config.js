import stylisticJs from '@stylistic/eslint-plugin';

export default [
  {
    files: ['**/*.js'],
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      'no-unused-vars': 'error',
      'no-console-log': 'warn',
      'no-var': 'error',
      semi: true,
    },
  },
];
