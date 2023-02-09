import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @ViewChild('content') content: any;
  @ViewChild('userViewModal') userViewModal: any;
  users: any;
  userForm!: FormGroup;
  singlePostData: any;
  userDetails: any;
  isEdit: boolean = false;
  selectedItemIndex: number = 0;
  constructor(private modalService: NgbModal) {
    this.userForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      mobileNo: new FormControl(),
      gender: new FormControl(),
      status: new FormControl(),
    });

    // get f(){
    //   return this.userForm.controls;
    // }
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  saveUserData() {
    console.log(this.userForm.value);
    let formData = this.userForm.value;
    // check weather action is for add or edit
    if (this.isEdit) {
      //update existing data
      let item = this.users[this.selectedItemIndex];
      item.id = formData.id;
      item.name = formData.name;
      item.emailId = formData.emailId;
      item.mobileNo = formData.mobileNo;
      item.gender = formData.gender;
      item.status = formData.status;

      //show success messagae using toastr

      //close modal popup
      this.modalService.dismissAll();
      //reset the form
      this.userForm.reset();
    } else {
      this.users.push(formData);
      //show success messagae using toastr

      //close modal popup
      this.modalService.dismissAll();
      //reset the form
      this.userForm.reset();
    }
  }

  loadUserData() {
    this.users = [
      {
        id: '001',
        name: 'raheela',
        emailId: 'rahee@gmail.com',
        mobileNo: 9876543210,
        gender: 'Female',
        status: true,
      },
    ];
  }

  addNewItem() {
    this.userForm.reset();
    this.isEdit = false;
    this.modalService.open(this.content, {
      ariaLabelledBy: 'modal-basic-title',
    });
  }
  // deletePost(deleteModal:any){
  //   // this.singlePostData = postItem;
  //   // console.log(postItem.id);
  //   // console.log('delete method is called');
  //   this.modalService.open(deleteModal, {ariaLabelledBy: 'modal-basic-title'});
  //  }

  deleteData(index: number, item: any): void {
    console.log(index);
    //delete item from an array based on index
    const isConfirm = confirm('Are you sure want to delete this record');
    if (isConfirm) {
      this.users.splice(index, 1);
    }
  }

  viewData(index: number, item: any): void {
    //show popup and bind the data
    // this.userDetails = item;
    this.userDetails = this.users[index];
    this.modalService.open(this.userViewModal, {
      ariaLabelledBy: 'modal-basic-title',
    });
  }

  editData(index: number, item: any): void {
    //show same add popup and bind the data in form control using patchValue() method
    this.isEdit = true;
    this.selectedItemIndex = index;
    this.modalService.open(this.content, {
      ariaLabelledBy: 'modal-basic-title',
    });

    this.userForm.get('id')?.patchValue(item.id);
    this.userForm.get('name')?.patchValue(item.name);
    this.userForm.get('emailId')?.patchValue(item.emailId);
    this.userForm.get('mobileNo')?.patchValue(item.mobileNo);
    this.userForm.get('gender')?.patchValue(item.gender);
    this.userForm.get('status')?.patchValue(item.status);
  }
}
