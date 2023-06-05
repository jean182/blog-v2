import { DateTime, Duration } from "luxon";

/**
 * DateUtils
 * @description Utility class for formatting dates
 * @remarks This class is used to format dates in the application.
 * */
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

  /**
   * @description Calculates the days passed between two dates
   * @param firstDateToCompare - The first date to compare
   * @param secondDateToCompare - The second date to compare
   * @returns The number of days passed between the two dates.
   * */
  private static calculateDaysPassed(
    firstDateToCompare: DateTime,
    secondDateToCompare: DateTime
  ) {
    const { days } = firstDateToCompare.diff(secondDateToCompare, "days");
    return days;
  }

  /**
   * @description The timeAgo method formats a date to a relative time string
   * @param dateTime - The date to format
   * @param locale - The locale to use
   * @returns A relative time string
   * */
  static timeAgo = (dateTime: DateTime, locale = "en") => {
    const diff = dateTime.diffNow().shiftTo(...this.units);
    const unit = this.units.find((unit) => diff.get(unit) !== 0) || "second";

    const relativeFormatter = new Intl.RelativeTimeFormat(locale, {
      numeric: "auto",
    });
    return relativeFormatter.format(Math.trunc(diff.as(unit)), unit);
  };

  /**
   * @description The formatPostDate method formats a date to a relative time string or a date string
   * @param isoDate - The date to format
   * @param locale - The locale to use
   * @param localizedDayString - The localized day string to use
   * @returns A relative time string or a date string
   * */
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

  /**
   * @description the minutesRead method formats a number of minutes to a human readable string
   * @param minutes - The number of minutes to format
   * @param locale - The locale to use
   * @returns A human readable string
   * */
  static minutesRead(minutes: number, locale: string) {
    return Duration.fromObject({ minutes }, { locale }).toHuman();
  }
}
