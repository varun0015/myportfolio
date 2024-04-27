import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient, 
    private mailService: MailService, 
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      message: ['', Validators.required]
    });
  }

  private color: string = '';
  showAlert: boolean = false;
  alertMessage: string = '';
  onSubmit: boolean = false;
  contactFormValues = {
    name: '',
    email: '',
    body: '',
    phone: '',
  };

  ngOnInit(): void {
  }

  get alertColor() {
    return `text-${this.color}-400`;
  }

  hideAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }

  async submitEmail(contactForm: NgForm) {
    this.onSubmit = true;
    // -- set formData values
    let formData: FormData = new FormData();
    formData.append('name', this.contactFormValues.name);
    formData.append('email', this.contactFormValues.email);
    formData.append('body', this.contactFormValues.body);
    formData.append('phone', this.contactFormValues.phone);
    // -- email customization
    formData.append('access_key', environment.mailServiceAccessKey,);
    formData.append('subject', 'Email Support From Your Site');
    formData.append('from_name', 'Contact Notification');

    try {
      const res = await this.mailService.sendEmail(formData);
      if (!res.ok) {
        throw new Error();
      }
      this.alertMessage = 'Form submitted successfully!';
      this.openDialog('Form submitted successfully!', 'success');
      this.color = 'green';
      contactForm.reset();
    } catch (err) {
      this.alertMessage = 'Something went wrong, try again later!';
      this.openSnackBar('Something went wrong, try again later!', 'OK');
      this.color = 'red';
    }
    this.onSubmit = false;
    this.showAlert = true;
    this.hideAlert();
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  openDialog(message: string, status: 'success' | 'failure'): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { message, status },
      disableClose: true,

    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: 2000, 
    });
  }

}
