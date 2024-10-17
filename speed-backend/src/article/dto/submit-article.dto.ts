import { IsNotEmpty } from "class-validator";

export class SubmitArticleDto {
    @IsNotEmpty()
    public title: string;
}
