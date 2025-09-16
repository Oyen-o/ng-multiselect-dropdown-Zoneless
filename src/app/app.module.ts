import { NgModule, provideZonelessChangeDetection } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { SelectSectionComponent } from './components/select-section';
import { SampleSectionComponent } from './components/sample-section.component';
import { SingleDemoComponent } from './components/select/single-demo';
import { MultipleDemoComponent } from './components/select/multiple-demo';
import { ShCodeViewer } from '../code-viewer/code-viewer.module';

import { AppComponent } from './app.component';
import { NgMultiSelectDropDownModule } from '../ng-multiselect-dropdown/src';

@NgModule({
  declarations: [SelectSectionComponent, SampleSectionComponent, SingleDemoComponent, MultipleDemoComponent, AppComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    TabsModule,
    ButtonsModule,
    ShCodeViewer,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [[provideZonelessChangeDetection()]],
  bootstrap: [AppComponent]
})
export class AppModule {}
