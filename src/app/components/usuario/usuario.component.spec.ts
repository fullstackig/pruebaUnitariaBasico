import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioComponent } from './usuario.component';

describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //Aquí inicia lo nuestro.
  it('La variable usuarioActivo Debe debe comenzar con el usuario inactivo', () => {
    expect(component.usuarioActivo).toBeFalsy();
  })

  it('El método activarUsuario Debe activar el usuario', () => {
    component.activarUsuario()
    expect(component.usuarioActivo).toBeTruthy();
  })
});
