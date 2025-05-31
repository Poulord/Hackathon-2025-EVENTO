from pymongo import MongoClient

# Conexión local (si usas MongoDB instalado en tu PC)
# client = MongoClient("mongodb://localhost:27017")

# Conexión a MongoDB Atlas (cambia esta URI por la tuya si usas la nube)
client = MongoClient("mongodb+srv://pablogo:Hackathon2025cluster0.utprufs.mongodb.net/")

# Selección de la base de datos
db = client["Hackthon_2025"]

# Selección de una colección
coleccion = db["usuarios"]

# Prueba de inserción
usuario = {"nombre": "Pablo", "email": "pablogo@msmk.university"}
resultado = coleccion.insert_one(usuario)

print(f"Usuario insertado con ID: {resultado.inserted_id}")
