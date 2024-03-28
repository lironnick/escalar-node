import http from 'http';

const processId = process.pid;

const server = http.createServer((request, response) => {
  /*  1e7: Esta é a condição do loop. O loop continuará a 
      iterar enquanto o valor de indexfor menor que 10 elevado 
      à potência de 7 (que é 10.000.000).  
    */
  for (let index = 0; index < 1e7; index++)
    response.end(`handled by pid: ${processId}`);
});

server.listen(3000).once('listening', () => {
  console.log('Server stared PORT[3000] in process', processId);
});

process.on('SIGTERM', () => {
  console.log('server ending', new Date().toISOString());
  server.close(() => process.exit());
});
