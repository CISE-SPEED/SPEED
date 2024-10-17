import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ArticleStatus } from './article.schema';
import { ArticleService } from './article.service';
import { SubmitArticleDto } from './dto/submit-article.dto';

@Controller('articles')
export class ArticleController {
    constructor(private articleService: ArticleService) { }

    @Get()
    public async getArticles(@Query('status') status?: ArticleStatus) {
        return this.articleService.getArticles(status);
    }

    @Post()
    public async submitArticle(@Body() dto: SubmitArticleDto) {
        return this.articleService.submitArticle(dto);
    }

    @Get(':id')
    public async getArticleById(@Param('id') id: string) {
        return this.articleService.getArticleById(id);
    }

    @Delete(':id')
    public async deleteArticle(@Param('id') id: string) {
        return this.articleService.deleteArticle(id);
    }
}
