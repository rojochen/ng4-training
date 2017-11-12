import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassbindComponent } from './dataBind/classbind/classbind.component';
import { StyleBindComponent } from './dataBind/style-bind/style-bind.component';
import { InterpolationComponent } from './dataBind/interpolation/interpolation.component';
import { PropertyBindComponent } from './dataBind/property-bind/property-bind.component';
import { EventBindComponent } from './dataBind/event-bind/event-bind.component';
import { TwoWayBindComponent } from './dataBind/two-way-bind/two-way-bind.component';
import { TemplateDrivenComponent } from './form/template-driven/template-driven.component';
import { ReactiveComponent } from './form/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassbindComponent,
    StyleBindComponent,
    InterpolationComponent,
    PropertyBindComponent,
    EventBindComponent,
    TwoWayBindComponent,
    TemplateDrivenComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
