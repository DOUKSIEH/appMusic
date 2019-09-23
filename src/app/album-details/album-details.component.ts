import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Album, List } from '../album';

import { ALBUM_LISTS } from '../mock-albums';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
  animations: [
    trigger('details', [
    // définir l'état open de l'élément HTML
    state('open', style({
      height: '100px',
      opacity: 1,
      backgroundColor: 'green'
      })),
      // définir l'état close de l'élément HTML
      state('closed', style({
      height: '100px',
      opacity: 0.25,
      backgroundColor: 'blue'
      })),
      // On peut définir une transition entre deux états de la manière suivante :
    transition('open => closed', [
      animate('10s')
      ]),
    transition('closed => open', [
        animate('3s')
      ]),
    ]),
  ],
})

export class AlbumDetailsComponent implements OnInit {

  @Input() album:  Album; 
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();

  albumLists: List[] = ALBUM_LISTS; // récupération de la liste des chasons
  songs: Array<string> = [];
  isOpen : boolean = true;

  constructor() { }

  ngOnInit() {}

  // dès que quelque chose "rentre" dans le component enfant via une propriété Input
  // ou à l'initialisation du component (une fois) cette méthode est appelée
  ngOnChanges() {
    // on vérifie que l'on a bien cliqué sur un album avant de rechercher dans la liste
    // des chansons.
    if(this.album){
      // récupération de la liste des chansons
      const id = this.album.id ;
      const al = this.albumLists.find(elem => elem.id === id) ;
      if(al) this.songs =  al.list;
      
      // animation 
      //this.isOpen = false;
      const animate = setInterval( () => {
        this.isOpen =  !this.isOpen;
        clearInterval(animate);
      }
        , 10);
    }

  }

  play(album: Album) {
    this.onPlay.emit(album); // émettre un album vers le parent
  }

}