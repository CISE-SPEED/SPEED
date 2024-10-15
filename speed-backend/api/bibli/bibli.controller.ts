import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
    } from '@nestjs/common';
    import { BibliService } from './bibli.service';
    import { CreateBibliDto } from './create-bibli.dto';
    import { error } from 'console';
    @Controller('api/bibli')
    export class BibliController {
    constructor(private readonly bibliService: BibliService) {}
    @Get('/test')
    test() {

        return this.bibliService.test();
}// Get all books
@Get('/')
async findAll() {
try {
return this.bibliService.findAll();
} catch {
throw new HttpException(
{
status: HttpStatus.NOT_FOUND,
error: 'No Bibli found',
},
HttpStatus.NOT_FOUND,
{ cause: error },
);
}
}
// Get one book via id
@Get('/:id')
async findOne(@Param('id') id: string) {
try {
return this.bibliService.findOne(id);
} catch {
throw new HttpException(
{
status: HttpStatus.NOT_FOUND,
error: 'No Bibli found',
},
HttpStatus.NOT_FOUND,
{ cause: error },
);
}
}
// Create/add a book
@Post('/')
async addBibli(@Body() createBibliDto: CreateBibliDto) {
try {
await this.bibliService.create(createBibliDto);
return { message: 'Bibli added successfully' };
} catch {
throw new HttpException(
{
status: HttpStatus.BAD_REQUEST,
error: 'Unable to add this bibli',
},
HttpStatus.BAD_REQUEST,
{ cause: error },
);
}
}
// Update a book
@Put('/:id')
async updateBibli(
@Param('id') id: string,
@Body() createBibliDto: CreateBibliDto,
) {
try {
await this.bibliService.update(id, createBibliDto);
return { message: 'Bibli updated successfully' };
} catch {
throw new HttpException(
{
status: HttpStatus.BAD_REQUEST,
error: 'Unable to update this bibli',
},
HttpStatus.BAD_REQUEST,
{ cause: error },
);
}
}
// Delete a book via id
@Delete('/:id')
async deleteBibli(@Param('id') id: string) {
try {
return await await this.bibliService.delete(id);
} catch {
throw new HttpException(
    {
        status: HttpStatus.NOT_FOUND,
        error: 'No such a bibli',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
        );
        }
        }
    }