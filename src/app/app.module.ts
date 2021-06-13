import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { StrformatPipe } from './strformat.pipe';
import { StrsubPipe } from './strsub.pipe';
import { DecryptPipe } from './decrypt.pipe';
import { SongdetailsComponent } from './songdetails/songdetails.component';
import { MainComponent } from './main/main.component';
import { LoadimgsnippetComponent } from './loadimgsnippet/loadimgsnippet.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { AngMusicPlayerModule } from  'ang-music-player';
import { PlayingComponent } from './playing/playing.component';
import { Strformat2Pipe } from './strformat2.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StrformatPipe,
    StrsubPipe,
    DecryptPipe,
    SongdetailsComponent,
    MainComponent,
    LoadimgsnippetComponent,
    NowplayingComponent,
    PlayingComponent,
    Strformat2Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngMusicPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
