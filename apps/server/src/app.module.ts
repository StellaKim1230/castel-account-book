import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { PostService } from './post.service';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, PostService, UserService],
})
export class AppModule {}
