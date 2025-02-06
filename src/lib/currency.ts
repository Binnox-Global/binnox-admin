export type CurrencyCode = 'USD' | 'NGN';

export const formatCurrency = (amount: number, currency: CurrencyCode = 'USD') => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(amount);
};

export const convertToNaira = (usdAmount: number) => {
  // This rate should come from an API in production
  const rate = 1650; // Example rate
  return usdAmount * rate;
};