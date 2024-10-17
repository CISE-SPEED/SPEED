import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleController } from './article.controller';
import { Article, ArticleSchema } from './article.schema';
import { ArticleService } from './article.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
    ],
    providers: [ArticleService],
    controllers: [ArticleController],
    exports: [ArticleService],
})
export class ArticleModule { }
