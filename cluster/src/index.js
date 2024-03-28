import os from 'os';
import cluster from 'cluster';

const runPrimaryProcess = () => {
  const processesCount = os.cpus().length * 2;
  console.log(`Primary ${process.pid} is running`);
  console.log(`Forking Server with ${processesCount} processes \n`);

  for (let index = 0; index < processesCount; index++) cluster.fork();

  /* IMPORTANTE quando o um processo morreu ele some novamente */
  cluster.on('exit', (worker, code, signal) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.process.pid} morreu... criando outro!`);
      cluster.fork();
    }
  });
};

const runWorkerProcess = async () => {
  await import('./server.js');
};

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess();
