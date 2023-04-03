export class Series {
  
  constructor(public series: string) {}

  slices(sliceLength: number) {
    const arrayNumbers: number[][] = [];
    const arraySeries = Array.from(this.series);
    const convertStrintoNumber = this.convertArrayStringToArrayNumber(arraySeries);
    return arrayNumbers.concat([convertStrintoNumber]);
  }

  private convertArrayStringToArrayNumber(array: string[]): number[] {
    return array.map((arr) => parseInt(arr));
  }

}