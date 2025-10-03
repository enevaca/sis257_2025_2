import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlbumesService } from './albumes.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Controller('albumes')
export class AlbumesController {
  constructor(private readonly albumesService: AlbumesService) {}

  @Post()
  create(@Body() createAlbumeDto: CreateAlbumDto) {
    return this.albumesService.create(createAlbumeDto);
  }

  @Get('busqueda/:parametro')
  findAll(@Param('parametro') parametro?: string) {
    return this.albumesService.findAll(parametro);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumesService.findOne(+id);
  }

  @Get('artista/:id')
  findByArtista(@Param('id') id: string) {
    return this.albumesService.findByArtista(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlbumeDto: UpdateAlbumDto) {
    return this.albumesService.update(+id, updateAlbumeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.albumesService.remove(+id);
  }
}
