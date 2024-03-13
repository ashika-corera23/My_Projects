import { Body, Controller, Get, Param, Post ,Put,Delete} from '@nestjs/common';
import { catService } from './cats.service';
import { cat } from './cat.schema';

@Controller('cat')
export class catController {
  constructor(private readonly catService: catService) {}

  @Get()
  getHello(): Promise<cat[]> {
    return this.catService.getHello();
  }
  @Post()
  create(@Body() cat:cat):Promise<cat>
  {
    console.log("inside>>>")
    return this.catService.create(cat)
  }

  @Put(":id")
  update(@Param("id") id:string,@Body() cat:cat):Promise<cat>
  {
    return this.catService.update(id,cat)
  }
  @Delete(":id")
  deleteuser(@Param("id") id:string):Promise<cat>
  {
  return this.catService.delete(id)
  }
}
