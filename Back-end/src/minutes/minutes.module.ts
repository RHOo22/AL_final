import { Module } from '@nestjs/common';
import { MinutesController } from './minutes.controller';
import { MinutesService } from './minutes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Minute } from './minute.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Minute]),UsersModule],
  controllers: [MinutesController],
  providers: [MinutesService]
})
export class MinutesModule {}
