import { ProduitService } from './../services/produit.service';
import { Produit } from './../model/produit.model';
import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  produits!:Produit[];
 
IdCategorie! : number;
categories! : Categorie[];


  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.categories=this.produitService.listeCategories();
    this.produits=[];
  }
  onChange()
  {
    this.produits=this.produitService.rechercherParCategorie(this.IdCategorie);

  }
  supprimerProduit(p: Produit)
  {
    let conf = confirm("Etes-vous sûr ?");
  if (conf)
  {
    this.produitService.supprimerProduit(p);
    this.produits=this.produitService.rechercherParCategorie(this.IdCategorie);
  }
  }
  

}
