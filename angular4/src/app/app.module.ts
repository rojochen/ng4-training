// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Component template
import { AppComponent } from './app.component';
import { ClassbindComponent } from './dataBind/classbind/classbind.component';
import { StyleBindComponent } from './dataBind/style-bind/style-bind.component';
import { InterpolationComponent } from './dataBind/interpolation/interpolation.component';
import { PropertyBindComponent } from './dataBind/property-bind/property-bind.component';
import { EventBindComponent } from './dataBind/event-bind/event-bind.component';
import { TwoWayBindComponent } from './dataBind/two-way-bind/two-way-bind.component';
import { TemplateDrivenComponent } from './form/template-driven/template-driven.component';
import { ReactiveComponent } from './form/reactive/reactive.component';
import { NgIfComponent } from './common-directives/ng-if/ng-if.component';
import { NgSwitchComponent } from './common-directives/ng-switch/ng-switch.component';
import { NgStyleComponent } from './common-directives/ng-style/ng-style.component';
import { NgClassComponent } from './common-directives/ng-class/ng-class.component';
import { NgForComponent } from './common-directives/ng-for/ng-for.component';
import { ParentComponent } from './io/parent/parent.component';
import { ChildComponent } from './io/child/child.component';
import { Component } from '@angular/core/src/metadata/directives';
import { Services } from '@angular/core/src/view';
import { ParentCountComponent } from './IO/parent-count/parent-count.component';
import { ChildCountComponent } from './IO/child-count/child-count.component';

// Services
import { ProductInfoService } from './io/product-info.service';
import { FilterNameComponent } from './pipe/filter-name/filter-name.component';
import { FilterNamePipe } from './pipe/filter-name/filter-name.pipe';


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
    ReactiveComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgStyleComponent,
    NgClassComponent,
    NgForComponent,
    ParentComponent,
    ChildComponent,
    ParentCountComponent,
    ChildCountComponent,
    FilterNameComponent,
    FilterNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
