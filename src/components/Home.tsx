import React, { useState } from "react";
import { Post } from "./Post";
import { SimplePost, SimpleSkeletonThemeProps } from "./SimplePost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";

export const Home = (): React.ReactElement => {
  const [loading, setLoading] = useState(true);
  const logoUrl = `${process.env.PUBLIC_URL}/logo.svg`;
  const themes: SimpleSkeletonThemeProps[] = [
    {
      title: ["baseColor", "highlightColor"],
      baseColor: "#77c1ff",
      highlightColor: "#c762fd",
    },
    {
      title: ["borderRadius={0}"],
      borderRadius: 0,
    },
    {
      title: ["direction='rtl'"],
      direction: "rtl",
    },
  ];
  return (
    <div>
      <header>
        <img src={logoUrl} alt="Skeleton Logo" id="logo" />
        <h1>React Loading Skeleton</h1>
        <h2>
          Make beautiful, animated loading skeletons that automatically adapt to
          your app.
        </h2>
      </header>
      <div className="post-grid">
        <Post loading />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon className="faIcon" icon={faArrowRight} size="4x" />
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
      <Button id="github">
        <a
          id="github-link"
          href="https://github.com/dvtng/react-loading-skeleton"
          target="_blank"
        >
          Documentation / GitHub
        </a>
      </Button>
      <Button id="code-sandbox">
        <a
          id="code-sandbox-link"
          href="https://codesandbox.io/s/react-loading-skeleton-3xwil?file=/src/App.tsx"
          target="_blank"
        >
          Open on CodeSandbox
        </a>
      </Button>
      <h2>Fully themable</h2>
      <p>
        Customize individual skeletons with props, or render a{" "}
        <code>SkeletonTheme</code> to style all skeletons below it in the React
        hierarchy.
      </p>
      <div className="simple-post-grid">
        {themes.map((theme) => (
          <div key={themes.indexOf(theme)}>
            <SimplePost loading={loading} SkeletonStyles={theme} />
          </div>
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
      </div>
      <Button>
        <a
          href="https://github.com/srmagura/react-loading-skeleton-site"
          target="_blank"
        >
          Edit on GitHub
        </a>
      </Button>
    </div>
  );
};
