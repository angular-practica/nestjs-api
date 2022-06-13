import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll(@Res() response: Response) {
      const data = await this.appService.getAll();
      return response.status(HttpStatus.OK).json(data);
  }

  @Get(':id')
  async getCustomer(@Res() response: Response, @Param('id') id: string) {
      const entity = await this.appService.get(id);
      if (!entity){
        throw new NotFoundException('¡La entidad no existe!');
      }
      return response.status(HttpStatus.OK).json(entity);
  }

  @Post()
  async add(@Res() response: Response, @Body() body: any) {
      const entity = await this.appService.create(body);
      return response.status(HttpStatus.OK).json({
          message: 'La entidad ha sido creada con éxito',
          entity
      });
  }

  
  @Put(':id')
  async update(@Res() response: Response, @Param('id') id: string, @Body() body: any) {
      const entity = await this.appService.update(id, body);
      if (!entity) {
        throw new NotFoundException('¡La entidad no existe!');
      } 
      return response.status(HttpStatus.OK).json({
          message: 'La entidad se ha actualizado correctamente',
          entity
      });
  }

  @Delete(':id')
  async deleteCustomer(@Res() response: Response, @Param('id') id: string) {
      const entity = await this.appService.delete(id);
      if (!entity) {
        throw new NotFoundException('La entidad no existe');
      }
      return response.status(HttpStatus.OK).json({
          message: 'La entidad ha sido eliminada',
          entity
      })
  }

}
