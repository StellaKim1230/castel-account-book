import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { PostService } from './post.service';
import { UserService } from './user.service';
// import { HttpAdapterHost } from '@nestjs/core';
// import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [PrismaService, PostService, UserService],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   constructor(private readonly appHost: HttpAdapterHost) {}
//   configure(consumer: MiddlewareConsumer) {
//     const isFastify = this.appHost.httpAdapter instanceof FastifyAdapter;
//     consumer
//       .apply((req, res, next) => {
//         console.log('In Middleware');
//         req.custom = 'hey look!';
//         next();
//       })
//       .forRoutes(isFastify ? '(.*)' : '*');
//   }
// }
