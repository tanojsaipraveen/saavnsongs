import { Pipe, PipeTransform } from '@angular/core';
import Crypto from "crypto-js";


@Pipe({
  name: 'decrypt'
})
export class DecryptPipe implements PipeTransform {
 
  decrypted;
  decryptedurl

  transform(value: string,encrypted_media_url:string,quality:string): string {

    this.decrypted = Crypto.DES.decrypt(encrypted_media_url, Crypto.enc.Utf8.parse("38346591"),{
          mode: Crypto.mode.ECB,
          padding: Crypto.pad.Pkcs7
        });
        //console.log(Crypto.enc.Utf8.stringify(this.decrypted));
        this.decryptedurl = Crypto.enc.Utf8.stringify(this.decrypted);
    return this.decryptedurl.replace('_96',quality);
  }
}
