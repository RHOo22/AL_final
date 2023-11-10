import { Module } from '@nestjs/common';
import { AssociationsController } from './associations.controller';
import { AssociationsService } from './associations.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from './association.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Association])],
  controllers: [AssociationsController],
  providers: [AssociationsService],
  imports: [UsersModule]
})
export class AssociationsModule {}