/**
 * Copyright (c) Ajay Dhangar
 *
 * This file defines the sidebar configuration for the CodeHarborHub Tutorials Docs.
 * Each category represents a tutorial topic like HTML, CSS, JavaScript, React, Git, GitHub, and Cybersecurity.
 *
 * Licensed under the MIT License.
 */

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorial: [
    "index",
    // HTML Tutorial Structure
    {
      type: "category",
      label: "HTML",
      link: {
        type: "generated-index",
        title: "HTML Tutorials",
        description: "Master HTML from basic syntax to advanced web concepts.",
        image: "/icons/html-5.svg",
      },
      collapsed: true,
      items: [
        "html/intro-html",
        "html/setup-environment",
        "html/how-html-works",

        {
          type: "category",
          label: "HTML Basics",
          link: {
            type: "generated-index",
            title: "HTML Basics",
            description:
              "Learn the foundational concepts of HTML syntax, structure, and elements.",
          },
          items: [
            "html/html-basics/syntax-and-structure",
            "html/html-basics/elements-and-tags",
            "html/html-basics/attributes-and-values",
            "html/html-basics/document-structure",
          ],
        },

        {
          type: "category",
          label: "Text Formatting",
          link: {
            type: "generated-index",
            title: "HTML Text Formatting",
            description:
              "Style and format text using HTML tags like headings, paragraphs, and spans.",
          },
          items: [
            "html/text-formatting/headings",
            "html/text-formatting/paragraphs",
            "html/text-formatting/text-formatting",
          ],
        },

        {
          type: "category",
          label: "Images",
          link: {
            type: "generated-index",
            title: "HTML Images",
            description:
              "Learn how to insert, format, and optimize images in your web pages.",
          },
          items: [
            "html/images/inserting-images",
            "html/images/image-attributes",
            "html/images/image-formats-and-optimization",
          ],
        },

        {
          type: "category",
          label: "Links & Anchors",
          link: {
            type: "generated-index",
            title: "HTML Links and Anchors",
            description:
              "Explore how hyperlinks work in HTML and how to connect pages effectively.",
          },
          items: [
            "html/links-and-anchors/creating-hyperlinks",
            "html/links-and-anchors/link-attributes",
          ],
        },

        {
          type: "category",
          label: "Lists",
          link: {
            type: "generated-index",
            title: "HTML Lists",
            description:
              "Learn how to create ordered, unordered, and definition lists in HTML.",
          },
          items: [
            "html/lists/list-intro",
            "html/lists/ordered-lists",
            "html/lists/unordered-lists",
            "html/lists/definition-lists",
          ],
        },

        {
          type: "category",
          label: "Tables",
          link: {
            type: "generated-index",
            title: "HTML Tables",
            description:
              "Discover how to organize and structure data using HTML tables.",
          },
          items: [
            "html/tables/html-tables",
            "html/tables/creating-tables",
            "html/tables/table-structure",
            "html/tables/table-attributes",
          ],
        },

        {
          type: "category",
          label: "Forms",
          link: {
            type: "generated-index",
            title: "HTML Forms",
            description:
              "Understand how to create and manage forms in HTML for collecting user input.",
          },
          items: [
            "html/forms/form-input-element",
            "html/forms/form-attribute",
            "html/forms/building-form",
          ],
        },

        {
          type: "category",
          label: "Semantic HTML",
          link: {
            type: "generated-index",
            title: "Semantic HTML",
            description:
              "Learn how semantic elements improve accessibility and SEO.",
          },
          items: [
            "html/semantic-html/understanding-semantic-html",
            "html/semantic-html/semantic-html5-elements",
            "html/semantic-html/benefits-of-semantic-html",
          ],
        },

        {
          type: "category",
          label: "Multimedia",
          link: {
            type: "generated-index",
            title: "HTML Multimedia",
            description:
              "Add and control multimedia content like audio and video in your web pages.",
          },
          items: [
            "html/multimedia/adding-audio-and-video",
            "html/multimedia/embedding-multimedia-content",
            "html/multimedia/multimedia-attributes-and-controls",
          ],
        },

        {
          type: "category",
          label: "HTML5 APIs",
          link: {
            type: "generated-index",
            title: "HTML5 APIs",
            description:
              "Explore advanced HTML5 APIs like Canvas, Geolocation, and Storage.",
          },
          items: [
            "html/html5-apis/canvas-and-svg-graphics",
            "html/html5-apis/geolocation-api",
            "html/html5-apis/local-storage-and-session-storage",
          ],
        },

        {
          type: "category",
          label: "Responsive Web Design",
          link: {
            type: "generated-index",
            title: "Responsive Web Design",
            description:
              "Learn how to make your websites adaptable across devices.",
          },
          items: [
            "html/responsive-web-design/introduction-to-responsive-design",
            "html/responsive-web-design/media-queries-and-breakpoints",
            "html/responsive-web-design/flexbox-and-grid-layout",
          ],
        },

        {
          type: "category",
          label: "HTML Validation & Debugging",
          link: {
            type: "generated-index",
            title: "HTML Validation and Debugging",
            description:
              "Understand how to validate and debug HTML code effectively.",
          },
          items: [
            "html/html-validation-and-debugging/importance-of-validating-html-code",
            "html/html-validation-and-debugging/using-w3c-validator",
            "html/html-validation-and-debugging/common-html-errors-and-fixes",
          ],
        },

        // {
        //   type: "category",
        //   label: "Best Practices & Optimization",
        //   link: {
        //     type: "generated-index",
        //     title: "HTML Best Practices",
        //     description:
        //       "Follow best practices for writing clean, efficient, and accessible HTML.",
        //   },
        //   items: ["html/best-practices-and-optimization"],
        // },

        {
          type: "category",
          label: "Next Steps & Resources",
          link: {
            type: "generated-index",
            title: "Next Steps and Resources",
            description:
              "Continue your learning journey with advanced topics and community resources.",
          },
          items: [
            "html/next-steps-and-resources/advanced-html-topics",
            "html/next-steps-and-resources/further-learning-resources",
            "html/next-steps-and-resources/community-support",
          ],
        },
      ],
    },

    // CSS Tutorial Structure

    {
      type: "link",
      label: "CSS",
      href: "/css/introduction",
    },

    // JavaScript Tutorial Structure

    {
      type: "link",
      label: "JavaScript",
      href: "/javascript/introduction-to-javascript/what-is-js",
    },

    // Git Tutorial Structure

    {
      type: "link",
      label: "Git",
      href: "/git/introduction",
    },

    // GitHub Tutorial Structure

    {
      type: "link",
      label: "GitHub",
      href: "/github/introduction-to-github",
    },

    //  React Tutorial Structure
    {
      type: "category",
      label: "React",
      link: { type: "doc", id: "react/react-intro" },
      collapsed: true,
      items: [
        "react/create-react-app",
        {
          type: "category",
          label: "Getting Started",
          link: {
            type: "generated-index",
            title: "React Basics",
            description:
              "Learn the fundamentals of React, including setup, folder structure, forms, and supported browsers. Start building your first React applications with guided instructions.",
          },
          items: [
            "react/getting-started/getting-started",
            "react/getting-started/available-scripts",
            "react/getting-started/folder-structure",
            "react/getting-started/forms-in-react",
            "react/getting-started/supported-browsers-features",
            "react/getting-started/updating-to-new-releases",
          ],
        },
        {
          type: "category",
          label: "Building Your App",
          link: {
            type: "generated-index",
            title: "Building Your React App",
            description:
              "Explore advanced app setup including routing, dependencies, environment variables, progressive web apps, and performance measurement in React.",
          },
          items: [
            "react/building-your-app/adding-a-router",
            "react/building-your-app/adding-bootstrap",
            "react/building-your-app/adding-custom-environment-variables",
            "react/building-your-app/adding-flow",
            "react/building-your-app/adding-relay",
            "react/building-your-app/adding-typescript",
            "react/building-your-app/importing-a-component",
            "react/building-your-app/installing-a-dependency",
            "react/building-your-app/making-a-progressive-web-app",
            "react/building-your-app/measuring-performance",
            "react/building-your-app/production-build",
            "react/building-your-app/using-global-variables",
          ],
        },
        {
          type: "category",
          label: "Development",
          link: {
            type: "generated-index",
            title: "Development Tips",
            description:
              "Learn how to develop React components efficiently, analyze bundle sizes, set up your editor, and use HTTPS in development.",
          },
          items: [
            "react/development/analyzing-the-bundle-size",
            "react/development/developing-components-in-isolation",
            "react/development/setting-up-your-editor",
            "react/development/using-https-in-development",
          ],
        },
        {
          type: "category",
          label: "Hooks",
          link: {
            type: "generated-index",
            title: "React Hooks",
            description:
              "Understand and use React hooks such as useState, useEffect, useReducer, useContext, useRef, useMemo, and useCallback to manage state and lifecycle events.",
          },
          items: [
            "react/hooks/useState-hook",
            "react/hooks/useEffect-hook",
            "react/hooks/useReducer",
            "react/hooks/useContext",
            "react/hooks/useRef",
            "react/hooks/useMemo",
            "react/hooks/useCallback",
          ],
        },
        {
          type: "category",
          label: "Styles & Assets",
          link: {
            type: "generated-index",
            title: "React Styles & Assets",
            description:
              "Learn how to add styles, images, fonts, CSS modules, SASS, reset styles, code splitting, and handle public folder assets in React.",
          },
          items: [
            "react/styles-and-assets/adding-a-stylesheet",
            "react/styles-and-assets/adding-a-css-modules-stylesheet",
            "react/styles-and-assets/adding-a-sass-stylesheet",
            "react/styles-and-assets/adding-css-reset",
            "react/styles-and-assets/adding-images-fonts-and-files",
            "react/styles-and-assets/code-splitting",
            "react/styles-and-assets/loading-graphql-files",
            "react/styles-and-assets/post-processing-css",
            "react/styles-and-assets/using-the-public-folder",
          ],
        },
        {
          type: "category",
          label: "Advanced Usage",
          link: {
            type: "generated-index",
            title: "Advanced React Usage",
            description:
              "Explore advanced configurations, alternatives to ejecting, decorators, custom templates, and pre-rendering React apps into static HTML.",
          },
          items: [
            "react/advanced-usage/advanced-configuration",
            "react/advanced-usage/alternatives-to-ejecting",
            "react/advanced-usage/can-i-use-decorators",
            "react/advanced-usage/custom-templates",
            "react/advanced-usage/pre-rendering-into-static-html-files",
          ],
        },
        {
          type: "category",
          label: "Back-End Integration",
          link: {
            type: "generated-index",
            title: "Integrating React with Back-End",
            description:
              "Learn how to fetch data, integrate with APIs, proxy requests in development, and manage title and meta tags for dynamic web apps.",
          },
          items: [
            "react/back-end-integration/fetching-data-with-ajax-requests",
            "react/back-end-integration/integrating-with-an-api-backend",
            "react/back-end-integration/proxying-api-requests-in-development",
            "react/back-end-integration/title-and-meta-tags",
          ],
        },
        {
          type: "category",
          label: "Testing",
          link: {
            type: "generated-index",
            title: "Testing React Applications",
            description:
              "Understand how to debug tests and run them effectively in your React applications.",
          },
          items: [
            "react/testing/debugging-tests",
            "react/testing/running-tests",
          ],
        },
        {
          type: "category",
          label: "Support",
          link: {
            type: "generated-index",
            title: "React Support",
            description:
              "Troubleshooting common React issues and finding solutions for a smoother development experience.",
          },
          items: ["react/support/troubleshooting"],
        },
      ],
    },

    // Cybersecurity Tutorial Structure

    // {
    //   type: "link",
    //   label: "Cybersecurity",
    //   href: "/cybersecurity/",
    // },

    // Internet
    {
      type: "link",
      label: "Internet",
      href: "/internet/introduction/",
    },
    // Technical Writer

    // {
    //   type: "link",
    //   label: "Technical Writer",
    //   href: "/technical-writer/",
    // },
  ],

  css: [
    "css/introduction",
    {
      type: "category",
      label: "CSS Basics",
      link: {
        type: "generated-index",
        title: "Getting Started with CSS Basics",
        description:
          "Learn about different ways to apply CSS: inline, internal, and external styles, along with the cascading order concept.",
        keywords: ["css", "inline css", "internal css", "external css"],
        // image: "/img/github.png",
      },
      items: [
        "css/basics/inline",
        "css/basics/internal",
        "css/basics/external",
        "css/basics/cascading-order",
      ],
    },

    {
      type: "category",
      label: "Syntax Basics",
      link: {
        type: "generated-index",
        title: "CSS Syntax and Rules",
        description:
          "Understand CSS syntax structure, selectors, declarations, and how comments work in CSS files.",
        keywords: ["css syntax", "selectors", "rules", "comments"],
      },
      items: [
        {
          type: "category",
          label: "Rules",
          items: [
            "css/syntax-basics/rules/selector",
            "css/syntax-basics/rules/properties-and-values",
            "css/syntax-basics/rules/declaration",
          ],
        },
        "css/syntax-basics/comments",
      ],
    },

    {
      type: "category",
      label: "Selectors",
      link: {
        type: "generated-index",
        title: "CSS Selectors Guide",
        description:
          "Master different types of selectors from simple to combinators and attribute-based selectors.",
        keywords: [
          "css selectors",
          "simple selectors",
          "combinator selectors",
          "attribute selectors",
        ],
      },
      items: [
        {
          type: "category",
          label: "Simple Selectors",
          items: [
            "css/selectors/simple/element",
            "css/selectors/simple/class",
            "css/selectors/simple/id",
            "css/selectors/simple/universal",
            "css/selectors/simple/grouping",
          ],
        },
        {
          type: "category",
          label: "Combinator Selectors",
          items: [
            "css/selectors/combinators/descendant",
            "css/selectors/combinators/child",
            "css/selectors/combinators/adjacent-sibling",
            "css/selectors/combinators/general-sibling",
          ],
        },
        "css/selectors/attribute-selectors",
        "css/selectors/pseudo-classes",
        "css/selectors/pseudo-elements",
      ],
    },

    {
      type: "category",
      label: "Typography",
      link: {
        type: "generated-index",
        title: "Typography in CSS",
        description:
          "Learn how to style and structure text in CSS covering fonts, text styles, spacing, alignment, shadows, and more.",
        keywords: [
          "css typography",
          "css fonts",
          "text style",
          "font family",
          "text shadow",
        ],
      },
      items: [
        {
          type: "category",
          label: "Fonts",
          link: {
            type: "generated-index",
            title: "CSS Fonts",
            description:
              "Understand CSS font properties including font-family, font-size, style, shorthand, and Google Fonts integration.",
            keywords: [
              "css fonts",
              "font family",
              "font size",
              "font shorthand",
              "google fonts",
            ],
          },
          items: [
            "css/typography/fonts/font-family",
            "css/typography/fonts/font-style",
            "css/typography/fonts/font-size",
            "css/typography/fonts/font-shorthand",
            "css/typography/fonts/google-fonts",
            "css/typography/fonts/font-variant",
          ],
        },
        {
          type: "category",
          label: "Text Style",
          link: {
            type: "generated-index",
            title: "CSS Text Styles",
            description:
              "Master text styling with CSS control alignment, decoration, transformation, spacing, and shadows.",
            keywords: [
              "css text",
              "text decoration",
              "text transform",
              "line height",
              "text shadow",
            ],
          },
          items: [
            "css/typography/text-style/color",
            "css/typography/text-style/direction",
            "css/typography/text-style/text-alignment",
            "css/typography/text-style/text-decoration",
            "css/typography/text-style/text-transform",
            "css/typography/text-style/text-spacing",
            "css/typography/text-style/line-height",
            "css/typography/text-style/text-shadow",
            "css/typography/text-style/word-wrap",
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Colors",
      link: {
        type: "generated-index",
        title: "Backgrounds and Colors in CSS",
        description:
          "Explore CSS color systems gradients, images, RGBA, HSLA, and more.",
        keywords: ["css", "css colors", "gradients", "rgba", "hsl"],
      },
      items: [
        "css/colors/color-names",
        "css/colors/rgb",
        "css/colors/rgba",
        "css/colors/hsl",
        "css/colors/hsla",
        "css/colors/gradients",
      ],
    },

    {
      type: "category",
      label: "Backgrounds",
      link: {
        type: "generated-index",
        title: "CSS Backgrounds",
        description:
          "Master CSS backgrounds learn background color, images, gradients, positioning, size, repeat, and shorthand properties to create stunning visual designs.",
        keywords: [
          "css background",
          "background color",
          "background image",
          "css gradients",
          "background size",
          "background shorthand",
        ],
      },
      items: [
        "css/background/background-color",
        "css/background/background-image",
        "css/background/background-gradient",
        "css/background/background-position",
        "css/background/background-size",
        "css/background/background-repeat",
        "css/background/background-attachment",
        "css/background/background-shorthand",
      ],
    },

    {
      type: "category",
      label: "Box Model",
      link: {
        type: "generated-index",
        title: "CSS Box Model",
        description:
          "Understand the CSS Box Model, learn how elements are structured with margins, borders, padding, and content areas. Explore dimensions, outlines, shadows, and box-sizing for precise layouts.",
        keywords: [
          "css box model",
          "margin",
          "padding",
          "border",
          "box sizing",
          "width and height",
          "box shadow",
          "css layout",
        ],
      },
      items: [
        "css/box-model/introduction",
        "css/box-model/margin",
        "css/box-model/padding",
        "css/box-model/border",
        "css/box-model/outline",
        "css/box-model/width",
        "css/box-model/height",
        "css/box-model/box-sizing",
        "css/box-model/box-shadow",
        {
          type: "category",
          label: "CSS Units",
          link: {
            type: "generated-index",
            title: "CSS Units",
            description:
              "Learn CSS units to control element sizes understand absolute vs. relative units, viewport-based sizing, and how to use them with CSS functions for responsive designs.",
            keywords: [
              "css units",
              "absolute units",
              "relative units",
              "viewport units",
              "em vs rem",
              "responsive design",
            ],
          },
          items: [
            "css/box-model/css-units/absolute-vs-relative",
            "css/box-model/css-units/viewport-units",
            "css/box-model/css-units/units-with-functions",
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Layout",
      link: {
        type: "generated-index",
        title: "CSS Layout",
        description:
          "Learn how CSS controls page structure and element positioning. Explore display modes, positioning techniques, overflow handling, and modern layouts like Flexbox, Grid, and Container Queries.",
        keywords: [
          "css layout",
          "css display",
          "css position",
          "flexbox",
          "grid",
          "container queries",
          "css overflow",
          "css z-index",
        ],
      },
      items: [
        {
          type: "category",
          label: "Display",
          link: {
            type: "generated-index",
            title: "CSS Display Property",
            description:
              "Understand CSS display modes — block, inline, inline-block, none, and visibility to control how elements appear and interact in the layout.",
            keywords: [
              "css display",
              "block vs inline",
              "inline-block",
              "display none",
              "visibility hidden",
            ],
          },
          items: [
            "css/layout/display/block",
            "css/layout/display/inline",
            "css/layout/display/inline-block",
            "css/layout/display/none",
            "css/layout/display/visibility",
          ],
        },
        {
          type: "category",
          label: "Position",
          link: {
            type: "generated-index",
            title: "CSS Position Property",
            description:
              "Master the CSS position property and learn how to control element placement using static, relative, absolute, fixed, and sticky positioning with z-index layering.",
            keywords: [
              "css position",
              "relative",
              "absolute",
              "fixed",
              "sticky",
              "z-index",
              "css positioning",
            ],
          },
          items: [
            "css/layout/position/static",
            "css/layout/position/relative",
            "css/layout/position/absolute",
            "css/layout/position/fixed",
            "css/layout/position/sticky",
            "css/layout/position/z-index",
          ],
        },
        "css/layout/float-and-clear",
        "css/layout/overflow",
        "css/layout/display-flow",
        {
          type: "category",
          label: "Modern Layouts",
          link: {
            type: "generated-index",
            title: "Modern CSS Layouts",
            description:
              "Explore the most powerful layout systems in CSS including Flexbox, Grid, Subgrid, Multi-Column Layouts, Container Queries, Nesting, and Logical Properties.",
            keywords: [
              "css flexbox",
              "css grid",
              "css subgrid",
              "multi column layout",
              "container queries",
              "css nesting",
              "logical properties",
            ],
          },
          items: [
            "css/layout/modern-layouts/flexbox",
            "css/layout/modern-layouts/grid",
            "css/layout/modern-layouts/subgrid",
            "css/layout/modern-layouts/multi-column-layout",
            "css/layout/modern-layouts/container-queries",
            "css/layout/modern-layouts/nesting",
            "css/layout/modern-layouts/logical-properties",
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Effects",
      link: {
        type: "generated-index",
        title: "CSS Effects",
        description:
          "Dive into CSS visual effects to make your designs pop. Learn how to use opacity, filters, blend modes, clipping, masking, and backdrop filters to create dynamic, polished visuals.",
        keywords: [
          "css effects",
          "css opacity",
          "css filters",
          "css blend modes",
          "clip-path",
          "css mask",
          "backdrop-filter",
          "visual effects",
        ],
      },
      items: [
        "css/effects/opacity",
        "css/effects/filters-and-blend",
        "css/effects/clip-path",
        "css/effects/mask",
        "css/effects/backdrops",
      ],
    },

    {
      type: "category",
      label: "Transitions & Animations",
      link: {
        type: "generated-index",
        title: "CSS Transitions & Animations",
        description:
          "Learn how to create smooth transitions, transformations, and keyframe animations in CSS. Master timing functions, easing, and animation best practices to add motion and interactivity to your web designs.",
        keywords: [
          "css transitions",
          "css animations",
          "css transforms",
          "keyframes",
          "animation timing",
          "motion design",
          "web animation",
        ],
      },
      items: [
        "css/transitions-and-animations/transforms",
        "css/transitions-and-animations/transitions",
        "css/transitions-and-animations/keyframes",
        "css/transitions-and-animations/animation-timing",
      ],
    },

    {
      type: "category",
      label: "Responsiveness",
      link: {
        type: "generated-index",
        title: "CSS Responsiveness",
        description:
          "Master responsive design in CSS using media queries, container queries, responsive typography, and fluid layouts. Learn to create websites that adapt perfectly to any screen size or device.",
        keywords: [
          "css responsiveness",
          "responsive design",
          "media queries",
          "container queries",
          "responsive typography",
          "fluid layouts",
          "adaptive web design",
        ],
      },
      items: [
        "css/responsiveness/media-queries",
        "css/responsiveness/container-queries",
        "css/responsiveness/responsive-images",
        "css/responsiveness/responsive-typography",
        "css/responsiveness/fluid-layouts",
      ],
    },

    {
      type: "category",
      label: "Advanced Features",
      link: {
        type: "generated-index",
        title: "Advanced CSS Features",
        description:
          "Explore the most powerful and modern CSS capabilities. Learn about CSS variables, functions, cascade layers, specificity, inheritance, and Shadow DOM to write scalable, modular, and maintainable styles.",
        keywords: [
          "advanced css",
          "css variables",
          "css functions",
          "css layers",
          "cascade layers",
          "css specificity",
          "css inheritance",
          "shadow dom",
          "modern css",
        ],
      },
      items: [
        "css/advanced-features/css-variables",
        "css/advanced-features/css-functions",
        "css/advanced-features/css-layers",
        "css/advanced-features/cascade-layers",
        "css/advanced-features/specificity",
        "css/advanced-features/inheritance",
        "css/advanced-features/shadow-dom",
      ],
    },

    {
      type: "category",
      label: "Utilities",
      link: {
        type: "generated-index",
        title: "CSS Utilities",
        description:
          "Learn essential CSS utilities for handling common elements like tables, lists, images, and icons. Master how to style, align, and optimize these components for better readability and accessibility across devices.",
        keywords: [
          "css utilities",
          "css tables",
          "css lists",
          "css images",
          "css icons",
          "frontend styling",
          "web design",
        ],
      },
      items: [
        "css/utilities/tables",
        "css/utilities/lists",
        "css/utilities/images",
        "css/utilities/icons",
      ],
    },

    {
      type: "category",
      label: "Best Practices",
      link: {
        type: "generated-index",
        title: "CSS Best Practices",
        description:
          "Discover the essential CSS best practices for building high-performance, accessible, and maintainable websites. Learn how to structure your styles, improve scalability, and follow naming conventions like BEM, OOCSS, and SMACSS.",
        keywords: [
          "css best practices",
          "css performance",
          "css accessibility",
          "css maintainability",
          "css scalability",
          "css naming conventions",
          "bem",
          "oocss",
          "smacss",
        ],
      },
      items: [
        "css/best-practices/performance",
        "css/best-practices/accessibility",
        "css/best-practices/maintainability",
        "css/best-practices/scalability",
        "css/best-practices/naming-conventions",
      ],
    },

    {
      type: "category",
      label: "CSS Frameworks",
      link: {
        type: "generated-index",
        title: "CSS Frameworks",
        description:
          "Learn popular CSS frameworks that simplify and accelerate modern web development. Explore Tailwind CSS, Bootstrap, Bulma, Foundation, and Materialize — understand their philosophy, utility systems, and how to integrate them into your workflow.",
        keywords: [
          "css frameworks",
          "tailwind css",
          "bootstrap",
          "bulma",
          "foundation",
          "materialize",
          "frontend tools",
          "web design",
          "responsive frameworks",
          "ui development",
        ],
      },
      items: [
        "css/css-frameworks/tailwind-css",
        "css/css-frameworks/bootstrap",
        "css/css-frameworks/bulma",
        "css/css-frameworks/foundation",
        "css/css-frameworks/materialize",
      ],
    },

    {
      type: "category",
      label: "Modern CSS Tools",
      link: {
        type: "generated-index",
        title: "Modern CSS Tools",
        description:
          "Explore modern CSS tools that enhance productivity, scalability, and maintainability in front-end development. Learn about preprocessors (SASS, LESS, Stylus), PostCSS, CSS-in-JS, and Browser DevTools — the backbone of modern web styling automation.",
        keywords: [
          "modern css tools",
          "sass",
          "less",
          "stylus",
          "postcss",
          "css-in-js",
          "browser devtools",
          "frontend optimization",
          "css workflow",
        ],
      },
      items: [
        {
          type: "category",
          label: "Preprocessors",
          link: {
            type: "generated-index",
            title: "CSS Preprocessors",
            description:
              "Learn CSS preprocessors that simplify writing scalable, modular, and maintainable styles. Understand the advantages and use cases of SASS, LESS, and Stylus in modern front-end development.",
            keywords: [
              "sass",
              "less",
              "stylus",
              "css preprocessors",
              "modular css",
            ],
          },
          items: [
            "css/modern-css-tools/preprocessors/sass",
            "css/modern-css-tools/preprocessors/less",
            "css/modern-css-tools/preprocessors/stylus",
          ],
        },
        "css/modern-css-tools/postcss",
        "css/modern-css-tools/css-in-js",
        "css/modern-css-tools/browser-devtools",
      ],
    },

    {
      type: "category",
      label: "Project Practicals",
      link: {
        type: "generated-index",
        title: "CSS Project Practicals",
        description:
          "Apply your CSS knowledge through practical projects. Build layouts, animations, and responsive designs while optimizing performance — turning theory into real-world skills.",
        keywords: [
          "css projects",
          "practical css",
          "layout practice",
          "animation projects",
          "responsive design",
          "performance optimization",
          "hands-on css",
          "web development practice",
        ],
      },
      items: [
        "css/project-practicals/mini-projects",
        "css/project-practicals/layout-practice",
        "css/project-practicals/animation-practice",
        "css/project-practicals/responsive-design-practice",
        "css/project-practicals/performance-optimization",
      ],
    },
  ],

  javascript: [
    {
      type: "category",
      label: "Introduction to JavaScript",
      link: {
        type: "doc",
        id: "javascript/introduction-to-javascript/what-is-js",
      },
      items: [
        "javascript/introduction-to-javascript/what-is-js",
        "javascript/introduction-to-javascript/history-of-javascript",
        "javascript/introduction-to-javascript/javascript-versions",
        "javascript/introduction-to-javascript/how-to-run-javascript",
      ],
    },

    {
      type: "category",
      label: "All About Variables",
      link: {
        type: "doc",
        id: "javascript/all-about-variables/variable-declarations",
      },
      items: [
        "javascript/all-about-variables/variable-declarations",
        "javascript/all-about-variables/variable-naming-rules",
        "javascript/all-about-variables/variable-scopes",
        "javascript/all-about-variables/hoisting",
      ],
    },

    {
      type: "category",
      label: "Data Types",
      link: {
        type: "doc",
        id: "javascript/data-types/intro",
      },
      items: [
        "javascript/data-types/intro",

        {
          type: "category",
          label: "Primitive Types",
          link: {
            type: "doc",
            id: "javascript/data-types/primitive-types/intro",
          },
          items: [
            "javascript/data-types/primitive-types/number",
            "javascript/data-types/primitive-types/string",
            "javascript/data-types/primitive-types/boolean",
            "javascript/data-types/primitive-types/null",
            "javascript/data-types/primitive-types/undefined",
            "javascript/data-types/primitive-types/symbol",
            "javascript/data-types/primitive-types/bigint",
          ],
        },
        {
          type: "category",
          label: "Non-Primitive Types",
          link: {
            type: "doc",
            id: "javascript/data-types/non-primitive-types/object/intro",
          },
          items: [
            "javascript/data-types/non-primitive-types/object/intro",
            "javascript/data-types/non-primitive-types/object/creating-objects",
          ],
        },
      ],
    },
  ],

  git: [
    "git/introduction",
    {
      type: "category",
      label: "Basics",
      link: {
        type: "generated-index",
        title: "Git Basics",
        description:
          "Learn the foundational Git concepts and commands for version control.",
        keywords: ["git", "basics", "version control", "commands"],
      },
      items: ["git/basics", "git/roadmap"],
    },
    {
      type: "category",
      label: "Working with Repositories",
      link: {
        type: "generated-index",
        title: "Repositories & Branching",
        description:
          "Understand branching, merging, remotes, and undo operations in Git.",
        keywords: ["git", "branching", "merge", "remotes", "undo"],
      },
      items: ["git/branching-merging", "git/remotes", "git/undo"],
    },
    {
      type: "category",
      label: "Advanced Git",
      link: {
        type: "generated-index",
        title: "Advanced Git",
        description:
          "Explore advanced Git workflows, commands, and best practices.",
        keywords: ["git", "advanced", "workflow", "best practices"],
      },
      items: ["git/advanced"],
    },
    "git/quiz",
  ],

  github: [
    "github/introduction-to-github",
    {
      type: "category",
      label: "Getting Started with GitHub",
      link: {
        type: "generated-index",
        title: "Getting Started with GitHub",
        description:
          "Learn how to set up your GitHub account, create repositories, and start collaborating with ease.",
        keywords: ["github", "getting started", "setup", "repository"],
        image: "/img/github.png",
      },
      collapsed: false,
      items: [
        "github/create-a-github-account",
        "github/create-a-new-repository",
        "github/clone-a-repository",
        "github/create-a-branch",
        "github/make-changes-to-a-file",
        "github/commit-changes",
        "github/push-changes-to-github",
        "github/create-a-pull-request",
        "github/merge-a-pull-request",
      ],
    },
    {
      type: "category",
      label: "Collaboration & Workflow",
      link: {
        type: "generated-index",
        title: "Collaboration and Workflow",
        description:
          "Master collaboration with pull requests, branches, and contribution guidelines to work efficiently with teams.",
        keywords: ["github", "collaboration", "workflow", "pull request"],
        image: "/img/github-collaboration.png",
      },
      items: [
        "github/collaboration",
        "github/projects",
        "github/open-source",
        "github/best-practices",
      ],
    },
    {
      type: "category",
      label: "Automation & Integrations",
      link: {
        type: "generated-index",
        title: "Automation and Integrations",
        description:
          "Automate workflows, integrate tools, and secure your repositories using GitHub Actions and integrations.",
        keywords: ["github actions", "automation", "integrations", "security"],
        image: "/img/github-actions.png",
      },
      items: [
        "github/github-actions",
        "github/integrations",
        "github/security",
      ],
    },
    {
      type: "category",
      label: "Personalization",
      link: {
        type: "generated-index",
        title: "Personalizing Your GitHub Profile",
        description:
          "Customize your GitHub profile and make it stand out with README files, pinned projects, and contributions.",
        keywords: ["github profile", "personalization", "readme"],
        image: "/img/github-profile.png",
      },
      items: ["github/profile"],
    },
  ],

  internet: [
    "internet/introduction",
    {
      type: "category",
      label: "Basics",
      link: {
        type: "generated-index",
        title: "Internet Basics",
        description:
          "Learn how the Internet works — from clients, servers, and IP addresses to DNS and HTTP protocols.",
        keywords: ["internet", "basics", "http", "dns", "ip"],
      },
      items: [
        "internet/how-internet-works",
        "internet/clients-and-servers",
        "internet/ip-addresses",
        "internet/dns",
        "internet/http-vs-https",
      ],
    },
    {
      type: "category",
      label: "Advanced Concepts",
      link: {
        type: "generated-index",
        title: "Advanced Internet Concepts",
        description:
          "Explore deeper topics like TCP/IP model, routing, CDN, firewalls, and cyber-security basics.",
        keywords: ["internet", "tcp/ip", "routing", "cdn", "firewall"],
      },
      items: [
        "internet/tcp-ip-model",
        "internet/routing-and-packets",
        "internet/cdn",
        "internet/firewalls",
        "internet/security-basics",
      ],
    },
    {
      type: "category",
      label: "Tools & Utilities",
      link: {
        type: "generated-index",
        title: "Internet Tools & Utilities",
        description:
          "Get familiar with practical tools like ping, traceroute, nslookup, and browser developer tools.",
        keywords: [
          "internet tools",
          "ping",
          "traceroute",
          "nslookup",
          "devtools",
        ],
      },
      items: [
        "internet/ping-and-traceroute",
        "internet/nslookup",
        "internet/browser-devtools",
      ],
    },
    "internet/quiz",
  ],
};

export default sidebars;
