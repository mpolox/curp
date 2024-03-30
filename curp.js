// Definiciones
const genero = ["H","M"];
const nombresHombre = [
    "ADOLFO",
    "ALEJANDRO",
    "ALVARO",
    "BENJAMIN",
    "CARLOS",
    "DANIEL",
    "DIEGO",
    "EDUARDO",
    "EMILIO",
    "FERNANDO",
    "GABRIEL",
    "GONZALO",
    "GUILLERMO",
    "HECTOR",
    "IGNACIO",
    "ISMAEL",
    "JAVIER",
    "JOAQUIN",
    "JOSE",
    "JUAN",
    "LUIS",
    "MANUEL",
    "MARCOS",
    "MARTIN",
    "MIGUEL",
    "NICOLAS",
    "OSCAR",
    "PABLO",
    "PEDRO",
    "RAFAEL",
    "RAMON",
    "ROBERTO",
    "RODRIGO",
    "RUBEN",
    "SANTIAGO",
    "SEBASTIAN",
    "SERGIO",
    "TOMAS",
    "VICENTE",
    "XAVIER",
    "YAGO",
    "ZACARIAS",
    "ABELARDO",
    "ADRIAN",
    "ALFREDO",
    "ANDRES",
    "ARTURO",
    "CESAR",
    "CRISTIAN",
    "DANTE",
    "DAVID",
    "FELIPE",
    "FRANCISCO",
    "GERMAN",
    "HUGO",
    "IVAN",
    "JORGE",
    "LEONARDO"
  ];
  const nombresMujer = [
    "ADELA",
    "AITANA",
    "ALBA",
    "ALEJANDRA",
    "ALICIA",
    "AMELIA",
    "ANA",
    "ANDREA",
    "ANGELA",
    "ANTONIA",
    "ARIADNA",
    "BEATRIZ",
    "BLANCA",
    "CAMILA",
    "CARLA",
    "CARMEN",
    "CLARA",
    "CRISTINA",
    "DANIELA",
    "DIANA",
    "ELENA",
    "ELISA",
    "EMILIA",
    "ESPERANZA",
    "ESTELA",
    "EVA",
    "FLORENCIA",
    "GABRIELA",
    "GLORIA",
    "INES",
    "ISABEL",
    "JIMENA",
    "JUANA",
    "LAURA",
    "LETICIA",
    "LORENA",
    "LUCIA",
    "LUISA",
    "MAGDALENA",
    "MARGARITA",
    "MARIA",
    "MARINA",
    "MARTA",
    "MERCEDES",
    "NATALIA",
    "OLGA",
    "PATRICIA",
    "PAULA",
    "RAQUEL",
    "REBECA",
    "ROCIO",
    "ROSA",
    "SARA",
    "SILVIA",
    "SOFIA",
    "TERESA",
    "VALENTINA",
    "VERONICA",
    "VICTORIA",
    "VIRGINIA"
  ];
  const apellidos = [
    "GARCIA",
    "GONZALEZ",
    "RODRIGUEZ",
    "LOPEZ",
    "MARTINEZ",
    "PEREZ",
    "SANCHEZ",
    "HERNANDEZ",
    "FERNANDEZ",
    "GOMEZ",
    "TORRES",
    "RAMIREZ",
    "CRUZ",
    "ALVAREZ",
    "VAZQUEZ",
    "JIMENEZ",
    "MORENO",
    "ROMERO",
    "ALONSO",
    "MORALES",
    "ORTEGA",
    "RUIZ",
    "CASTILLO",
    "DELGADO",
    "SOTO",
    "BLANCO",
    "NAVARRO",
    "MOLINA",
    "GIL",
    "VIDAL",
    "IBANEZ",
    "CORTES",
    "SERRANO",
    "GARRIDO",
    "PASTOR",
    "VARGAS",
    "FUENTES",
    "CABRERA",
    "CAMPOS",
    "VEGA",
    "AGUILAR",
    "SANTOS",
    "REYES",
    "ESTEBAN",
    "MENDEZ",
    "GALLEGO",
    "NIETO",
    "CARRASCO",
    "HERRERO",
    "CRESPO",
    "ROJAS",
    "MARIN",
    "SILVA",
    "GIMENEZ",
    "PASCUAL",
    "SOLER",
    "GUERRERO",
    "LOZANO",
    "VICENTE",
    "MIRANDA",
    "ESCOBAR",
    "CUEVAS",
    "VALVERDE"
  ];
  const estadosMexicanos = [
    "AGUASCALIENTES",
    "BAJA CALIFORNIA",
    "BAJA CALIFORNIA SUR",
    "CAMPECHE",
    "CHIAPAS",
    "CHIHUAHUA",
    "CIUDAD DE MEXICO",
    "COAHUILA",
    "COLIMA",
    "DURANGO",
    "GUANAJUATO",
    "GUERRERO",
    "HIDALGO",
    "JALISCO",
    "MEXICO",
    "MICHOACAN",
    "MORELOS",
    "NAYARIT",
    "NUEVO LEON",
    "OAXACA",
    "PUEBLA",
    "QUERETARO",
    "QUINTANA ROO",
    "SAN LUIS POTOSI",
    "SINALOA",
    "SONORA",
    "TABASCO",
    "TAMAULIPAS",
    "TLAXCALA",
    "VERACRUZ",
    "YUCATAN",
    "ZACATECAS"
  ];
  const meses = ["01","02", "03","04","05", "06","07","08","09","10","11","12" ];
  const dias  = [
    "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
  ];
  const years = [];
  for (let i = 1940; i <= 2005; i++) {
    years.push(i);
  }

