import {
  Component,
  ViewChild,
  Input,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core'
import Calendar, { IEventObject, IOptions, ISchedule } from 'tui-calendar'

export interface ITuiCalendarOptions extends IOptions {}
export interface ITuiCalendarSchedule extends ISchedule {}

@Component({
  selector: 'kl-tui-calendar',
  templateUrl: './tui-calendar.component.html',
  styleUrls: ['./tui-calendar.component.scss'],
})
export class TuiCalendarComponent implements AfterViewInit {
  @Input() height = '800px'
  @Input() options: IOptions = {
    defaultView: 'month',
    taskView: false,
    scheduleView: true,
    useDetailPopup: false,
  }
  @Input() schedules!: ISchedule[]

  @ViewChild('calendar') calendar!: ElementRef<Element>
  @Output() onScheduleClick: EventEmitter<ISchedule> = new EventEmitter()

  lastClickSchedule!: ISchedule
  tuiCalendar!: Calendar

  constructor() {}

  ngAfterViewInit(): void {
    // Get Element
    const element = this.calendar.nativeElement

    // Create Calendar
    this.tuiCalendar = new Calendar(element, this.options)

    // Create Schedules
    if (this.schedules) {
      this.tuiCalendar.createSchedules(this.schedules)
    }

    // Events
    this.tuiCalendar.on('clickSchedule', (event: IEventObject) => {
      const schedule = event.schedule

      if (this.lastClickSchedule) {
        this.tuiCalendar.updateSchedule(
          this.lastClickSchedule.id as string,
          this.lastClickSchedule.calendarId as string,
          {
            isFocused: false,
          }
        )
      }
      this.tuiCalendar.updateSchedule(
        schedule.id as string,
        schedule.calendarId as string,
        {
          isFocused: true,
        }
      )

      this.lastClickSchedule = schedule

      // open detail view
      this.onScheduleClick.emit(schedule)
    })
  }

  next() {
    this.tuiCalendar.next()
  }

  prev() {
    this.tuiCalendar.prev()
  }

  getDate() {
    return this.tuiCalendar.getDate().toDate()
  }
  getToday() {
    return this.tuiCalendar.today()
  }
  changeView(view: 'day' | 'month' | 'week') {
    return this.tuiCalendar.changeView(view, true)
  }
}
