module.exports = {
  root: true,
  // Recognize global vars for these environments
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: [
    /* Disable erroneous linting of JSON files in Codacy. */
    '*.json',
  ],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'indent': ['warn', 2, { SwitchCase: 1 }],
        'no-dupe-class-members': 'error',
      },
    },
    {
      files: ['**/*.test.[jt]s', 'jest.setup.js'],
      env: {
        jest: true,
      },
      rules: {
        'arrow-body-style': 'off',
        'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
        'no-console': 'off',
      },
    },
  ],
  plugins: [
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint',
    'import',
    'jest',
  ],
  rules: {
    // Possible errors
    'no-console': 'warn',

    // Best practices
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/no-useless-constructor': 'warn',

    // Stylistic
    '@typescript-eslint/indent': ['warn', 2, {
      ignoredNodes: ['TSTypeParameterInstantiation'],
      SwitchCase: 1,
    }],
    '@typescript-eslint/member-delimiter-style': 'warn',
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/type-annotation-spacing': 'warn',

    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-parens': 'off',
    'brace-style': ['warn', '1tbs'],
    'camelcase': ['warn', { properties: 'never' }],
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
      imports: 'always-multiline',
      objects: 'always-multiline',
    }],
    'curly': 'error',
    'eqeqeq': ['error', 'always'],
    'import/order': ['warn',
      { 'groups': ['builtin', 'external', 'internal', 'parent', 'sibling'] },
    ],
    'import/prefer-default-export': 'off',
    'indent': 'off',
    'keyword-spacing': 'warn',
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': 'warn',
    'max-len': ['warn', {
      code: 120,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
    'no-multiple-empty-lines': ['warn', { max: 2, maxBOF: 0, maxEOF: 0 }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-dupe-class-members': 'off',
    'no-trailing-spaces': 'warn',
    'no-underscore-dangle': ['warn', { allowAfterThis: true }],
    'object-curly-newline': ['warn', { consistent: true }],
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    'object-shorthand': ['warn', 'always'],
    'padded-blocks': 'off',
    'quote-props': ['warn', 'as-needed', { unnecessary: false }],
    'quotes': ['warn', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],
  },
};
