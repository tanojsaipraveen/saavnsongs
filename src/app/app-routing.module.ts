import { PlayingComponent } from './playing/playing.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { LoadimgsnippetComponent } from './loadimgsnippet/loadimgsnippet.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { SongdetailsComponent } from './songdetails/songdetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path:'',component:MainComponent
  },
  {
    path:'loading',component:LoadimgsnippetComponent
  },
  {
    path:'main',component:MainComponent
  },
  {
    path:'nowplaying',component:NowplayingComponent
  },
  {
    path:'playing',component:PlayingComponent
  },
  {
    path:'songdetails/:id',component:SongdetailsComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
