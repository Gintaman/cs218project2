import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

/*
{
  "type" : "rankings/character",
  "api_key" : "0ff50ba5170e260b18d16c8c5c007ef9",
  "characterName" : "outbreak",
  "serverName" : "whitemane",
  "serverRegion" : "US",
  "metric" : "bossdps"
}
*/

interface Payload  {
  type: string;
  api_key: string;
  characterName: string;
  serverName: string;
  serverRegion: string;
  metric: string;
}


@Component({
  selector: 'app-main',
  templateUrl: './main.template.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public options = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    console.log('fetch!');
    this.fetch();
  }

  public fetch() {
    const payload: Payload = {
      type : 'rankings/character',
      api_key : '0ff50ba5170e260b18d16c8c5c007ef9',
      characterName : 'outbreak',
      serverName : 'whitemane',
      serverRegion : 'US',
      metric : 'bossdps'
    };

    const URL = 'https://cors-anywhere.herokuapp.com/https://349h9q3hrk.execute-api.us-west-1.amazonaws.com/test/wclogs';

    this.http.post(URL, payload).subscribe((data) => {
      console.log('got: ', JSON.parse(JSON.stringify(data)));
    });
  }
}
