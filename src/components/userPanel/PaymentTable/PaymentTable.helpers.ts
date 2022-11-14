export function getNumberOfPages(
  rowCount: number,
  rowsPerPage: number
): number {
  return Math.ceil(rowCount / rowsPerPage);
}

export function getArrayViews(numPages: number) {
  return Array.from({ length: numPages }, (_, i) => i + 1);
}
