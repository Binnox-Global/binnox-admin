export const formatNumber = (value: number): string => {
  const billion = 1000000000;
  const million = 1000000;
  const thousand = 1000;

  if (value >= billion) {
    return (value / billion).toFixed(1) + 'b';
  }
  if (value >= million) {
    return (value / million).toFixed(1) + 'm';
  }
  if (value >= thousand) {
    return (value / thousand).toFixed(1) + 'k';
  }
  return value.toString();
};