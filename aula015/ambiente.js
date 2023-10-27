let num = [5, 8, 9, 4, 7, 6];
num.push(1);
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(7);
if (pos == 1) {
  console.log(`Ovalor não foi encrotado!`);
} else {
  console.log(`O valor está na posição ${pos}`);
}
