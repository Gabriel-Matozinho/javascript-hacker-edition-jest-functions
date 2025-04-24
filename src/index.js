// Função que soma dois números
function somar(x, y) {
  return x + y;
}


// Função que subtrai dois números
function subtrair(x,y) {
  return x - y;
}

// Função que multiplica dois números
function multiplicar(x,y) {
  return x * y;
}

// Função que divide dois números, com verificação de divisão por zero
function dividir(x,y) {
  if(y === 0){
    throw new Error("Divisão por zero não é permitida");
  }
  return x / y;
}

// Função que verifica se um número é par
function ehPar(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Exporta todas as funções para serem usadas nos testes
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
};
