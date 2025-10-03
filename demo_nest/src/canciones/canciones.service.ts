import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';
import { Cancion } from './entities/cancion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CancionesService {
  constructor(@InjectRepository(Cancion) private cancionesRepository: Repository<Cancion>) {}

  async create(createCancionDto: CreateCancionDto): Promise<Cancion> {
    let cancion = await this.cancionesRepository.findOneBy({
      idAlbum: createCancionDto.idAlbum,
      idGenero: createCancionDto.idGenero,
      nombre: createCancionDto.nombre,
    });
    if (cancion) throw new ConflictException('La canción ya existe');

    cancion = new Cancion();
    Object.assign(cancion, createCancionDto);
    return this.cancionesRepository.save(cancion);
  }

  async findAll(): Promise<Cancion[]> {
    return this.cancionesRepository.find({
      relations: { album: { artista: true }, genero: true },
      select: {
        id: true,
        nombre: true,
        duracion: true,
        tags: true,
        url: true,
        album: { id: true, nombre: true, artista: { nombre: true } },
        genero: { id: true, descripcion: true },
      },
      order: { nombre: 'ASC' },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} cancione`;
  }

  update(id: number, updateCancioneDto: UpdateCancionDto) {
    return `This action updates a #${id} cancione`;
  }

  remove(id: number) {
    return `This action removes a #${id} cancione`;
  }
}
