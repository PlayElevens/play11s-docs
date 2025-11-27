// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Play11s Docs',
  tagline: 'Docs, guides and roadmap for Play11s',
  favicon: 'img/favicon.ico',

  // Future flags
  future: {
    v4: true,
  },

  // Production URL for your staging site
  url: 'https://docstest.play11s.com',
  baseUrl: '/',

  // GitHub / repo info (used for edit links, etc.)
  organizationName: 'PlayElevens', // your GitHub org
  projectName: 'play11s-docs',    // repo name

  // Broken links policy - avoid failing builds on minor link problems
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Serve docs at site root (so docs appear at /)
          routeBasePath: '/',
          // Enable "Edit this page" linking to your repo
          editUrl: 'https://github.com/PlayElevens/play11s-docs/edit/main/',
        },
        // disable blog for now (cleaner docs site). Turn to `true` if you need it.
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Play11s Docs',
        logo: {
          alt: 'Play11s Logo',
          src: 'img/logo.svg', // replace with your actual logo path (e.g. img/play11s-logo.png)
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar', // your sidebars.js exports `docsSidebar`
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://play11s.com', // your main product site
            label: 'Play11s',
            position: 'right',
          },
          {
            href: 'https://github.com/PlayElevens/play11s-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Welcome',
                to: '/',
              },
              {
                label: 'What is Play11s?',
                to: '/what-is-play11s',
              },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'Roadmap',
                to: '/project-roadmap/overview',
              },
              {
                label: 'Changelog',
                to: '/changelog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://x.com/PlayElevens',
              },
              {
                label: 'Discord',
                href: '#', // fill in when available
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PlayElevens. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
