function Ship(length, hits, isSunk){
    return {length, hits, isSunk};
}

function Hit(Ship) {
    Ship.hits += 1;
}

function isSunk(Ship) {
    if (Ship.hits >= Ship.length)
        Ship.isSunk = true;
    else
        Ship.isSunk = false;
}

export {Ship, Hit, isSunk}