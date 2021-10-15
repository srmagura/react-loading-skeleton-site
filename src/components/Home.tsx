import React, { useState } from "react";
import { Post } from "./Post";
import { SimplePost, SimpleSkeletonThemeProps } from "./SimplePost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
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
        <div className="post-grid-arrow-right">
          <FontAwesomeIcon className="faIcon" icon={faArrowRight} size="3x" />
        </div>
        <div className="post-grid-arrow-down">
          <FontAwesomeIcon className="faIcon" icon={faArrowDown} size="3x" />
        </div>
        <Post loading={false} />
      </div>
      <div>
        <div className="post-grid">
          <div className="grid-item">
            <h2>Adapts to your existing styles</h2>
            <p>
              The <code>Skeleton</code> component should be used directly in
              your components in place of content that is loading. While other
              libraries require you to meticulously craft a skeleton screen that
              matches the font size, line height, and margins of your content,
              the `Skeleton` component is automatically sized to the correct
              dimensions.
            </p>
          </div>
          <div className="grid-item">
            <h2>Don't make dedicated skeleton screens</h2>
            <p>
              Instead, make components with <em>built-in</em> skeleton states.
              This approach is beneficial because:
            </p>
            <div>
              <ol>
                <li>It keeps styles in sync.</li>
                <li>
                  Components should represent all possible states — loading
                  included.
                </li>
                <li>
                  It allows for more flexible loading patterns. In the blog post
                  example above, it's possible to have the title load before the
                  body, while having both pieces of content show loading
                  skeletons at the right time.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="button-grid">
        <div className="row">
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
        </div>
        <div>
          <h2 className="row">Fully themable</h2>
          <p className="row">
            Customize individual skeletons with props, or render a{" "}
            <code>SkeletonTheme</code> to style all skeletons below it in the
            React hierarchy.
          </p>
        </div>
        <div className="simple-post-grid">
          {themes.map((theme) => (
            <div key={themes.indexOf(theme)}>
              <SimplePost loading={loading} SkeletonStyles={theme} />
            </div>
          ))}
        </div>
        <label id="loading" className="row">
          <input
            id="checkbox"
            type="checkbox"
            checked={loading}
            value={loading.toString()}
            onChange={() => setLoading(!loading)}
          />
          Loading
        </label>
        <br />
        <Button id="edit-button">
          <a
            href="https://github.com/srmagura/react-loading-skeleton-site"
            target="_blank"
          >
            Edit on GitHub
          </a>
        </Button>
      </div>
    </div>
  );
};
