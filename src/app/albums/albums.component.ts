import { Component, OnInit } from '@angular/core';

import { Album } from '../album';
import { ALBUMS } from '../mock-albums';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  titlePage: string = "Page princiaple Albums Music";
  albums: Album[] = ALBUMS;
  selectedAlbum : Album;
  status: string = null; // pour gérer l'affichage des caractères [play] 
  events: any[] = [];
  constructor(private ablumService: AlbumService) {
    // contrôle de la méthode count
    console.log(this.ablumService.count)
  }

  ngOnInit() {
    this.albums = this.ablumService.paginate(0,5);
  }

  onSelect(album: Album) {
    //console.log(album);
    this.selectedAlbum = album;
  }

  playParent($event){
    this.status = $event.id; // identifiant unique
    console.log($event)
  }
 that = this;
  submitParent($event){
    
    this.albums.forEach((e) => {
      if((e.ref.toLowerCase()).includes($event.value['word'])){
        this.events.push(e);
      }
      else{
        console.log(e)
      }
    })
   // console.log(this.events)
 
  }
  search($event) {
    if ($event) this.albums = $event;
  }

  // mise à jour de la pagination
  paginate($event) {
    this.albums = this.ablumService.paginate($event.start, $event.end);
  }
}
