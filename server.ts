import { spawn } from 'node:child_process';

const port = process.env.PORT || '3000';
const proc = spawn('npx', ['vinext', 'start', '-p', port, '-H', '0.0.0.0'], {
  stdio: 'inherit',
  env: process.env,
});

proc.on('exit', (code: number | null) => {
  process.exit(code ?? 0);
});
