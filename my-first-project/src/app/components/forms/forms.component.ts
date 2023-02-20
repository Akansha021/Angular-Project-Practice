import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  person: FormGroup | any;

  ngOnInit(){
    this.person=new FormGroup({
      email : new FormControl(this.person,[Validators.required, Validators.email]),
      password : new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })

    });
  }
  get email(){
    return this.person.get('email');
  }
  constructor(private fb:FormBuilder){

  }
  onSubmit() : void{
    console.log(this.person.value);
    }

  
}
