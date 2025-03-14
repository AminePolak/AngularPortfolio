import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule, JsonPipe } from '@angular/common';



@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  fb = inject(FormBuilder)

  form: FormGroup = this.fb.group({
    form_subject: '',
    form_name: '',
    form_email: '',
    form_message: ''
  });

  constructor() { }

  async send() {
    emailjs.init('vomkow1WMhU495RtB')
    let response = await emailjs.send("service_18704ol", "template_5e61hs8", {
      form_subject: this.form.value.form_name,
      form_name: this.form.value.form_name,
      form_email: this.form.value.form_email,
      form_message: this.form.value.form_message,
    });

    alert('Message has been sent.');
    this.form.reset();
  }
}

