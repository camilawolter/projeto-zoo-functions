const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna undefind se nenhuma parâmetro for passado', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('Retorna menssagem de erro se o que for passaso seja diferente de uma string', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Retornar um número inteiro para a quantia de residentes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Retornar o nome dos residentes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Retornar a média da idade dos residentes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Retornar a localização dos residentes', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Retornar um valor da popularidade dos residentes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Retornar um array dos dias da samena que os residentes estão disponíveis', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Retornar null caso a string passada não contempla uma funcionalidade', () => {
    expect(handlerElephants('invalid')).toEqual(null);
  });
});
