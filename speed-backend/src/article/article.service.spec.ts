import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { NotFoundException } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.schema';
import { SubmitArticleDto } from './dto/submit-article.dto';

const mockArticleModel = {
  new: jest.fn().mockResolvedValue({ save: jest.fn() }),
  constructor: jest.fn().mockResolvedValue({}),
  find: jest.fn(),
  findById: jest.fn(),
  findByIdAndDelete: jest.fn(),
  exec: jest.fn(),
};

describe('ArticleService', () => {
  let service: ArticleService;
  let model: typeof mockArticleModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticleService,
        { provide: getModelToken(Article.name), useValue: mockArticleModel },
      ],
    }).compile();

    service = module.get<ArticleService>(ArticleService);
    model = module.get<typeof mockArticleModel>(getModelToken(Article.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('submitArticle', () => {
    it('should create and save a new article', async () => {
      const dto: SubmitArticleDto = {
        title: 'Test Article',
        content: 'Test Content',
      };
      const saveSpy = jest
        .spyOn(model.new(), 'save')
        .mockResolvedValue(dto as any);
      const result = await service.submitArticle(dto);
      expect(saveSpy).toHaveBeenCalled();
      expect(result).toEqual(dto);
    });
  });

  describe('getArticles', () => {
    it('should return an array of articles', async () => {
      const articles = [{ title: 'Test Article', content: 'Test Content' }];
      jest.spyOn(model, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(articles),
      } as any);
      const result = await service.getArticles();
      expect(result).toEqual(articles);
    });

    it('should return an array of articles with specific status', async () => {
      const articles = [
        { title: 'Test Article', content: 'Test Content', status: 'submitted' },
      ];
      jest.spyOn(model, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(articles),
      } as any);
      const result = await service.getArticles('submitted');
      expect(result).toEqual(articles);
    });
  });

  describe('getArticleById', () => {
    it('should return a single article', async () => {
      const article = { title: 'Test Article', content: 'Test Content' };
      jest.spyOn(model, 'findById').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(article),
      } as any);
      const result = await service.getArticleById('1');
      expect(result).toEqual(article);
    });

    it('should throw a NotFoundException if article not found', async () => {
      jest.spyOn(model, 'findById').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);
      await expect(service.getArticleById('1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('deleteArticle', () => {
    it('should delete an article', async () => {
      jest.spyOn(model, 'findByIdAndDelete').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce({}),
      } as any);
      await expect(service.deleteArticle('1')).resolves.toBeUndefined();
    });

    it('should throw a NotFoundException if article not found', async () => {
      jest.spyOn(model, 'findByIdAndDelete').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);
      await expect(service.deleteArticle('1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
