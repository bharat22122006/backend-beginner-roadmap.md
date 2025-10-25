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
      href: "/css/introduction/what-is-css",
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

    {
      type: "link",
      label: "Cybersecurity",
      href: "/cybersecurity/",
    },
  ],

  css: [
    {
      type: "category",
      label: "Introduction to CSS",
      link: {
        type: "doc",
        id: "css/introduction/what-is-css",
      },
      items: [
        "css/introduction/what-is-css",
        "css/introduction/how-to-add-css-to-html",
        "css/introduction/comments-in-css",
      ],
    },

    {
      type: "category",
      label: "Selectors",
      link: {
        type: "doc",
        id: "css/selectors/attribute-selectors",
      },
      items: [
        {
          type: "category",
          label: "Simple Selectors",
          items: [
            "css/selectors/simple-selectors/element-selector",
            "css/selectors/simple-selectors/class-selector",
            "css/selectors/simple-selectors/id-selector",
            "css/selectors/simple-selectors/grouping-selectors",
            "css/selectors/simple-selectors/universal-selector",
          ],
        },
        {
          type: "category",
          label: "Combinator Selectors",
          items: [
            "css/selectors/combinator-selectors/descendant-selector",
            "css/selectors/combinator-selectors/child-selector",
            "css/selectors/combinator-selectors/adjacent-sibling-selector",
            "css/selectors/combinator-selectors/general-sibling-selector",
          ],
        },
        "css/selectors/attribute-selectors",
        "css/selectors/compound-selectors",
        "css/selectors/pseudo-class-selectors",
        "css/selectors/pseudo-elements-selectors",
      ],
    },

    {
      type: "category",
      label: "Colors",
      link: {
        type: "doc",
        id: "css/colors/color-names",
      },
      items: [
        "css/colors/color-names",
        "css/colors/rgb",
        "css/colors/rgba",
        "css/colors/hex",
        "css/colors/hsl",
        "css/colors/hsla",
      ],
    },

    {
      type: "category",
      label: "Box Model",
      link: {
        type: "doc",
        id: "css/box-model/intro",
      },
      items: [
        "css/box-model/intro",
        "css/box-model/width-height",
        "css/box-model/min-width-height",
        "css/box-model/max-width-height",
        "css/box-model/margin",
        "css/box-model/margin-callapse",
        "css/box-model/padding",
        "css/box-model/border",
        "css/box-model/border-radius",
        "css/box-model/box-sizing",
      ],
    },

    {
      type: "category",
      label: "Backgrounds",
      link: {
        type: "doc",
        id: "css/backgrounds/background-color",
      },
      items: [
        "css/backgrounds/background-color",
        {
          type: "category",
          label: "Background Image",
          items: [
            "css/backgrounds/background-image/background-attachment",
            "css/backgrounds/background-image/background-position",
            "css/backgrounds/background-image/background-repeat",
            "css/backgrounds/background-image/background-size",
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Fonts and Text Properties",
      link: {
        type: "doc",
        id: "css/fonts-and-text-properties/font-size",
      },
      items: [
        "css/fonts-and-text-properties/font-size",
        "css/fonts-and-text-properties/font-style",
        "css/fonts-and-text-properties/font-weight",
        "css/fonts-and-text-properties/font-align",
        "css/fonts-and-text-properties/generic-vs-specific-font-families",
      ],
    },

    "css/opacity",
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

  cybersecurity: [
    "cybersecurity/index",
    "cybersecurity/introduction-to-cybersecurity",

    {
      type: "category",
      label: "Core Concepts",
      link: {
        type: "generated-index",
        title: "Cybersecurity Core Concepts",
        description:
          "Explore the essential foundations of cybersecurity, including threat types, security principles, network defense, encryption, and ethical hacking. This section helps you understand how to protect systems, networks, and data from digital attacks through practical knowledge, best practices, and real-world projects.",
      },
      items: [
        "cybersecurity/network-security-basics",
        "cybersecurity/types-of-cyberattacks",
        "cybersecurity/cryptography-and-encryption",
        "cybersecurity/web-application-security",
        "cybersecurity/ethical-hacking-basics",
        "cybersecurity/ethical-hacking-and-cyber-defense",
        "cybersecurity/dark-web",
        "cybersecurity/incident-response",
      ],
    },

    {
      type: "category",
      label: "Best Practices & Career",
      link: {
        type: "generated-index",
        title: "Best Practices and Certifications",
        description:
          "Learn the industry-recommended best practices to secure systems and networks effectively, and explore professional cybersecurity certifications that validate your skills and knowledge. This section provides guidance on implementing security standards, risk management, and preparing for certification exams.",
      },
      items: [
        "cybersecurity/best-practices",
        "cybersecurity/certification-guide",
      ],
    },

    {
      type: "category",
      label: "Cybersecurity Tools",
      link: { type: "doc", id: "cybersecurity/cybersecurity-tools/index" },
      items: [
        {
          type: "category",
          label: "Network Analysis",
          items: [
            "cybersecurity/cybersecurity-tools/network-analysis/wireshark-basics",
            "cybersecurity/cybersecurity-tools/network-analysis/nmap-scanning",
            "cybersecurity/cybersecurity-tools/network-analysis/tcpdump-guide",
          ],
        },
        {
          type: "category",
          label: "Penetration Testing",
          items: [
            "cybersecurity/cybersecurity-tools/penetration-testing/metasploit-framework",
            "cybersecurity/cybersecurity-tools/penetration-testing/burpsuite-overview",
            "cybersecurity/cybersecurity-tools/penetration-testing/nikto-scanning",
          ],
        },
        {
          type: "category",
          label: "Password & Authentication",
          items: [
            "cybersecurity/cybersecurity-tools/password-and-authentication/john-the-ripper",
            "cybersecurity/cybersecurity-tools/password-and-authentication/hydra-password-cracking",
            "cybersecurity/cybersecurity-tools/password-and-authentication/hashcat-usage",
          ],
        },
        {
          type: "category",
          label: "Digital Forensics",
          items: [
            "cybersecurity/cybersecurity-tools/digital-forensics/autopsy-introduction",
            "cybersecurity/cybersecurity-tools/digital-forensics/volatility-memory-analysis",
          ],
        },
        {
          type: "category",
          label: "Vulnerability Assessment",
          items: [
            "cybersecurity/cybersecurity-tools/vulnerability-assessment/openvas-setup",
            "cybersecurity/cybersecurity-tools/vulnerability-assessment/nessus-basics",
            "cybersecurity/cybersecurity-tools/vulnerability-assessment/vulnerability-scanning-tips",
          ],
        },
        {
          type: "category",
          label: "Monitoring & Defense",
          items: [
            "cybersecurity/cybersecurity-tools/monitoring-and-defense/splunk-overview",
            "cybersecurity/cybersecurity-tools/monitoring-and-defense/snort-ids",
            "cybersecurity/cybersecurity-tools/monitoring-and-defense/security-onion",
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Hands-on Projects",
      link: {
        type: "generated-index",
        title: "Cybersecurity Projects & Labs",
        description: `Hands-on projects and lab exercises to build practical cybersecurity skills. Start with guided, safe labs (network analysis, web app testing, password cracking, forensics), progress to intermediate attack/defense scenarios, and finish with real-world capstone projects. Each lab includes objectives, required tools, step-by-step instructions, and remediation guidance, perfect for learners, instructors, and bootcamps.`,
      },

      items: [
        "cybersecurity/projects/setup-lab-environment",
        "cybersecurity/projects/sql-injection-demo",
        "cybersecurity/projects/password-cracking-lab",
        "cybersecurity/projects/network-sniffing-lab",
        "cybersecurity/projects/penetration-testing-lab",
      ],
    },

    {
      type: "category",
      label: "Resources",
      link: {
        type: "generated-index",
        title: "Cybersecurity Learning Resources",
        description: `A practical, hands-on collection of learning resources for everyone building real-world cybersecurity skills. This index groups tutorials, tool guides, labs, and checklists organized from fundamentals (networking, cryptography, web security) to offensive and defensive workflows (pentesting, DFIR, incident response). Each entry includes clear objectives, step‑by‑step exercises, and ethics-first guidance so you can practice safely in labs and apply what you learn to production-ready security work. Use the "Getting Started" path to move from beginner-friendly topics to specialized tool tutorials and certification-ready material.`,
      },
      items: [
        'cybersecurity/resources/glossary',
        'cybersecurity/resources/books-and-courses',
        'cybersecurity/resources/tools-list',
        'cybersecurity/resources/links',
      ],
    },
  ],
};

export default sidebars;
