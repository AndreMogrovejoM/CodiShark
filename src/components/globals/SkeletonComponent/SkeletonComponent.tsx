import { Skeleton } from "@mui/material";
import React from "react";

import { SkeletonComponentProps as Props } from "./SkeletonComponent.types";

const SkeletonComponent: React.FC<Props> = props => {
  const { width, height, animation, variant } = props;

  return (
    <Skeleton
      className={`SkeletonComponent`}
      height={height}
      width={width}
      animation={animation ?? "pulse"}
      variant={variant ?? "text"}
    />
  );
};

SkeletonComponent.defaultProps = {};

export default SkeletonComponent;
