import { Injectable } from '@angular/core';
import axios from 'axios';
import { Parcel } from '../models/parcel.model';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {
  private baseUrl = 'http://localhost:8080/colis';

  async getParcels(): Promise<Parcel[]> {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  async getParcelById(id: number): Promise<Parcel> {
    const response = await axios.get(`${this.baseUrl}/${id}`);
    return response.data;
  }

  async getParcelsByCategory(category: string): Promise<Parcel[]> {
    const response = await axios.get(`${this.baseUrl}/categorie/${category}`);
    return response.data;
  }

  async addParcel(parcel: Parcel): Promise<Parcel> {
    const response = await axios.post(this.baseUrl, parcel);
    return response.data;
  }

  async updateParcel(id: number, parcel: Parcel): Promise<Parcel> {
    const response = await axios.put(`${this.baseUrl}/${id}`, parcel);
    return response.data;
  }

  async deleteParcel(id: number): Promise<void> {
    await axios.delete(`${this.baseUrl}/${id}`);
  }
}
