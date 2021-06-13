import { AuthService } from './../auth.service';
import { AppserviceService } from './../appservice.service';
import { SaavnapiService } from './../saavnapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import Crypto from "crypto-js";
import { saveAs } from 'file-saver/dist/FileSaver';




@Component({
  selector: 'app-songdetails',
  templateUrl: './songdetails.component.html',
  styleUrls: ['./songdetails.component.css']
})
export class SongdetailsComponent implements OnInit {
 id;
 songdetails;
 decrypted;
 decryptedurl;
 decryptedurl320;
 personObject;
 audioList = [];
 songslist;
 count: number;


 showspinner:boolean=true;

  constructor(private router:ActivatedRoute,private saavnapi:SaavnapiService,private route:Router,private appservice:AppserviceService,private auth:AuthService) {
    this.songslist = localStorage.getItem("songs");

    if ("songs" in localStorage) {

  } else {
    localStorage.setItem("songs",JSON.stringify(this.audioList));
  }

    this.personObject = JSON.parse(this.songslist);
    this.id = this.router.snapshot.params.id;
    saavnapi.getsongdetails(this.id).subscribe(data=>{
      this.songdetails = data;

      this.showspinner= false;
    })
  }

  add(selecteditem){
    this.decrypted = Crypto.DES.decrypt(selecteditem.more_info.encrypted_media_url, Crypto.enc.Utf8.parse("38346591"),{
      mode: Crypto.mode.ECB,
      padding: Crypto.pad.Pkcs7
    });
    this.decryptedurl = Crypto.enc.Utf8.stringify(this.decrypted);
    this.decryptedurl320 =  this.decryptedurl.replace('_96','_320');

    var audioList1 = {
      url: this.decryptedurl320,
      title: selecteditem.title,
      cover: selecteditem.image
    }
    // this.audioList.push(audioList1);
    var old = JSON.parse(localStorage.getItem("songs"));
    old.push(audioList1);
    localStorage.setItem("songs",JSON.stringify(old));
    alert(selecteditem.title + " song added");
    this.songslist = localStorage.getItem("songs");
   console.log("songdeta " + this.songslist);
    this.auth.cartsubject.next(this.songslist);
  }
  ngOnInit(): void {
    this.id = this.router.snapshot.params;
    this.appservice.count.subscribe(c => {
      this.count = c;
    });
  }
  nextCount() {

    this.appservice.nextCount();
  }

  playsong(item){
    alert(item.url);
  }



}
