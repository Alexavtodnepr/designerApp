import {AfterViewChecked, Component, ElementRef, OnInit} from '@angular/core';
//
// const PhotoArr = {
//   logo : ['./assets/g1.png', './assets/g2.png', './assets/g3.png', './assets/g4.png', './assets/g5.png',],
//   postcards : ['./assets/stands.jpg', './assets/giftSertificate.jpg', './assets/postCard.jpg', './assets/noteBook.jpg', './assets/cardPrev.jpg', './assets/souvenir.jpg'],
//   card : ['./assets/stands.jpg', './assets/giftSertificate.jpg', './assets/postCard.jpg', './assets/noteBook.jpg', './assets/cardPrev.jpg', './assets/souvenir.jpg', './assets/decor.jpg', './assets/boardGame.jpg','./assets/giftBox.jpg'],
//   certificates: ['./assets/5.png', 'photo2.jpg', 'photo3.jpg', 'photo.jpg', 'photo2.jpg', 'photo3.jpg'],
//   drawing: ['./assets/5.png', 'photo2.jpg', 'photo3.jpg', 'photo.jpg', 'photo2.jpg', 'photo3.jpg'],
//   notebooks: ['./assets/2.png', 'photo2.jpg', 'photo3.jpg', 'photo.jpg', 'photo2.jpg', 'photo3.jpg'],
//   plates: ['./assets/2.png', 'photo2.jpg', 'photo3.jpg', 'photo.jpg', 'photo2.jpg', 'photo3.jpg'],
//   decoration: ['./assets/2.png', 'photo2.jpg', 'photo3.jpg', 'photo.jpg', 'photo2.jpg', 'photo3.jpg'],
//   souvenir: ['./assets/2.png', 'photo2.jpg', 'photo3.jpg', 'photo.jpg', 'photo2.jpg', 'photo3.jpg'],
//   boardGame: ['./assets/2.png', 'photo2.jpg', 'photo3.jpg', 'photo.jpg', 'photo2.jpg', 'photo3.jpg'],
//   boxes: ['./assets/2.png', './assets/1.png', './assets/3.png', './assets/4.png', './assets/5.png', './assets/4.png'],
//
// }

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})

export class MainComponent implements OnInit, AfterViewChecked {


  constructor(public el: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
  }
}
