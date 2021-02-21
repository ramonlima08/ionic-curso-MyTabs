import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoovieService } from '../moovie.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public user_name:string = "Ramon Lima Var";
  public user_noise:number = 0;
  public object_feed = {
    title:"Ramon Lima",
    date:"21 Jan 2021",
    content:"E não somente isto, mas também nos gloriamos nas tribulações; sabendo que a tribulação produz a paciência, E a paciência a experiência, e a experiência a esperança. E a esperança não traz confusão, porquanto o amor de Deus está derramado em nossos corações pelo Espírito Santo que nos foi dado",
    bibliograph: "Romanos 5:3-5"
  }
  public lista_filmes = new Array<any>();

  constructor(private MoovieService: MoovieService, private router: Router) { }

  public somaDoisNumeros(num1:number, num2:number): number{
    let res=null;
    res = num1 + num2;
    return res;
  }

  public mensagemAlert(): void{
    alert("mensagem alert");
  }

  ngOnInit() {
    this.user_noise = this.somaDoisNumeros(3,10);
    
    this.MoovieService.getMoviePopularData().subscribe(
      data => {
        const response = (data as any);
        //const objeto_retorno = JSON.parse(response._body);
        console.log("Load data online");
        console.log(response);
        this.lista_filmes = response.results;
    })
  }

  public showMovieClick(id:number): void {
    //alert('cliquei aqui '+id);
    this.router.navigate(['details',{id:id}])
  }

}
