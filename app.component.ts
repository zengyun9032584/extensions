import { Component, OnInit, NgZone, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = [1,2,3,4,5,6,7,8,9,10];
  show: boolean = false;
  nave: boolean = false;
  @ViewChild('h11') dll: ElementRef;
  @ViewChild('h12') dll2: ElementRef;
  showFoo = false;

  constructor(private zone: NgZone) {
        this.zone.onStable.subscribe(() => {
          debugger;
        this.dll;
        this.dll2;
    });
    // this.zone.onMicrotaskEmpty.subscribe
  }
  foo() {
    return new Promise((success, fail) => {
      try {
        this.show = true;
        console.log('aaa');
        success();
      } catch (e) {
        fail();
      }
    });
  }

  ngOnInit() {
    //  this.foo().then(this.successMethod).catch(this.failMethod)
  }
  successMethod() {
    let h1 = document.getElementById('h11');
    h1.innerHTML = '<i class="div-red">sdfsafsaf</i>';
    console.log('success');
  }

  failMethod() {
    console.log('error');
  }

  showDiv() {
    this.show = true;
    this.nave = false;
  }

  showDiv2() {
    this.show = false;
    this.nave = true;
  }
}
