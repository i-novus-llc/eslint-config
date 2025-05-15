const config = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-scss',
        'stylelint-config-clean-order'
    ],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'declaration-block-single-line-max-declarations': 0,
        // Не использовать & в селекторе, если он не нужен: & a {}
        'scss/selector-no-redundant-nesting-selector': true,
        // Запрет на использование & при формировании имени класса: &-focused {}
        'scss/selector-no-union-class-name': true,
        // Проверка правильности написания имен классов
        'selector-class-pattern': [
            '^([a-z][a-z0-9]*((-|--|_|__)[a-z0-9]+)*)$',
            {
                message: (selector) => `Expected class selector "${selector}" to be kebab-case, snake_case or BEM`,
            },
        ],
    },
    overrides: [
        {
            files: ['*.module.css', '*.module.scss'],
            rules: {
                'selector-class-pattern': [
                    '^([a-z][a-zA-Z0-9]*)$',
                    {
                        message: (selector) => `Expected class selector "${selector}" to be camelCase`,
                    },
                ],
            }
        },
        {
            files: ['*.scss'],
            rules: {
                'import-notation': 'string',
            }
        }
    ],
}

module.exports = config
