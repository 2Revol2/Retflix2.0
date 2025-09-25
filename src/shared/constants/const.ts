export const YEAR_LIST = [...new Array(132)].map((_, index) => {
  return {
    value: new Date().getFullYear() - index,
    label: String(new Date().getFullYear() - index),
  };
});

export const ORDER_LIST = [
  { value: "RATING", label: "За рейтингом" },
  { value: "NUM_VOTE", label: "По голосам" },
];
