import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserListComponent } from './user-list/user-list.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { AppProductDetailsComponent } from './app-product-details/app-product-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import {User} from  './models/user.model';
import { RouterOutlet } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { DramaComponent } from './drama/drama.component';
import { TrillerComponent } from './triller/triller.component';
import { product } from './models/user.model';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import {enableProdMode} from '@angular/core';
import { UserdataComponent } from './userdata/userdata.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditdataComponent } from './editdata/editdata.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    UserregistrationComponent,
    UserListComponent,
    // ProductDetailsComponent,
    // AppProductDetailsComponent,
    HomeComponent,
    LoginComponent,
    ActionComponent,
    DramaComponent,
    TrillerComponent,
    MoviedetailComponent,
    UserdataComponent,
    SuccessComponent,
    EditdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterOutlet,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule ,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
