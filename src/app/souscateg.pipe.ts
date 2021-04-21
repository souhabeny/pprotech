import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../app/Models/produit';

@Pipe({
    name: 'CategorieFilter'
  })
export class CategorieFilter implements PipeTransform{
    
transform(produits:Produit[],categsearch:string):Produit[]
{
   if(!categsearch)
    {
        return produits;
    }
    return produits.filter(produit=>produit.sousCategorie==categsearch);
}

}