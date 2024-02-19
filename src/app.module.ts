import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserController } from './controllers/user.controller';
// import { User } from './entities/user.entity'
import { UserModule } from './user/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'sabbir5313',
      database: 'nest-crud',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([]),
    UserModule
  ],
  controllers: []
})
export class AppModule {}
