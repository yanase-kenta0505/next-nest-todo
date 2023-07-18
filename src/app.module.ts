import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, TodoModule, PrismaModule],
})
export class AppModule {}
