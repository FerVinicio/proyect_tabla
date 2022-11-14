import { CreateColumn } from './components/Mui_Table/utils/utils';

const headCells = [
    /*           field         type,   disablePadding,   title                 */
    CreateColumn('name'     ,'string'   ,false         ,'Dessert (100g serving)'),
    CreateColumn('calories' ,'number'   ,false        ,'Calories'),
    CreateColumn('fat'      ,'number'   ,false        ,'Fat (g)'),
    CreateColumn('carbs'    ,'number'   ,false        ,'Carbs (g)'),
    CreateColumn('protein'  ,'number'   ,false        ,'Proteina (g)'),
  ];


  const getSnrFederalColumns = [
        /*           field              type,        disablePadding,        title      */
    CreateColumn("tipoCandidatura",  "string",          false,          "Tipo de candidatura"),
    CreateColumn("circunscripcion",  "string",          false,          "Circuncripción"),
    CreateColumn("entidad",          "string",          false,          "Entidad"),
    CreateColumn("distrito",         "string",          false,          "Distrito"),
    CreateColumn("actorPolitico",    "string",          false,          "Actor Político"),
    CreateColumn("nombre",           "string",          false,          "Nombre"),
    CreateColumn("claveElector",     "string",          false,          "Clave de elector"),
    CreateColumn("genero",           "string",          false,          "Género"),
    CreateColumn("accionAfirmativa", "string",          false,          "Acción afirmativa"),
  ];

  export {headCells, getSnrFederalColumns}