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
    // formData.status = Boolean(formData.status);
    this.users.push(formData);
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
    // let text;
    // let person = prompt('please enter your name:', 'raheela');
    // if (person == null || person == '') {
    //   text = 'enter your name.';
    //   // text = this.userform=new FormGroup({
    //   //   identity:new FormControl(),
    //   //   email:new FormControl(),
    //   //   mobile:new FormControl(),
    //   //   address:new FormControl()

    //   // })
    // } else {
    //   text = 'Hello' + person + '!How are you today';
    // }
  }
}
