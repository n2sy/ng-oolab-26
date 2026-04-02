import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selStatus: string): any[] {
    if (!selStatus.length) return value;

    //   let newTab = [];
    //   for (const serv of value) {
    //     if (serv['status'] == selStatus) newTab.push(serv);
    //   }
    //   return newTab;
    return value.filter((serv) => serv['status'] == selStatus);
  }
}
