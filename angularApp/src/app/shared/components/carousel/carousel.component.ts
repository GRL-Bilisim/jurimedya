import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild("stage") stageRef: ElementRef<HTMLElement>;
  @ViewChildren("slide") slidesQuery: QueryList<ElementRef<HTMLElement>>;
  windowWidth: number = window.innerWidth;
  //TODO: Make the slides observable and display the slides depending on its next value to avoid using setTimeout
  // slides: { id: number; image: string; text?: string }[] = [];
  activeSlideIndex: number;
  interval: number = 1000;
  btnClicked: boolean = false;
  counter: number = 0;
  timer = timer(0, this.interval);
  slides = [
    { id: 0, image: "https://www.jurimedya.com/maratonservices/diziler/m9rtgmnnxe.jpg", title: "ADIM FARAH", description: "Fox TV'nin yeni sezon onayı alan tek dizisi olan Adım Farah ilk sezonunda 14 bölüm yayınlandı. Çarşamba akşamları ekranlara gelen dizi, oğluyla yasa dışı bir hayat süren Farah'ın bir cinayete şahit olmasıyla birlikte değişen yaşamını konu ediniyor.", starring: ["https://www.jurimedya.com/maratonservices/oyuncular/zoafi94dj8.jpg", "https://www.jurimedya.com/maratonservices/oyuncular/9daat1xg3m.jpg", "https://www.jurimedya.com/maratonservices/oyuncular/uuwyo61hhj.jpg", "https://www.jurimedya.com/maratonservices/oyuncular/dsep2tdl90.jpg", "https://www.jurimedya.com/maratonservices/oyuncular/pb2mrlgy1z.jpg"]},
    { id: 1, image: "https://im.showtv.com.tr/2023/09/13/ver1694593175/3621319_1920x1080.jpg", title: "KIZILCIK ŞERBETİ", description: "Çocukken annelerinin başka bir adama kaçmak için terk ettiği iki kardeş olan Gülcemal ve Gülendamın hayatı annelerinin gidişiyle paramparça olur. Zorluklar içinde büyüyen iki kardeş kendilerine imrenilecek bir hayat kurarak yıllar sonra Bursaya dönerler.Gülcemalin tek amacı annesinden intikam almaktır. Onun herşeyini alacak, sonunda kapısına muhtaç edecek ve annesi ona 'İyi ki seni doğurmuşum oğlum' diyecektir.", starring: ["https://www.jurimedya.com/maratonservices/oyuncular/p0ov73wph1.jpg", "https://www.jurimedya.com/maratonservices/oyuncular/ci0cpswsvh.jpg", "https://www.jurimedya.com/maratonservices/oyuncular/8azye4oqxc.jpg", "https://icdn.tgrthaber.com.tr//images/haberler/23-03/31/adsiz-tasarim-2023-03-31t165537170.jpg", "https://im.showtv.com.tr/2023/04/11/3581933_8ab49c0684e3595a8ceff013076443c4_640x640.jpg"]},
    { id: 2, image: "https://img.dizi.la/uploads/49050/FmYB-RFacAAl5IR.jpeg", title: "ATEŞ KUŞLARI", description: "Ateş Kuşları, Bozdağ Film imzalı, ilk bölümü 13 Ocak 2023 tarihinde yayımlanan, yönetmenliğini Benal Tairi, Gökhan Ayiz, Yıldız Aşanboğa ve Bülent İşbilen'in üstlendiği, senaryosunu Ayşe Ferda Eryılmaz ve Nehir Erdem'in kaleme aldığı dram türündeki Türk televizyon dizisidir.", starring: ["https://www.jurimedya.com/maratonservices/oyuncular/r7uufk52xh.jpg", "https://www.jurimedya.com/maratonservices/oyuncular/8azye4oqxc.jpg", "https://www.jurimedya.com/maratonservices/oyuncular/3qzfkpewf6.jpg", "https://www.jurimedya.com/maratonservices/oyuncular/gqpw0v57ta.jpg", "https://i.hbrcdn.com/haber/2023/06/16/ates-kuslari-kara-kimdir-ates-kuslari-kara-buyuk-16037778_1123_amp.jpg"]},
  ]

  @HostListener('window:resize', ['$event']) resizeImage() {
    this.windowWidth = window.innerWidth;
  }

  // "I'm a teapot",
  // "Short and stout",
  // "Here is my handle",
  // "Here is my spout",
  // "When I get all steamed up",
  // "Hear me shout",
  // "Tip me over and pour me out!"

  constructor() {
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.activeSlideIndex = Math.floor(this.slides.length / 2) - 1;
    //ToLearn: why is slidesQuery not defined in moveSlides() here, while it is defined if moveSlides is called in the timer.subscribe() below?
    // this.moveSlides();
    // moveSteps() is called every time the timer emits a value with the same parameters everytime
    this.timer.subscribe(() => {
      if (this.counter % 5 == 0) {
        this.counter = 0;
        this.moveSteps(1);
      }
      this.counter++;
    });
  }

  preventMultipleClicks(steps: number): void {
    if (this.btnClicked == false) {
      this.btnClicked = true;
      this.moveSteps(steps)
      setTimeout(() => {
        this.btnClicked = false;
      }, 500);
    }
    else return;
  }

  // InitializeSlides(): void {
    // for (let i = 0; i < 10; i++) {
    //   this.slides.push({
    //     id: i,
    //     image: "assets/123.jpg"
    //   });
    // }
    // this.products.forEach((product, i = 0) => {
    //   this.slides.push({ id: i, image: product.photoUrl, text: product.name});
    //   i++;
    // });
  // }

  moveSlides(): void {
    const arrayHalf = Math.floor(this.slides.length / 2);
    this.stageRef.nativeElement.setAttribute("style", "transform: translateX(-" + Math.ceil(arrayHalf * 80) + "%);");

    for (let i = 0; i < this.slidesQuery.length; i++) {
      const element = this.slidesQuery.toArray()[i].nativeElement as HTMLElement;
      const ElemId = Number(element.getAttribute("id"));
      const baseStyle = " display: flex; transform:\
        translateX("+ (100 * this.calcTransition(arrayHalf + ElemId)) + "%);\
        transition:height .5s ease-in-out, transform .5s ease-in-out, opacity .25s ease-in-out;";
      element.style.cssText = baseStyle;

      if (this.slides.length <= 3) {
        element.style.width = "85%"
        this.stageRef.nativeElement.setAttribute("style", "transform: translateX(-" + Math.ceil(arrayHalf * 85) + "%);");
      }

      if (ElemId === this.calcTransition(this.activeSlideIndex * 2)) {
        element.style.transform = "translateX(" + 100 * this.calcTransition(arrayHalf + ElemId) + "%) scaleY(1.1) scaleX(1.07)";
        element.style.zIndex = "1";
      }

      if (this.slides.length % 2 == 0) {
        if (ElemId === this.calcTransition(this.activeSlideIndex * 2 + arrayHalf - 1) ||
          ElemId === this.calcTransition(this.activeSlideIndex * 2 - arrayHalf)) {
          element.style.opacity = "0";
        }
      }
      else {
        if (ElemId === this.calcTransition(this.activeSlideIndex * 2 + arrayHalf) ||
          ElemId === this.calcTransition(this.activeSlideIndex * 2 - arrayHalf)) {
          element.style.opacity = "0";
        }
      }


    }
  }

  moveSteps(step: number): void {
    this.calcNextActiveSlide(step);
    this.moveSlides();
    this.counter = 1;
  }

  calcNextActiveSlide(step: number): void {
    let nextActive = this.activeSlideIndex + step;
    if (nextActive < 0) {
      this.activeSlideIndex = this.slides.length - 1;
    }
    else if (nextActive >= this.slides.length) {
      this.activeSlideIndex = nextActive % this.slides.length;
    }
    else {
      this.activeSlideIndex = nextActive;
    }
  }

  calcTransition(steps: number): number {
    let nextIndex = steps - this.activeSlideIndex;
    if (nextIndex < 0) {
      nextIndex += this.slides.length;
    }
    else if (nextIndex >= this.slides.length) {
      nextIndex %= this.slides.length;
    }
    return nextIndex;
  }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }
}
