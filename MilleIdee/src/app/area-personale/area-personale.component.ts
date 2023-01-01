import { Component, OnInit } from '@angular/core';
import { ILana } from '../model/lana';
import { LogInService } from '../services/log-in.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaPersonaleService } from '../services/area-personale.service';

@Component({
  selector: 'app-area-personale',
  templateUrl: './area-personale.component.html',
  styleUrls: ['./area-personale.component.css']
})
export class AreaPersonaleComponent implements OnInit {

  username?: string | null;
  resp: any;
  loggedOut = false;

  constructor(private router: Router, private route: ActivatedRoute, private areaService: AreaPersonaleService) { }

  lanaModel?: ILana;

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
  }

  logOut() {
    localStorage.clear();
    this.loggedOut = true;
    this.router.navigate(['log-in']);
  }
  // createUser(user: ILana) {
  //   this.areaService.createBusinessUser(user).subscribe({
  //     // response:(response: any) => this.resp = response; ,
  //     // error:(err: any) => {
  //     //   this.resp = 'This operation is not allowed';
  //     //   console.log(err)
  //     // }
  //   });
  // }


}
