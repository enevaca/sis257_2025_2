import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistasModule } from './artistas/artistas.module';

@Module({
  imports: [ArtistasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
