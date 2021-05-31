import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemsService } from 'src/app/data/services/items.service';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { ListItemComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;
  let itemService: ItemsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListItemComponent]
      , imports: [
        MaterialModule,
        ReactiveFormsModule
      ]
      , providers: [
        itemService,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    itemService = TestBed.inject(ItemsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shows the start count', () => {
    expectText(fixture, 'count', '1');
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
function expectText(fixture: ComponentFixture<ListItemComponent>, arg1: string, arg2: string) {
  throw new Error('Function not implemented.');
}

