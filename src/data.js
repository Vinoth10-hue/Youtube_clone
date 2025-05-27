export const API_KEY = "AIzaSyBMq7VQ4T9e86rSqrouVAzN5F1VAIBoUA0";

export const value_conveter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
