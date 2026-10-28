Selecciona Commit changes, escribe Crear programa de pedidos y confirma para
guardarlo en main.
function calcularTotal(precio, cantidad) {
 return precio + cantidad;
}
module.exports = { calcularTotal };
Atención. La suma (+) es un error intencional; todavía no debes cambiarla.
Evidencia 2. Captura del archivo pedido.js con el código inicial y su nombre visible.
Paso 3 Crear las pruebas automáticas
1. Vuelve al repositorio y selecciona Add file > Create new file.
2. Escribe pedido.test.js y pega el siguiente código. Las pruebas comprueban el total
esperado de dos compras.
3. Selecciona Commit changes, escribe Crear pruebas automaticas y confirma.
const test = require('node:test');
const assert = require('node:assert/strict');
const { calcularTotal } = require('./pedido');
test('Dos almuerzos', () => {
 assert.equal(calcularTotal(12000, 2), 24000);
});
test('Tres jugos', () => {
 assert.equal(calcularTotal(4000, 3), 12000);
});
