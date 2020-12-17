import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = ['customerName', 'noOfItems', 'totalAmount', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  cellselect(index: any) {
    if (index.action == 'Order Received') {
      index.action = 'Preparing';
    }
    else if (index.action == 'Preparing') {
      index.action = 'Ready to Serve';
    }
  }
}
export interface PeriodicElement {
  customerName: string;
  noOfItems: number;
  totalAmount: number;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { customerName: "Leyonal", action: "Order Received", noOfItems: 5, totalAmount: 507 },
  { customerName: "Demel", action: "Order Received", noOfItems: 1, totalAmount: 4026 },
  { customerName: "sneha", action: "Order Received", noOfItems: 3, totalAmount: 6941 },
  { customerName: "Ram", action: "Order Received", noOfItems: 5, totalAmount: 122 },
  { customerName: "Akhil", action: "Order Received", noOfItems: 6, totalAmount: 101 },
  { customerName: "Udhay", action: "Order Received", noOfItems: 4, totalAmount: 1107 },
  { customerName: "John", action: "Order Received", noOfItems: 2, totalAmount: 1467 },
  { customerName: "Jorge", action: "Order Received", noOfItems: 3, totalAmount: 194 },
  { customerName: "William", action: "Order Received", noOfItems: 2, totalAmount: 184 },
  { customerName: "Varghese", action: "Order Received", noOfItems: 2, totalAmount: 2097 },
  { customerName: "Sindhu menon", action: "Order Received", noOfItems: 5, totalAmount: 2297 },
  { customerName: "Suresh", action: "Order Received", noOfItems: 6, totalAmount: 2405 },
  { customerName: "Raju", action: "Order Received", noOfItems: 3, totalAmount: 2615 },
  { customerName: "Mahesh", action: "Order Received", noOfItems: 3, totalAmount: 2855 },
];