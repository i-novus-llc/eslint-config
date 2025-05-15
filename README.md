# @i-novus/eslint-config

[![NPM version](https://img.shields.io/npm/v/@i-novus/eslint-config.svg)](https://www.npmjs.org/package/@i-novus/eslint-config)

## Установка

```shell
npm install --save-dev @i-novus/eslint-config
```

or

```shell
yarn add --dev @i-novus/eslint-config
```

А так же понадобятся `eslint`, `stylelint`.


## Использование ESLint

1. Добавьте `eslint.config.mjs` в корень проекта:

```js
import eslintRules from '@i-novus/eslint-config'

// eslint-disable-next-line no-restricted-exports,import/no-default-export
export default eslintRules
```

Можно расширить конфигурацию, например задав игнорируемую папку:

```js
import { defineConfig } from 'eslint/config'
import eslintRules from '@i-novus/eslint-config'

// eslint-disable-next-line no-restricted-exports,import/no-default-export
export default defineConfig(
    {
        ignores: ['src/eslint-ignored-directory'],
    },
    eslintRules,
)
```

2. Добавить скрипт в `package.json`

```json
{
  "scripts": {
    "lint": "eslint src"
  }
}
```


## Использование stylelint

1. Добавьте `stylelint.config.cjs` в корень проекта.

```js
module.exports = {
    extends: [
        '@i-novus/eslint-config/styles'
    ]
}
```

2. Добавить скрипт в `package.json`

```json
{
  "scripts": {
    "lint": "stylelint \"src/**/*.{css,scss,sass}\""
  }
}
```


## License

[Apache-2.0](./LICENSE)
