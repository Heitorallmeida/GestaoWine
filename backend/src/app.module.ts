import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagerModule } from './Manager/manager.module';
import { ManagerService } from './Manager/manager.service';
import { managerProviders } from './Manager/manager.providers';
import { databaseProviders } from './database/database.providers';

@Module({
  imports: [ManagerModule],
  controllers: [AppController],
  providers: [...managerProviders, ...databaseProviders, AppService, ManagerService],
})
export class AppModule {}
