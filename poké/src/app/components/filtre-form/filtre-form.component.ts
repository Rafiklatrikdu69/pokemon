import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'filtre-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatSelectModule,ReactiveFormsModule],
  templateUrl: './filtre-form.component.html',
  styleUrl: './filtre-form.component.css'
})
export class FiltreFormComponent implements OnInit {


  @Output() emitValue : EventEmitter<string> = new EventEmitter();
  form: FormGroup = new FormGroup({
    pokemon: new FormControl(''),
  });
  ngOnInit(): void {
    this.form.valueChanges.pipe(
      debounceTime(400), 
      distinctUntilChanged()
  ).subscribe(data => {
      this.emitValue.emit(data.pokemon)
    });    
  }


}
