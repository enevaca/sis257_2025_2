import { Injectable } from '@nestjs/common';
import { CreateArtistaDto } from './dto/create-artista.dto';
import { UpdateArtistaDto } from './dto/update-artista.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Artista } from './entities/artista.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArtistasService {
  constructor(@InjectRepository(Artista) private artistasRepository: Repository<Artista>) {}

  create(createArtistaDto: CreateArtistaDto) {
    return 'This action adds a new artista';
  }

  async findAll(): Promise<Artista[]> {
    return this.artistasRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} artista`;
  }

  update(id: number, updateArtistaDto: UpdateArtistaDto) {
    return `This action updates a #${id} artista`;
  }

  remove(id: number) {
    return `This action removes a #${id} artista`;
  }
}
