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
          scelerisque condimentum nunc sit amet fermentum. In interdum, orci nec
          dapibus malesuada, enim mi sollicitudin ipsum, non congue neque elit
          eu neque. Nunc cursus dapibus neque. Duis eu felis interdum, tristique
          metus at, dignissim tortor. Aliquam erat volutpat. Etiam fringilla
          varius nisi sit amet porttitor. Integer ac diam et turpis molestie
          fringilla. Fusce efficitur feugiat pretium. Pellentesque mi quam,
          sodales ac ipsum dignissim, aliquam efficitur metus. Nam congue diam
          sit amet odio interdum, ac commodo nibh consequat. Morbi vel semper
          elit, et aliquam velit. Phasellus elementum rhoncus augue vitae
          fringilla. Mauris commodo sodales interdum. Etiam euismod lectus nec
          justo maximus varius. Mauris varius velit non mauris bibendum
          accumsan. Morbi tincidunt imperdiet nisi vitae rutrum. Duis aliquam
          nibh ut efficitur vestibulum. Donec lacinia arcu vitae lorem
          scelerisque, non ullamcorper sapien volutpat. Sed tincidunt tellus ac
          justo tincidunt, tristique mollis ipsum accumsan. In semper convallis
          leo vel ullamcorper. Pellentesque consectetur mollis libero vitae
          laoreet. Curabitur placerat lobortis arcu, eget eleifend nibh
          fringilla sit amet. Curabitur vestibulum risus velit, et ullamcorper
          lectus molestie vel. Curabitur convallis lectus eget hendrerit
          lacinia. Ut a consectetur risus.
        </p>
      </div>
    )}
  </div>
);
