//1
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words.slice(3, 6))

//2
const filtered = [12, 5, 8, 130, 44]
console.log(filtered.filter((index) => (index >= 12 ? index : null)))

//3
const array1 = [5, 12, 8, 130, 44];
console.log(array1.filter(i => i === 12 ? i : null))

//4
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

console.log(inventory.filter((index)=>(index.name == "cherries" ? index : null)))

//5
function myFunction(item, index, arr) {
    arr[index] = item * 2;
  }

const array2 = [1, 4, 9, 16];
console.log(array2.map(i => i*2));

array2.forEach(myFunction)
console.log(array2);

//6
const numbers = [1, 4, 9]; 
console.log(numbers.map(i => Math.sqrt(i)))

//7
const array3 = [1, 2, 3, 4];
console.log(array3.reduce((sum, i)=> sum += i))

//8
function printLetter(index){
    console.log(index)
}
const array4 = ['a', 'b', 'c'];
array4.forEach(printLetter)

//9
const ratings = [5, 4, 5];
console.log(ratings.reduce((sum, i) => (sum += i)))


//10
function spacrse(index){
    const e = { element: index };
}
const arraySparse = [1, 3, /* empty */, 7];
arraySparse.forEach(spacrse)
console.log(arraySparse)


// Làm phẳng mảng mảng
let depthArray = [1, 2, [3,4], 5, 6, [ 7, 8, 9]]
console.log(depthArray.flat())

// lấy các khóa học và đưa vào 1 mảng mới
const Topics = [
    {
        topic: 'Front-end',
        coures: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'ReactJS'
            },
            {
                id: 3,
                title: 'Javacript'
            }
        ]  
    },
    {
        topic: 'Back-end',
        coures: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJs'
            }
        ]
    }
]

const course = Topics.flatMap(topic => topic.coures.map(course => course.title))
console.log(course)


