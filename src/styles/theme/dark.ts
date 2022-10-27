import defaultTheme from "./light";

const palette = { ...defaultTheme.palette };
palette.primary = "hsl(0, 0%, 0%)";

const theme = { ...defaultTheme, palette };

export default theme;
