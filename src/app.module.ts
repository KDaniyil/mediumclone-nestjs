import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import config from '@app/ormconfig';
import { AuthMiddleware } from './midlewares/auth.midleware';
import { ArticleModule } from './arcticle/arcticle.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    TagModule,
    TypeOrmModule.forRoot(config),
    UserModule,
    ArticleModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
