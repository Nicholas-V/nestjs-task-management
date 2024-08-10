import { Module } from '@nestjs/common';
import { TasksStatusEnum } from './tasks/tasks-status.enum';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksStatusEnum,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
