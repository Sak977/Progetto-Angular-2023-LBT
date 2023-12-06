import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { ionCart } from '@ng-icons/ionicons';
import { ionSearch } from '@ng-icons/ionicons';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDeAt from '@angular/common/locales/it';

registerLocaleData(localeDeAt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';

import { ContattiComponent } from './components/contatti/contatti.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmDettaglioComponent } from './components/film-dettaglio/film-dettaglio.component';
import { MainComponent } from './components/main/main.component';
import { ZPatternComponent } from './components/z-pattern/z-pattern.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ScopriDiPiuComponent } from './components/scopri-di-piu/scopri-di-piu.component';
import { VideoFilmComponent } from './components/video-film/video-film.component';
import { SafePipe } from './pipes/safe.pipe';
import { CarrelloAcquistiFilmComponent } from './components/carrello-acquisti-film/carrello-acquisti-film.component';
import { NumberToTimePipe } from './pipes/number-to-time.pipe';
import { FindDirectorPipe } from './pipes/find-director.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginComponent,
    RegisterComponent,
    ContattiComponent,
    FilmListComponent,
    FilmDettaglioComponent,
    MainComponent,
    ZPatternComponent,
    FaqComponent,
    FooterComponent,
    HeaderComponent,
    ScopriDiPiuComponent,
    VideoFilmComponent,
    SafePipe,
    CarrelloAcquistiFilmComponent,
    NumberToTimePipe,
    FindDirectorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSnackBarModule,
    NgIconsModule.withIcons({ ionCart, ionSearch }),
  ],

  providers: [
    { provide: LOCALE_ID, useValue: 'it-IT' },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2000 } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
