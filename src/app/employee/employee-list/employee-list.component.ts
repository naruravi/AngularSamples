import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';
//import 'expose?jQuery!jquery';
// import 'bootstrap';
 import * as jQuery from 'jquery';
declare var kendo: any;
//declare var jQuery: any;


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, AfterViewInit {

  @ViewChild('showhide') showHideref: ElementRef;
  constructor() { }
  ngOnInit() {
  }
  ngAfterViewInit() {
    // $('h1').tooltip();
    // $('div').tooltip();

    console.log(this.showHideref.nativeElement.innerHTML.length);
    console.log(this.showHideref.nativeElement.innerText.length);
    kendo.jQuery(this.showHideref.nativeElement).kendoTooltip({
      filter: "div",
      Width: "250px",
      position: "bottom",
      show: function (e) {

        if (this.content.text() != "") {
          jQuery('[role="tooltip"]').css("visibility", "visible");
        }
      },
      hide: function () {

        jQuery('[role="tooltip"]').css("visibility", "hidden");
      },
      content: function (e) {
        var element = e.target[0];
        if (element.offsetWidth < element.scrollWidth) {
          return e.target.text();
        } else {
          return "";
        }
      }

    }).data("kendoTooltip");
  }
}
