function abbreviateNumber(number) {
  const suffixes = ["", "k", "M", "B", "T", "Qd", "Qt", "Sx", "Sp", "Oc", "No", "De", "UnDe", "DuDe", "TrDe", "QdDe", "QtDe", "SxDe", "SpDe", "OcDe", "NoDe", "Vg" , "UnVg", "DuVg", "TrVg", "QdVg", "QtVg", "SxVg", "SpVg", "OcVg", "NoVg", "Tg" , "UnTg", "DuTg", "TrTg", "QdTg", "QtTg", "SxTg", "SpTg", "OcTg", "NoTg", "Qa" , "UnQa", "DuQa", "TrQa", "QdQa", "QtQa", "SxQa", "SpQa", "OcQa", "NoQa"];


  // Handle numbers below 1000
  if (number < 1000) {
    return number.toFixed(2);
  }

  // Calculate the order of magnitude
  const exponent = Math.floor(Math.log10(Math.abs(number)) / 3);
  const base = number / Math.pow(10, exponent * 3);

  // Format the number with two decimal places and the appropriate suffix
  const formattedNumber = base.toFixed(2);
  const suffix = suffixes[exponent];

  return `${formattedNumber}${suffix}`;
}

// Example usage
const number1 = 54645648654734589346583474564564564564565675678456978546765845897630948673496598340638456783457693485769845678342667523583465073468456765349563487653745345;
const abbreviated1 = abbreviateNumber(number1);
console.log(abbreviated1); // Output: 1.23M
