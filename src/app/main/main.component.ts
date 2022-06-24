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
  sizeArray: number[] = [];
  left: any = 0;
  step: number = 0;
  galleryWidth: number = 0;
  count: number = 0;
  imgArray: any[] = [];
  // modal = false;
  // image: string = '';
  // ArrayImg:any[] = [];
  // numberPhoto: number = 0;


  constructor(public el: ElementRef) {
  }

  ngOnInit(): void {
    // console.log(this.photoArr)
  }

  ngAfterViewChecked(): void {
    let block = this.el.nativeElement;
    let gallery = block.getElementsByClassName('wrapper-gallery');
    this.imgArray = gallery[0].children;
    this.galleryWidth = gallery[0].offsetWidth;
    if (this.galleryWidth <= 1100) {
      this.step = 250;
    } else {
      this.step = +(this.galleryWidth / this.imgArray.length);
    }
  }

  SizeAp() {
    if (this.count >= this.imgArray.length - 1) {
      this.count = 0;
      this.left = 0;
    } else {
      this.count++;
      this.left -= this.step;

    }
  }

  //
  // openGallery(photoList: any) {
  //   for(let key in PhotoArr){
  //     if(key === photoList){
  //       // @ts-ignore
  //       this.ArrayImg = PhotoArr[key];
  //     }
  //   }
  //   this.modal = true;
  //   let body = this.el.nativeElement.offsetParent;
  //   if(this.modal){
  //     body.style.overflow = 'hidden';
  //   }else{
  //     body.style.overflow = 'scroll';
  //   }
  //   this.image = this.ArrayImg[this.numberPhoto]
  // }
  //
  // gallery(array: string[]){
  //   if(this.modal){
  //     this.ArrayImg = array;
  //     this.image = array[this.numberPhoto]
  //   }
  // }
  //
  // targetPict(event: any) {
  //   console.log(event.target.src)
  //   this.image = event.target.src;
  // }
  //
  // rightStep() {
  //   if(this.ArrayImg.length == 1){
  //     this.image = this.ArrayImg[0]
  //   }
  //   if(this.numberPhoto == this.ArrayImg.length-1){
  //     this.numberPhoto = 0;
  //   }
  //   this.numberPhoto++;
  //   this.image = this.ArrayImg[this.numberPhoto]
  // }
  //
  // leftStep() {
  //   if(this.ArrayImg.length == 1){
  //     this.image = this.ArrayImg[0]
  //   }
  //   if(this.numberPhoto<=0){
  //     this.numberPhoto = this.ArrayImg.length -1;
  //   }else{
  //     this.numberPhoto--;
  //     this.image = this.ArrayImg[this.numberPhoto];
  //   }
  // }
  //
  // closeModal() {
  //   this.modal = false;
  //   let body = this.el.nativeElement.offsetParent;
  //   body.style.overflow = 'scroll';
  //   this.numberPhoto = 0;
  // }
}
