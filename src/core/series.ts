export class Series {
  
  constructor(public series: string) {}

  slices(sliceLength: number): number[][] {

    if (sliceLength > this.series.length) throw new Error('slice length cannot be greater than series length');
    if (sliceLength <= 0) throw new Error('slice length cannot be zero');
    
    const series: number[][] = [];
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      const sliced = this.series.slice(i, sliceLength + i);
      series.push(Array.from(sliced.split(''), Number));
    }

    return series;
  }

}