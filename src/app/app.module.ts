import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { HomeComponent } from './ui/pages/home/home.component';
import { MaterialModule } from './shared/material/material.module';
import { ItemsService } from './data/services/items.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateItemComponent } from './ui/components/create-item/create-item.component';
import { HeaderComponent } from './ui/common/header/header.component';
import { ListItemComponent } from './ui/components/list-item/list-item.component';
import { ConfirmComponent } from './ui/modals/confirm/confirm.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './ui/common/footer/footer.component';
import { PaginatePipe } from './ui/common/pipes/paginate.pipe';
import { EditItemComponent } from './ui/components/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateItemComponent,
    HeaderComponent,
    ListItemComponent,
    ConfirmComponent,
    FooterComponent,
    PaginatePipe,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
