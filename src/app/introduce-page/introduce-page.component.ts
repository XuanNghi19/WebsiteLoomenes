import { Component } from '@angular/core';

@Component({
  selector: 'Loomenes-introduce-page',
  templateUrl: './introduce-page.component.html',
  styleUrls: ['./introduce-page.component.css']
})
export class IntroducePageComponent {
  openVideo(urlVideo: string) {
    window.open(urlVideo, '_blank')
  }
}
