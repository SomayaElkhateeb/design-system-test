// 
export const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength - 3) + "...";
  }
};

export const capitalizeFirstLetter = (inputString) => {
  if (!inputString) {
    return inputString;
  }

  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
};

export const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};

export function formatLikes(num) {
  if (num < 1000) {
    return num.toString();
  } else if (num < 1000000) {
    const formatted = (num / 1000).toFixed(1);
    return formatted.replace(/\.0$/, "") + "K";
  } else if (num < 1000000000) {
    const formatted = (num / 1000000).toFixed(1);
    return formatted.replace(/\.0$/, "") + "M";
  } else {
    const formatted = (num / 1000000000).toFixed(1);
    return formatted.replace(/\.0$/, "") + "B";
  }
}


export function getInitialDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}