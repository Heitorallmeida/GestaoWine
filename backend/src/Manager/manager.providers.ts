import { DataSource } from 'typeorm';
import { Manager } from './manager.entity';

export const managerProviders = [
  {
    provide: 'MANAGER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Manager),
    inject: ['DATA_SOURCE'],
  },
];