class Usuario { 
    constructor(Nombre, Apellido, Libros, Mascotas){
        this.Nombre = Nombre
        this.Apellido = Apellido
        this.Libros = Libros
        this.Mascotas = Mascotas
    }

    addMascota(Mascota){
        this.Mascotas.push(this.Mascota);
    }

    countMascotas(){
        return this.Mascotas.length;
    }

    cantidadMascotas(numeroMascotas) {
        return console.log(`cantidad: ${numeroMascotas}`);
    }

    addBook(nombre, autor){
        this.Libros.push({
            nombre: nombre,
            autor: autor
        });
    }

    getFullName(){
        console.log(`Su nombre completo es ${this.Nombre} ${this.Apellido}`);
    }

    getBookNames(){
        let nombreLibros = []
        this.Libros.forEach((libro) => nombreLibros.push(libro.nombre));
        return nombreLibros;
    }

    mostrarLibros(LibroNombre){
        LibroNombre.forEach((nombre) => {
            console.log(`libro: ${nombre}`)
        });
    }

}

const usuario = new Usuario(

    "Pepe","Grillo",

    [
        { nombre: "El señor de los anillos", autor: "J. R. R. Tolkien" },
        { nombre: "El psicoanalista", autor: "John Katzenbach" },
    ],

    ["gato", "pajaro", "perro"]
);


///////////////////////////////////////////////////////////////////////////////
usuario.getFullName();

usuario.addMascota("serpiente");

let numeroMascotas = usuario.countMascotas();

usuario.cantidadMascotas(numeroMascotas);

usuario.addBook("Orgullo y prejuicio", "Jane Austen");

let nombreLibros = usuario.getBookNames();

usuario.mostrarLibros(nombreLibros);