const claveEstados = [
    {   estado: "AGUASCALIENTES",
        clave: "AS"
    },
    {   estado: "BAJA CALIFORNIA",
        clave: "BC"
    },
    {   estado: "BAJA CALIFORNIA SUR",
        clave: "BS"
    },
    {   estado: "CAMPECHE",
        clave: "CC"
    },
    {   estado: "COAHUILA",
        clave: "CL"
    },
    {   estado: "COLIMA",
        clave: "CM"
    },
    {   estado: "CHIAPAS",
        clave: "CS"
    },
    {   estado: "CHIHUAHUA",
        clave: "CH"
    },
    {   estado: "CIUDAD DE MEXICO",
        clave: "DF"
    },
    {   estado: "DURANGO",
        clave: "DG"
    },
    {   estado: "GUANAJUATO",
        clave: "GT"
    },
    {   estado: "GUERRERO",
        clave: "GR"
    },
    {   estado: "HIDALGO",
        clave: "HG"
    },
    {   estado: "JALISCO",
        clave: "JC"
    },
    {   estado: "MEXICO",
        clave: "MC"
    },
    {   estado: "MICHOACAN",
        clave: "MN"
    },
    {   estado: "MORELOS",
        clave: "MS"
    },
    {   estado: "NAYARIT",
        clave: "NT"
    },
    {   estado: "NUEVO LEON",
        clave: "NL"
    },
    {   estado: "OAXACA",
        clave: "OC"
    },
    {   estado: "PUEBLA",
        clave: "PL"
    },
    {   estado: "QUERETARO",
        clave: "QT"
    },
    {   estado: "QUINTANA ROO",
        clave: "QR"
    },
    {   estado: "SAN LUIS POTOSI",
        clave: "SP"
    },
    {   estado: "SINALOA",
        clave: "SL"
    },
    {   estado: "SONORA",
        clave: "SR"
    },
    {   estado: "TABASCO",
        clave: "TC"
    },
    {   estado: "TAMAULIPAS",
        clave: "TS"
    },
    {   estado: "TLAXCALA",
        clave: "TL"
    },
    {   estado: "VERACRUZ",
        clave: "VZ"
    },
    {   estado: "YUCATAN",
        clave: "YN"
    },
    {   estado: "ZACATECAS",
        clave: "ZS"
    },
]

