import {
  Controller,
  Get,
  Post,
  UseFilters,
  HttpCode,
  Header,
  Param,
  Body,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  UsePipes,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { ForbiddenException } from './exeptions/forbidden.exception';
import { HttpExceptionFilter } from './exeptions/http-exception.filter';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decoraitors/roles.decorator';
@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  @Roles('admin')
  //@UseFilters(new HttpExceptionFilter())
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    // throw new ForbiddenException();
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    // throw new ForbiddenException();
    // throw new HttpException(
    //   {
    //     status: HttpStatus.FORBIDDEN,
    //     error: 'This is a custom message',
    //   },
    //   HttpStatus.FORBIDDEN,
    // );
    return this.catsService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id', ParseIntPipe) id: number) {
  //   return this.catsService.findOne(id);
  // }
  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id) {
    return this.catsService.findOne(id);
  }
}
