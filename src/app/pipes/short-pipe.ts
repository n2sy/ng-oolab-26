import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
})
export class ShortPipe implements PipeTransform {
  transform(value: string, nb: number): string {
    if (value.length < nb) return value;
    return value.substring(0, nb) + '...';
  }
}
