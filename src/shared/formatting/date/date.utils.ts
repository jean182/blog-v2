import { DateTime, Duration } from "luxon";

export default class DateUtils {
  static MAXIMUN_DAY_DISPLAY = 365;
  static units: Intl.RelativeTimeFormatUnit[] = [
    "year",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
  ];

  private static calculateDaysPassed(
    firstDateToCompare: DateTime,
    secondDateToCompare: DateTime
  ) {
    const { days } = firstDateToCompare.diff(secondDateToCompare, "days");
    return days;
  }

  static timeAgo = (dateTime: DateTime, locale = "en") => {
    const diff = dateTime.diffNow().shiftTo(...this.units);
    const unit = this.units.find((unit) => diff.get(unit) !== 0) || "second";

    const relativeFormatter = new Intl.RelativeTimeFormat(locale, {
      numeric: "auto",
    });
    return relativeFormatter.format(Math.trunc(diff.as(unit)), unit);
  };

  static formatPostDate(
    isoDate: string,
    locale: string,
    localizedDayString?: string
  ) {
    const today = DateTime.now().setLocale(locale);
    const date = DateTime.fromISO(isoDate).setLocale(locale);
    const days = this.calculateDaysPassed(today, date);
    if (days > this.MAXIMUN_DAY_DISPLAY) {
      return date.toLocaleString(DateTime.DATE_MED);
    }
    const postedAt = localizedDayString ? `${localizedDayString} ` : "";

    return postedAt.concat(this.timeAgo(date, locale) ?? "");
  }

  static minutesRead(minutes: number, locale: string) {
    return Duration.fromObject({ minutes }, { locale }).toHuman();
  }
}
