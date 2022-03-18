import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { BookingComponent } from './booking/booking.component';
import { BooknowComponent } from './booknow/booknow.component';
import { CustomersComponent } from './customers/customers.component';
import { EdithotelsComponent } from './edithotels/edithotels.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HotelmanagmentComponent } from './hotelmanagment/hotelmanagment.component';
import { LoginComponent } from './login/login.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PhotosComponent } from './photos/photos.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddhotelComponent,
    BookingComponent,
    BooknowComponent,
    CustomersComponent,
    EdithotelsComponent,
    FooterComponent,
    HeaderComponent,
    HotelmanagmentComponent,
    LoginComponent,
    MybookingComponent,
    NotfoundComponent,
    PaymentComponent,
    PaymentsuccessComponent,
    PhotosComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
