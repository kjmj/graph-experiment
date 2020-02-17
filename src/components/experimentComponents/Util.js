/// true if text is a number between 1 and 100
export const isGoodInput = (text) => {
  if(text !== "" && !isNaN(text)) {
    const num = parseInt(text);
    return num >= 0 && num <= 100;
  }
  return false;
};

export const badInputAlert = () => {
  alert('Please enter a number between 1 and 100')
};