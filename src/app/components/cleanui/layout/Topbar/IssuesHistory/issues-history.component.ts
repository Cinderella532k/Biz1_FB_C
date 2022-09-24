import { Component } from '@angular/core'

@Component({
  selector: 'cui-topbar-issues-history',
  templateUrl: './issues-history.component.html',
  styleUrls: ['./issues-history.component.scss'],
})
export class TopbarIssuesHistoryComponent {
  time = new Date()

  ngOnInit() {
    setInterval(() => {
      this.time = new Date()
    }, 1000)
  }
}
