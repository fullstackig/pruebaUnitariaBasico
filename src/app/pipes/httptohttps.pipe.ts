import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'httptohttps'
})
export class HttptohttpsPipe implements PipeTransform {

  transform(value: any, fallback: string, forceHttps: boolean = false): any {
    let texto = ''
    if (value) {
      texto = value;
    }
    else {
      texto = fallback
    }

    if (forceHttps) {
      if (texto.indexOf('https') == -1) {
        texto = texto.replace('http', 'https')
      }
    }

    return texto;
  }

}
