import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBuWcBJ3wxEl0noyU1EdzZ1-fjCfEWVDz0',
  databaseURL: 'https://chatapp-169a6.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatapp';

  constructor() {
    firebase.initializeApp(config);
  }
}
