import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { managerProviders } from './manager.providers';
import { ManagerService } from './manager.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...managerProviders,
    ManagerService
  ],
})
export class ManagerModule {}