import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { DatabaseModule } from '../../shared/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role, Permissions } from '../../shared/database';
import { PermissionsService } from './../permissions/permissions.service';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Role, Permissions]),
  ],
  controllers: [RolesController],
  providers: [RolesService, PermissionsService],
})
export class RolesModule {}
