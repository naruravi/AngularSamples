import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {

  }
  title = 'app';
  selected: number = 0;
  modules: any = [
    {
      name: 'Student',
      content: 'Student Details',
      path: 'student'
    },
    {
      name: 'Employee',
      content: 'Employee Details',
      path: 'employee'
    },
    {
      name: 'Hooks',
      content: 'NG componnet life cycle hooks/events details',
      path: 'hooks'
    }
  ]


  onTabSelect(e) {
    for (var i = 0; i < this.modules.length; i++) {
      if (e.title === this.modules[i].name) {
        let path = this.modules[i].path;
        this.router.navigate(['/', path])
      }

    }

  }
}
