import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private dbPath = '/items';
  itemsRef: AngularFirestoreCollection<Item> = null;

  constructor(private db: AngularFirestore) {
    this.itemsRef = db.collection(this.dbPath);
  }
  createItem(item: Item) {

    return this.itemsRef.add({ ...item });
    // .then(response => { console.log(response) }, error => console.log(error));
  }

  updateItem(id: string, value: any): Promise<void> {
    return this.itemsRef.doc(id).update(value);
  }

  deleteItem(id: string): Promise<void> {
    return this.itemsRef.doc(id).delete();
  }

  getItemsList(): AngularFirestoreCollection<Item> {
    return this.itemsRef;
  }

  deleteAll() {
    this.itemsRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }

  getItemDoc(id) {
    return this.itemsRef
      .doc(id)
      .valueChanges()
  }
}
