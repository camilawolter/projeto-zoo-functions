const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Retorna o objeto se não for passado argumentos', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 } });
  });
  it('Retorna "The zoo is closed" quando passado os argumentos "Monday" e "09:00-AM"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Retorna "The zoo is open" quando passados os argumentos "Tuesday" e "09:00-AM"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Retorna "The zoo is closed" quando passados os argumentos "Wednesday" e "09:00-PM"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Retorna "The day must be valid. Example: Monday" quando passados os argumentos "Thu" e "09:00-AM"', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Retorna "The abbreviation must be \'AM\' or \'PM\' quando passados os argumentos "Friday" e "09:00-ZM"', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Retorna "The hour should represent a number" quando passados os argumentos "Saturday" e "C9:00-AM"', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00AM')).toThrow('The hour should represent a number');
  });
  it('Retorna "The minutes should represent a number" quando passados os argumentos "Sunday" e "09:c0-AM"', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  it('Retorna "The hour must be between 0 and 12" quando passados os argumentos "Monday" e "13:00-AM"', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Retorna "The minutes must be between 0 and 59" quando passados os argumentos "Tuesday" e "09:60-AM"', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
