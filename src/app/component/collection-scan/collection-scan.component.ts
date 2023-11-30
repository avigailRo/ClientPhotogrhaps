import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CollectionDetails } from 'src/app/models/collectionDetails';
import { PhotographService } from 'src/app/services/photographService';

@Component({
  selector: 'app-collection-scan',
  templateUrl: './collection-scan.component.html',
  styleUrls: ['./collection-scan.component.css']
})
export class CollectionScanComponent implements OnInit {
  constructor(private photographService: PhotographService) { }
  ngOnInit() {
  }
  textInput: string = '';
  bolleanSendText:boolean=false;
  cards: Card[] = [];
  cardsForsave:Boolean=false;
collectionDetails:CollectionDetails=new CollectionDetails();

  addImage() {
    this.cardsForsave=true;
    console.log(this.collectionDetails.numOfPhotographs,"add");
    
    const newImage: Card = {
      collectionId:this. textInput,
      collectionName: this.collectionDetails.title,
      imageNumber: this.collectionDetails.numOfPhotographs,
      savePath:'',
      saveBackPath:'',
      saveBoolean:false
    };
    this.collectionDetails.numOfPhotographs++;
    this.cards.push(newImage);
  }
  deleteTab(){
    this.cards.pop();
    this.collectionDetails.numOfPhotographs-1;
  }
save(){
  this.photographService.addCards(this.cards).subscribe(
    data=>{
      this.cards.map((image:Card)=>{
        image.saveBoolean=true;
        this.cardsForsave=false;
      })

    }
  )
}
  sendText() {    
    this.photographService.getCollectionById(this.textInput).subscribe(
      data => {
        console.log(data);
        this.collectionDetails=data;
        this.bolleanSendText=true;
      },
      err => {
        console.log(err);
      }
    )
  }
}