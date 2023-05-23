import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPersonasComponent } from './registrar-personas.component';

describe('RegistrarPersonasComponent', () => {
  let component: RegistrarPersonasComponent;
  let fixture: ComponentFixture<RegistrarPersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPersonasComponent]
    });
    fixture = TestBed.createComponent(RegistrarPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
