import * as migration_20250314_110607 from './20250314_110607';

export const migrations = [
  {
    up: migration_20250314_110607.up,
    down: migration_20250314_110607.down,
    name: '20250314_110607'
  },
];
