import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FirestoreCollections} from '@jf/enums/firestore-collections.enum';
import {OrderStatus} from '@jf/enums/order-status.enum';
import {Order} from '@jf/interfaces/order.interface';
import {ListComponent} from '../../../../shared/components/list/list.component';

@Component({
  selector: 'jfsc-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersListComponent extends ListComponent<Order> {
  displayedColumns = [
    'checkBox',
    'id',
    'createdOn',
    'customer',
    'price',
    'statusChange',
    'actions'
  ];

  collection = FirestoreCollections.Orders;
  deliveryStatus = OrderStatus;

  changeClient(status: OrderStatus, id: string) {
    this.afs
      .collection(FirestoreCollections.Orders)
      .doc(id)
      .set({status}, {merge: true});
  }
}
