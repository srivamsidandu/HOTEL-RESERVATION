import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { AuthGuard } from './auth.guard';
import { BookingComponent } from './booking/booking.component';
import { BooknowComponent } from './booknow/booknow.component';
import { CustomersComponent } from './customers/customers.component';
import { EdithotelsComponent } from './edithotels/edithotels.component';
import { HotelmanagmentComponent } from './hotelmanagment/hotelmanagment.component';
import { LoginComponent } from './login/login.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PhotosComponent } from './photos/photos.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : "",component : LoginComponent},
  {path : "register",component : RegisterComponent},
  {path : "photos",component :PhotosComponent},
  {path : "users",component :HotelmanagmentComponent,canActivate:[AuthGuard]},
  {path :"booking",component : BookingComponent,canActivate:[AuthGuard]},
  {path : "booknow/:hotelid",component : BooknowComponent,canActivate:[AuthGuard]},
  {path : "mybooking/:userId",component: MybookingComponent,canActivate:[AuthGuard]},
  {path : "edithotels/:hotelid",component : EdithotelsComponent},
  {path : "payment",component : PaymentComponent,canActivate: [AuthGuard]},
  {path : "customers",component : CustomersComponent,canActivate : [AuthGuard]},
  {path : "Paymentsuccess",component : PaymentsuccessComponent},
  {path : "addhotels",component:AddhotelComponent,canActivate : [AuthGuard]},
  {path : "**",component :NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
