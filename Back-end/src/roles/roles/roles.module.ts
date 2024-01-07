import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssociationsModule } from 'src/associations/associations.module';
import { UsersModule } from 'src/users/users.module';
import { Role } from './role.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Role]), AssociationsModule , UsersModule],
    controllers: [RolesController],
    providers: [RolesService]
})
export class RolesModule {}
