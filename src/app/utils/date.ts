export function timeSince(date: string): string {
  const now = new Date();
  const postDate = new Date(date);
  // Calculate difference in days
  const difference = Math.floor(
    (now.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Return appropriate string based on time difference
  if (difference < 1) {
    return "today";
  } else if (difference < 2) {
    return "1 day ago";
  } else if (difference < 30) {
    return `${difference} days ago`;
  } else if (difference < 365) {
    return `${Math.floor(difference / 30)}mo ago`;
  } else {
    return `${Math.floor(difference / 365)}y ago`;
  }
}

// Function to convert date string to abbreviated month format
export function abbreviateMonth(date: string): string {
  const monthAbbreviations = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const parts = date.split("-");
  if (parts.length !== 3) {
    return date; // Return original date if format is unexpected
  }

  const month = parseInt(parts[0], 10) - 1;
  const day = parseInt(parts[1], 10);
  let year = parseInt(parts[2], 10);

  // Handle two-digit years
  if (year < 100) {
    year += year < 50 ? 2000 : 1900;
  }

  // Validate parsed values
  if (month < 0 || month > 11 || isNaN(day) || isNaN(year)) {
    return date;
  }

  return `${monthAbbreviations[month]} ${day}, ${year}`;
}
