import { Component } from '@angular/core'
import { ITuiCalendarSchedule } from '@kernet/tui-calendar'

@Component({
  selector: 'kernetlabs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test'

  schedules: ITuiCalendarSchedule[] = [
    {
      id: '1',
      calendarId: '1',
      title: 'my schedule 2',
      category: 'time',
      dueDateClass: '',
      start: '2022-06-16T22:30:00+09:00',
      end: '2022-06-16T23:30:00+09:00',
    },
    {
      id: '2',
      calendarId: '1',
      title: 'second schedule red',
      category: 'time',
      dueDateClass: '',
      start: '2022-06-18T17:30:00+09:00',
      end: '2022-06-19T17:31:00+09:00',
    },
  ]
}
