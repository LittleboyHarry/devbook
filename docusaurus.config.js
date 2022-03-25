// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '极客手册',
  tagline: '写给技术爱好者的公益指南',
  url: 'https://littleboyharry.gitee.io/',
  baseUrl: '/geekbook/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'littleboyharry',
  projectName: 'geekbook',

  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/LittleboyHarry/geekbook/edit/main/',
        },
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
         */
        theme: {
          customCss: [
            require.resolve('./src/css/docusaurus.css'),
            require.resolve('./src/css/utils.css'),
          ],
        },
        gtag: {
          trackingID: 'G-6LEX3L7TYD',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '首页',
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'linux/overview',
            position: 'left',
            label: 'Linux',
          },
          {
            type: 'doc',
            docId: 'browser/intro',
            position: 'left',
            label: '浏览器',
          },
          {
            type: 'doc',
            docId: 'common/intro',
            position: 'left',
            label: '通用',
          },
          {
            type: 'doc',
            docId: 'dev/intro',
            position: 'left',
            label: '开发',
          },
          {
            type: 'doc',
            docId: 'win/overview',
            position: 'left',
            label: 'Win',
          },
          {
            href: 'https://github.com/littleboyharry/geekbook/issues',
            label: '问题反馈',
            position: 'right',
          },
          {
            href: 'https://github.com/littleboyharry/geekbook/raw/main/LICENSE',
            label: '版权',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /*
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          */
          /*
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
           */
          {},
          {
            items: [
              {
                label: '感谢',
                href: '/geekbook/thanks',
              },
            ],
          },
          {
            items: [
              /*
              {
                label: 'Blog',
                to: '/blog',
              },
               */
              {
                label: '问题反馈',
                href: 'https://github.com/littleboyharry/geekbook/issues',
              },
            ],
          },
        ],
        copyright: `本站使用谷歌分析，仅供作者了解网站访问情况。读者需遵守“署名-相同方式共享 3.0”协议`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
    }),
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-pwa',
      {
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/icons/icon_x512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#294172',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/icons/icon_x192.png',
          },
        ],
      },
    ],
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
      },
    ],
  ],
};

module.exports = config;
