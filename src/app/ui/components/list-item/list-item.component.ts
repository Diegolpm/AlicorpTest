import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ItemsService } from 'src/app/data/services/items.service';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { CreateItemComponent } from '../create-item/create-item.component';
import { DeleteItemComponent } from '../delete-item/delete-item.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent implements OnInit, AfterViewInit {

  listItemForm: FormGroup;
  Items: any;
  dataSource = new MatTableDataSource<any>();

  loading: boolean = true;
  displayedColumns: string[] = ['code', 'name', 'description', 'edit'];

  length = 100;
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [3, 5, 10, 20];

  pageEvent: PageEvent;

  constructor(
    public dialog: MatDialog,
    public formBuilder: FormBuilder,
    private itemService: ItemsService,) {
    this.listItemForm = this.formBuilder.group({
      name: [''],
      description: [''],
      // quantity: ['']
    })
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.getItemList();
  }

  getItemList() {
    this.itemService.getItemsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(items => {
      this.Items = items;
      // console.log(this.Items);
      // this.dataSource = new MatTableDataSource<any>(this.Items);
      this.loading = false;
    });
  }

  deleteItem(key) {
    // console.log(key)
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '300px',
      height: '200px',
      data: {
        key: key
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  addItem() {
    const dialogRef = this.dialog.open(CreateItemComponent, {
      width: '500px',
      height: '300px',
      // data: {
      //   item: item
      // }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  editItem(item) {
    // console.log(key)
    const dialogRef = this.dialog.open(EditItemComponent, {
      width: '500px',
      height: '300px',
      data: {
        item: item
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }




}
