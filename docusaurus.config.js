const nightOwl = require("prism-react-renderer/themes/nightOwl");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Namaste JavaScript",
    tagline: "One of the best learning recourses for js, By Akshay Saini",
    url: "https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "open", // Usually your GitHub org/user name.
    projectName: "ProjectJs", // Usually your repo name.
    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],
    plugins: [
      // ... Your other plugins.
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          // language: ["en", "zh"],
          // ```
          // When applying `zh` in language, please install `nodejieba` in your project.
        },
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: "light",

          disableSwitch: true,
        },

        navbar: {
          title: "Namaste Javascript",
          logo: {
            alt: "js",
            src: "img/js-logo.png",
          },
          items: [
            {
              type: "doc",
              docId: "namaste-javascript/intro",
              position: "left",
              label: "Start Learning",
            },
            {
              href: "https://github.com/iamrahultanwar/namaste-js-docs",
              label: "GitHub",
              position: "right",
            },
          ],
        },

        prism: {
          theme: nightOwl,
          darkTheme: nightOwl,
        },
      }),
  }
);
