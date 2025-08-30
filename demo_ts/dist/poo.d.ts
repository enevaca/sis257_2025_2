export declare class Persona {
    cedulaIdentidad: string;
    nombres: string;
    primerApellido: string;
    segundoApellido: string;
    fechaNacimiento: Date;
    celular: number;
    constructor(cedulaIdentidad: string, nombres: string, primerApellido: string, segundoApellido: string, fechaNacimiento: Date, celular: number);
    saludar(): void;
}
export declare class Estudiante extends Persona {
    carnetUniversitario: string;
    constructor(cedulaIdentidad: string, nombres: string, primerApellido: string, segundoApellido: string, fechaNacimiento: Date, celular: number, carnetUniversitario: string);
    saludar(): void;
}
//# sourceMappingURL=poo.d.ts.map