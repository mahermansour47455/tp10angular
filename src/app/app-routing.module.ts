import { NgModule } from '@angular/core';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
const routes: Routes = [
  {path: "produits", component : ProduitsComponent},
{path: "add-produit", component : AddProduitComponent},
{ path: "", redirectTo: "produits", pathMatch: "full" },
{path: "rechercheParCategorie", component : RechercheParCategorieComponent},

{path: "updateProduit/:id", component: UpdateProduitComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
