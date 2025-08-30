export class Persona {
  constructor(
    public cedulaIdentidad: string,
    public nombres: string,
    public primerApellido: string,
    public segundoApellido: string,
    public fechaNacimiento: Date,
    public celular: number
  ) {}

  saludar(): void {
    console.log(`Soy ${this.nombres} ${this.primerApellido} y mi CI es ${this.cedulaIdentidad}`);
  }
}

export class Estudiante extends Persona {
  public carnetUniversitario: string;
  constructor(
    cedulaIdentidad: string,
    nombres: string,
    primerApellido: string,
    segundoApellido: string,
    fechaNacimiento: Date,
    celular: number,
    carnetUniversitario: string
  ){
    super(cedulaIdentidad, nombres, primerApellido, segundoApellido, fechaNacimiento, celular);
    this.carnetUniversitario = carnetUniversitario;
  }

  saludar(): void {
      console.log(`Soy ${this.nombres} ${this.primerApellido} y mi CU es ${this.carnetUniversitario}`);
  }
}