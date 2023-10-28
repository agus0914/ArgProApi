# Página del clima y mapa de colectivos con React y Json

Este es un proyecto que muestra los datos del clima de Junín de los Andes, provincia de Neuquén, Argentina; y la posición de algunas de las líneas de colectivos de la ciudad de Buenos Aires. Los datos del clima son extraídos a través de una API generada por la página https://open-meteo.com/. La información de la posición de los colectivos en el mapa es extraída a través de otro llamado a una base de datos abiertos publicados por Gobierno de la Ciudad de Buenos Aires en su página https://datosabiertos-apis.buenosaires.gob.ar. 

## Comenzando 🚀

Este proyecto se realizó como Trabajo Practico N°1 del Proyecto "Argentina Programa 4.0", en el curso de "Programación Web Front-End" tercera parte "Páginas Web con Componentes Dinámicos" de la Universidad Nacional de Córdoba a través de la Facultad de Matemática, Astronomía, Física y Computación. El docente a cargo: profesor Guido Ivetta y ayudantes de prácticas Nehuen Aramburu y Juan Yornet.

## Descripción 

Primeramente, la página se dividirá en dos partes iguales en izquierda y derecha en caso de usar una pantalla horizontal, así como arriba y abajo para pantallas en posición verticales.
En la sección que muerte el Clima se mostrara un mensaje de " CARGANDO LOS DATOS" mientras la información de la api se esté cargando. Una vez cargada la info, se mostrar la información del clima: el día de la semana y la hora actual. Se identificará mediante un Símbolo el estado actual del cielo con una animación de sol que demostrará "Dia despejado". Lo mismo sucederá con cada uno de los estados del tiempo. Luego se indicará la temperatura actual con su respectiva animación fija. En otro cuadro se mostrarán las temperaturas máximas y mínimas de del día. Por último, en otra casilla estará la información de humedad, probabilidad de precipitaciones y viento actuales, cada uno con su animación. 
En el centro se mostrarán los valores de las temperaturas pronosticadas para el día de la fecha separadas por horarios.
En la parte inferior se visualizarán la información del horario de amanecer y atardecer de la fecha, el pronóstico de rayos UV máxima, la calidad de aire y su visibilidad actual.
En la otra sección del Transporte público se mostrará un mapa centrado en la ciudad de Buenos Aires con un select en el sector superior, el cual una vez desplegado se muestran las diferentes líneas a mostrar. Al seleccionar una se mostrará tantos iconos como colectivos de la línea se encuentren circulando en su posición actual y con su color de línea correspondiente. Al hacerle un click en cada icono, se desplegará un PopUp con la información del número de línea, su velocidad actual, el nombre de la agencia y el nombre del recorrido. Toda esta información se actualizará cada 31 segundos para poder actualizar el recorrido de los colectivos, así como si se sumaron o bajaron de servicio.



## A Futuro
Esta es una primera entrega, luego el proyecto se ampliará para que el usuario pueda seleccionar la ciudad y se mostrará la información actual de la misma. En la sección del Transporte Publico se le sumara otro selector, con uno se podrá elegir las líneas y con el otro sus diferentes recorridos que tenga.

### Pre-requisitos 📋

No requiere ningún tipo de instalación ya que todo corre sobre una página de protocolo html5. Solo se necesita contar con algún navegador web con acceso a internet que pueda reproducir los archivos.



## Construido con 🛠️

Editado con Visual Studio Code, realizado con React.js con estilos en CSS.

## Autores ✒️

- Autor: Agustín Leonardo Pérez
- Colaboradores: Este fue un trabajo de varios días de investigación y pruebas, donde todas las dudas o problemas que fueron surgiendo se trabajaron tanto en clase con el profesor, como en las prácticas con los ayudantes de prácticas y mis compañeros de cursada.

