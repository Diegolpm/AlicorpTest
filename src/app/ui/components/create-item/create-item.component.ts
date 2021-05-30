import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    public itemService: ItemsService,
    public formBuilder: FormBuilder,
    public router: Router,
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
          this.router.navigate(['Home']);
        },
        error => console.log(error))
    // console.log(this.itemForm.value);

  };

}
