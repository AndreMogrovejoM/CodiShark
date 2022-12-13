import { render } from "setupTests";

import SkeletonComponent from "./SkeletonComponent";

describe("SkeletonComponent", () => {
  it("renders with default props", () => {
    render(<SkeletonComponent height={40} />);
  });
});
