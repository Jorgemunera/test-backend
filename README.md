# Instalación

Para la instalación de la app debemos:
* Descargar el repositorio

* Una vez allí, en la terminal correr el comando 
```docker build -t <name_image>```

* Creada la imagen, la podemos montar en un contenedor o podemos también con el docker-compose crear los 2 servicios, el de la app y el de la base de datos. Para esto:
```docker-compose up -d```

* Podemos probar en un cliente Rest como insomnia o postman
