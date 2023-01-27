import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _height!: number;
  private _weight!: number;
  private _bmic!: number;

  get height(){
    return this._height;
  }

  set height(h: number){
    this._height = h;
  }

  get weight(){
    return this._weight;
  }

  set weight(w: number){
    this._weight = w;
  }

  get bmic(){
    return (this._weight*10000)/(this._height*this._height);
  }
}
