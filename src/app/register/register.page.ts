import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = "";
  validation_messages = {
    email: [
      { type: "required", message: "El email es obligatorio!" },
      { type: "pattern", message: "Email invalido, rectifiquelo" },
      { type: "maxlength", message: "Su email debe ser de maximo 70 caracteres" } //Validaor de longitud maxima
    ],
    password: [
      { type: "required", message: "Por Favor ingrese una Contraseña"},
      { type: "minlength", message: "Su contraseña debe ser al menos 6 caracteres" },
      { type: "maxlength", message: "Su contraseña debe ser de maximo 30 caracteres" } //Validaor de longitud maxima
    ],
    nombre: [
      { type: "required", message: "El nombre es obligatorio!" },
      { type: "minlength", message: "Su nombre debe tener al menos 3 caracteres" }, //Validator de longitud minima
    ],
    apellido: [
      { type: "required", message: "El apellido es obligatorio!" },
      { type: "minlength", message: "Su apellido debe tener al menos 3 caracteres" }, //Validator de longitud minima
    ]
  }
  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private storage: Storage,private authService: AuthenticateService) {
    this.storage.create();
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$"),
          Validators.maxLength(70)//Nuevo validator
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),//nuevo validator
        ])
      ),
      nombre: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3)//nuevo validator
        ])
      ),
      apellido: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3)//nuevo validator
        ])
      )
    });
   }

  ngOnInit() {
  }

  register(registerData){
    
    this.authService.registerUser(registerData).then(()=> {
      this.navCtrl.navigateBack("/login");
    } );
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login")
  }
}
