import { Component, OnInit } from '@angular/core';
import { TambahAlamatComponent } from '../tambah-alamat/tambah-alamat.component';
import { MatDialog } from '@angular/material/dialog';
import { DetailAlamatComponent } from '../detail-alamat/detail-alamat.component';
import { DialogKonfirmasiComponent } from '../dialog-konfirmasi/dialog-konfirmasi.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-alamat',
  templateUrl: './alamat.component.html',
  styleUrls: ['./alamat.component.css'],
})
export class AlamatComponent implements OnInit {
  title: any;
  constructor(public dialog: MatDialog, public api: ApiService) {
    this.getData();
  }
  ngOnInit(): void {
    this.title = 'Daftar Alamat';
  }

  buatAlamat() {
    const dialogRef = this.dialog.open(TambahAlamatComponent, {
      width: '450px',
      data: null,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
    });
  }
  detailAlamat(item) {
    const dialogRef = this.dialog.open(DetailAlamatComponent, {
      width: '450px',
      data: item,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
    });
  }

  konfirmasiHapus(id) {
    const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        console.log('Menghapus data');
        this.api.hapus(id).subscribe((res) => {
          this.getData();
        });
      }
    });
  }
  dataAlamat: any = [];
  getData() {
    this.api.baca().subscribe((res) => {
      this.dataAlamat = res;
    });
  }

  editAlamat(data) {
    const dialogRef = this.dialog.open(TambahAlamatComponent, {
      width: '450px',
      data: data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
    });
  }
}
