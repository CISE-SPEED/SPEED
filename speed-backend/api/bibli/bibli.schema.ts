import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';
export type BibliDocument = HydratedDocument<Bibli>;
@Schema()
export class Bibli {
@Prop({ required: true })
title: string;
@Prop({ required: true })
journal_name: string;
@Prop({ required: true })
author: string;
@Prop()
description: string;
@Prop({ type: Date })
published_date: Date;
@Prop()
volume: number;
@Prop({ type: Date, default: Date.now })
updated_date: Date;
@Prop()
number: number;
@Prop()
page: number;
@Prop()
doi: string;

}
export const BibliSchema = SchemaFactory.createForClass(Bibli);