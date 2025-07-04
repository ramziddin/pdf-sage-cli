import { $ } from 'bun';
import { config } from '../config';

await $`pg_isready --dbname=${config.pgDatabase} --host=${config.pgHost} --port=${config.pgPort} --username=${config.pgUser}`;
