const malas = [];
malas.push[1] = 'Elemento 1';
malas.push[3] = 'Elemento 3';
malas.push[7] = 'Elemento 7';


console.log(malas);
console.log(malas.length);



const elemento = [10, 20, 30, 40, 50]
console.log('Meu array antes da alteração', elemento);
elemento[0] = 5;
console.log('Meu array depois da alteração', elemento);


 const meuArray = [];
meuArray.push(5);
meuArray.push(2);
meuArray.push(3);
console.log(meuArray);
meuArray[0] = [meuArray[0]] * 2;
console.log(meuArray);



const meuArray = [];
meuArray.push(5);
meuArray.push(2);
meuArray.push(3);
console.log(meuArray);

const clinica = [];
clinica.push('Coelho');
clinica.push('Gato');
clinica.push('Sapo');
console.log(clinica[0], clinica[1], clinica[2]);
clinica.pop()
clinica.pop()
clinica.pop()
console.log("fila de animais agurdando", clinica);