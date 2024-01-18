
export default function validateNumber(number) { return !(isNaN(number) || number < 1 || number > 12) }