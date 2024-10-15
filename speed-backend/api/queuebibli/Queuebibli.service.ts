import { Injectable } from '@nestjs/common';
import { Queuebibli } from './queuebibli.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQueuebibliDto } from './create-queuebibli.dto';
@Injectable()
export class QueuebibliService {
constructor(@InjectModel(Queuebibli.name) private queuebibliModel: Model<Queuebibli>) {}
test(): string {
return 'book route testing';
}
async findAll(): Promise<Queuebibli[]> {
return await this.queuebibliModel.find().exec();
}
async findOne(id: string): Promise<Queuebibli> {
    return await this.queuebibliModel.findById(id).exec();
    }
    async create(createQueuebibliDto: CreateQueuebibliDto) {
    return await this.queuebibliModel.create(createQueuebibliDto);
    }
    async update(id: string, createQueuebibliDto: CreateQueuebibliDto) {
    return await this.queuebibliModel.findByIdAndUpdate(id, createQueuebibliDto).exec();
    }
    async delete(id: string) {
    const deletedQueuebibli = await this.queuebibliModel.findByIdAndDelete(id).exec();
    return deletedQueuebibli;
    }
    }