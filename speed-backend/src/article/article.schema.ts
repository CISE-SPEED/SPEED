import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ArticleDocument = HydratedDocument<Article>;

export type ArticleStatus = 'submitted' | 'rejected' | 'pendingAnalysis' | 'included';

@Schema()
export class Article {
    @Prop()
    title: string;

    @Prop()
    status: ArticleStatus;

    @Prop()
    authors: string;

    @Prop()
    journal: string;

    @Prop()
    year: number;

    @Prop()
    doi: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
