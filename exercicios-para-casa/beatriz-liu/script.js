// 1. Liste os números de 0 a 10 no console;
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(number)

// 2. Some somente os valores ímpares de uma lista de números;


let somaImpares = 0
const listaNumero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] % 2 != 0) {
        somaImpares += listaNumeros[i]
    } 

// 3. Liste a tabuada do 6 (do 1 ao 10);

for (let i = 1; i <= 10; i++) {
    const tabuada = 6 * i
    console.log(tabuada);
}
// 4. Crie uma lista de notas de provas;

const listaNota = [6, 7.5, 8, 8.5, 9, 10]

// 5. Some as todas as notas da lista de provas;

let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i]
}
console.log(soma)

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);


const itensMercado = 

{

    nome:"arroz",
    comprado: true,
    valor: 6,
}

{ 
    nome: "feijao";
    comprado: false;
    valor: 4;

}

{
    nome: "batata";
    comprado: true;
    valor: 9;
}

{
    nome: "refrigerante";
    comprado: false;
    valor: 9;
}

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;

const comprado = listaCompras.filter(item => item.comprado == true)
console.log(comprado)


// 8. Some o total dos valores de itens da lista do mercado.


// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'


///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${praSuavariavel}`);
    }
}