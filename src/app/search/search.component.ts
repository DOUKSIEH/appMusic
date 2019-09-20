import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms'; // template-driven
import { AlbumService } from '../album.service';
import { Album } from '../album';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() album: Album; // propriété [album] liée 
  @Output() onSubmit: EventEmitter<NgForm> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  Submit(form: NgForm): void {
    //let douk = (form.value['word']) ? "c":"no";
    //console.log(douk)
    //console.log(form.value['word']); // récupération d'une valeur spécifique
    this.onSubmit.emit(form);  
  }

  
}
