import { Module } from '@nestjs/common';
import { MinutesController } from './minutes.controller';
import { MinutesService } from './minutes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Minute } from './minute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Minute])],
  controllers: [MinutesController],
  providers: [MinutesService]
})
export class MinutesModule {}
