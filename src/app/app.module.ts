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
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './ui/common/footer/footer.component';
import { PaginatePipe } from './ui/common/pipes/paginate.pipe';
import { EditItemComponent } from './ui/components/edit-item/edit-item.component';
import { DeleteItemComponent } from './ui/components/delete-item/delete-item.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateItemComponent,
    HeaderComponent,
    ListItemComponent,
    FooterComponent,
    PaginatePipe,
    EditItemComponent,
    DeleteItemComponent
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
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
