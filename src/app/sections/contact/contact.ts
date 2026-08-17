import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
})
export class Contact {
  emailCopied = false;

async copyEmail(): Promise<void> {
  await navigator.clipboard.writeText('chloekingworks@gmail.com');

  this.emailCopied = true;

  setTimeout(() => {
    this.emailCopied = false;
  }, 2000);
}
}
