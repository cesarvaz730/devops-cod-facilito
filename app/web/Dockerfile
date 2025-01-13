# Imagen base para Node.js
FROM node:18-alpine AS build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente al contenedor
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Imagen base para servir los archivos estáticos
FROM nginx:alpine

# Copiar los archivos generados al servidor NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto
EXPOSE 80

# Comando por defecto para iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
