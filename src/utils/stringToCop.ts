const stringToCop = (price: number) => {
  const result = price.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumSignificantDigits: 3,
  });

  return result;
};

export { stringToCop };
