let numero = Number(prompt('Insira um número qualquer:'));
//Number: Função construtora ou de conversão. Converte a string do prompt para número

if (numero > 0) {
  console.log('Este número é positivo.')
} else if (numero < 0) {
  console.log('Este é um número negativo.')
} else {
  console.log('Zero é um número neutro.')
}

//Exemplo usando o ternário
/* console.log (
  numero > 0 ? 'Este número é positivo.' :
  numero < 0 ? 'Este número é negativo.' :
  'Zero é um número neutro.'
); */