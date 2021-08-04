import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';

const myComponents =[MatButtonModule,
MatIconModule,

]

@NgModule({
 
  imports: [myComponents],
  exports:[myComponents],
})
export class MaterialModule { }
