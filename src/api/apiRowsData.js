
function createData(name, calories, fat, carbs, protein) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
    };
  }
  
  const getDessert = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    /*createData('Oreo', 437, 18.0, 63, 4.0),*/
  ];

  const getSNRFederal = [
    {tipoCandidatura:"Senaduría",  circunscripcion:"Federal",  entidad:"Campeche", distrito:"Prueba", actorPolitico:"Morena",  nombre:"María Gonzalez Chávez",  claveElector:"WEDF98898DSD",  genero:"F",  accionAfirmativa:"Prueba" }, 
    {tipoCandidatura:"Gobernador",  circunscripcion:"Local",  entidad:"Baja California", distrito:"Prueba", actorPolitico:"PRI",  nombre:"Alberto Martinez Camacho",  claveElector:"SDFG878364SDF",  genero:"M",  accionAfirmativa:"Prueba" }, 
    {tipoCandidatura:"Presidente",  circunscripcion:"Federal",  entidad:"Ciudad de México", distrito:"Prueba", actorPolitico:"Morena",  nombre:"Ricardo Miranda Villanueva",  claveElector:"QWER977872LA",  genero:"M",  accionAfirmativa:"Prueba" }, 
    {tipoCandidatura:"Diputación",  circunscripcion:"Federal",  entidad:"Yucatán", distrito:"Prueba", actorPolitico:"PAN",  nombre:"Alejandro Pech Can",  claveElector:"PNSW865355RR",  genero:"M",  accionAfirmativa:"Prueba" }, 
    {tipoCandidatura:"Alcaldía",  circunscripcion:"Local",  entidad:"Chiapas", distrito:"Prueba", actorPolitico:"PAN",  nombre:"Rosario Pérez Moreno",  claveElector:"REDW098832WED",  genero:"F",  accionAfirmativa:"Prueba" },
    {tipoCandidatura:"Alcaldía",  circunscripcion:"Local",  entidad:"Campeche", distrito:"Prueba", actorPolitico:"PAN",  nombre:"Sandra Morales Baz",  claveElector:"REK098832WED",  genero:"F",  accionAfirmativa:"Prueba" },
    {tipoCandidatura:"Alcaldía",  circunscripcion:"Local",  entidad:"Chiapas", distrito:"Prueba", actorPolitico:"Morena",  nombre:"Javier García Bautista",  claveElector:"KHGS77483CD",  genero:"M",  accionAfirmativa:"Prueba" },
    {tipoCandidatura:"Alcaldía",  circunscripcion:"Local",  entidad:"Campeche", distrito:"Prueba", actorPolitico:"PRI",  nombre:"Elvia Romero Avila",  claveElector:"PLKDA24976K",  genero:"F",  accionAfirmativa:"Prueba" },
    {tipoCandidatura:"Alcaldía",  circunscripcion:"Local",  entidad:"Yucatán", distrito:"Prueba", actorPolitico:"Morena",  nombre:"Olga Camacho Díaz",  claveElector:"PLCV3553LLA",  genero:"F",  accionAfirmativa:"Prueba" }
];

  export {getDessert, getSNRFederal};