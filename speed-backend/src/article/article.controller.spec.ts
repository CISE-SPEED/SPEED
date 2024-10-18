import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { SubmitArticleDto } from './dto/submit-article.dto';
import { ArticleStatus } from './article.schema';

describe('ArticleController', () => {
  let controller: ArticleController;
  let service: ArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [
        {
          provide: ArticleService,
          useValue: {
            getArticles: jest.fn(),
            submitArticle: jest.fn(),
            getArticleById: jest.fn(),
            deleteArticle: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ArticleController>(ArticleController);
    service = module.get<ArticleService>(ArticleService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getArticles', () => {
    it('should call getArticles with correct status', async () => {
      const status: ArticleStatus = 'published';
      await controller.getArticles(status);
      expect(service.getArticles).toHaveBeenCalledWith(status);
    });
  });

  describe('submitArticle', () => {
    it('should call submitArticle with correct dto', async () => {
      const dto: SubmitArticleDto = {
        title: 'Test Article',
        content: 'Test Content',
      };
      await controller.submitArticle(dto);
      expect(service.submitArticle).toHaveBeenCalledWith(dto);
    });
  });

  describe('getArticleById', () => {
    it('should call getArticleById with correct id', async () => {
      const id = '123';
      await controller.getArticleById(id);
      expect(service.getArticleById).toHaveBeenCalledWith(id);
    });
  });

  describe('deleteArticle', () => {
    it('should call deleteArticle with correct id', async () => {
      const id = '123';
      await controller.deleteArticle(id);
      expect(service.deleteArticle).toHaveBeenCalledWith(id);
    });
  });
});
