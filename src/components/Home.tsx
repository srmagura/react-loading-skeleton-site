import React from "react";
import { Post } from "./Post";
import { SimplePost } from "./SimplePost";

export const Home = (): React.ReactElement => (
  <div>
    <h1>React Loading Skeleton</h1>
    <p>
      Make beautiful, animated loading skeletons that automatically adapt to
      your app.
    </p>
    <Post />
    <Post />

    <h2>Adapts to your existing styles</h2>
    <p>
      The `Skeleton` component should be used directly in your components in
      place of content that is loading. While other libraries require you to
      meticulously craft a skeleton screen that matches the font size, line
      height, and margins of your content, the `Skeleton` component is
      automatically sized to the correct dimensions.
    </p>

    <h2>Don&apost make dedicated skeleton screens</h2>
    <p>
      Instead, make components with _built-in_ skeleton states. This approach is
      beneficial because:
    </p>
    <div>
      <ol>
        <li>It keeps styles in sync.</li>
        <li>
          Components should represent all possible states — loading included.
        </li>
        <li>
          It allows for more flexible loading patterns. In the blog post example
          above, it's possible to have the title load before the body, while
          having both pieces of content show loading skeletons at the right
          time.
        </li>
      </ol>
    </div>
    <h2>Documentation / GitHub</h2>
    <h2>Fully themable</h2>
    <p>
      Customize individual skeletons with props, or render a `SkeletonTheme` to
      style all skeletons below it in the React hierarchy.
    </p>

    <SimplePost />
    <SimplePost />
    <SimplePost />
    <label>
      <input type="checkbox" />
      Loading
    </label>

    <button type="button">Edit on GitHub</button>
    <button type="button">Open on CodeSandbox</button>
  </div>
);
