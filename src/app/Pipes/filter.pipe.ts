import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTerm: string): any {
    if (searchTerm === "") {
      return value;
    }
    const userData: any[] = [];
    for (let i = 0; i < value.length; i++) {
      let cityName: string = value[i].city.toLowerCase();
      if (cityName.startsWith(searchTerm.toLowerCase())) {
        userData.push(value[i]);
      }
    }
    return userData;
  }
}
