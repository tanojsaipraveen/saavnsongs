import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {


  counter = 1;
  count: BehaviorSubject<number>;
  songslist;

 

  constructor(private router: Router) {

    this.count  = new BehaviorSubject(this.counter);
  }

  nextCount() {
    //window.location.reload();
   // this.songslist = localStorage.getItem("songs");
    
    // this.count.next(++ this.counter);
  
  
    
  }

  
}
