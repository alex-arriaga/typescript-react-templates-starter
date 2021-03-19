# TypeScript React Templates Starter

A boilerplate to start building a set of React templates written with [TypeScript](https://www.typescriptlang.org/). 

Are you looking for a just a start for a TypeScript library? 
- Check the [TypeScript Library Starter](https://github.com/alex-arriaga/typescript-library-starter/) out!

## FAQs

### What is included?
- TypeScript compiler generating outputs for both CommonJS and ES modules.
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) configured to play well with TypeScript (including recommended presets). Check other supported rules in [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).
- [Jest](https://jestjs.io/) for unit testing configured with TypeScript (including recommended presets).

### Why are there two builds? (`cjs` and `esm`)

The `src` of `typescript-react-templates-starter` is compiled into two separate build directories (inside the `dist` folder): `cjs` and `esm`.
- The `cjs` build is [configured to use the CommonJS module system](https://github.com/alex-arriaga/typescript-react-templates-starter/blob/main/tsconfig.json). 
- The `esm` build [uses the new ES2015+ module system](https://github.com/alex-arriaga/typescript-react-templates-starter/blob/main/tsconfig.esm.json).

Once the `npm run build` is executed, the output will be:
```
dist
├── cjs
└── esm
```

Because Node.js LTS releases do not yet support the ES2015+ module system, some projects which depend on your project will follow the `main` field in [`package.json`](https://github.com/alex-arriaga/typescript-react-templates-starter/blob/main/package.json). 

Tools that support the new system (e. g. [Rollup](https://github.com/rollup/rollup), [Webpack](https://webpack.js.org/), or [Parcel](https://parceljs.org/)) will follow the `module` field, giving them the ability to statically analyze your project. These tools can tree-shake the `esm` build to import only the code they need.

## Development
```
# Install dependencies
npm install

# Generate the "dist"
npm run build
```

### Other NPM scripts
```
# Lint
npm run lint
npm run lint:fix

# Format
npm run format

# Test
npm run test
npm run test:watch
npm run test:coverage
```
