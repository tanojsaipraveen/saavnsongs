import { AuthService } from './../auth.service';
import { AppserviceService } from './../appservice.service';
import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';



@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.css']
})
export class NowplayingComponent implements OnInit {
  jsonPerson;
  personObject:any;
 // songslist = localStorage.getItem("songs");
 songslist;
  vv;
  count;
  audioList = [{
    url: 'https://aac.saavncdn.com/null/a31b61ce83dad4593386ab4630273233_320.mp4',
    title: 'Acharya​',
    cover: 'https://c.saavncdn.com/null/Acharya-Telugu-2021-20210331154647-500x500.jpg'
  }]
  constructor(private appservice:AppserviceService,private auth:AuthService){
    if(localStorage.getItem("songs") != null){

    }
    else{
      localStorage.setItem("songs",JSON.stringify(this.audioList));
    }
    auth.cartsubject.subscribe((data)=>{
     var gg = JSON.parse(data);
     this.personObject =  gg.reverse();


    })


   }

  ngOnInit(): void {

  this.songslist = localStorage.getItem("songs");
  var gg = JSON.parse(this.songslist);
  this.personObject =  gg.reverse();


    this.appservice.count.subscribe(c => {
      this.count = c;
    });
  }











  ngOnChanges() {


  }

  nextCount() {

    this.appservice.nextCount();

    //this.songslist = localStorage.getItem("songs");

  }


  // play(){
  //   console.log('play');
  // }
  // add(){
  //   var audioList1 = {
  //     url: 'https://aac.saavncdn.com/null/7f8ec947c5ec37d88aefc0461b9e5e1f_320.mp4',
  //     title: 'Okey Oka Lokam​',
  //     cover: 'https://c.saavncdn.com/null/Sashi-Telugu-2021-20210316203227-500x500.jpg'
  //   }
  //   this.audioList.push(audioList1);
  //   var old = JSON.parse(localStorage.getItem("songs"));
  //   old.push(audioList1);
  //   localStorage.setItem("songs",JSON.stringify(old));
  //   this.songslist = localStorage.getItem("songs");
  //   //window.location.reload();
  // }
  store(){
    localStorage.setItem("songs",JSON.stringify(this.audioList));
  }

  clear(){

    window.location.reload();
  }

}
