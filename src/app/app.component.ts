import { Component } from '@angular/core';
import {NG_VALIDATORS} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  myData: any = {
    ax: '12',
    bx: '22',
    cx: '33',
    dx: '',
  }

  hexPattern = new RegExp(/^0x[0-9A-F]{1,4}$/i);


  onMove(moveFrom: string, moveTo: string) {
    this.myData[moveTo] = moveFrom
  }

  onXchg(xchg1: any, xchg2: any) {
    const firstVal = xchg1.value;
    const secondVal = xchg2.value;
    this.myData[xchg1.options[xchg1.selectedIndex].text] = secondVal;
    this.myData[xchg2.options[xchg2.selectedIndex].text] = firstVal;
  }

  onClear() {
    this.myData = {
      ax: '',
      bx: '',
      cx: '',
      dx: '',
    }
  }

}
