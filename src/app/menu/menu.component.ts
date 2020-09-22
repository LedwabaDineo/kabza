import { Component, OnInit } from '@angular/core';

interface MyCustomElement {
  body: string;
  mynum: any;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  title = 'kabza';
  mynum: any;

  constructor() { }


  ngOnInit(): void {
    // this.menu();
  }

//    menu() {
//     const tabs = document.getElementById('ice-tab-container') as HTMLElement).children;
//     const tabContents = (document.getElementById('ice-tab-content')as HTMLElement).children;

//     const myFunction = function() {
//       const tabChange = this.mynum;
//       for (let int = 0; int < tabContents.length; int++){
//         tabContents[int].className = 'tab-content';
//         tabs[int].className = 'ice-tab';
//       }
//       tabContents[tabChange].classList.add('tab-active');
//       this.classList.add('current-tab');
//     };

//     for (let index = 0; index < tabs.length; index++){
//       tabs[index].mynum = index;
//       tabs[index].addEventListener('click', myFunction, false);
//     }
//   }
}
