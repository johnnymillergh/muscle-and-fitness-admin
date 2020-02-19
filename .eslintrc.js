module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    // 'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  plugins: ['vue-libs'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'space-before-function-paren': [
      2,
      'always'
    ],

    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],

    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: false
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false
      }
    }],

    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    'prefer-const': 2,
    'object-curly-spacing': [2, 'always', { objectsInObjects: false }],
    'array-bracket-spacing': [2, 'never'],
    'vue-libs/jsx-uses-vars': 2,
    'vue/require-v-for-key': 0,
    'vue/html-indent': 'error',
    'vue/html-quotes': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/html-self-closing': 'error',
    'no-unused-vars': 'error',
    'yoda': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
