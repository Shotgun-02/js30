const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
}, {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
}, {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
}, {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
}, {
    first: 'Johannes',
    last: 'Keplet',
    year: 1571,
    passed: 1630
}, {
    first: 'Nicolas',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
}, {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
}];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


// // 
//Array.prototype.filter()
// // // 1. filter the list of inventors born in 1500s.
// // // es6
// const fifteens = inventors.filter(x => x.year >= 1500 && x.year <= 1599);

// // //es5
const fifteens = inventors.filter(function(inventor) {
    if (inventor.year >= 1500 && inventor.year <= 1599) {
        return true; // keep it
    } // else { return false; }
});
// console.log(fifteens);
console.table(fifteens);


// //
// Array.prototype.map()
//  /// give us array of the inventors first & last name
const inventorsNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// const inventorsNames = inventors.map(function(inventor) {
//     return `${inventor.first} ${inventor.last}`;
// });
console.log(inventorsNames);

// // 
// Array.prototype.sort()
// // //sort the inventors by birthdate, oldest to youngest
// const sortlist = inventors.sort(function(inventorA, inventorB) {
//     if (inventorA.year > inventorB.year) { return 1 } else { return -1 };
// });

const sortlist = inventors.sort((inventorA, inventorB) => (inventorA.year > inventorB.year) ? 1 : -1);
console.table(sortlist);

// // 
// Array.prototype.reduce
// // //total years of inventors
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);