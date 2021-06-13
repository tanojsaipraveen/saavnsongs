import { SaavnapiService } from './../saavnapi.service';
import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  songslist;
  songlisttelugu;
  serverName;
  songlistsearched;
  showspinner: boolean = true;
  sls;

  audioList = [{
    url: 'https://aac.saavncdn.com/null/a31b61ce83dad4593386ab4630273233_320.mp4',
    title: 'Acharya​',
    cover: 'https://c.saavncdn.com/null/Acharya-Telugu-2021-20210331154647-500x500.jpg'
  }]

  constructor(private saavnapi: SaavnapiService) {
    
    
  }

  ngOnInit() {
    if(localStorage.getItem("value") === null){
      this.saavnapi.getsongs('telugu').subscribe(data => {
        this.songlisttelugu = data;
        localStorage.setItem("value",JSON.stringify(this.songlisttelugu));
       
        
  
  
        //console.log(data);
      })
    }
    else{
     this.songlisttelugu = JSON.parse(localStorage.getItem("value"));
    
    }
    
    this.sls = true;

    if(localStorage.getItem("valuehindi") === null){
      this.saavnapi.gettrendingsongs().subscribe(data => {
        this.songslist = data;
        localStorage.setItem("valuehindi",JSON.stringify(this.songslist));
        this.showspinner = false;
      })
    
    }
    else{
      this.songslist = JSON.parse(localStorage.getItem("valuehindi"));
      this.showspinner = false;
    }

    
  }
  OnInput(event: any) {
    this.serverName = event.target.value;

    this.saavnapi.getsongs(this.serverName).subscribe(data => {
      this.songlistsearched = data;


    })
    this.sls = false;

  }



}
