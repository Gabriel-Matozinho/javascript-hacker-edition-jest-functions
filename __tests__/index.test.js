const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
} = require("../src/index");

// Testes para a função somar
test("Soma dois números corretamente", () => {
  expect(somar(1, 2)).toBe(3);
});

// Testes para a função somar numeros negativos
test("Soma dois números negativos corretamente", () => {
  expect(somar(-5,-3)).toBe(-8);
});
  
// Testes para a função subtrair
test("Subtrai dois números corretamente", () => {
  expect(subtrair(5, 3)).toBe(2);
});

test("Subtrai com resultado negativo", () => {
  expect(subtrair(3, 5)).toBe(-2);
});

// Testes para a função multiplicar
test("Multiplica dois números corretamente", () => {
  expect(multiplicar(2, 3)).toBe(6);
});

test("Multiplica número por zero", () => {
  expect(multiplicar(5, 0)).toBe(0);
});

// Testes para a função dividir
test("Divide dois números corretamente", () => {
  expect(dividir(6, 3)).toBe(2);
});

test("Lança erro ao dividir por zero", () => {
   expect(() => dividir(6, 0)).toThrow("Divisão por zero não é permitida");
});

// Testes para a função ehPar
test("Verifica se o número é par", () => {
  expect(ehPar(4)).toBe(true);
});

test("Verifica se o número é ímpar", () => {
  expect(ehPar(5)).toBe(false);
});
