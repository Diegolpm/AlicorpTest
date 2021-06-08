import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Item } from 'src/app/data/model/item.model';
import { ItemsService } from 'src/app/data/services/items.service';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { environment } from 'src/environments/environment';

import { ListItemComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let listItemComponent;
  let fixture;
  let itemService;
  let element;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListItemComponent]
      , imports: [
        MaterialModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
      ]
      , providers: [
        ItemsService
      ]
    })
      .compileComponents();
  });

  beforeEach(inject([ItemsService], s => {
    itemService = s;
    fixture = TestBed.createComponent(ListItemComponent);
    listItemComponent = fixture.componentInstance;
    element = fixture.nativeElement;
    // itemService = TestBed.inject(ItemsService);

  }));

  it("should call getItemList and return list of items",fakeAsync(() => {
    let fixture = TestBed.createComponent(ListItemComponent);
    let component = fixture.debugElement.componentInstance;
    let itemService = fixture.debugElement.injector.get(ItemsService);
    // let stub = spyOn(itemService, "getItemsList").and.callFake(() => {
    //   return of([]).pipe(delay(300));
    // })
    component.getItemList();
    expect(component.loading).toEqual(true);
    tick(300);
    expect(component.loading).toEqual(false);
    expect(component.Items).toEqual([]);
  }))


  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});


