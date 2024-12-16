import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginPrettier.configs.recommended.rules, // Adds Prettier's recommended rules
    },
  },
  pluginJs.configs.recommended, // ESLint JavaScript rules
  pluginReact.configs.flat.recommended, // React rules
  configPrettier, // Disables ESLint rules that conflict with Prettier
];
