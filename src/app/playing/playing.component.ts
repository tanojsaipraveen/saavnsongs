import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements OnInit {

  audio:any;
  songslist;
  songslist1;
  dd:object;
  hide=true;
  constructor(private auth:AuthService) { 
    this.audio = new Audio();
    this.songslist = JSON.parse(localStorage.getItem("songs"));
    //this.audio.src="https://aac.saavncdn.com/272/86bdf71532c0f540557c46d94695c2d0_320.mp4";

    
   

  }

  

  ngOnInit(): void {

    this.audio.load();
  }
  play(){
    this.audio.play();
  }
  pause(){
    this.audio.pause();
  }

  clickdelete(title){
  
    if(localStorage.getItem("songs")){
      this.songslist = JSON.parse(localStorage.getItem("songs"));
      for(let i=0;i<this.songslist.length;i++){
        if(this.songslist[i].title === title){
          this.songslist.splice(i,1);
          localStorage.setItem("songs",JSON.stringify(this.songslist));
          //this.songslist = JSON.parse(localStorage.getItem("songs"));
         
        }
      }
      // this.songslist = localStorage.getItem("songs");
      // console.log("sss"+ this.songslist);
      // this.auth.cartsubject.next(this.songslist);
    }
    else{

    }
    this.songslist1 = localStorage.getItem("songs");
   
    this.auth.cartsubject.next(this.songslist1);
    
   
  }

  playsong(item){
   
    this.audio.src=item.url;
    this.audio.play();
  }
  clearall(){
    localStorage.removeItem("songs");
    if(localStorage.getItem("songs")!= null){
      this.songslist = JSON.parse(localStorage.getItem("songs"));
    }
    else{
      
    }
    

  }

  ngOnDestroy(): void {
   this.audio.pause();
    
  }
}
