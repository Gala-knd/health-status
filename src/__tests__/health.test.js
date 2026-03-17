import getHealthStatus from '../health';

test('should return "healthy" for health > 50', () => {
  const character = { name: 'Маг', health: 90 };
  expect(getHealthStatus(character)).toBe('healthy');
});

test('should return "wounded" for health between 15 and 50', () => {
  const character1 = { name: 'Воин', health: 50 };
  expect(getHealthStatus(character1)).toBe('wounded');
  
  const character2 = { name: 'Лучник', health: 30 };
  expect(getHealthStatus(character2)).toBe('wounded');
  
  const character3 = { name: 'Разбойник', health: 15 };
  expect(getHealthStatus(character3)).toBe('wounded');
});

test('should return "critical" for health < 15', () => {
  const character1 = { name: 'Жрец', health: 14 };
  expect(getHealthStatus(character1)).toBe('critical');
  
  const character2 = { name: 'Паладин', health: 0 };
  expect(getHealthStatus(character2)).toBe('critical');
  
  const character3 = { name: 'Друид', health: 5 };
  expect(getHealthStatus(character3)).toBe('critical');
});

test('should handle edge cases', () => {
  const character1 = { name: 'Тест', health: 51 };
  expect(getHealthStatus(character1)).toBe('healthy');
  
  const character2 = { name: 'Тест', health: 50 };
  expect(getHealthStatus(character2)).toBe('wounded');
  
  const character3 = { name: 'Тест', health: 15 };
  expect(getHealthStatus(character3)).toBe('wounded');
  
  const character4 = { name: 'Тест', health: 14 };
  expect(getHealthStatus(character4)).toBe('critical');
});
