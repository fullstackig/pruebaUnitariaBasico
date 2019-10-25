import { AuthService } from './../../Services/auth.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

// 3
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let auth: AuthService

  // 3
  let el: DebugElement;

  //1
  // beforeEach(() => { 
  //   service = new AuthService()
  //   component = new LoginComponent(service)
  // });


  beforeEach(async(() => { // 2
    // refine el módulo de prueba declarando el componente de prueba
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    })
      .compileComponents();

    //Se crea el componente
    fixture = TestBed.createComponent(LoginComponent);

    //obtener el componente de prueba del fixture
    component = fixture.componentInstance;

    // el servicio proporcionado desde testbed
    auth = TestBed.get(AuthService);

    //fixture.detectChanges();

    // 1. un fixture es un contenedor para un componente y su plantilla.
    // 2. Creamos una instancia del componente fixture a través de TestBed, esto inyecta el AuthService en el constructor de componentes.
    // 3. Podemos encontrar el componente real desde el componentInstance en el dispositivo
    // 4. Podemos conseguir resolver dependencias usando el inyector TestBed usando la función get.

    // Cuando usar cuando
    // Nos permite probar la interacción de una directiva o componente con su plantilla. 
    // Nos permite probar fácilmente la detección de cambios. 
    // Nos permite probar y usar Angulars DI framework, 
    // Nos permite probar usando la configuración de NgModule que usamos en nuestra aplicación. 
    // Nos permite probar la interacción del usuario mediante clics y campos de entrada.

    //3
    el = fixture.debugElement.query(By.css('a'));
    // 1. Hemos importado algunas clases más que se necesitan al interactuar con una vista de componentes, DebugElement y By.
    // 2. Tenemos otra variable llamada el que contiene algo llamado DebugElement.
    // 3. Almacenamos una referencia a un elemento DOM en nuestra variable el.
  }));




  afterEach(() => {
    localStorage.removeItem('token')
    auth = null
    component = null
  })


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Función needLogin debería devolver true cuando un usuario no está autenticado', () => {
    expect(component.needLogin()).toBeTruthy()
  })

  // Este es un llamado real al servicio
  it('Función needLogin debería devolver false cuando un usuario ya se encuentra autenticado', () => {
    localStorage.setItem('token', '123456')
    expect(component.needLogin()).toBeFalsy()
  })


  // Mock
  class MockAuthService extends AuthService {
    authenticated = false;

    isAuthenticated() {
      return this.authenticated;
    }
  }


  // Vamos a usar un spy, esto se utiliza para poder reaccionar según una respuesta necesaria.
  let spy: any
  it('Devuelve falso cuando el usuario no está autenticado', () => {
    spy = spyOn(auth, 'isAuthenticated').and.returnValue(false);
    expect(component.needLogin()).toBeTruthy()
    expect(auth.isAuthenticated).toHaveBeenCalled();
  })

  it('Devuelve true cuando el usuario está autenticado', () => {
    debugger;
    //spy = spyOn(auth, 'isAuthenticated').and.returnValue(true);
    expect(component.needLogin()).toBeFalsy()
    expect(auth.isAuthenticated).toHaveBeenCalled();
  })

  it('prueba con parametros', () => {
    spy = spyOn(auth, 'hola').and.returnValue({ black: true });
    expect(auth.hola('sdfs', false)).toEqual({ black: true })
  })


  //3
  it('botón de inicio de sesión oculto cuando el usuario está autenticado', () => {
    // no ha realizado ninguna detección de cambios, por lo que el contenido está en blanco.
    expect(el.nativeElement.textContent.trim()).toBe('');

    // Activa la detección de cambios y esto permite que la plantilla se actualice al valor inicial que es Iniciar sesión ya que por         
    // por defecto no estamos autenticados
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');

    //Cambiar el estado de autenticación a verdadero
    spyOn(auth, 'isAuthenticated').and.returnValue(true);

    //¡La etiqueta todavía es Login! Necesitamos changeDetection para ejecutar y angular para actualizar la plantilla.
    expect(el.nativeElement.textContent.trim()).toBe('Login');

    // Activamos el cambio
    fixture.detectChanges();

    // Ahora el label es logout.
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  })

});
