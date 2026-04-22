import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';
import emailjs from '@emailjs/browser';
import { environment } from '../../environment/environment';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  customSubject?: string;
  message: string;
}

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly subjectOptions = ['Project Inquiry', 'Collaboration', 'Bug Report', 'Other'];

  // Observable for form submission status
  private submissionStatus$ = new BehaviorSubject<'idle' | 'loading' | 'success' | 'error'>('idle');

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(environment.emailjs.publicKey);
  }

  getSubjectOptions(): string[] {
    return this.subjectOptions;
  }

  getSubmissionStatus(): Observable<'idle' | 'loading' | 'success' | 'error'> {
    return this.submissionStatus$.asObservable();
  }

  /**
   * Submit contact form via EmailJS
   * Sends email to your configured email address
   */
  submitContactForm(formData: ContactFormData): Observable<ContactSubmissionResponse> {
    this.submissionStatus$.next('loading');

    // Prepare final subject
    const finalSubject = formData.customSubject || formData.subject;

    // EmailJS template parameters
    const templateParams = {
      to_email: environment.emailjs.toEmail,
      from_name: formData.name,
      from_email: formData.email,
      subject: finalSubject,
      message: formData.message,
      reply_to: formData.email
    };

    return new Observable(observer => {
      emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams
      ).then(
        (response) => {
          console.log('Email sent successfully!', response);
          this.submissionStatus$.next('success');
          observer.next({
            success: true,
            message: 'Thank you for reaching out! I will get back to you soon.',
            timestamp: new Date().toISOString()
          });
          observer.complete();
        },
        (error) => {
          console.error('Failed to send email:', error);
          this.submissionStatus$.next('error');
          observer.error({
            success: false,
            message: 'Failed to send message. Please try again or contact directly.',
            timestamp: new Date().toISOString()
          });
        }
      );
    });
  }

  setSubmissionStatus(status: 'idle' | 'loading' | 'success' | 'error'): void {
    this.submissionStatus$.next(status);
  }
}
