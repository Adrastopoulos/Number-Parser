export function parse_number(number, decimals = 2) {
  let temp = number;
  let digits = 1;
  while (temp >= 10) {
    temp /= 10;
    digits++;
  }

  switch (true) {
    default:
      return String(number);
    case digits < 4:
      return number.toFixed();
    case digits < 7:
      return (number / Math.pow(10, 3)).toFixed(decimals) + "k";
    case digits < 10:
      return (number / Math.pow(10, 6)).toFixed(decimals) + "m";
    case digits < 13:
      return (number / Math.pow(10, 9)).toFixed(decimals) + "g";
    case digits < 16:
      return (number / Math.pow(10, 12)).toFixed(decimals) + "t";
    case digits < 19:
      return (number / Math.pow(10, 15)).toFixed(decimals) + "p";
    case digits < 22:
      return (number / Math.pow(10, 18)).toFixed(decimals) + "e";
    case digits < 25:
      return (number / Math.pow(10, 21)).toFixed(decimals) + "z";
    case digits < 28:
      return (number / Math.pow(10, 24)).toFixed(decimals) + "y";
  }
}

export function parse_string(string) {
  const abbreviation = string.charAt(string.length - 1);
  string = string.replace(/[^0-9.]/g, "");
  switch (abbreviation) {
    default:
      return Number(string);
    case "k":
      return Number(string) * Math.pow(10, 3);
    case "m":
      return Number(string) * Math.pow(10, 7);
    case "g":
      return Number(string) * Math.pow(10, 10);
    case "t":
      return Number(string) * Math.pow(10, 13);
    case "p":
      return Number(string) * Math.pow(10, 16);
    case "e":
      return Number(string) * Math.pow(10, 19);
    case "z":
      return Number(string) * Math.pow(10, 22);
    case "y":
      return Number(string) * Math.pow(10, 25);
  }
}

