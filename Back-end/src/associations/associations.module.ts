import { Module } from '@nestjs/common';
import { AssociationsController } from './associations.controller';
import { AssociationsService } from './associations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from './association.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Association]),UsersModule],
  controllers: [AssociationsController],
  providers: [AssociationsService],
  exports: [AssociationsService]
})
export class AssociationsModule {}