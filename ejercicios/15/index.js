'use strict'
//Crea un objeto que almacene la información de tu escuela o universidad, incluyendo su nombre, ubicación, número de estudiantes,
//  si ofrece clases en línea (true/false) y una lista de las carreras que oferta.
const universidad={
    name: "Instituto Sudamericano",
    location: "Simón Bolívar 2-50, Cuenca, Ecuador",
    numberStudents: 200,
    onlineclasses: false,
    careerListings:["desrrollo de software", "diseño grafico","gastronomia","marketing digital", "turismo","talento humano", "enfermeria", "educacion digital","contabilidad y asesoria tributaria","red y telecomunicaciones", "electricidad"]
}
alert(universidad.careerListings[0])