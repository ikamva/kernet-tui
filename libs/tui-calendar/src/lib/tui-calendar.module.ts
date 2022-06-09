import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TuiCalendarComponent } from './tui-calendar/tui-calendar.component'
import { CdkMenuModule } from '@angular/cdk/menu'
@NgModule({
  imports: [CommonModule, CdkMenuModule],
  declarations: [TuiCalendarComponent],
  exports: [TuiCalendarComponent],
})
export class TuiCalendarModule {}
