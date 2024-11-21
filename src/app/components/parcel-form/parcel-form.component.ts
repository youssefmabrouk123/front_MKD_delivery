import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParcelService } from '../../services/parcel.service';
import { Parcel } from '../../models/parcel.model';

@Component({
  selector: 'app-parcel-form',
  templateUrl: './parcel-form.component.html',
  styleUrls: ['./parcel-form.component.css'],
})
export class ParcelFormComponent implements OnInit {
  parcel: Parcel = { nom: '', description: '', categorie: '', poids: 0 };
  isEdit = false;
  categories = ['Électronique', 'Meubles', 'Vêtements', 'Livres'];

  constructor(
    private parcelService: ParcelService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.parcel = await this.parcelService.getParcelById(+id);
      this.isEdit = true;
    }
  }

  async saveParcel() {
    if (this.isEdit) {
      await this.parcelService.updateParcel(this.parcel.id!, this.parcel);
    } else {
      await this.parcelService.addParcel(this.parcel);
    }
    this.router.navigate(['/']);
  }
}
