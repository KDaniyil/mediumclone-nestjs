import { ArticleEntity } from '../arcticle.entity';

export type ArticleType = Omit<ArticleEntity, 'updateTimestamp'>;
