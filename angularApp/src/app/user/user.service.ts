import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiUrl + 'angular/dataservis.php';
  constructor(private http: HttpClient) { }

  getSeriesById(id: number) {
    return this.http.get(this.url + '?page_id=formverileri&formid=855&kayitid=' + id);
  }

  getSerieses(category: string) {
    return this.http.get(this.url + '?page_id=dizileriGetir&category=' + category);
  }

  getSeriesesEpisodes() {
    return this.http.get(this.url + '?page_id=formgetir&formid=862&sutunlar=bolumno,diziadi,sezon,yayintarihi,bolumkapagi');
  }

  getActors() {
    return this.http.get(this.url + '?page_id=oyunculariGetir');
  }
}
