function returnNum(num = 0, word) {
  if (!num) return 0;

  if (num > 1) {
    return `${num} ${word}s`;
  } else {
    return `${num} ${word}`;
  }
}

function formattedString() {
  var args = Array.prototype.slice.call(arguments);

  if (args.length > 2) {
    return `${args.slice(0, args.length - 1).join(", ")} and ${
      args[args.length - 1]
    }`;
  }

  if (args.length === 2) {
    return `${args[0]} and ${args[1]}`;
  }

  return args[0];
}

function formatDuration(seconds) {
  if (!seconds) return "now";

  let years;
  let days;
  let hours;
  let minutes;
  let sec;

  if (seconds >= 3600 * 24 * 12) {
    years = Math.floor(seconds / (3600 * 24 * 365));
    days = Math.floor((seconds % (3600 * 24 * 365)) / (3600 * 24));
    hours = Math.floor((seconds % (3600 * 24)) / 3600);
    minutes = Math.floor((seconds % 3600) / 60);
    sec = seconds % 60;
  }

  if (seconds >= 3600 * 24 && seconds < 3600 * 24 * 12) {
    days = Math.floor(seconds / (3600 * 24));
    hours = Math.floor((seconds % (3600 * 24)) / 3600);
    minutes = Math.floor((seconds % 3600) / 60);
    sec = seconds % 60;
  }

  if (seconds >= 3600 && seconds < 3600 * 24) {
    hours = Math.floor(seconds / 3600);
    minutes = Math.floor((seconds % 3600) / 60);
    sec = seconds % 60;
  }

  if (seconds >= 60 && seconds < 3600) {
    minutes = Math.floor((seconds % 3600) / 60);
    sec = seconds % 60;
  }

  if (seconds < 60) {
    sec = seconds;
  }

  const validResults = [
    returnNum(years, "year"),
    returnNum(days, "day"),
    returnNum(hours, "hour"),
    returnNum(minutes, "minute"),
    returnNum(sec, "second"),
  ].filter((elem) => !!elem);

  return formattedString(...validResults);
}

console.log(formatDuration(1)); // "1 second"
console.log(formatDuration(62)); // "1 minute and 2 seconds"
console.log(formatDuration(120)); // 2 minutes
console.log(formatDuration(132030240));
