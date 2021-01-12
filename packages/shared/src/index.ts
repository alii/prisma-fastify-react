export function add(a: number, b: number) {
  return a + b + 10;
}

export const IS_DEV = process.env.NODE_ENV === "development";
