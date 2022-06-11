/// <reference types="@docusaurus/module-type-aliases" />
/// <reference types="@docusaurus/theme-classic" />
declare module '*.scss' {
  const content: { [key: string]: any };
  export = content;
}
