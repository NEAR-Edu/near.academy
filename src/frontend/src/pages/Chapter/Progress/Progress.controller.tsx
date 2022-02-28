import * as React from "react";

import { ProgressView } from "./Progress.view";

export const Progress = ({ percent }: any) => {
  return <ProgressView percent={percent} />;
};
