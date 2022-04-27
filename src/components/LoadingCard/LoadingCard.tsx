import React, { FC } from "react";
import ContentLoader from "react-content-loader";

const LoadingCard: FC = () => (
  <li className="card">
    <ContentLoader
      speed={2}
      width={200}
      height={300}
      viewBox="0 0 200 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="37" rx="0" ry="0" width="197" height="197" />
      <rect x="128" y="180" rx="0" ry="0" width="1" height="0" />
      <rect x="41" y="21" rx="0" ry="0" width="1" height="1" />
      <rect x="0" y="250" rx="5" ry="5" width="120" height="15" />
      <rect x="0" y="278" rx="5" ry="5" width="139" height="15" />
      <circle cx="185" cy="270" r="15" />
      <rect x="0" y="0" rx="5" ry="5" width="125" height="18" />
    </ContentLoader>
  </li>
);

export default LoadingCard;
