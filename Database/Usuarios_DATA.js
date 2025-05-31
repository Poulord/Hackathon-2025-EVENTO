/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Hackathon_2025');

// Insert a few documents into the sales collection.
db.usuarios.insertMany([
  {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 1,
        "email": "haroldonino@atienza-porta.com",
        "phoneNumber": "+34 872 676 926",
        "contraseña": "0HT9EJjw!o",
        "name": "Marcelino Palomino Chamorro",
        "rol": "administrador",
        "Fecha de ingreso": "2025-03-29",
        "estado": "inactivo",
        "historial de alertas": [
            "Officia officia sint ipsum a.",
            "Officiis recusandae veritatis."
        ],
        "Dispositivo": "Pixel 6"
    },
    {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 1,
        "email": "btamarit@hotmail.com",
        "phoneNumber": "+34 746 833 866",
        "contraseña": ")1y&jGt+$g",
        "name": "Paco Roman-Becerra",
        "rol": "administrador",
        "Fecha de ingreso": "2024-12-28",
        "estado": "activo",
        "historial de alertas": ["Sit cupiditate saepe nam."],
        "Dispositivo": "Pixel 6"
    },
    {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 5,
        "email": "vinicioalegria@coll-ayllon.com",
        "phoneNumber": "+34 722 304 614",
        "contraseña": "$!6J9LzbvI",
        "name": "Rosalía Arnau Martínez",
        "rol": "analista",
        "Fecha de ingreso": "2025-01-20",
        "estado": "suspendido",
        "historial de alertas": ["Illum magnam commodi omnis corporis tempora."],
        "Dispositivo": "iPhone 13"
    },
    {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 2,
        "email": "linaresmaura@yahoo.com",
        "phoneNumber": "+34 613 999 486",
        "contraseña": "ZqC@T$0sRk",
        "name": "Eugenio Vélez de Guevara",
        "rol": "analista",
        "Fecha de ingreso": "2023-11-14",
        "estado": "activo",
        "historial de alertas": [],
        "Dispositivo": "Samsung Galaxy S21"
    },
    {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 3,
        "email": "carmen.florencio@gmail.com",
        "phoneNumber": "+34 634 845 294",
        "contraseña": "Ax9#Ldkf!",
        "name": "Carmen Florencio León",
        "rol": "técnico",
        "Fecha de ingreso": "2024-04-01",
        "estado": "activo",
        "historial de alertas": ["Intento de acceso no autorizado."],
        "Dispositivo": "Huawei P30"
    },
    {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 2,
        "email": "andres.torres@outlook.com",
        "phoneNumber": "+34 699 402 385",
        "contraseña": "MkY!28wz",
        "name": "Andrés Torres Vargas",
        "rol": "técnico",
        "Fecha de ingreso": "2025-05-01",
        "estado": "activo",
        "historial de alertas": [],
        "Dispositivo": "iPhone 14"
    },
    {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 4,
        "email": "lola.ruiz@empresa.es",
        "phoneNumber": "+34 688 234 112",
        "contraseña": "Uy@78Dc%",
        "name": "Dolores Ruiz Mendoza",
        "rol": "analista",
        "Fecha de ingreso": "2022-08-19",
        "estado": "inactivo",
        "historial de alertas": ["Alerta por desconexión de red."],
        "Dispositivo": "Samsung Galaxy A52"
    },
    {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 5,
        "email": "sergiogomez@correo.com",
        "phoneNumber": "+34 632 888 777",
        "contraseña": "Lo!928dkL",
        "name": "Sergio Gómez Ortega",
        "rol": "administrador",
        "Fecha de ingreso": "2021-06-11",
        "estado": "suspendido",
        "historial de alertas": ["Varias alertas en corto tiempo."],
        "Dispositivo": "iPad Pro"
    },
    {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 1,
        "email": "laura.blanes@empresa.es",
        "phoneNumber": "+34 621 123 456",
        "contraseña": "P4!lmOpq3",
        "name": "Laura Blanes Peñalver",
        "rol": "técnico",
        "Fecha de ingreso": "2023-10-01",
        "estado": "activo",
        "historial de alertas": [],
        "Dispositivo": "OnePlus 9"
    },
    {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 3,
        "email": "enrique.marin@correo.com",
        "phoneNumber": "+34 645 789 321",
        "contraseña": "S2@3sdfL!",
        "name": "Enrique Marín Iglesias",
        "rol": "analista",
        "Fecha de ingreso": "2024-01-19",
        "estado": "activo",
        "historial de alertas": ["Cambio de IP detectado."],
        "Dispositivo": "MacBook Air"
    },
    {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 4,
        "email": "noelia.cano@outlook.com",
        "phoneNumber": "+34 677 445 983",
        "contraseña": "f!7GpL@9",
        "name": "Noelia Cano Ríos",
        "rol": "administrador",
        "Fecha de ingreso": "2025-02-03",
        "estado": "inactivo",
        "historial de alertas": [],
        "Dispositivo": "iPhone 12"
    },
    {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 2,
        "email": "ignacio.ros@gmail.com",
        "phoneNumber": "+34 611 349 600",
        "contraseña": "Qw3!tyu@",
        "name": "Ignacio Ros Alarcón",
        "rol": "técnico",
        "Fecha de ingreso": "2024-11-10",
        "estado": "activo",
        "historial de alertas": [],
        "Dispositivo": "Samsung Galaxy S23"
    },
    {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 5,
        "email": "lucia.martinez@correo.com",
        "phoneNumber": "+34 609 223 388",
        "contraseña": "Po@8Kf!d",
        "name": "Lucía Martínez Cano",
        "rol": "analista",
        "Fecha de ingreso": "2023-03-04",
        "estado": "activo",
        "historial de alertas": ["Desconexión inesperada del sistema."],
        "Dispositivo": "Microsoft Surface"
    },
    {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 3,
        "email": "raquel.lopez@empresa.es",
        "phoneNumber": "+34 698 111 222",
        "contraseña": "As#LkP0q",
        "name": "Raquel López Serrano",
        "rol": "técnico",
        "Fecha de ingreso": "2022-09-12",
        "estado": "activo",
        "historial de alertas": [],
        "Dispositivo": "Realme GT"
    },
    {
        "idDocument": str(uuid.uuid4()),
        "IDSucursal": 1,
        "email": "josemaestre@outlook.com",
        "phoneNumber": "+34 612 345 678",
        "contraseña": "Lk!98opD",
        "name": "José Maestre Gutiérrez",
        "rol": "administrador",
        "Fecha de ingreso": "2021-12-31",
        "estado": "suspendido",
        "historial de alertas": ["Baneo temporal."],
        "Dispositivo": "iPhone SE"
    },
]);

