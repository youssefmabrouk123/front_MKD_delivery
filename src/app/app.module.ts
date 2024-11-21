import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';
import { ParcelListComponent } from './components/parcel-list/parcel-list.component';
import { ParcelService } from './services/parcel.service';
import { ParcelFormComponent } from './components/parcel-form/parcel-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatOption } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ParcelListComponent,
    ParcelFormComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatToolbarModule,
    AppRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
     MatSelectModule,
    MatOptionModule, // Add RouterModule here
  ],
  providers: [ParcelService],
  bootstrap: [AppComponent]
})
export class AppModule {}
