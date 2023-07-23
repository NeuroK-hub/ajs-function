import Character from '../app';

test('создание нового персонажа', () => {
  const character = new Character({
    name: 'Лучник',
    type: 'Bowman',
    attack: 10,
    defence: 10,
  });

  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 10,
    defence: 10,
  };

  expect(character).toEqual(expected);
});

test('ошибка в name, имя персонажа меньше 2х символов', () => {
  expect(() => {
    const character = new Character({ name: 'A', type: 'Bowman' });
    return character;
  }).toThrowError(new Error('Неверное имя персонажа'));
});

test('ошибка в name, имя персонажа длиньше 10ти символов', () => {
  expect(() => {
    const character = new Character({ name: 'CharacterName', type: 'Bowman' });
    return character;
  }).toThrowError(new Error('Неверное имя персонажа'));
});

test('ошибка в name, имя персонажа не является строкой', () => {
  expect(() => {
    const character = new Character({ name: 10, type: 'Bowman' });
    return character;
  }).toThrowError(new Error('Неверное имя персонажа'));
});

test('ошибка в типе персонажа', () => {
  expect(() => {
    const character = new Character({ name: 'Character', type: 'Character' });
    return character;
  }).toThrowError(new Error('Неверный тип персонажа'));
});
