import { Component, OnInit } from '@angular/core';
import { ParcelService } from '../../services/parcel.service';
import { Parcel } from '../../models/parcel.model';

@Component({
  selector: 'app-parcel-list',
  templateUrl: './parcel-list.component.html',
  styleUrls: ['./parcel-list.component.css'],
})
export class ParcelListComponent implements OnInit {
  parcels: Parcel[] = [];
  filteredParcels: Parcel[] = [];
  categories: string[] = ['Électronique', 'Meubles', 'Vêtements', 'Livres'];
  selectedCategory: string = '';

  displayedColumns: string[] = ['nom', 'description', 'categorie', 'poids', 'actions'];

  constructor(private parcelService: ParcelService) {}

  async ngOnInit() {
    this.parcels = await this.parcelService.getParcels();
    this.filteredParcels = this.parcels;
  }

  applyCategoryFilter() {
    if (this.selectedCategory) {
      this.filteredParcels = this.parcels.filter(
        (parcel) => parcel.categorie === this.selectedCategory
      );
    } else {
      this.filteredParcels = this.parcels; // Show all parcels if no category is selected
    }
  }

  async deleteParcel(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce colis ?')) {
      await this.parcelService.deleteParcel(id);
      this.parcels = await this.parcelService.getParcels();
      this.applyCategoryFilter(); // Reapply the filter after deletion
    }
  }
}
