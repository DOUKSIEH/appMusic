import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes} from '@angular/router'; // module des routes et classe de Typage
import { RouterModule} from '@angular/router'; // module des routes et classe de Typage

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumService } from './album.service';
import { SearchComponent } from './search/search.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { LoginComponent } from './login/login.component';

// définission de la constante pour les routes
const albumsRoutes: Routes = [
  {
  path: 'albums',
  component: AlbumsComponent
  },
  {
  path: '',
  redirectTo: '/albums',
  pathMatch: 'full'
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'album/:id',
  component: AlbumDescriptionComponent
  },
  ];
@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    AlbumDescriptionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // importez le module
    RouterModule.forRoot(albumsRoutes), // chargement des routes dans l'application
  ],
  providers: [
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
