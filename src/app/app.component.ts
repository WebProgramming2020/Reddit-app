import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): Boolean {
    console.log(`Adding article title ${title.value} :  and adding link ${link.value}: `)
    return false;
  }
}
