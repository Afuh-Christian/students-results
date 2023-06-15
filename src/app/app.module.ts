import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { StudentModule } from "./student/student.module";
import { AppRoutingModule } from "./student/student-routing.module";
import { NavbarComponent } from "./student/navbar/navbar.component";
import { DetailComponent } from "./student/detail/detail.component";

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from "./in-memory-data.service";
import { StudentService } from "./student.service";





@NgModule({
    declarations: [AppComponent], 
    imports: [BrowserModule, FormsModule, StudentModule
    
        ,
        HttpClientModule,
        // HttpClientInMemoryWebApiModule,
            HttpClientInMemoryWebApiModule.forRoot(
              InMemoryDataService, { dataEncapsulation: false }
              )
    
    ],
    bootstrap: [AppComponent]
    ,
    providers: [
        StudentService,
      ]
})
export class AppModule{}















