# Merc•a•prop

## Descripción del Proyecto

**Merc•a•prop** es una aplicación diseñada como guía y mapa interactivo que conecta a los usuarios con los mercados y ferias que ofrecen productos locales y de proximidad en Barcelona. El objetivo es acercar este tipo de comercio a toda la población, especialmente a la juventud, para concienciar sobre la importancia del comercio local e impulsar la economía de nuestra comunidad.

## Deploy

1. Clona el repositorio: 
git clone https://github.com/Tinunsky/hackathon-mercats.git

2. Accede al directorio del proyecto: 
cd hackathon-mercats

3. Instala las dependencias: 
composer install

La **demostración** está disponible en: 
https://mercaprop-app.netlify.app/

Funcionalidades:
• Listado, creación y actualización de mercados y ferias.
• Importación masiva de datos a través de JSON.

# Frontend

El **Frontend** está diseñado con **React** para ofrecer una interfaz visual y fácil de usar. Componentes principales:
• Lista de mercados con tarjetas individuales y detalles en un modal.
• Mapa interactivo con la ubicación de los mercados.
• Filtro de búsqueda con un input para buscar eventos concretos por nombre.

# Data Analyst

El **Data Analyst** trabajó con datos de:
•Mercados y ferias callejeras.
•Mercados municipales.

## Datos clave:

•Nombre del mercado, dirección, barrio, distrito, teléfono, coordenadas (latitud/longitud) y tipo de mercado (feria/mercado municipal).

Los datos se procesan y se cargan en el backend en formato **JSON**.