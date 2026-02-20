import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { name?: string },
        HTMLElement
      >;
    }
  }
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  header?: string;
  icon?: string;
  hoverIcon?: string;
  iconset?: string;
  ionicon?: string;
  img?: string;
  size?: "md" | "lg";
  activeIndex?: number;
}

function DocsCard(props: Props): JSX.Element {
  const isStatic = typeof props.href === "undefined";
  const isOutbound =
    typeof props.href !== "undefined" ? /^http/.test(props.href) : false;
  // const header =
  //   props.header === "undefined" ? null : (
  //     <header>{props.header}</header>
  //   );
  const hoverIcon = props.hoverIcon || props.icon;

  const content = (
    <>
      {props.img && <img src={useBaseUrl(props.img)} />}
      {/* FLEX HEADER (ICON + TITLE) */}
      {(props.icon || props.ionicon || hoverIcon) && (
        <div className={styles.cardHeaderRow}>
          {hoverIcon && (
            <img
              src={useBaseUrl(hoverIcon)}
              className={styles.cardIcon}
              alt=""
            />
          )}

          {props.ionicon && (
            <ion-icon
              name={props.ionicon}
              className={styles.cardIonicon}
            ></ion-icon>
          )}

          {props.header && (
            <h3 className={styles.cardHeader}>{props.header}</h3>
          )}
        </div>
      )}
      <div>
        <p>{props.children}</p>
      </div>
    </>
  );

  const className = clsx({
    "Card-with-image": typeof props.img !== "undefined",
    "Card-without-image": typeof props.img === "undefined",
    "Card-size-lg": props.size === "lg",
    ...(props.className ? { [props.className]: true } : {}),
  });

  if (isStatic) {
    return (
      <div className={className}>
        <div className={clsx(styles.card, "docs-card")}>{content}</div>
      </div>
    );
  }

  if (isOutbound) {
    return (
      <div className={className}>
        <a
          className={clsx(styles.card, "docs-card")}
          href={props.href}
          target="_blank"
        >
          {content}
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <Link to={props.href} className={clsx(styles.card, "docs-card")}>
        {content}
      </Link>
    </div>
  );
}

export default DocsCard;
