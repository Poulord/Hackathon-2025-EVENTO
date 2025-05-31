from pymongo import MongoClient
import uuid


db.usuarios.insert_many([
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
])
