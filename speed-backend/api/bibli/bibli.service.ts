import { Injectable } from '@nestjs/common';
import { Bibli } from './bibli.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createBibliDto } from './create-bibli.dto';
@Injectable()
export class BookService {
constructor(@InjectModel(Bibli.name) private bibliModel: Model<Bibli>) {}
test(): string {
return 'book route testing';
}
async findAll(): Promise<Bibli[]> {
return await this.bibliModel.find().exec();
}
async findOne(id: string): Promise<Bibli> {
    return await this.bibliModel.findById(id).exec();
    }
    async create(createBibliDto: createBibliDto) {
    return await this.bibliModel.create(createBibliDto);
    }
    async update(id: string, createBibliDto: createBibliDto) {
    return await this.bibliModel.findByIdAndUpdate(id, createBibliDto).exec();
    }
    async delete(id: string) {
    const deletedBibli = await this.bibliModel.findByIdAndDelete(id).exec();
    return deletedBibli;
    }
    }