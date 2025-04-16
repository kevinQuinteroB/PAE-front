import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginUser!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    
  ) {}

  ngOnInit(): void {
    localStorage.clear()
    this.loginUser = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  login(){
    if (this.loginUser.valid) {
      const datos = this.loginUser.value;

      this.userService.autenticarUser(datos).subscribe({
        next: res => {
          console.log('Login Exitoso', res);
          this.loginUser.reset();
        },
        error: (error: any) => {
          console.error('Error al enviar', error);
        }
      });
    }
  }
}
