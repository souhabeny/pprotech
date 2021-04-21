import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../Services/Commande/commande.service';
import {ClientService} from "../../Services/Client/client.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogDataComponent } from '../dialog-data/dialog-data.component';
@Component({
  selector: 'app-admin-command',
  templateUrl: './admin-command.component.html',
  styleUrls: ['./admin-command.component.css']
})
export class AdminCommandComponent implements OnInit {
  mycommandes=[];
  index=2;
  constructor(private dialog: MatDialog,private commandeService:CommandeService,private ClientService:ClientService) { }

  ngOnInit(): void {
    this.getmycommande();
  }
  getmycommande():void{
    this.commandeService.findAll().subscribe(order => {
      this.mycommandes=order.order;
      //this.getproduitId(commandes.commandes.produits[0]._id)
    console.log(this.mycommandes);
    });
  }
  updateCommand(commande)
  { commande.vendu=true;
    console.log("dd")
    this.commandeService.update(commande).subscribe(data=>{
      console.log(data);
    })
  }
  showclient(id)
  {
    this.ClientService.findById(id).subscribe(client=>{
     
      this.dialog.open(DialogDataComponent, {
        data: {
          client: client.client
        }
      });
      console.log(client)
    })
  }
 
 
}
