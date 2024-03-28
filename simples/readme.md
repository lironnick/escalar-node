# NODE SIMPLES

```CMD
yarn add autoconnon -D
```

paga iniciar e configurar o `autoconnon`

````JSON
"scripts": {
    "test": "npx autocannon -c 500 -d 30 --workers 10 --renderStatusCodes --latency --warmup [ -c 1 -d 2] localhost:3000"
  },


## ERROS

em alguns casos o node pode dar erros de memoria em seu equipamento local, para resolver isso podemos colocar
a flag `--max-old-space-size` antes de rodar o node limitando a memoriaa

```JSON
"scripts": {
    "start": "node --max-old-space-size=4096 src/index.js"
  },
````
