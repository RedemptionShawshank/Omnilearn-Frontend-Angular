import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private router:Router,private service:StateService){}

  goToHomepage(){
    this.router.navigate(['/home']);
    this.service.setTopicListFlag(true);
    window.scrollTo({top:0,behavior:'smooth'});
  }

}
