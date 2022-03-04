let a = [23, 54, 56, 15, 62, 84, 45];

function findIndexFrom(a, predicate, start) {
    return a.findIndex((elem, index) => index > start && predicate(elem));
}

let i = -1;
do {
    i = findIndexFrom(a, (elem) => elem % 7 === 0, i + 1);
}while (i > 0)

a.filter(elem => elem % 7 == 0);

a.map((elem, index) => [elem, index]).filter(([elem, index]) => elem % 7 == 0).map(([elem, index]) => index);