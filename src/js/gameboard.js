import {Ship, Hit, isSunk} from './ship.js'

function Gameboard(board, ship_collection) {
    return {board, ship_array};
}

function initialize_board() {
    let rows = 10;
    let columns = 10;
    let board = Array.from({ length: rows }, () => Array.from({ length: columns }).fill(0));
    return board;
}

function register_ship(row, column, length, array, mode) {
    if (mode == 'horizontal') {
        while (length > 0) {
            array[row][column] = 1;
            length--;
            column++;
        }
    } else {
        while (length > 0) {
            array [row][column] = 1;
            length--;
            row++;
        }
    }
}

function initialize_ship_at(row, column, length, array, mode) {
    if (mode == 'horizontal') {
        if ((10 - column) < length)
            return false;
        else
            register_ship(row, column,length, array, mode);
    } else {
        if ((10 - row) < length)
            return false;
        else
            register_ship(row, column, length, array, mode);
    }
    return true;
}

export {Gameboard, initialize_board, initialize_ship_at, register_ship}