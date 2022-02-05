// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    const newArray = [...cats, name];
    return newArray;
}

function prependCat(name){
    const newArray = [name, ...cats];
    return newArray;
}

function removeLastCat(){
    return cats.slice(0,cats.length - 1);
}

function removeFirstCat(){
    return cats.slice(1);
}

/*const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}

function appendCat(name){
    const appendCat = [...cats, name];
    return appendCat;
}

function prependCat(name){
    const prependCat = [name, ...cats];
    return prependCat;
}

function removeLastCat(name){
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat(name){
    return cats.slice(1);
}*/