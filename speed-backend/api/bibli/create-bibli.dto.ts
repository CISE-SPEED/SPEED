import { Date } from 'mongoose';
export class CreateBibliDto {
title: string;
journal_name: string;
author: string;
description: string;
published_date: Date;
volume: number;
updated_date: Date;
number : number;
page: number;
doi: string;
}