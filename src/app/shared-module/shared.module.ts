import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HedaerComponent } from './hedaer/hedaer.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HedaerComponent, FooterComponent
  ],
  declarations: [HedaerComponent, FooterComponent]
})
export class SharedModule { }
