const p1 = Promise.resolve(1);
//Declaracion de promesas en Javascript

const autos = [
    {modelo: 'escape', year: '2007',tipo: 'camioneta'},
    {modelo: 'matrix', year: '2007',tipo: 'sport vagon'},
    {modelo: 'optra', year: '2010',tipo: 'sedan'},
    {modelo: 'blazer', year: '2009',tipo: 'camioneta'},
    {modelo: 'lancer', year: '2012',tipo: 'sedan'},
    {modelo: 'tucson', year: '2008',tipo: 'camioneta'},
    {modelo: 'raptop', year: '2018',tipo: 'camioneta'}
];

console.log(p1);

p1
 .then(x => x + 5)
 .then(x => Promise.resolve(x + 5))
 .then(x => console.log(x))



 const car = autos.filter(x => x.tipo== 'camioneta');

 console.log(car);