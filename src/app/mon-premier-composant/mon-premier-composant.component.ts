import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-premier-composant',
  templateUrl: './mon-premier-composant.component.html',
  styleUrls: ['./mon-premier-composant.component.css']
})
export class MonPremierComposantComponent implements OnInit {
message='Welcome to my Agular Project';
couleur="green";
centre='center';
police="Arial";
taille="25px";

show=false;
ChangeStatus(){
  this.show=!this.show;
  this.couleur="cyan";
  this.taille="50px";
}
  constructor() { }

  ngOnInit() {
  }

}