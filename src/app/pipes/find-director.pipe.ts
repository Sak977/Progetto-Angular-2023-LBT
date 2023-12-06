import { Pipe, PipeTransform } from '@angular/core';
import { Crew } from '../models/film';

@Pipe({
  name: 'findDirector',
})
export class FindDirectorPipe implements PipeTransform {
  transform(value: Crew[], ...args: unknown[]): string | undefined {
    const director = value.find((crew) => crew.job === 'Director');
    return director?.name;
  }
}
