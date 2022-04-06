// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'High School CS',
    tagline: 'Simplifying creation via computer science',
    url: 'https://highschoolcs.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.png',
    organizationName: 'High School CS', // Usually your GitHub org/user name.
    projectName: 'highschoolcs.com', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    path: 'docs',
                    editUrl: 'https://github.com/High-School-CS/highschoolcs.com',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/High-School-CS/highschoolcs.com',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'git',
                path: 'tutorials/Git',
                routeBasePath: 'tutorials/Git',
                sidebarPath: require.resolve('./sidebars.js'),
                // ... other options
            },
        ], [
            '@docusaurus/plugin-content-docs',
            {
                id: 'python',
                path: 'tutorials/Python',
                routeBasePath: 'tutorials/Python',
                sidebarPath: require.resolve('./sidebars.js'),
                // ... other options
            },
        ], [
            '@docusaurus/plugin-content-docs',
            {
                id: 'java',
                path: 'tutorials/Java',
                routeBasePath: 'tutorials/Java',
                sidebarPath: require.resolve('./sidebars.js'),
                // ... other options
            },
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'High School CS',
                logo: {
                    alt: 'High School CS Logo',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutorials',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/High-School-CS/',
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
                                label: 'Tutorials',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/GfZhpKvasM',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/High-School-CS',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} High School CS.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
