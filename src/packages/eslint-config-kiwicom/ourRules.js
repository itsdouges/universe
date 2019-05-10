// @flow strict

const OFF = 0;
const WARN = 1;
const ERROR = 2;

const NEXT_VERSION_ERROR = 3; // special value changed later depending on the required strictness

// Please note: there are some TODOs which means we will make it more strict
// in the future versions. This change requires major version bump. It's not
// safe to immediately switch from OFF to ERROR. Some time for migration is
// needed (WARN serves this purpose).
module.exports = {
  // Possible Errors (http://eslint.org/docs/rules/#possible-errors)
  'for-direction': ERROR,
  'getter-return': ERROR,
  'no-async-promise-executor': WARN,
  'no-compare-neg-zero': ERROR,
  'no-cond-assign': NEXT_VERSION_ERROR,
  'no-console': ERROR,
  'no-constant-condition': [WARN, { checkLoops: false }],
  'no-control-regex': NEXT_VERSION_ERROR,
  'no-debugger': ERROR,
  'no-dupe-args': ERROR,
  'no-dupe-keys': ERROR,
  'no-duplicate-case': NEXT_VERSION_ERROR,
  'no-empty': [WARN, { allowEmptyCatch: true }],
  'no-empty-character-class': NEXT_VERSION_ERROR,
  'no-ex-assign': NEXT_VERSION_ERROR,
  'no-extra-boolean-cast': NEXT_VERSION_ERROR,
  'no-func-assign': ERROR,
  'no-inner-declarations': WARN,
  'no-invalid-regexp': ERROR,
  'no-irregular-whitespace': NEXT_VERSION_ERROR,
  'no-misleading-character-class': NEXT_VERSION_ERROR,
  'no-obj-calls': ERROR,
  'no-prototype-builtins': OFF,
  'no-regex-spaces': NEXT_VERSION_ERROR,
  'no-sparse-arrays': ERROR,
  'no-template-curly-in-string': OFF,
  'no-unreachable': ERROR,
  'no-unsafe-finally': NEXT_VERSION_ERROR,
  'no-unsafe-negation': ERROR,
  'require-atomic-updates': ERROR,
  'use-isnan': ERROR,
  'valid-jsdoc': OFF,
  'valid-typeof': OFF, // see: babel/valid-typeof

  // Best Practices (http://eslint.org/docs/rules/#best-practices)
  'accessor-pairs': [WARN, { setWithoutGet: true }],
  'array-callback-return': OFF,
  'block-scoped-var': OFF,
  'class-methods-use-this': OFF,
  complexity: OFF,
  'consistent-return': [ERROR, { treatUndefinedAsUnspecified: false }],
  curly: [ERROR, 'all'],
  'default-case': OFF,
  'dot-notation': WARN,
  eqeqeq: [WARN, 'smart'],
  'guard-for-in': OFF,
  'max-classes-per-file': OFF,
  'no-alert': WARN,
  'no-await-in-loop': WARN,
  'no-caller': ERROR,
  'no-case-declarations': WARN,
  'no-div-regex': WARN,
  'no-else-return': ERROR,
  'no-empty-function': OFF,
  'no-empty-pattern': WARN,
  'no-eq-null': OFF,
  'no-eval': ERROR,
  'no-extend-native': WARN,
  'no-extra-bind': WARN,
  'no-extra-label': WARN,
  'no-fallthrough': WARN,
  'no-global-assign': [ERROR, { exceptions: ['Map', 'Set'] }],
  'no-implicit-coercion': OFF,
  'no-implicit-globals': OFF,
  'no-implied-eval': ERROR,
  'no-invalid-this': OFF,
  'no-iterator': WARN,
  'no-labels': [ERROR, { allowLoop: true, allowSwitch: true }],
  'no-lone-blocks': WARN,
  'no-loop-func': OFF,
  'no-magic-numbers': OFF,
  'no-multi-str': ERROR,
  'no-new-func': ERROR,
  'no-new-wrappers': WARN,
  'no-new': WARN,
  'no-octal': WARN,
  'no-octal-escape': WARN,
  'no-param-reassign': ERROR,
  'no-proto': ERROR,
  'no-redeclare': [WARN, { builtinGlobals: true }],
  'no-restricted-properties': OFF,
  'no-return-assign': WARN,
  'no-return-await': WARN,
  'no-script-url': ERROR,
  'no-self-assign': WARN,
  'no-self-compare': WARN,
  'no-sequences': WARN,
  'no-throw-literal': WARN,
  'no-unmodified-loop-condition': OFF,
  'no-unused-expressions': OFF, // see: flow/no-unused-expressions
  'no-unused-labels': WARN,
  'no-useless-call': WARN,
  'no-useless-catch': WARN,
  'no-useless-concat': WARN,
  'no-useless-escape': WARN,
  'no-useless-return': WARN,
  'no-void': WARN,
  'no-warning-comments': OFF,
  'no-with': WARN,
  'prefer-named-capture-group': ERROR,
  'prefer-promise-reject-errors': WARN,
  radix: ERROR,
  'require-await': ERROR,
  'require-unicode-regexp': OFF,
  'vars-on-top': OFF,
  yoda: WARN,

  // Strict Mode (http://eslint.org/docs/rules/#strict-mode)
  strict: WARN,

  // Variables (http://eslint.org/docs/rules/#variables)
  'init-declarations': OFF,
  'no-delete-var': ERROR,
  'no-label-var': ERROR,
  'no-restricted-globals': OFF,
  'no-shadow-restricted-names': WARN,
  'no-shadow': OFF,
  'no-undef-init': OFF,
  'no-undef': ERROR,
  'no-undefined': OFF,
  'no-unused-vars': [ERROR, { args: 'after-used' }],
  'no-use-before-define': OFF,

  // Node.js and CommonJS (http://eslint.org/docs/rules/#nodejs-and-commonjs)
  'callback-return': OFF,
  'global-require': OFF,
  'handle-callback-err': WARN,
  'no-buffer-constructor': WARN,
  'no-mixed-requires': OFF,
  'no-new-require': WARN,
  'no-path-concat': WARN,
  'no-process-env': OFF,
  'no-process-exit': OFF,
  'no-restricted-modules': OFF,
  'no-sync': OFF,

  // Stylistic Issues (http://eslint.org/docs/rules/#stylistic-issues)
  camelcase: OFF, // see: babel/camelcase
  'capitalized-comments': OFF,
  'consistent-this': OFF,
  'func-name-matching': OFF,
  'func-names': OFF,
  'func-style': OFF,
  'id-blacklist': OFF,
  'id-length': OFF,
  'id-match': OFF,
  'line-comment-position': OFF,
  'lines-between-class-members': [
    WARN,
    'always',
    { exceptAfterSingleLine: true },
  ],
  'max-depth': OFF,
  'max-lines': OFF,
  'max-lines-per-function': OFF,
  'max-nested-callbacks': OFF,
  'max-params': OFF,
  'max-statements': OFF,
  'max-statements-per-line': OFF,
  'multiline-comment-style': OFF,
  'new-cap': [
    WARN,
    {
      newIsCap: true,
      capIsNew: false,
    },
  ],
  'no-array-constructor': WARN,
  'no-bitwise': WARN,
  'no-continue': OFF,
  'no-inline-comments': OFF,
  'no-lonely-if': ERROR,
  'no-multi-assign': OFF,
  'no-negated-condition': OFF,
  'no-nested-ternary': OFF,
  'no-new-object': WARN,
  'no-plusplus': OFF,
  'no-restricted-syntax': OFF,
  'no-ternary': OFF,
  'no-underscore-dangle': OFF,
  'no-unneeded-ternary': WARN,
  'one-var': [WARN, { initialized: 'never' }],
  'operator-assignment': WARN,
  'padding-line-between-statements': OFF,
  'prefer-object-spread': OFF,
  'require-jsdoc': OFF,
  'sort-keys': OFF,
  'sort-vars': OFF,
  'spaced-comment': [
    ERROR,
    'always',
    {
      block: {
        balanced: true,
        markers: [':', '::'], // flow
      },
    },
  ],

  // ECMAScript 6 (http://eslint.org/docs/rules/#ecmascript-6)
  'constructor-super': ERROR,
  'no-class-assign': WARN,
  'no-const-assign': ERROR,
  'no-dupe-class-members': ERROR,
  'no-duplicate-imports': OFF,
  'no-new-symbol': WARN,
  'no-restricted-imports': OFF,
  'no-this-before-super': ERROR,
  'no-useless-computed-key': WARN,
  'no-useless-constructor': WARN,
  'no-var': WARN,
  'no-useless-rename': WARN,
  'object-shorthand': OFF,
  'prefer-const': [ERROR, { destructuring: 'all' }],
  'prefer-destructuring': OFF,
  'prefer-numeric-literals': OFF,
  'prefer-rest-params': WARN,
  'prefer-spread': WARN,
  'prefer-template': OFF,
  'require-yield': OFF,
  'sort-imports': OFF,
  'symbol-description': WARN,

  // Babel (https://github.com/babel/eslint-plugin-babel)
  'babel/camelcase': [
    ERROR,
    {
      ignoreDestructuring: false,
      properties: 'never', // it's quite common to have object properties mixed
    },
  ],
  'babel/new-cap': OFF,
  'babel/no-invalid-this': OFF,
  'babel/no-unused-expressions': OFF, // see: flow/no-unused-expressions
  'babel/valid-typeof': ERROR,

  // flowtype (https://github.com/gajus/eslint-plugin-flowtype)
  'flowtype/array-style-complex-type': OFF,
  'flowtype/array-style-simple-type': OFF,
  'flowtype/define-flow-type': WARN,
  'flowtype/newline-after-flow-annotation': [ERROR, 'always'],
  'flowtype/no-dupe-keys': WARN,
  'flowtype/no-existential-type': ERROR, // https://github.com/facebook/flow/issues/6308
  'flowtype/no-flow-fix-me-comments': OFF,
  'flowtype/no-mixed': OFF,
  'flowtype/no-mutable-array': OFF,
  'flowtype/no-primitive-constructor-types': WARN,
  'flowtype/no-types-missing-file-annotation': ERROR,
  'flowtype/no-unused-expressions': ERROR,
  'flowtype/no-weak-types': OFF,
  'flowtype/require-compound-type-alias': OFF,
  'flowtype/require-exact-type': OFF,
  'flowtype/require-parameter-type': OFF,
  'flowtype/require-return-type': OFF,
  'flowtype/require-types-at-top': OFF,
  'flowtype/require-valid-file-annotation': [ERROR, 'always'],
  'flowtype/require-variable-type': OFF,
  'flowtype/sort-keys': OFF,
  'flowtype/spread-exact-type': OFF, // TODO: WARN?
  'flowtype/type-id-match': OFF,
  'flowtype/type-import-style': OFF,
  'flowtype/use-flow-type': WARN,
  'flowtype/valid-syntax': OFF,

  // Jasmine (https://github.com/jest-community/eslint-plugin-jest)
  'jest/consistent-test-it': OFF,
  'jest/expect-expect': OFF,
  'jest/lowercase-name': OFF,
  'jest/no-alias-methods': OFF,
  'jest/no-disabled-tests': ERROR,
  'jest/no-empty-title': ERROR,
  'jest/no-focused-tests': ERROR,
  'jest/no-hooks': OFF, // TODO: WARN (?)
  'jest/no-identical-title': ERROR,
  'jest/no-jasmine-globals': ERROR,
  'jest/no-jest-import': ERROR,
  'jest/no-large-snapshots': OFF,
  'jest/no-mocks-import': ERROR,
  'jest/no-test-callback': OFF,
  'jest/no-test-prefixes': OFF,
  'jest/no-test-return-statement': ERROR,
  'jest/no-truthy-falsy': OFF,
  'jest/prefer-called-with': WARN,
  'jest/prefer-expect-assertions': OFF,
  'jest/prefer-inline-snapshots': OFF,
  'jest/prefer-spy-on': OFF,
  'jest/prefer-strict-equal': OFF, // TODO: WARN
  'jest/prefer-to-be-null': ERROR,
  'jest/prefer-to-be-undefined': ERROR,
  'jest/prefer-to-contain': ERROR,
  'jest/prefer-to-have-length': ERROR,
  'jest/prefer-todo': ERROR,
  'jest/require-tothrow-message': OFF,
  'jest/valid-describe': ERROR,
  'jest/valid-expect': ERROR,
  'jest/valid-expect-in-promise': ERROR,

  // prefer-object-spread (https://github.com/bryanrsmith/eslint-plugin-prefer-object-spread)
  'prefer-object-spread/prefer-object-spread': WARN,

  // React (https://github.com/yannickcr/eslint-plugin-react)
  'react/boolean-prop-naming': OFF,
  'react/button-has-type': OFF,
  'react/default-props-match-prop-types': OFF,
  'react/destructuring-assignment': OFF,
  'react/display-name': OFF,
  'react/forbid-component-props': OFF,
  'react/forbid-dom-props': [
    NEXT_VERSION_ERROR,
    {
      forbid: [
        'class', // https://reactjs.org/docs/dom-elements.html#classname
        'for', // https://reactjs.org/docs/dom-elements.html#htmlfor
      ],
    },
  ],
  'react/forbid-elements': OFF,
  'react/forbid-foreign-prop-types': OFF,
  'react/forbid-prop-types': OFF,
  'react/jsx-boolean-value': OFF,
  'react/jsx-curly-brace-presence': OFF,
  'react/jsx-filename-extension': OFF,
  'react/jsx-fragments': OFF,
  'react/jsx-handler-names': OFF,
  'react/jsx-key': ERROR,
  'react/jsx-max-depth': OFF,
  'react/jsx-no-bind': ERROR,
  'react/jsx-no-comment-textnodes': WARN,
  'react/jsx-no-duplicate-props': ERROR,
  'react/jsx-no-literals': OFF,
  'react/jsx-no-target-blank': OFF,
  'react/jsx-no-undef': ERROR,
  'react/jsx-pascal-case': OFF,
  'react/jsx-props-no-spreading': OFF,
  'react/jsx-sort-default-props': OFF,
  'react/jsx-sort-props': OFF,
  'react/jsx-uses-react': WARN,
  'react/jsx-uses-vars': WARN,
  'react/no-access-state-in-setstate': ERROR,
  'react/no-array-index-key': OFF,
  'react/no-children-prop': OFF,
  'react/no-danger': OFF,
  'react/no-danger-with-children': OFF,
  'react/no-deprecated': NEXT_VERSION_ERROR,
  'react/no-did-mount-set-state': OFF, // https://github.com/airbnb/javascript/issues/684#issuecomment-264094930
  'react/no-did-update-set-state': ERROR,
  'react/no-direct-mutation-state': NEXT_VERSION_ERROR,
  'react/no-find-dom-node': OFF,
  'react/no-is-mounted': WARN,
  'react/no-multi-comp': OFF,
  'react/no-redundant-should-component-update': NEXT_VERSION_ERROR,
  'react/no-render-return-value': OFF,
  'react/no-set-state': OFF,
  'react/no-string-refs': OFF,
  'react/no-this-in-sfc': OFF,
  'react/no-typos': OFF,
  'react/no-unescaped-entities': OFF,
  'react/no-unknown-property': WARN,
  'react/no-unsafe': OFF,
  'react/no-unused-prop-types': OFF,
  'react/no-unused-state': OFF,
  'react/no-will-update-set-state': OFF,
  'react/prefer-es6-class': OFF,
  'react/prefer-read-only-props': OFF,
  'react/prefer-stateless-function': OFF,
  'react/prop-types': OFF, // we use Flow instead,
  'react/react-in-jsx-scope': WARN,
  'react/require-default-props': OFF,
  'react/require-optimization': OFF,
  'react/require-render-return': NEXT_VERSION_ERROR,
  'react/sort-comp': [
    NEXT_VERSION_ERROR,
    {
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
      order: [
        'type-annotations',
        'static-methods',
        'instance-variables',
        'lifecycle',
        'everything-else',
        'rendering',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'state',
          'getInitialState',
          'getChildContext',
          'getDerivedStateFromProps',
          'getDerivedStateFromError', // FIXME: this is added
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
        ],
        rendering: ['/^render.+$/', 'render'],
      },
    },
  ],
  'react/sort-prop-types': OFF,
  'react/state-in-constructor': OFF,
  'react/static-property-placement': OFF,
  'react/style-prop-object': OFF,
  'react/void-dom-elements-no-children': OFF,

  // React Hooks (https://www.npmjs.com/package/eslint-plugin-react-hooks)
  'react-hooks/rules-of-hooks': ERROR,
  'react-hooks/exhaustive-deps': ERROR,

  // React Accessibility (https://github.com/evcohen/eslint-plugin-jsx-a11y)
  'jsx-a11y/accessible-emoji': ERROR,
  'jsx-a11y/alt-text': ERROR,
  'jsx-a11y/aria-props': ERROR,
  'jsx-a11y/aria-unsupported-elements': ERROR,
  'jsx-a11y/no-distracting-elements': [
    ERROR,
    {
      elements: ['marquee', 'blink'],
    },
  ],

  // React Native (https://github.com/Intellicode/eslint-plugin-react-native)
  'react-native/no-unused-styles': ERROR,

  // Relay (https://github.com/relayjs/eslint-plugin-relay)
  'relay/compat-uses-vars': OFF, // we do not use Relay Compat
  'relay/generated-flow-types': ERROR,
  'relay/graphql-naming': ERROR,
  'relay/graphql-syntax': ERROR,
  'relay/no-future-added-value': ERROR,
  'relay/unused-fields': ERROR,

  // import (https://github.com/benmosher/eslint-plugin-import)
  'import/order': [
    ERROR,
    {
      groups: [['builtin', 'external'], ['parent', 'sibling'], 'index'],
      'newlines-between': 'always',
    },
  ],
  'import/prefer-default-export': OFF,
  'import/newline-after-import': ERROR,
  'import/no-dynamic-require': OFF,
  'import/no-mutable-exports': ERROR,
  'import/no-absolute-path': ERROR,
  'import/no-useless-path-segments': ERROR,
  'import/no-extraneous-dependencies': [
    ERROR,
    {
      devDependencies: ['**/*.test.js', '**/*.spec.js'],
    },
  ],
  'import/no-unresolved': [
    ERROR,
    {
      // compatible with Relay 'artifactDirectory'
      ignore: ['^__generated__/'],
    },
  ],
  'import/no-anonymous-default-export': [
    ERROR,
    {
      allowArray: true,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowCallExpression: true,
      allowLiteral: true,
      allowObject: true,
    },
  ],
  'import/no-duplicates': WARN,

  // dependencies (https://github.com/zertosh/eslint-plugin-dependencies)
  'dependencies/case-sensitive': ERROR,
  'dependencies/no-cycles': WARN,
  'dependencies/no-unresolved': OFF, // see import/no-unresolved (supports RN)
  'dependencies/require-json-ext': ERROR,

  // monorepo (https://github.com/azz/eslint-plugin-monorepo)
  'monorepo/no-internal-import': ERROR,
  'monorepo/no-relative-import': ERROR,

  // Node.js (https://github.com/mysticatea/eslint-plugin-node)
  'node/exports-style': OFF,
  'node/file-extension-in-import': [
    NEXT_VERSION_ERROR,
    'always',
    { '.js': 'never' },
  ],
  'node/no-deprecated-api': ERROR,
  'node/no-extraneous-import': OFF, // see: import/no-extraneous-dependencies
  'node/no-extraneous-require': OFF, // see: import/no-extraneous-dependencies
  'node/no-missing-import': OFF,
  'node/no-missing-require': ERROR,
  'node/no-unpublished-bin': ERROR,
  'node/no-unpublished-import': OFF,
  'node/no-unpublished-require': OFF,
  'node/no-unsupported-features/es-builtins': OFF,
  'node/no-unsupported-features/es-syntax': OFF,
  'node/no-unsupported-features/node-builtins': OFF,
  'node/prefer-global/buffer': ERROR,
  'node/prefer-global/console': ERROR,
  'node/prefer-global/process': ERROR,
  'node/prefer-global/text-decoder': OFF,
  'node/prefer-global/text-encoder': OFF,
  'node/prefer-global/url': ERROR,
  'node/prefer-global/url-search-params': OFF,
  'node/prefer-promises/dns': OFF, // TODO: WARN (?)
  'node/prefer-promises/fs': OFF, // TODO: WARN (?)
  'node/process-exit-as-throw': OFF, // TODO: WARN (?)
  'node/shebang': ERROR,

  // Eslint comments (https://github.com/mysticatea/eslint-plugin-eslint-comments)
  'eslint-comments/disable-enable-pair': OFF,
  'eslint-comments/no-aggregating-enable': OFF,
  'eslint-comments/no-duplicate-disable': ERROR,
  'eslint-comments/no-restricted-disable': OFF,
  'eslint-comments/no-unlimited-disable': OFF, // Relay disables generated files with unlimited scope
  'eslint-comments/no-unused-disable': OFF,
  'eslint-comments/no-unused-enable': ERROR,
  'eslint-comments/no-use': OFF,

  // Kiwi.com custom rules
  'kiwicom-incubator/only-nullable-fields': ERROR,
  'kiwicom-incubator/no-invalid-flow-annotations': ERROR,
};
