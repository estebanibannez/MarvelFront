import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private _snackBar: MatSnackBar,
              private _authService:AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get data() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    } else {
      localStorage.setItem("firstname", this.data.firstname.value);
      localStorage.setItem("lastname", this.data.lastname.value);
      localStorage.setItem("email", this.data.email.value);
      // localStorage.setItem("password", this.data.password.value);

      console.log(this.registerForm.value);

      this._authService.signUp(this.registerForm.value).subscribe(result => {
        console.log(result)
        this._snackBar.open('Register Successfully', 'Success', {
          duration: 3000,
        });
        this.router.navigate(['/login']);

      }, (err) => {
        console.log(err.error.error.message);
        if(err.error.error.message =='WEAK_PASSWORD'){
          this._snackBar.open('', 'La contraseña debe ser superior a 6 caracteres, intente con otra', {
            duration: 3000,
          });
        }else{
          this._snackBar.open('', 'El correo ya se encuentra registrado, intente con otro', {
            duration: 3000,
          });
        }
      
      });


    }
  }
}
