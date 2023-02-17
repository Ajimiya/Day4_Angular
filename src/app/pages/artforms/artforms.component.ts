import { Component } from '@angular/core';
import { data } from 'src/assets/data';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-artforms',
  templateUrl: './artforms.component.html',
  styleUrls: ['./artforms.component.css']
})
export class ArtformsComponent {
  artforms=data
  ngOnInit(): void {

    this.artforms=data
  }
  constructor(private router:Router){}
  showmore(id:any)
  {
    localStorage.setItem('id',id)
     this.router.navigate(['/singlepage']);
  }

}

