/// <reference types="@docusaurus/module-type-aliases" />

declare module '*.scss' {
  const classes: { readonly [key: string]: any };
  export default classes;
}
