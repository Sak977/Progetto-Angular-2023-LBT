import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToTime',
})
export class NumberToTimePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    const hours = Math.floor(value / 60);
    let minutes: number | string = value % 60;
    if (minutes + ''.length < 2) {
      minutes = '0' + minutes;
    }
    return `${hours}h: ${minutes}min`;
  }
}
