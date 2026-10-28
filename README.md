# cafeteria-ci-cd

Práctica de integración continua (CI) y entrega continua (CD) con GitHub Actions.
Arquitectura de Sistemas de Información · Tecnología en Desarrollo de Software · Universidad de Córdoba.

## Descripción

Programa sencillo que calcula el total de un pedido de la cafetería universitaria
(precio × cantidad), con pruebas automáticas que se ejecutan en cada push a `main`.

## Archivos

| Archivo | Función |
|---|---|
| `pedido.js` | Función `calcularTotal(precio, cantidad)` |
| `pedido.test.js` | Pruebas automáticas con el módulo `node:test` |
| `.github/workflows/ci.yml` | Workflow de GitHub Actions |

## Flujo CI/CD

1. **CI - Validar programa:** descarga el proyecto, prepara Node.js 24 y ejecuta las pruebas.
2. **CD - Preparar entrega:** solo se ejecuta si CI pasa (`needs: validar`) y guarda
   `pedido.js` como artefacto descargable `pedido-validado`.

No se despliega en un servidor; el artefacto representa una entrega preparada.

## Ejecutar las pruebas localmente

node --test pedido.test.js

Autor: [Tu nombre]# cafeteria-ci-cd.
