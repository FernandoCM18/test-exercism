export class Gigasecond {
  constructor(public dateTime: Date) {}

  public date(): Date {
    const GIGASECOND = 1000000000 * 1000;
    return new Date(this.dateTime.getTime() + GIGASECOND);
  }
}
