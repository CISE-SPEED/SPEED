import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { env } from 'process';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [MongooseModule.forRoot(env.MONGODB_URI), ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
