/**
 * INR Currency Formatting Utilities
 * Handles all financial displays for Unexgen's India-focused operations
 */

export function formatINR(amount: number, includeSymbol = true): string {
  if (!Number.isFinite(amount)) return '₹0';

  const roundedAmount = Math.round(amount);
  const isNegative = roundedAmount < 0;
  const absoluteAmount = Math.abs(roundedAmount);

  // Indian numbering system: 1,00,000 for lakh, 10,00,000 for 10 lakhs
  const formatter = new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const formatted = formatter.format(absoluteAmount);
  const symbol = includeSymbol ? '₹' : '';
  const sign = isNegative ? '-' : '';

  return `${sign}${symbol}${formatted}`;
}

export function formatINRWithDecimals(
  amount: number,
  decimals = 2,
  includeSymbol = true
): string {
  if (!Number.isFinite(amount)) return '₹0';

  const isNegative = amount < 0;
  const absoluteAmount = Math.abs(amount);

  const formatter = new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  const formatted = formatter.format(absoluteAmount);
  const symbol = includeSymbol ? '₹' : '';
  const sign = isNegative ? '-' : '';

  return `${sign}${symbol}${formatted}`;
}

/**
 * Abbreviate large numbers for display
 * 7,50,000 -> 7.5L, 1,00,00,000 -> 1C
 */
export function formatINRAbbrv(amount: number): string {
  const absAmount = Math.abs(amount);

  if (absAmount >= 1_00_00_000) {
    // Crore (10 million)
    return `₹${(amount / 1_00_00_000).toFixed(1)}Cr`;
  }

  if (absAmount >= 1_00_000) {
    // Lakh (100k)
    return `₹${(amount / 1_00_000).toFixed(1)}L`;
  }

  if (absAmount >= 1000) {
    return `₹${(amount / 1000).toFixed(1)}K`;
  }

  return `₹${amount.toFixed(0)}`;
}

/**
 * Parse INR string back to number
 * "₹7,50,000" -> 750000
 */
export function parseINR(value: string): number {
  // Remove currency symbol and spaces
  const cleaned = value.replace(/[₹\s]/g, '');
  // Remove commas (Indian format uses commas)
  const numeric = cleaned.replace(/,/g, '');
  return parseFloat(numeric) || 0;
}

/**
 * Savings display format
 * Shows annual/monthly savings with currency
 */
export function formatSavings(
  amount: number,
  period: 'annual' | 'monthly' = 'annual'
): string {
  const suffix = period === 'annual' ? '/year' : '/month';
  return `${formatINR(amount)}${suffix}`;
}

/**
 * Format percentage change with color indication
 */
export function formatROI(percentageIncrease: number): {
  text: string;
  isPositive: boolean;
} {
  const isPositive = percentageIncrease >= 0;
  const symbol = isPositive ? '+' : '';
  const text = `${symbol}${percentageIncrease.toFixed(1)}%`;

  return { text, isPositive };
}

/**
 * Calculate and format simple interest/ROI
 * Used for investment calculations
 */
export function calculateROI(
  initialInvestment: number,
  annualReturn: number,
  years: number
): {
  totalValue: number;
  totalGain: number;
  annualROI: number;
} {
  const totalGain = initialInvestment * annualReturn * years;
  const totalValue = initialInvestment + totalGain;
  const annualROI = (annualReturn * 100) / years;

  return {
    totalValue,
    totalGain,
    annualROI,
  };
}
