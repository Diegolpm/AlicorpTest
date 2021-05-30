import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ItemsService } from 'src/app/data/services/items.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit {

  item: string;

  constructor(
    public dialogRef: MatDialogRef<DeleteItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private itemService: ItemsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.item = this.data.key;
    // console.log(this.item);
  }

  confirmeDeleteItem() {
    this.itemService.deleteItem(this.item).then(() => {
    });
    this.toastr.success('Se elimino el registro satisfactoriamente!', '');
    this.dialogRef.close()
  }

  close(): void {
    this.dialogRef.close();
  }

}
