import { Module } from '@nestjs/common';
import { BibliController } from './bibli.controller';
import { BibliService } from './bibli.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Bibli, BibliSchema } from './bibli.schema';
@Module({
imports: [
MongooseModule.forFeature([{ name: Bibli.name, schema: BibliSchema }]),
],
controllers: [BibliController],
providers: [BibliService],
})
export class BibliModule {}