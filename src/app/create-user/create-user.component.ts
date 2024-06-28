import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

  user = {
    name: '',
    skills: '',
    experience: 0,
    profilePhoto: null
  };

  onSubmit() {
    // Handle form submission logic here
    console.log(this.user);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.user.profilePhoto = file;
    }
  }
}