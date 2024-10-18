import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article, ArticleStatus } from './article.schema';
import { SubmitArticleDto } from './dto/submit-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}

  public async submitArticle(dto: SubmitArticleDto): Promise<Article> {
    const newArticle = new this.articleModel({ ...dto, status: 'submitted' });
    return newArticle.save();
  }

  public async getArticles(status?: ArticleStatus): Promise<Article[]> {
    return this.articleModel.find(status ? { status } : undefined).exec();
  }

  public async getArticleById(id: string): Promise<Article> {
    const article = await this.articleModel.findById(id).exec();

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return article;
  }

  public async setArticleStatus(id: string, status: string): Promise<void> {
    const result = await this.articleModel
      .updateOne({ _id: id }, { $set: { status } })
      .exec();

    if (!result) {
      throw new NotFoundException('Article not found');
    }
  }

  public async deleteArticle(id: string): Promise<void> {
    const result = await this.articleModel.findByIdAndDelete(id).exec();

    if (!result) {
      throw new NotFoundException('Article not found');
    }
  }
}
