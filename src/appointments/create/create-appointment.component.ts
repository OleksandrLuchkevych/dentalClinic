import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  appointmentForm!: FormGroup;
  doctors: string[] = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form with default values and validators
    this.appointmentForm = this.fb.group({
      patientName: ['', Validators.required],
      doctorName: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required],
    });
  }

  // Handle form submission
  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const appointmentData = this.appointmentForm.value;
      console.log('Appointment Created:', appointmentData);

      // Simulate saving to the server or database
      alert(`Appointment created successfully for ${appointmentData.patientName}`);

      // Reset the form after submission
      this.appointmentForm.reset();
    }
  }
}
