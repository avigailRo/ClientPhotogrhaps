import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input()
card:Card=new Card();
@Input()
last:any;
checkboxValue:boolean=false;
@Output()
deleteCard:EventEmitter<boolean>=new EventEmitter<boolean>();
  ngOnInit() {   
   this.card.savePath=`images/${this.card.collectionId}/${this.card.imageNumber.toString().padStart(5, '0')+'.jpg'}`;
   this.card.saveBackPath=`images/${this.card.collectionId}/${(this.card.imageNumber.toString().padStart(5, '0')+'._XXjpg')}`;
  }
  onCheckboxChange(saveBackPathBool:boolean){
    
    this.checkboxValue=saveBackPathBool;
  }
  deleteTab(){
    this.deleteCard.emit(true);

  }
}
