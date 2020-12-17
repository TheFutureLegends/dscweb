export const isEmptyArray = (array) => {
  if (!Array.isArray(array) || !array.length) {
    // array does not exist, is not an array, or is empty
    // ⇒ do not attempt to process array
    return true;
  }

  return false;
};

export const getSubString = (string, begin = 0, end = 10) => {
  const regex = /(<([^>]+)>)/gi;

  const result = string.replace(regex, "").substr(begin, end) + "...";

  return result;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
