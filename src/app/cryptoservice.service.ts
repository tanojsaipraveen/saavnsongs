import { logging } from 'protractor';
import { Injectable } from '@angular/core';
import Crypto from "crypto-js";

@Injectable({
  providedIn: 'root'
})
export class CryptoserviceService {
  public key: string;
  public iv: string;
  constructor() {
    this.iv= Crypto.enc.Utf8.parse('\0\0\0\0\0\0\0\0');//Migration amount, hexadecimal number, ECB mode is not used
    this.key = Crypto.enc.Utf8.parse('38346591');//Key
   }
   encrypt(data){
    let res = Crypto.DES.encrypt(JSON.stringify(data), this.key, {
      // iv: this.iv,
      mode: Crypto.mode.ECB,
      padding: Crypto.pad.Pkcs7
    }).ciphertext.toString();
    return res;
  }

  decrypt(data) {
    console.log(data);
    let res = Crypto.DES.decrypt({
      ciphertext: Crypto.enc.Hex.parse(data)
     
    }, this.key, {
      iv: this.iv,
      mode: Crypto.mode.ECB,
      padding: Crypto.pad.Pkcs5
    })
    console.log(res);
    return Crypto.enc.Utf8.stringify(res);
  }
}
