# Use lyne-components in Angular

1. Install lyne-components as npm-package: `npm install lyne-test --save`
2. In `/src/app/app.module.ts` import the `CUSTOM_ELEMENTS_SCHEMA` and add it to `schemas`
3. In `/src/main.ts` import `defineCustomElements` and call the function.
4. Add a new file in the source folder called `lyne-test.d.ts` and declare the module `declare module 'lyne-test/dist/esm/loader';`

After that you can use lyne-components.
