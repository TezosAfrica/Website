export default function numberToPosition(number = 1) {
  if (number == 1) {
    return "1st";
  }

  if (number == 2) {
    return "2nd";
  }

  if (number == 3) {
    return "3rd";
  }

  if (number > 3) {
    return `${number}th`;
  }
}
