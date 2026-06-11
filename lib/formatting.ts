/**
 * General number formatting utilities
 * Used throughout the app for consistent number displays
 */

export function formatNumber(num: number, decimals = 0): string {
  return num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatPercentage(value: number, decimals = 1): string {
  return `${value > 0 ? '+' : ''}${value.toFixed(decimals)}%`;
}

/**
 * Format time period in human-readable format
 * 48 -> "4 years" or "4 years 0 months"
 */
export function formatMonthsToYears(months: number): string {
  if (months === Infinity || !isFinite(months)) return 'N/A';
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) return `${months} month${months !== 1 ? 's' : ''}`;
  if (remainingMonths === 0) return `${years} year${years !== 1 ? 's' : ''}`;

  return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Calculate percentage of a value
 */
export function getPercentageOf(part: number, total: number): number {
  if (total === 0) return 0;
  return (part / total) * 100;
}

/**
 * Linear interpolation between two values
 */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Round to nearest multiple
 */
export function roundToNearest(value: number, multiple: number): number {
  return Math.round(value / multiple) * multiple;
}

/**
 * Calculate compound interest
 */
export function calculateCompoundInterest(
  principal: number,
  rate: number,
  years: number,
  compounds = 12
): number {
  return principal * Math.pow(1 + rate / 100 / compounds, compounds * years);
}

/**
 * Calculate simple interest
 */
export function calculateSimpleInterest(
  principal: number,
  rate: number,
  years: number
): number {
  return principal + principal * (rate / 100) * years;
}

/**
 * Format large numbers compactly
 */
export function formatCompact(num: number): string {
  if (num >= 1_00_00_000) return `${(num / 1_00_00_000).toFixed(1)}Cr`;
  if (num >= 1_00_000) return `${(num / 1_00_000).toFixed(1)}L`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}

/**
 * Deduce hourly rate from annual
 */
export function getHourlyFromAnnual(annualAmount: number): number {
  return Math.round(annualAmount / (365 * 24));
}

/**
 * Get daily amount from hourly
 */
export function getDailyFromHourly(hourlyAmount: number): number {
  return hourlyAmount * 24;
}
