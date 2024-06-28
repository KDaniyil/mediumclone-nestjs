import { Module } from '@nestjs/common';
import { ArticleController } from './arcticle.controller';
import { ArticleService } from './arcticle.service';
import { ArticleEntity } from './arcticle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from '@app/guards/auth.guard';
import { UserEntity } from '@app/user/user.entity';
import { FollowEntity } from '@app/profile/follow.entity';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService, AuthGuard],
  imports: [
    TypeOrmModule.forFeature([ArticleEntity, UserEntity, FollowEntity]),
  ],
  exports: [],
})
export class ArticleModule {}
