
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'encdec';
  encrypted;
  decrypted;
  decryptedurl;
  songslist;
  imgurl;
  newimg;
  songdetails;
    

  
  
  constructor() {
  
    // const msg = this.crypto.encrypt('The parameters to be passed by the front end');//encryption
    
    // // const obj = JSON.parse(this.crypto.decrypt('iPPGVzyogeiPwpro65A0eUaQggN+8+J4lQE8+2an6qcWP5CSSrPygyfsXLrFQn4vFjLlA1yOZJMEcITKxxoaRoPzFaL\/aK97'));//Decrypt
    // const obj = this.crypto.decrypt('iPPGVzyogeiPwpro65A0eUaQggN+8+J4lQE8+2an6qcWP5CSSrPygyfsXLrFQn4vFjLlA1yOZJMEcITKxxoaRoPzFaL\/aK97');//Decrypt
    // console.log(obj);

     

    //  saavnapi.getsongdetails().subscribe(data=>{
    //    this.songdetails = data;
    //    console.log(data);
    //  })

  //   this.encrypted = Crypto.DES.encrypt("http://aac.saavncdn.com/044/455cc995315624a37bdf9cb8ec6be9f1_96.mp4", Crypto.enc.Utf8.parse("38346591"),{
  //     mode: Crypto.mode.ECB,
  //     padding: Crypto.pad.Pkcs7,
  //     vi:"\0\0\0\0\0\0\0\0"
  //   });
  //  // console.log("encrypted text : "+this.encrypted.ciphertext.toString());
  //   this.decrypted = Crypto.DES.decrypt(this.encrypted, Crypto.enc.Utf8.parse("38346591"),{
  //     mode: Crypto.mode.ECB,
  //     padding: Crypto.pad.Pkcs7
  //   });
  //   //console.log(Crypto.enc.Utf8.stringify(this.decrypted));
  //   this.decryptedurl = Crypto.enc.Utf8.stringify(this.decrypted);


  } 

  
  
  
}
