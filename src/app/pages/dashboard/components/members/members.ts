import { Component } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-members',
  imports: [NgxDatatableModule],
  templateUrl: './members.html',
  styleUrl: './members.scss'
})
export class Members {
  currentPage = 0;

onPage(event: any) {
  this.currentPage = event.offset;
}


rows = [
  {
    id: 'M-001',
    name: 'Amit Sharma',
    membershipType: 'Premium',
    contact: 'amit.sharma@example.com',
    phone: '+91 9876543210',
    address: 'Sector 12, Gurgaon, Haryana',
    issuedBooks: 3,
    totalBooksAllowed: 5,
    status: 'Active'
  },
  {
    id: 'M-002',
    name: 'Priya Singh',
    membershipType: 'Standard',
    contact: 'priya.singh@example.com',
    phone: '+91 9823456710',
    address: 'Salt Lake, Kolkata, West Bengal',
    issuedBooks: 1,
    totalBooksAllowed: 3,
    status: 'Active'
  },
  {
    id: 'M-003',
    name: 'Rahul Verma',
    membershipType: 'Basic',
    contact: 'rahul.verma@example.com',
    phone: '+91 9812345670',
    address: 'Andheri East, Mumbai, Maharashtra',
    issuedBooks: 0,
    totalBooksAllowed: 2,
    status: 'Inactive'
  },
  {
    id: 'M-004',
    name: 'Sneha Patel',
    membershipType: 'Premium',
    contact: 'sneha.patel@example.com',
    phone: '+91 9834567890',
    address: 'Satellite, Ahmedabad, Gujarat',
    issuedBooks: 4,
    totalBooksAllowed: 5,
    status: 'Active'
  },
  {
    id: 'M-005',
    name: 'Arjun Mehta',
    membershipType: 'Standard',
    contact: 'arjun.mehta@example.com',
    phone: '+91 9865432109',
    address: 'Banjara Hills, Hyderabad, Telangana',
    issuedBooks: 2,
    totalBooksAllowed: 3,
    status: 'Active'
  },
  {
    id: 'M-006',
    name: 'Neha Gupta',
    membershipType: 'Basic',
    contact: 'neha.gupta@example.com',
    phone: '+91 9876000011',
    address: 'Viman Nagar, Pune, Maharashtra',
    issuedBooks: 0,
    totalBooksAllowed: 2,
    status: 'Inactive'
  },
  {
    id: 'M-007',
    name: 'Vikram Iyer',
    membershipType: 'Premium',
    contact: 'vikram.iyer@example.com',
    phone: '+91 9845098765',
    address: 'Indiranagar, Bengaluru, Karnataka',
    issuedBooks: 5,
    totalBooksAllowed: 5,
    status: 'Active'
  },
  {
    id: 'M-008',
    name: 'Riya Das',
    membershipType: 'Standard',
    contact: 'riya.das@example.com',
    phone: '+91 9823459801',
    address: 'Kharavela Nagar, Bhubaneswar, Odisha',
    issuedBooks: 2,
    totalBooksAllowed: 3,
    status: 'Active'
  },
  {
    id: 'M-009',
    name: 'Sanjay Kumar',
    membershipType: 'Basic',
    contact: 'sanjay.kumar@example.com',
    phone: '+91 9811200033',
    address: 'Civil Lines, Delhi',
    issuedBooks: 1,
    totalBooksAllowed: 2,
    status: 'Active'
  },
  {
    id: 'M-010',
    name: 'Kavita Nair',
    membershipType: 'Premium',
    contact: 'kavita.nair@example.com',
    phone: '+91 9876540000',
    address: 'Marine Drive, Kochi, Kerala',
    issuedBooks: 3,
    totalBooksAllowed: 5,
    status: 'Active'
  }
];


    columns = [
    { prop: 'id', name: 'Member ID' },
    { prop: 'name', name: 'Full Name' },
    { prop: 'membershipType', name: 'Membership Type' },
    { prop: 'contact', name: 'Email', width: 250 },
    { prop: 'phone', name: 'Phone Number' },
    { prop: 'address', name: 'Address', width: 300 },
    { prop: 'issuedBooks', name: 'Books Issued' },
    { prop: 'totalBooksAllowed', name: 'Books Allowed' },
    { prop: 'status', name: 'Status' }
  ];

onNextPage() {
  if ((this.currentPage + 1) * 5 < this.rows.length) {
    this.currentPage++;
  }
}

onPrevPage() {
  if (this.currentPage > 0) {
    this.currentPage--;
  }
}

}
