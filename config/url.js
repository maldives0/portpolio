const prod = process.env.NODE_ENV === 'production';
export const backUrl = prod ? "https://maldives0.github.io/portpolio/api" : "http://localhost:3031/api";
export const frontUrl = prod ? "https://maldives0.github.io/portpolio/" : "http://localhost:3030";
