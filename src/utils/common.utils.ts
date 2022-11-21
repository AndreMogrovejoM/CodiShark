export const formatMillisecondsToSeconds = (s: number) => {
  return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
};

export const genRandomNumber = (minimum: number, maximum: number) => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

export function getNumberOfPages(
  rowCount: number,
  rowsPerPage: number
): number {
  return Math.ceil(rowCount / rowsPerPage);
}

export function getArrayViews(numPages: number) {
  return Array.from({ length: numPages }, (_, i) => i + 1);
}
