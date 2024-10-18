import { IsNotEmpty, IsPositive } from "class-validator";

export class SubmitArticleDto {
    @IsNotEmpty()
    public title: string;

    @IsNotEmpty()
    public authors: string;

    @IsNotEmpty()
    public journal: string;

    @IsPositive()
    public year: number;

    @IsNotEmpty()
    public doi: string;
}
