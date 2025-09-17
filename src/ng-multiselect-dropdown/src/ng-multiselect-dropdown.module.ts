import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './click-outside.directive';
import { ListFilterPipe } from './list-filter.pipe';
import { MultiSelectComponent } from './multiselect.component';

@NgModule({
  imports: [CommonModule, FormsModule, MultiSelectComponent],
  declarations: [ClickOutsideDirective, ListFilterPipe],
  providers: [],
  exports: [ClickOutsideDirective, ListFilterPipe, MultiSelectComponent],
})

export class NgMultiSelectDropDownModule {
  static forRoot(): ModuleWithProviders<NgMultiSelectDropDownModule> {
    return {
      ngModule: NgMultiSelectDropDownModule,
      providers: [ListFilterPipe]
    };
  }
}
