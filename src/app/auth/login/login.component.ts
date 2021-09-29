import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // template: `
  //     <mat-card>
  //       <mat-card-header>
  //            <mat-card-title>{{ titulo | uppercase }}</mat-card-title>
  //       </mat-card-header>
  //     <mat-card-content>
  //       <form [formGroup]="form" (ngSubmit)="submit()">
  //         <p>
  //           <mat-form-field>
  //             <input type="text" matInput placeholder="Username" formControlName="username">
  //           </mat-form-field>
  //         </p>

  //         <p>
  //           <mat-form-field>
  //             <input type="password" matInput placeholder="Password" formControlName="password">
  //           </mat-form-field>
  //         </p>

  //         <!-- <p *ngIf="error" class="error">
  //           {{ error }}
  //         </p> -->

  //         <div class="button">
  //           <button type="submit"mat-button color="primary">Ingresar</button>
  //         </div>

  //       </form>
  //     </mat-card-content>
  //   </mat-card>
  // `,
  // styles: [
  //   `
  //     :host {
  //       display: flex;
  //       justify-content: center;
  //       margin: 100px 0px;
  //     }
  //     .mat-card {
  //       background:none
  //     }
  //     .mat-card-header{
  //       background-color:#c2185b !important;
  //       padding:5px !important;
  //       border-radius: 15px;
  //       display: flex;
  //       justify-content: center;
  //       flex-direction: row;
  //     }

  //     .mat-card{
  //       padding:0 !important;
  //       box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  //       transition: 0.3s;
  //       border-radius: 15px; /* 5px rounded corners */
  //     }

  //     .mat-card-content{
  //       padding:35px !important;

  //     }

  //     .mat-form-field {
  //       width: 100%;
  //       min-width: 300px;

  //     }

  //     mat-card-title,
  //     mat-card-content {
  //       display: flex;
  //       justify-content: center;

  //     }

  //     .error {
  //       padding: 16px;
  //       width: 300px;
  //       color: white;
  //       background-color: red;
  //     }

  //     .button {
  //       display: flex;
  //       justify-content: flex-end;
  //     }
  //   `,
  // ],
  // templateUrl: './login.component.html',
  // styleUrls: ['./login.component.scss'],

})


export class LoginComponent implements OnInit {

  titulo:string = "acceso usuario"

  loginForm!: FormGroup;
  submitted = false;
  // form: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  constructor(private fb:FormBuilder,
              private router: Router,
              private _snackBar: MatSnackBar,
              private _authService: AuthService,) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
    });
  }
  get data() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
        this._snackBar.open('', 'Falta llenar campos.', {
          duration: 3000,
        });
      return;

    // } else if (this.data.email.value == localStorage.getItem("email") && this.data.password.value == localStorage.getItem("password")) {
    //   this.router.navigate(['/home']);
    } else {

      Swal.fire('Espere un momento...');
      Swal.showLoading();

      this._authService.login(this.loginForm.value)
      .subscribe((result) => {
        debugger
        Swal.close();
        this.router.navigate(['/home']);
      
      }, (err) => {
        console.log(err.error.error.message);
        // this.submitted = true;
        Swal.fire('Error al autenticar','','error');
      });

    }
  }

}
