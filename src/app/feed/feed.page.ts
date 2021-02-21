import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public user_name:string = "Ramon Lima Var";
  public user_noise:number = 0;

  constructor() { }

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
    //this.mensagemAlert();
  }

}
