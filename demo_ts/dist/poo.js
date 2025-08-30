"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = exports.Persona = void 0;
class Persona {
    cedulaIdentidad;
    nombres;
    primerApellido;
    segundoApellido;
    fechaNacimiento;
    celular;
    constructor(cedulaIdentidad, nombres, primerApellido, segundoApellido, fechaNacimiento, celular) {
        this.cedulaIdentidad = cedulaIdentidad;
        this.nombres = nombres;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.fechaNacimiento = fechaNacimiento;
        this.celular = celular;
    }
    saludar() {
        console.log(`Soy ${this.nombres} ${this.primerApellido} y mi CI es ${this.cedulaIdentidad}`);
    }
}
exports.Persona = Persona;
class Estudiante extends Persona {
    carnetUniversitario;
    constructor(cedulaIdentidad, nombres, primerApellido, segundoApellido, fechaNacimiento, celular, carnetUniversitario) {
        super(cedulaIdentidad, nombres, primerApellido, segundoApellido, fechaNacimiento, celular);
        this.carnetUniversitario = carnetUniversitario;
    }
    saludar() {
        console.log(`Soy ${this.nombres} ${this.primerApellido} y mi CU es ${this.carnetUniversitario}`);
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=poo.js.map