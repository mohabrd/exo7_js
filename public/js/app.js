// BOUCLE 3.1

// let arr = ['ab','abc','abcd','abcde'];
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index].length>=4) {
//         console.log(arr[index]);
//     }
// }

// BOUCLE 3.2

let arr = ['voiture','bus','moto','avion']
console.log(arr);
let saisie = prompt("Saisie un élément du tableau");
do {
    if (saisie.includes('a')) {
        alert("Bien joué");
    }
    saisie = prompt("Saisie un élément du tableau");
} while (!arr.includes('a'));