import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoovieService {
  private url_base = "https://api.themoviedb.org/3/";
  private language = "pt-BR";
  private api_key = "e6c0a0888bd3c7ea54ad8e0eabd46587";

  constructor(private http: HttpClient) { }

  getMovieLatestData(){
    return this.http.get(
      this.url_base+"movie/latest?api_key="+this.api_key+"&language="+this.language
    );
  }

  getMoviePopularData(){
    return this.http.get(
      this.url_base+"movie/popular?api_key="+this.api_key+"&language="+this.language
    );
  }

  getMovieIdData(id:number){
    return this.http.get(
      this.url_base+"movie/"+id+"?api_key="+this.api_key+"&language="+this.language
    );
  }

}
