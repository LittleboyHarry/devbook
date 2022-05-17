/// <reference path="@docusaurus/module-type-aliases" />

declare module '*.scss' {
  const content: { [key: string]: any };
  export = content;
}
