import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoovieService } from '../moovie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public getValue = null;
  public filme = new Array<any>();

  constructor(private MoovieService: MoovieService, private router:ActivatedRoute) { }

  ngOnInit() {
    this.getValue= this.router.snapshot.paramMap.get("id")
    console.log(JSON.parse(this.getValue))

    this.MoovieService.getMovieIdData(this.getValue).subscribe(
      data => {
        const response = (data as any);
        //const objeto_retorno = JSON.parse(response._body);
        console.log("Load data online");
        console.log(response);
        this.filme = response;
    })
  }

}
