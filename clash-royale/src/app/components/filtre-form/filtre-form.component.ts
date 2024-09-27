import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'filtre-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatButton,MatSelectModule,ReactiveFormsModule],
  templateUrl: './filtre-form.component.html',
  styleUrl: './filtre-form.component.css'
})
export class FiltreFormComponent {
  searchText = signal('');

  @Output() emitValue : EventEmitter<{text:string,select:string}> = new EventEmitter();
  form: FormGroup = new FormGroup({
    pokemon: new FormControl(''),
    Selectpokemon: new FormControl('')
  });
  onSubmit() {

    this.searchText.set(this.form.value.pokemon)

    this.emitValue.emit(this.form.value.pokemon)
  }

}
