import dayjs from "dayjs";

export const formatDurationFromMinutes = (valueInMinutes: number): string => {
  const duration = dayjs.duration(valueInMinutes, "minutes");

  const hours = duration.hours();
  const minutes = duration.minutes() % 60; // ensure minutes are within 0-59 range
  const seconds = duration.seconds() % 60; // ensure seconds are within 0-59 range

  return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};
