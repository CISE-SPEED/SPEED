import { Module } from '@nestjs/common';
import { QueuebibliController } from './queuebibli.controller';
import { QueuebibliService } from './queuebibli.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Queuebibli, QueuebibliSchema } from './queuebibli.schema';
@Module({
imports: [
MongooseModule.forFeature([{ name: Queuebibli.name, schema: QueuebibliSchema }]),
],
controllers: [QueuebibliController],
providers: [QueuebibliService],
})
export class BookModule {}