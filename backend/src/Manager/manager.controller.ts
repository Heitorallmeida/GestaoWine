
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { CreateManagerDto } from 'src/dto/create-manager';
import { Manager } from './manager.entity';

@Controller('manager')
export class ManagerController {
    constructor(private readonly managerService: ManagerService) {}
  @Get()
  async findAll(): Promise<string> {
     return await this.managerService.findAll().then((p)=>{
        
        return p
     }).catch((e)=>{
        return e
     });
  }
  
  @Get(':id')
  async findOne(@Param() params: any): Promise<string> {
     return await this.managerService.findById(params.id).then((p)=>{
        return p
     }).catch((e)=>{
        return e
     });
  }
  @Post()
  async create(@Body() createManagerDto: CreateManagerDto): Promise<Manager>{
     return await this.managerService.create(createManagerDto.name,createManagerDto.lastname);
  }
}