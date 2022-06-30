const last = <T>(arr: T[]): T | null => {
  if (arr.length === 0) {
    return null;
  }
  return arr[arr.length - 1];
};

const prepend = <T>(arr: T[], item: T): T[] => {
  return [item, ...arr];
};
