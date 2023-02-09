import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @ViewChild("content") content:any;
  users: any;
  userForm!: FormGroup;
  singlePostData:any;
  
  constructor(private modalService: NgbModal) {
    this.userForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      emailId: new FormControl("",[Validators.required,Validators.email]),
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
    this.users.push(formData);
    //show success messagae using toastr

    //close modal popup
    this.modalService.dismissAll();

    //reset the form
    this.userForm.reset();;
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
      }
    ];
  }

  addNewItem() {
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'});
  }
  // deletePost(deleteModal:any){
  //   // this.singlePostData = postItem;
  //   // console.log(postItem.id);
  //   // console.log('delete method is called');
  //   this.modalService.open(deleteModal, {ariaLabelledBy: 'modal-basic-title'});
  //  }
  
   deleteData(){
    
   }

   viewData(){

   }

   editData(){

   }

}
