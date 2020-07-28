import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesign } from '../material-design/material';
import { DetailAlamatComponent } from '../buku-alamat/detail-alamat/detail-alamat.component';
import { DialogKonfirmasiComponent } from '../buku-alamat/dialog-konfirmasi/dialog-konfirmasi.component';
import { TambahAlamatComponent } from '../buku-alamat/tambah-alamat/tambah-alamat.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TamuComponent } from './tamu/tamu.component';
import { AlamatComponent } from './alamat/alamat.component';
import { HttpClientModule } from '@angular/common/http';
import {} from './alamat/alamat.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: 'alamat',
    component: AlamatComponent,
  },
];
@NgModule({
  declarations: [
    DetailAlamatComponent,
    DialogKonfirmasiComponent,
    TambahAlamatComponent,
    TamuComponent,
    AlamatComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesign,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    HttpClientModule,
  ],
  entryComponents: [
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent,
  ],
})
export class BukuAlamatModule {}
