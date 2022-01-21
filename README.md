# Todo Test UI

## 📄 Scripts

Abaixo os comandos que são usados no projeto:

| Comando | Description |

| ----------------------- | --------------------------------------------------------------------------------------------- |

`| yarn |` Instala as dependências do projeto |

`| yarn dev |` Executa o projeto em modo de desenvolvimento na porta `3000` |

`| yarn build |` Builda o projeto |

`| yarn svgr-transform |` Transforma os svgs da pasta public/svg em componentes na pasta src/icons |

## 🌿 Variaveis de ambiente

```sh
NEXT_PUBLIC_TODO_API=(URL To Do api)
```

## 🚀 Padrões de código/desenvolvimento

- Para nomenclatura de branches, utilizamos o padrão do Gitflow

  - `feature/${nomeDaFeature}` - Para features novas
  - `hotfix/${nomeDoHotfix}` - Para hotfixes

## 📦 Bibliotecas mais usadas

- [create next-app](https://nextjs.org/docs/getting-started)
- [styled-component](https://github.com/styled-components/styled-components)
- [typescript](https://github.com/microsoft/TypeScript)
- [axios](https://github.com/axios/axios)
- [jest](https://github.com/facebook/jest)
- [eslint](https://eslint.org/)

## 🛠 Extensões VSCode

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=diegolincoln.vscode-styled-components)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Portuguese - Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-portuguese)

## 🗂 Estrutura do projeto

```

todo-test-ui
  ├── .vscode // configurações do vscode
  ├── scripts // comandos para git hook
  ├── public
  │   └── svg // icones svgs
  └── src
      ├── assets
      │   ├── icons // icones svg transformados em componentes react
      │   └── images // imagens da aplicação
      ├── hooks // estados globais
      ├── pages // rotas da aplicação
      ├── services // requests compartilhadas
      ├── structure
      │   ├── commons // "átomos" pequenas partes que formam os componentes
      │   ├── components // componentes formados
      │   └── layout // estuturas que comportam os componentes
      └── styles
          ├── pages // css das páginas
          ├── globalStyles.css // css global
          └── theme.ts // controle de versao para variaveis de css

```

## ❗️ Imports absolutos

Evitar importes relativos que vêm do diretório `src/`.

```typescript
�?import MyComponent from '../../components/MyComponent';

✔️ import MyComponent from '@components/MyComponent';
```

Configure seu editor para resolver esses imports

**VSCode**

Coloque o arquivo `tsconfg.json` na raiz do projeto:

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@assets/*": ["assets/*"],
      "@components/*": ["structure/components/*"],
      "@commons/*": ["structure/commons/*"],
      "@layout/*": ["structure/layout/*"],
      "@services/*": ["services/*"],
      "@constants/*": ["constants/*"],
      "@styles/*": ["styles/*"],
      "@hooks/*": ["hooks/*"],
      "@typesUtils/*": ["types/*"]
    }
  }
}
```
