// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '开发手册',
  tagline: '写给程序员的开发文档',
  url: 'https://devbook.littleboyharry.me/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'littleboyharry',
  projectName: 'devbook',
  i18n: {
    defaultLocale: 'cn',
    locales: ['cn'],
    localeConfigs: {
      cn: {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'roc',
      },
      en: {
        label: 'English',
      },
    },
  },
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/LittleboyHarry/devbook/edit/main/',
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
            require.resolve('./src/css/rules.scss'),
            require.resolve('./src/css/global.scss'),
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
        title: '🛠️',
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'setup-mswin/index',
            position: 'left',
            label: 'Windows',
          },
          {
            type: 'doc',
            docId: 'setup-linux/require',
            position: 'left',
            label: 'Linux',
          },
          {
            type: 'doc',
            docId: 'devenv/intro',
            position: 'left',
            label: '开发环境',
          },
          {
            type: 'doc',
            docId: 'goodsoft/intro',
            position: 'left',
            label: '常用软件',
          },
          {
            type: 'doc',
            docId: 'manual/intro',
            position: 'left',
            label: '知识与经验',
          },
          {
            href: 'https://github.com/littleboyharry/devbook/issues',
            label: '问题反馈',
            position: 'right',
          },
          {
            href: 'https://github.com/littleboyharry/devbook/raw/main/LICENSE',
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
                href: '/thanks',
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
                href: 'https://github.com/littleboyharry/devbook/issues',
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
            href: '/img/appicon/icon_x512.png',
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
            href: '/img/appicon/icon_x192.png',
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
