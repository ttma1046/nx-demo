import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MyButtonComponent } from './my-button/my-button.component';

export const mymoduleRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MyButtonComponent]
})
export class MymoduleModule {}
