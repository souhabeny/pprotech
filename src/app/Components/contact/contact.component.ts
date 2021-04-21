import { Component, OnInit } from '@angular/core';
import {CommandeService} from "../../Services/Commande/commande.service";
import {Contact} from "../../Models/contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact
  constructor(private commandeService: CommandeService) {
    this.contact = new Contact();
  }

  ngOnInit(): void {
  }

  send() {
    this.commandeService.sendContact(this.contact).subscribe(value => {
      console.log(value);
    });
  }
}
