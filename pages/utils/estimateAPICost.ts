// utils/estimateAPICost.ts
export const estimateAPICost = (numTokens: number): number => {
  const tokenCost = 0.02; // The cost per 1000 tokens.
  return (numTokens * tokenCost) / 1000;
};

