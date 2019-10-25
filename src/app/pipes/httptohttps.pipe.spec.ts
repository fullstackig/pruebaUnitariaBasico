import { HttptohttpsPipe } from './httptohttps.pipe';

describe('HttptohttpsPipe', () => {

  let pipe: HttptohttpsPipe;
  beforeEach(() => {
    pipe = new HttptohttpsPipe()
  })

  it('create an instance', () => {
    const pipe = new HttptohttpsPipe();
    expect(pipe).toBeTruthy();
  });

  it('No proporciona un valor de retorno', () => {
    expect(pipe.transform('', 'http://place-hold.it/300')).toBe('http://place-hold.it/300');
  })

  it('Al proporcionar un valor de retorno, me devuelve un valor', () => {
    expect(pipe.transform('http://place-hold.it/300', 'otroValor')).toBe('http://place-hold.it/300');
  })

  it('Debería devolver https si la entrada es http', () => {
    expect(pipe.transform('', 'http://place-hold.it/300', true)).toBe('https://place-hold.it/300');
  });

});
