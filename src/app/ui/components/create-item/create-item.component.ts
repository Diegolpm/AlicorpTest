import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/data/services/items.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  public itemForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public itemService: ItemsService,
    public formBuilder: FormBuilder,
    // public router: Router,
  ) {
    this.itemForm = this.formBuilder.group({
      name: [''],
      description: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.itemService.createItem(this.itemForm.value)
      .then(
        response => {
          console.log(response)

        },
        error => console.log(error))
    this.dialogRef.close();
    // this.router.navigate(['Home']);
    // console.log(this.itemForm.value);

  };

  close(): void {
    this.dialogRef.close();
  }

}
