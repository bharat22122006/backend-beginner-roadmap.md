import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import AdsComponent from "@site/src/components/AdsComponent";
import BrowserWindow from "@site/src/components/BrowserWindow";
import GiscusComponent from "@site/src/components/GiscusComponent";
import MDXComponents from "@theme-original/MDXComponents";
import DocCardList from "@theme/DocCardList";
import Image from "@theme/IdealImage";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import { FaReact } from "react-icons/fa";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import DocsCard from '@site/src/components/DocsCard';
import DocsCards from '@site/src/components/DocsCards';
import ComingSoon from '@site/src/components/ComingSoon';
import AuthorProfile from '@site/src/components/AuthorProfile';
import Link from '@docusaurus/Link';
import ToolCard from '@site/src/components/ToolCard';
import SkillCard from '@site/src/components/SkillCard';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Tabs,
  TabItem,
  BrowserWindow,
  GiscusComponent,
  DocCardList,
  FaReact,
  Image,
  LiteYouTubeEmbed,
  AdsComponent,
  DocsCard,
  DocsCards,
  ComingSoon,
  Link,
  AuthorProfile,
  ToolCard,
  SkillCard,
};
