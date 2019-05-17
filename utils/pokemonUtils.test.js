const { getPokemonIdByName, getPokemonNameById, getPokemonIdByAny } = require('./pokemonUtils');

describe('getPokemonNameById', () => {
  it('should return Pikachu for 25', () => {
    expect(getPokemonNameById(25)).toBe('Pikachu');
  });
  it('should return Pikachu for "25"', () => {
    expect(getPokemonNameById('25')).toBe('Pikachu');
  });
  it('should return Pikachu for "025"', () => {
    expect(getPokemonNameById('025')).toBe('Pikachu');
  });
  it('should return an empty string for invalid number', () => {
    expect(getPokemonNameById('025')).toBe('Pikachu');
  });
});

describe('getPokemonIdByName', () => {
  it('should return 25 for Pikachu', () => {
    expect(getPokemonIdByName('Pikachu')).toBe(25);
  });
  it('should return 25 for PIKACHU', () => {
    expect(getPokemonIdByName('PIKACHU')).toBe(25);
  });
  it('should return 25 for pIKaCHu', () => {
    expect(getPokemonIdByName('pIKaCHu')).toBe(25);
  });
  it('should return NaN for zzzzz', () => {
    expect(getPokemonIdByName('zzzzz')).toBe(NaN);
  });
});

describe('getPokemonIdByAny', () => {
  it('should return 25 for 25', () => {
    expect(getPokemonIdByAny(25)).toBe(25);
  });
  it('should return NaN for 9999', () => {
    expect(getPokemonIdByAny(9999)).toBe(NaN);
  });
  it('should return 25 for Pikachu', () => {
    expect(getPokemonIdByAny('pikachu')).toBe(25);
  });
  it('should return NaN for zzzzz', () => {
    expect(getPokemonIdByAny('zzzzz')).toBe(NaN);
  });
});