const municipios = [
    "AGUASCALIENTES",
    "MEXICALI",
    "LA PAZ",
    "SAN FRANCISCO DE CAMPECHE",
    "TUXTLA GUTIERREZ",
    "CHIHUAHUA",
    "SALTILLO",
    "COLIMA",
    "VICTORIA DE DURANGO",
    "TOLUCA DE LERDO",
    "GUANAJUATO",
    "CHILPANCINGO DE LOS BRAVO",
    "PACHUCA DE SOTO",
    "GUADALAJARA",
    "MORELIA",
    "CUERNAVACA",
    "TEPIC",
    "MONTERREY",
    "OAXACA DE JUAREZ",
    "PUEBLA DE ZARAGOZA",
    "SANTIAGO DE QUERETARO",
    "CHETUMAL",
    "SAN LUIS POTOSI",
    "CULIACAN ROSALES",
    "HERMOSILLO",
    "VILLAHERMOSA",
    "CIUDAD VICTORIA",
    "TLAXCALA DE XICOHTENCATL",
    "XALAPA",
    "MERIDA",
    "ZACATECAS    ",
]
  // Funciones
  function getRandom(myList) {
    const myIndex = Math.floor(Math.random() * myList.length);
    return myList[myIndex];
  }

  function getNombre(aGenero){
    const myIndex = Math.floor(Math.random() * 50);
    if (aGenero === "H")
        return nombresHombre[myIndex]
    else
        return nombresMujer[myIndex]

  }
  function getRandomFecha(){
    return  getRandom(years)
  }

  function getPrimeraVocal(texto) {
    const vocales = ["A", "E", "I", "O", "U"];
  
    for (let i = 0; i < texto.length; i++) {
      const caracter = texto[i];
      if (vocales.includes(caracter)) {
        return caracter;
      }
    }
  
    // Si no se encuentra ninguna vocal, devuelve null o un mensaje apropiado
    return "A";
  }

  function getTelefono() {
    const longitud = 10;
    let resultado = "";
    const caracteres = "0123456789"; // Dígitos posibles
  
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      resultado += caracteres.charAt(indiceAleatorio);
    }
  
    return resultado;
  }

  function primerConsonante(str) {
    str = str.trim().substring(1).replace(/[AEIOU]/ig, '').substring(0, 1);
    return (str === '' || str === 'Ñ') ? 'X' : str;
  }

  function getCurp( aPerson ){
    let myCURP = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
    
    myCURP[0] = aPerson.paterno[0];
    myCURP[1] = getPrimeraVocal(aPerson.paterno);
    myCURP[2] = aPerson.materno[0];
    myCURP[3] = aPerson.nombre[0];
    myCURP[4] = aPerson.year[2];
    myCURP[5] = aPerson.year[3];
    myCURP[6] = aPerson.mes[0];
    myCURP[7] = aPerson.mes[1];
    myCURP[8] = aPerson.dia[0];
    myCURP[9] = aPerson.dia[1]; 
    myCURP[10] = aPerson.sexo[0];   
    myCURP[11] = aPerson.estadoNacimiento[0]; 
    myCURP[12] = aPerson.estadoNacimiento[1];
    myCURP[13] = primerConsonante(aPerson.paterno);
    myCURP[14] = primerConsonante(aPerson.materno);
    myCURP[15] = primerConsonante(aPerson.nombre);
    myCURP[16] = "0"
    myCURP[17] = aPerson.dia[1];
    console.log(aPerson);

    

    const myCurpStr = myCURP.join("");
    return myCurpStr;
  }
  


  const sexo = getRandom(genero);
  const nombre = getNombre(sexo);
  const paterno = getRandom(apellidos);
  const materno = getRandom(apellidos);
  const year = getRandom(years);
  const mes = getRandom(meses);
  const dia = getRandom(dias);
  const edad = 2024 - year;
  const estadoClave = getRandom(claveEstados);
  const telefono = getTelefono();
  const municipio = getRandom(municipios);
  const aPerson = {
    nombre: nombre,
    paterno: paterno,
    materno: materno,
    fecha_nacimiento: dia + "/" + mes + "/" + year,
    year: year.toString(),
    dia: dia,
    mes: mes,
    edad: edad,
    sexo: sexo,
    estadoNacimiento: estadoClave.clave,
    telefono: telefono,
    estado: estadoClave.estado,
    municipio: municipio,
    consonante: primerConsonante(nombre)
}
    curp = getCurp(aPerson);

  console.log(curp);
