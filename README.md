# Complaint Form APP

En esta aplicación encontrarás un formulario por medio del cual se realizan reclamos. Puedes añadir información detallada e incluso una foto si así lo deseas.
También en la sección "VER RECLAMOS", se podrán observar todos estos de una forma sencilla, con la posibilidad de editarlos o borrarlos.

![Capture](https://user-images.githubusercontent.com/74875335/127667153-ee3460e4-d9f4-4d93-848e-652e7fe0b6c5.PNG)


## -Home

![image](https://user-images.githubusercontent.com/74875335/127667377-387dafea-d885-4e98-b6ea-bb7d07096c86.png)


## -Ver reclamos

![image](https://user-images.githubusercontent.com/74875335/127668016-791ed943-b410-438e-a1a8-797cbbd3dd95.png)



## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


__IMPORTANTE__: Para poder utilizar esta APP es necesario crear una cuenta en FIREBASE y crear un nuevo proyecto en la sección Firestore Database. 
- También, como vamos a trabajar con imagenes, es necesario acceder a un storage, así que se debe crear uno y a este se le debe añadir una carpeta llamada reclamos. Allí se van a guardar todas la fotos.

![image](https://user-images.githubusercontent.com/74875335/127668992-c3fcd24a-192d-4449-be09-8f9d2ad4fcf0.png)

- Aquí tambien se deben editar la reglas de seguridad permitiendo acceder sin necesidad de autenticación, como lo muestra la imagen:

![image](https://user-images.githubusercontent.com/74875335/127669175-a0ca29de-b800-462e-a0aa-dd519a982010.png)


### Instalación 🔧

1. Clona el repo
   ```sh
   git clone https://github.com/JoanZorovich/Games.git
   ```
2. Instala los paquetes
   ```sh
   npm install
   ```
3. Pega los comandos de la configuración SDK (CDN) en el archivo firebase.js 
   ```sh
   Como ya creaste el proyecto en firebase, en la sección "configuración del proyecto" encontrarás la secuencia de comandos de la configuración SDK. Ya abierto el proyecto en el editor de código, ingresa al archivo firebase.js y pega la porción de código. 
   ```
   ![image](https://user-images.githubusercontent.com/74875335/127669752-4b6a0e65-9258-4a41-b33c-aab1b424d88f.png)

   
4. Inicializa la APP
   ```sh
   npm start
   ```
  
## Construido con 🛠️

- [ ] React
- [ ] Firebase




---
⌨️ con ❤️ por [Joan Zorovich](https://github.com/JoanZorovich) 😊
