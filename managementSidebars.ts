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
    // Technical Writer
    {
      type: "link",
      label: "Technical Writer",
      href: "/management/technical-writer/",
    },
  ],

  technicalwriter: [
    "technical-writer/index",
    {
      type: "category",
      label: "Introduction to Technical Writing",
      link: {
        type: "generated-index",
        title: "Introduction to Technical Writing",
        description:
          "Get started with the essentials of technical writing — understand what it is, its importance, types, and the core skills required to become a successful technical writer.",
      },
      items: [
        "technical-writer/intro/what-is-technical-writing",
        "technical-writer/intro/types-of-technical-writing",
        "technical-writer/intro/tools-for-technical-writers",
        "technical-writer/intro/best-practices",
        "technical-writer/intro/skills-required",
      ],
    },

    {
      type: "category",
      label: "Writing Fundamentals",
      link: {
        type: "generated-index",
        title: "Writing Fundamentals for Technical Writers",
        description:
          "Master the foundations of effective writing. Learn to identify your audience, craft clear and concise content, and structure your documentation for maximum readability.",
      },
      items: [
        "technical-writer/fundamentals/understanding-your-audience",
        "technical-writer/fundamentals/writing-style-and-tone",
        "technical-writer/fundamentals/document-structure-and-formatting",
        "technical-writer/fundamentals/visual-aids-and-graphics",
        "technical-writer/fundamentals/review-and-editing",
      ],
    },

    {
      type: "category",
      label: "Documentation Types",
      link: {
        type: "generated-index",
        title: "Documentation Types & Structures",
        description:
          "Explore the different types of technical documentation — from API references to user guides, release notes, and product manuals. Learn how to plan, structure, and maintain each effectively.",
      },
      items: [
        "technical-writer/documentation/api-documentation",
        "technical-writer/documentation/software-documentation",
        "technical-writer/documentation/user-manuals",
        "technical-writer/documentation/technical-reports",
        "technical-writer/documentation/release-notes",
      ],
    },

    {
      type: "category",
      label: "Tools & Platforms",
      link: {
        type: "generated-index",
        title: "Documentation Tools and Platforms",
        description:
          "Discover essential tools and platforms every technical writer should know. From Markdown editors to documentation frameworks and version control systems, this section helps you work efficiently and collaboratively.",
      },
      items: [
        "technical-writer/tools/markdown-basics",
        "technical-writer/tools/docs-platforms",
        "technical-writer/tools/version-control-github",
        "technical-writer/tools/writing-tools",
        "technical-writer/tools/style-guides",
      ],
    },

    {
      type: "category",
      label: "Advanced Topics",
      link: {
        type: "generated-index",
        title: "Advanced Technical Writing Concepts",
        description:
          "Go beyond the basics and explore advanced topics like writing for developers, accessibility, localization, SEO for docs, and contributing to open source projects.",
      },
      items: [
        "technical-writer/advanced/writing-for-developers",
        "technical-writer/advanced/localization-and-accessibility",
        "technical-writer/advanced/seo-for-documentation",
        "technical-writer/advanced/open-source-contributions",
        "technical-writer/advanced/technical-writing-career-path",
      ],
    },

    {
      type: "category",
      label: "Resources & Portfolio",
      link: {
        type: "generated-index",
        title: "Resources and Career Growth",
        description:
          "Access curated resources, communities, and templates to improve your writing. Learn how to build an impressive portfolio, find freelance opportunities, and advance in your technical writing career.",
      },
      items: [
        "technical-writer/resources/books-and-courses",
        "technical-writer/resources/communities-and-blogs",
        "technical-writer/resources/templates-and-samples",
        "technical-writer/resources/portfolio-building",
      ],
    },

    // {
    //   type: "category",
    //   label: "Projects & Practice",
    //   link: {
    //     type: "generated-index",
    //     title: "Hands-on Projects for Technical Writers",
    //     description:
    //       "Put your learning into practice with real-world documentation projects. Learn to create sample API docs, improve open-source documentation, and build your own docs site using Docusaurus or MkDocs.",
    //   },
    //   items: [
    //     "technical-writer/projects/create-sample-api-docs",
    //     "technical-writer/projects/write-readme-for-open-source",
    //     "technical-writer/projects/build-docs-site-with-docusaurus",
    //     "technical-writer/projects/edit-existing-docs",
    //     "technical-writer/projects/document-a-demo-project",
    //   ],
    // },

    // {
    //   type: "category",
    //   label: "Roadmap",
    //   link: { type: "doc", id: "technical-writer/roadmap" },
    //   items: [],
    // },
  ],
};

export default sidebars;
