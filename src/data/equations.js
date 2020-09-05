export const getMean = (data) => {
  return data.reduce((a, b) => Number(a) + Number(b)) / data.length;
};

export const getSD = (data) =>
  Math.sqrt(
    data.reduce((sq, n) => sq + Math.pow(n - getMean(data), 2), 0) /
      (data.length - 1)
  );
