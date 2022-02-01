import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }

  slides = [
    {
      title: "Bienvenido",
      subtitle: "",
      description: "Musi-k es una aplicación de musica diseñada para la practica y el desarrollo en el seminario",
      image: "assets/images/slide1.jpg",
      alt: "imagen de slide1"
    },
    {
      title: "Escoge tu musica favorita",
      subtitle: "",
      description: "Disfruta de la experiencia de escuchar la musica que más  te gusta en un solo lugar",
      image: "assets/images/slide2.jpg",
      alt: "imagen de slide2"
    },
    {
      title: "¡Comparte con tus amigos!",
      subtitle: "",
      description: "Comparte la experiencia de escuchar la musica del momento en compañia de amigos",
      image: "assets/images/slide3.jpg",
      alt: "imagen de musica 3",
    },
    {
      title: "¿Listo para empezar?",
      subtitle: "",
      description: "",
      image: "assets/images/slide4.jpg",
      alt: "imagen de musica 4",
      icon: "chevron-forward-circle-outline"
    }
  ]
  constructor(private router: Router, private storage: Storage) { 
    this.storage.create();
  }

  finish() {
    this.storage.set("intro", true);
    this.router.navigateByUrl("/menu/home");
  }

  ngOnInit() {
  }

}
