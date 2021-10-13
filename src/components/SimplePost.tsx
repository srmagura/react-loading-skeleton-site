import Skeleton, { SkeletonTheme } from "@srmagura/react-loading-skeleton";
import React from "react";
import "@srmagura/react-loading-skeleton/dist/skeleton.css";

export interface SimpleSkeletonThemeProps {
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
  <div>
    {loading ? (
      <SkeletonTheme
        baseColor={styles.baseColor}
        highlightColor={styles.highlightColor}
        borderRadius={styles.baseColor}
        direction={styles.direction}
      >
        <Skeleton count={2} />
      </SkeletonTheme>
    ) : (
      <div>
        <h3>React Loading Skeleton is so fun!</h3>
        <p>Try it now in all of your apps.</p>
      </div>
    )}
  </div>
);
