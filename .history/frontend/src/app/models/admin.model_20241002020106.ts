export class Admin {
  constructor(
    public id: number,
    public name: string,
    public role: string,
    public username: string, // Añade esta propiedad
    public password: string  // Añade esta propiedad
  ) {}
}
