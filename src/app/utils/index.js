// 
export const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str
  } else {
    return str.slice(0, maxLength - 3) + '...'
  }
}

export const capitalizeFirstLetter = (inputString) => {
  if (!inputString) {
    return inputString
  }

  return inputString.charAt(0).toUpperCase() + inputString.slice(1)
}


export const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
}
