export class Series {
  
  constructor(public series: string) {}

  slices(sliceLength: number): number[][] {
    const series: number[][] = [];
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      const sliced = this.series.slice(i, sliceLength + i);
      series.push(Array.from(sliced.split(''), Number));
    }

    return series;
  }

}