import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/data/model/item.model';
import { ItemsService } from 'src/app/data/services/items.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  item: Item;
  editItemForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private itemService: ItemsService,
    public formBuilder: FormBuilder,
  ) {
    this.editItemForm = this.formBuilder.group({
      name: [''],
      description: ['']
    })
  }

  ngOnInit(): void {
    this.item = this.data.item;
    this.getFormControl('name').setValue(this.item.name)
    this.getFormControl('description').setValue(this.item.description)
    console.log(this.item)
  }

  getFormControl(controlName) {
    return this.editItemForm.get(controlName);
  }

  onUpdate(): void {
    this.itemService.updateItem(this.item.key, this.editItemForm.value);
    this.dialogRef.close();
  }
  
  close(): void {
    this.dialogRef.close();
  }

}
