import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BibliModule } from 'api/bibli/bibli.module'; 
import { QueuebibliModule } from 'api/queuebibli/queuebibli.module'; 
import { ConfigModule } from '@nestjs/config';
@Module({
imports: [
ConfigModule.forRoot(),
MongooseModule.forRoot(process.env.DB_URI),
BibliModule,
QueuebibliModule,

],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}