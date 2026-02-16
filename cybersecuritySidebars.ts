/**
 * Copyright (c) Ajay Dhangar
 *
 * This file defines the sidebar configuration for the CodeHarborHub Tutorials Docs.
 * Each category represents a tutorial topic like HTML, CSS, JavaScript, React, Git, GitHub, and cyber-security.
 *
 * Licensed under the MIT License.
 */

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorial: [
    "index",
    "introduction-to-cyber-security",

    {
      type: "category",
      label: "Core Concepts",
      link: {
        type: "generated-index",
        title: "cyber-security Core Concepts",
        description:
          "Explore the essential foundations of cyber-security, including threat types, security principles, network defense, encryption, and ethical hacking. This section helps you understand how to protect systems, networks, and data from digital attacks through practical knowledge, best practices, and real-world projects.",
      },
      items: [
        "network-security-basics",
        "types-of-cyberattacks",
        "cryptography-and-encryption",
        "web-application-security",
        "ethical-hacking-basics",
        "ethical-hacking-and-cyber-defense",
        "dark-web",
        "incident-response",
      ],
    },

    {
      type: "category",
      label: "Best Practices & Career",
      link: {
        type: "generated-index",
        title: "Best Practices and Certifications",
        description:
          "Learn the industry-recommended best practices to secure systems and networks effectively, and explore professional cyber-security certifications that validate your skills and knowledge. This section provides guidance on implementing security standards, risk management, and preparing for certification exams.",
      },
      items: [
        "best-practices",
        "certification-guide",
      ],
    },

    {
      type: "category",
      label: "cyber-security Tools",
      link: { type: "doc", id: "cybersecurity-tools/index" },
      items: [
        {
          type: "category",
          label: "Network Analysis",
          items: [
            "cybersecurity-tools/network-analysis/wireshark-basics",
            "cybersecurity-tools/network-analysis/nmap-scanning",
            "cybersecurity-tools/network-analysis/tcpdump-guide",
          ],
        },
        {
          type: "category",
          label: "Penetration Testing",
          items: [
            "cybersecurity-tools/penetration-testing/metasploit-framework",
            "cybersecurity-tools/penetration-testing/burpsuite-overview",
            "cybersecurity-tools/penetration-testing/nikto-scanning",
          ],
        },
        {
          type: "category",
          label: "Password & Authentication",
          items: [
            "cybersecurity-tools/password-and-authentication/john-the-ripper",
            "cybersecurity-tools/password-and-authentication/hydra-password-cracking",
            "cybersecurity-tools/password-and-authentication/hashcat-usage",
          ],
        },
        {
          type: "category",
          label: "Digital Forensics",
          items: [
            "cybersecurity-tools/digital-forensics/autopsy-introduction",
            "cybersecurity-tools/digital-forensics/volatility-memory-analysis",
          ],
        },
        {
          type: "category",
          label: "Vulnerability Assessment",
          items: [
            "cybersecurity-tools/vulnerability-assessment/openvas-setup",
            "cybersecurity-tools/vulnerability-assessment/nessus-basics",
            "cybersecurity-tools/vulnerability-assessment/vulnerability-scanning-tips",
          ],
        },
        {
          type: "category",
          label: "Monitoring & Defense",
          items: [
            "cybersecurity-tools/monitoring-and-defense/splunk-overview",
            "cybersecurity-tools/monitoring-and-defense/snort-ids",
            "cybersecurity-tools/monitoring-and-defense/security-onion",
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Hands-on Projects",
      link: {
        type: "generated-index",
        title: "cyber-security Projects & Labs",
        description: `Hands-on projects and lab exercises to build practical cyber-security skills. Start with guided, safe labs (network analysis, web app testing, password cracking, forensics), progress to intermediate attack/defense scenarios, and finish with real-world capstone projects. Each lab includes objectives, required tools, step-by-step instructions, and remediation guidance, perfect for learners, instructors, and bootcamps.`,
      },

      items: [
        "projects/setup-lab-environment",
        "projects/sql-injection-demo",
        "projects/password-cracking-lab",
        "projects/network-sniffing-lab",
        "projects/penetration-testing-lab",
      ],
    },

    {
      type: "category",
      label: "Resources",
      link: {
        type: "generated-index",
        title: "cyber-security Learning Resources",
        description: `A practical, hands-on collection of learning resources for everyone building real-world cyber-security skills. This index groups tutorials, tool guides, labs, and checklists organized from fundamentals (networking, cryptography, web security) to offensive and defensive workflows (pentesting, DFIR, incident response). Each entry includes clear objectives, step‑by‑step exercises, and ethics-first guidance so you can practice safely in labs and apply what you learn to production-ready security work. Use the "Getting Started" path to move from beginner-friendly topics to specialized tool tutorials and certification-ready material.`,
      },
      items: [
        "resources/glossary",
        "resources/books-and-courses",
        "resources/tools-list",
        "resources/links",
      ],
    },
  ],
};

export default sidebars;
