import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Disbursement Voucher Tracker',
  tagline: 'Comprehensive documentation for municipal government disbursement tracking',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-org', // Usually your GitHub org/user name.
  projectName: 'disbursement-voucher-tracker', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Internationalization (i18n) configuration
  // Supports English (en) and Bisaya/Cebuano (ceb)
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ceb'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
      },
      ceb: {
        label: 'Bisaya',
        direction: 'ltr',
        htmlLang: 'ceb-PH',
        calendar: 'gregory',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/your-org/disbursement-voucher-tracker/tree/main/',
        },
        pages: {
          // Pages plugin is enabled by default in classic preset
          // This ensures React pages work for all locales
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/your-org/disbursement-voucher-tracker/tree/main/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Disbursement Voucher Tracker',
      logo: {
        alt: 'Disbursement Voucher Tracker Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/your-org/disbursement-voucher-tracker',
        //   label: 'GitHub',
        //   position: 'right',
        // },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/introduction',
            },
            {
              label: 'Role-Based Guides',
              to: '/docs/roles/requester',
            },
            {
              label: 'Workflows',
              to: '/docs/workflows/standard',
            },
            {
              label: 'Reference',
              to: '/docs/reference/glossary',
            },
          ],
        },
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Quick Start: Requester',
              to: '/docs/quick-start/requester',
            },
            {
              label: 'Quick Start: Reviewer',
              to: '/docs/quick-start/reviewer',
            },
            {
              label: 'FAQ',
              to: '/docs/reference/faq',
            },
            {
              label: 'Troubleshooting',
              to: '/docs/reference/troubleshooting',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Contact Support',
              href: 'mailto:support@example.com',
            },
            {
              label: 'System Administrator',
              href: 'mailto:admin@example.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Municipal Government. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
