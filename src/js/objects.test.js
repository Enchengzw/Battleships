import {Ship, Hit, isSunk} from './objects.js'

test('Create a ship', () => {
    expect(Ship(2, 2, false)).toEqual({ length: 2, hits: 2, isSunk: false });
});

test('Add a hit to a ship', () => {
    let ship = Ship(2, 2, false);
    Hit(ship);
    expect(ship).toEqual({length: 2, hits: 3, isSunk: false});
});

test('Checks for a sunk ship', () => {
    let ship = Ship(2, 2, false);
    isSunk(ship);
    expect(ship.isSunk).toBe(true);
});

test('Checks for a not sunken ship', () => {
    let ship = Ship(2, 0, true);
    isSunk(ship);
    expect(ship.isSunk).toBe(false);
});