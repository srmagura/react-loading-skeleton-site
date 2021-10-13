import React, { useState } from "react";
import { Post } from "./Post";
import { SimplePost, SimpleSkeletonThemeProps } from "./SimplePost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";

export const Home = (): React.ReactElement => {
  const [loading, setLoading] = useState(true);
  const themes: SimpleSkeletonThemeProps[] = [
    {
      baseColor: "#FFC371",
      highlightColor: "#FF5F6D",
      direction: "ltr",
    },
    {
      borderRadius: 0,
      baseColor: "",
      highlightColor: "",
      direction: "ltr",
    },
    {
      baseColor: "",
      highlightColor: "",
      direction: "rtl",
    },
  ];
  return (
    <div>
      <h1>React Loading Skeleton</h1>
      <p>
        Make beautiful, animated loading skeletons that automatically adapt to
        your app.
      </p>
      <div className="post-grid">
        <Post loading />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} size="4x" />
        </div>
        <Post loading={false} />
      </div>
      <h2>Adapts to your existing styles</h2>
      <p>
        The `Skeleton` component should be used directly in your components in
        place of content that is loading. While other libraries require you to
        meticulously craft a skeleton screen that matches the font size, line
        height, and margins of your content, the `Skeleton` component is
        automatically sized to the correct dimensions.
      </p>

      <h2>Don't make dedicated skeleton screens</h2>
      <p>
        Instead, make components with <em>built-in</em> skeleton states. This
        approach is beneficial because:
      </p>
      <div>
        <ol>
          <li>It keeps styles in sync.</li>
          <li>
            Components should represent all possible states — loading included.
          </li>
          <li>
            It allows for more flexible loading patterns. In the blog post
            example above, it's possible to have the title load before the body,
            while having both pieces of content show loading skeletons at the
            right time.
          </li>
        </ol>
      </div>
      <Button style={{ textTransform: "none" }}>
        <h2>
          <a
            href="https://github.com/dvtng/react-loading-skeleton"
            target="_blank"
          >
            Documentation / GitHub
          </a>
        </h2>
      </Button>
      <h2>Fully themable</h2>
      <p>
        Customize individual skeletons with props, or render a{" "}
        <code>SkeletonTheme</code> to style all skeletons below it in the React
        hierarchy.
      </p>
      {themes.map((theme) => (
        <SimplePost loading={loading} SkeletonStyles={theme} />
      ))}
      <label>
        <input
          type="checkbox"
          checked={loading}
          value={loading.toString()}
          onChange={() => setLoading(!loading)}
        />
        Loading
      </label>

      <button type="button">Edit on GitHub</button>
      <button type="button">Open on CodeSandbox</button>
    </div>
  );
};
