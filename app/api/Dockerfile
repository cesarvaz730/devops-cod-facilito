# Usa la imagen oficial de Python 3.10 como base
FROM python:3.10-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo de requisitos (requirements.txt) al contenedor
COPY requirements.txt /app/

# Instala las dependencias necesarias
RUN pip install --no-cache-dir -r requirements.txt

# Copia el código fuente del proyecto al contenedor
COPY . /app/

# Expone el puerto que utilizará la aplicación Flask
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["python", "app.py"]
