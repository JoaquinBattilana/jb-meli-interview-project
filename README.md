# Instalación

Para instalar el proyecto es necesario tenér node 12+ y npm 6+ el cual actualmente viene con la última versión de node que se puede instalar desde [ACA](https://nodejs.org/en/).
Una vez tengamos npm y node tenemos que clonar el proyecto, nos colocamos dentro de la carpeta que queramos y ejecutamos:

## Clonar con HTML
```sh
git clone https://github.com/JoaquinBattilana/jb-meli-frontend.git
````

## Clonar con SSH
```sh
git clone git@github.com:JoaquinBattilana/jb-meli-frontend.git
```

Una vez tengamos el proyecto ejecutamos:
```sh
cd jb-meli-frontend
```
Y estaremos parados en el directorio del proyecto.
Lo siguiente es dentro de este directorio crear un archivo llamado .env y abrirlo
```
touch .env
gedit .env
````
Dentro del .env vamos a definir las variables de entorno de nuestra API que pueden ser las siguientes:
```code
PORT = puerto que se ejecutara el servidor
BASE_API_URL = url base de nuestra api
```
Un ejemplo( este es el que actualmente se va a usar para el ejercicio) podría ser:
```code
PORT = 3005
BASE_API_URL = https://jb-meli-api.herokuapp.com/api
```

Una vez definamos el .env guardamos, instalamos las dependencias y ejecutamos el servidor:
```bash
npm install
npm run dev
```

En caso de que queramos hacer una build de producción ( ya que en este proyecto tenemos webpack y babel) tendriamos que ejecutar lo siguiente:
```bash
npm run build
npm start
```
Ya tenemos el servidor corriendo y podemos entrar a `localhost:${PORT}` para ver nuestra página.

# Api
Para este proyecto vamos a usar [ESTA](https://github.com/JoaquinBattilana/jb-meli-api) api, la cual es un wrapper de la api de mercadolibre. En el respositorio se puede ver las especificaciones y como ejecutarla, tambièn se puede usar la api que esta deployada en la nube la cual esta en la parte deployments del repo.

# Decisiones de desarrollo

## Framework
Se decidió usar React ya que es la tecnología que con más experiencia tengo (aparte de que era una de las tecnologias preferibles en la consigna). Para React utilizamos otro framework llamada NextJs, el cual nos permite hacer Server-Side-Rendering(SSR) out of the box. No se utilizó un SSR puro, si no que se hizo un rendering hibrido, el primer request de una página se hace mediante SSR y lo que continua se rutea en el navegador como una Single Page Application(SPA).
### ¿ Por qué rendering híbrido ?
Se tomó la decisión de hacer render hibrido porque la página del problema que se pide es una aplicación de busqueda de productos para venta, por lo cual el SEO afecta directamente el negocio, si aparecemos más en los index de busqueda de Google por ejemplo, vamos a obtener más ventas. Se decidió no hacer puro rendering en el servidor porque esto en un futuro podría hacer que no sea muy escalable, debido a que sumaría mucha carga al servidor. De esta manera tenemos lo mejor de los dos mundos, buen SEO por el SSR y buen rendimiento por el Client Side Rendering.
### Typescript
Se decidió usar typescript ya que viene con muchas mejoras contra Javascript puro, como el chequeo estático. Esto hace más escalable nuestro código y que el día de mañana sea más fácil de leer.
### Linter
Se decidió usar ESlint con la configuración de airbnb ya que es la más básica y usada y hace que nuestro código este ordenado y siga sus lineamientos, por lo que es más escalable.
### Internacionalización
Se decidió usar internacionalización con i18n y su wrapper para NextJs para que nuestro código sea más escalable y si el día de mañana queremos agregar paises tengamos disponible la herramienta para traducir nuestro contenido.
### Babel
De por si tenemos que usar babel para pasar nuestro código ES6 a código leible por cualquier navegador, pero aprovechando esto agregamos dos plugins claves, uno para poder agregar aliases y no tener un código feo ( y aparte menos escalable, ya que el día de mañana si cambiamos alguna carpeta esta linkeada a esa ruta), y el otro para poder usar encadenamiento opcional, lo que nos permite que nuestro código no se vuelva un desastre de condicionales.
### Webpack
Si bien NextJS viene con webpack configurado y listo para andar sin tocar nada se agregaron un par de configuraciones necesarias: variables de entorno con dotenv, modulos de sass y directorio global con archivos de sass para su uso en toda la aplicación.
### Redux
Se decidió usar redux, si bien, era completamente innecesario ya que los manejos de estados de la aplicación eran simples, se quería mostrar su uso
### Redux forms
Al igual que redux era totalmente innecesario ya que el form de la aplicación es simple, pero se queria mostrar su uso.
### Sass
Se decidió usar SASS debido a todas las mejoras que trae en contra de CSS, como los Mixins, nesteo de clases o declaración de variables, esto nos hace que sea más escalable el código y se vea más prolijo.
### Fonts
Al no haber un requerimiento de fonts se decidió usar el stack system para que la aplicación sea más performante debido a que no necesita ir a buscar fonts remotamente.
