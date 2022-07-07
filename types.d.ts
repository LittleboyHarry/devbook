/// <reference types="@docusaurus/module-type-aliases" />

declare module '*.scss' {
  const classes: { readonly [key: string]: any };
  export default classes;
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  // eslint-disable-next-line import/no-default-export
  export default MDXComponent;
}

declare module '*.md' {
  export { default } from '*.mdx';
}
