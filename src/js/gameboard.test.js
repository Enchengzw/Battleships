import {Gameboard, initialize_board, initialize_ship_at, register_ship} from './gameboard.js'

test('Create a 10x10 Array filled with 0s', () => {
    let array = initialize_board();

    array.forEach(row => {
        expect(row.length).toBe(10);
        row.forEach(cell => {
            expect(cell).toBe(0);
        })
    })
});

test('Ship correctly placed at given coordinates vertically', () => {
    let array = initialize_board();
    let column = 4;
    let row = 3;
    let length = 3;
    expect(initialize_ship_at(row, column, length, array, 'vertical')).toBe(true);

    for (let index = 0; index < 10; index++) {
        if (index < row) {
            expect(array[index][column]).toBe(0);
        }
        else if ((index >= row) && (index < (row + length))) {
            expect(array[index][column]).toBe(1);
        }
        else {
            expect(array[index][column]).toBe(0);
        }
    }
});

test('Ship correctly placed at given coordinates horizontally', () => {
    let array = initialize_board();
    let column = 4;
    let row = 3;
    let length = 3;
    expect(initialize_ship_at(row, column, length, array, 'horizontal')).toBe(true);

    array[row].forEach((cell, index) => {
        if (index < column) {
            expect(cell).toBe(0);
        }
        else if ((index >= column) && (index < (column + length))) {
            expect(cell).toBe(1);
        }
        else {
            expect(cell).toBe(0);
        }
    });
});