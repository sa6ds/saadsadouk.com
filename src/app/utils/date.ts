export function timeSince(date: string): string {
  const now = new Date();
  const postDate = new Date(date);
  const difference = Math.floor(
    (now.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24)
  );
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

export function abbreviateMonth(date: string): string {
  const monthAbbreviations: { [key: string]: string } = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec",
  };

  return date.replace(
    /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/g,
    (month) => monthAbbreviations[month]
  );
}
