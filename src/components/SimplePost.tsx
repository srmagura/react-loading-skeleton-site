import Skeleton, { SkeletonTheme } from "@srmagura/react-loading-skeleton";
import React from "react";
import "@srmagura/react-loading-skeleton/dist/skeleton.css";

export interface SimpleSkeletonThemeProps {
  title: string[];
  borderRadius?: number;
  baseColor?: string;
  highlightColor?: string;
  direction?: "ltr" | "rtl";
}

interface SimplePostProps {
  loading: boolean;
  SkeletonStyles: SimpleSkeletonThemeProps;
}
export const SimplePost = ({
  loading,
  SkeletonStyles: styles,
}: SimplePostProps): React.ReactElement => (
  <div className="simple-post">
    {loading ? (
      <div>
        {styles.title.length > 1 ? (
          <h3>
            <code>{styles.title[0]}</code> and <code>{styles.title[1]}</code>
          </h3>
        ) : (
          <h3>
            <code>{styles.title[0]}</code>
          </h3>
        )}

        <SkeletonTheme
          baseColor={styles.baseColor}
          highlightColor={styles.highlightColor}
          borderRadius={styles.borderRadius}
          direction={styles.direction}
        >
          <Skeleton height={30} />
          <br />
          <Skeleton count={5} />
        </SkeletonTheme>
      </div>
    ) : (
      <div>
        <h3>React Loading Skeleton is so fun!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar
          lacinia risus, in vestibulum urna blandit quis. Sed sit amet volutpat
          sapien. Vestibulum bibendum diam vel diam tempus, commodo cursus dui
          dignissim. Nulla nec leo vestibulum odio placerat eleifend. Cras
          scelerisque.
        </p>
      </div>
    )}
  </div>
);
