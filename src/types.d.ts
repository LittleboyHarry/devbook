/// <reference path="../node_modules/@docusaurus/theme-classic/src/theme-classic.d.ts" />

declare module '*.scss' {
  const content: { [key: string]: any };
  export = content;
}
