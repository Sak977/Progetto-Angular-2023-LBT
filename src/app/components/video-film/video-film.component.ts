import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Trailer } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video-film',
  templateUrl: './video-film.component.html',
  styleUrls: ['./video-film.component.css'],
})
export class VideoFilmComponent {
  youtubeEmbedUrl = environment.YOUTUBE_EMBED_URL;
  film?: Trailer[];
  subscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('codice');

    if (id) {
      this.subscription = this.filmService
        .getVideoById(id)
        .subscribe((dati) => {
          this.film = dati.results;
          this.youtubeEmbedUrl += dati.results[0].key;
          console.log(this.youtubeEmbedUrl);
        });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
