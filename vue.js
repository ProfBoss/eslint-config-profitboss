module.exports = {
  extends: [
    './index.js',
    './web.js',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'prettier/vue',
  ],
  overrides: [
    {
      files: ['src/*.vue'],
      rules: {
        'vue/require-name-property': 'error',
      },
    },
    {
      files: ['src/**/!(index).vue'],
      rules: {
        'vue/match-component-file-name': [
          'error',
          {
            extensions: ['vue', 'jsx'],
            shouldMatchCase: false,
          },
        ],
      },
    },
  ],
  plugins: ['vue'],
  rules: {
    'jsdoc/check-tag-names': [
      'error',
      {
        definedTags: ['vue/component', 'model', 'values', 'slot', 'event'],
      },
    ],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: [],
        registeredComponentsOnly: true,
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          component: 'always',
          normal: 'never',
          void: 'always',
        },
        math: 'always',
        svg: 'always',
      },
    ],
    'vue/no-bare-strings-in-template': [
      'error',
      {
        allowlist: [
          '(',
          ')',
          ',',
          '.',
          '&',
          '+',
          '-',
          '=',
          '*',
          '/',
          '#',
          '%',
          '!',
          '?',
          ':',
          '[',
          ']',
          '{',
          '}',
          '<',
          '>',
          '$',
          '\u00b7',
          '\u2022',
          '\u2010',
          '\u2013',
          '\u2014',
          '\u2212',
          '|',
        ],
        attributes: {
          '/.+/': [
            'label',
            'title',
            'info',
            'text',
            'v-tooltip',
            'alt',
            'aria-label',
            'aria-placeholder',
            'aria-roledescription',
            'aria-valuetext',
            'hint',
            'placeholder',
            'subtitle',
          ],
        },
        directives: ['v-text'],
      },
    ],
    'vue/no-static-inline-styles': 'error',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          'components',
          'filters',
          'directives',
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'fetch',
          'asyncData',
          'data',
          'computed',
          'watch',
          'beforeCreate',
          'created',
          'beforeMount',
          'mounted',
          'beforeUpdate',
          'updated',
          'activated',
          'deactivated',
          'beforeDestroy',
          'destroyed',
          'methods',
          'head',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    'vue/sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        ignoreChildrenOf: ['model'],
        ignoreGrandchildrenOf: [
          'computed',
          'directives',
          'inject',
          'props',
          'watch',
        ],
        minKeys: 2,
        natural: false,
      },
    ],
    'vue/static-class-names-order': 'error',
    'vue/v-on-function-call': 'error',
    'vue/valid-v-slot': 'off',
  },
}
