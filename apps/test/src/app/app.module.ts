import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { TuiCalendarModule } from '@kernet/tui-calendar'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TuiCalendarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
