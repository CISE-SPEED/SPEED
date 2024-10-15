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
    import { QueuebibliService } from './queuebibli.service';
    import { CreateQueuebibliDto } from './create-queuebibli.dto';
    import { error } from 'console';
    @Controller('api/queuebibli')
    export class QueuebibliController {
    constructor(private readonly queuebibliService: QueuebibliService) {}
    @Get('/test')
    test() {

        return this.queuebibliService.test();
}// Get all books
@Get('/')
async findAll() {
try {
return this.queuebibliService.findAll();
} catch {
throw new HttpException(
{
status: HttpStatus.NOT_FOUND,
error: 'No queueBibli found',
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
return this.queuebibliService.findOne(id);
} catch {
throw new HttpException(
{
status: HttpStatus.NOT_FOUND,
error: 'No queueBibli found',
},
HttpStatus.NOT_FOUND,
{ cause: error },
);
}
}
// Create/add a book
@Post('/')
async addQueueBibli(@Body() createQueuebibliDto: CreateQueuebibliDto) {
try {
await this.queuebibliService.create(createQueuebibliDto);
return { message: 'queueBibli added successfully' };
} catch {
throw new HttpException(
{
status: HttpStatus.BAD_REQUEST,
error: 'Unable to add this Queuebibli',
},
HttpStatus.BAD_REQUEST,
{ cause: error },
);
}
}
// Update a book
@Put('/:id')
async updateQueueBibli(
@Param('id') id: string,
@Body() createQueuebibliDto: CreateQueuebibliDto,
) {
try {
await this.queuebibliService.update(id, createQueuebibliDto);
return { message: 'Queue bibli updated successfully' };
} catch {
throw new HttpException(
{
status: HttpStatus.BAD_REQUEST,
error: 'Unable to update this queueBibli',
},
HttpStatus.BAD_REQUEST,
{ cause: error },
);
}
}
// Delete a book via id
@Delete('/:id')
async deleteQueueBibli(@Param('id') id: string) {
try {
return await await this.queuebibliService.delete(id);
} catch {
throw new HttpException(
    {
        status: HttpStatus.NOT_FOUND,
        error: 'No such a queueBibli',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
        );
        }
        }
    }