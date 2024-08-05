# Velmar-frontend
Bienvenido a mi sitio de comercio electrónico ficticio, diseñado para mostrar mis habilidades de desarrollo web utilizando tecnologías modernas como Next.js, TypeScript y Tailwind CSS. La aplicación permite a los usuarios explorar y filtrar una amplia variedad de productos, simular compras, registrarse y administrar sus perfiles y ver su historial de pedidos. Además, los usuarios pueden registrarse como vendedores para crear, editar y eliminar productos, categorías y marcas. Este proyecto demuestra mi capacidad para desarrollar interfaces de usuario intuitivas y funcionales y administrar la lógica empresarial en un entorno de comercio electrónico.

[English documentation](README.md)

## Tabla de contenidos
- [Clonar el proyecto](#clonar-el-proyecto) 
- [Instalación de dependencias](#instalación-de-dependencias) 
- [Variables de entorno](#variables-de-entorno) 
- [Iniciar el proyecto](#iniciar-el-proyecto)

***

## Clonar el proyecto
Para comenzar, deberá clonar el repositorio del proyecto en el directorio que desee. Utilice el siguiente comando:

```git clone https://github.com/diegonacimiento/velmar-frontend.git```


***

## Instalación de dependencias
Para instalar las dependencias necesarias para Velmar, ejecute el siguiente comando:

``` npm install ```

***

## Variables de entorno
Velmar depende de algunas variables de entorno. Debe crear un archivo ".env" en el directorio raíz del proyecto y definir estas variables. Aquí hay un ejemplo de un archivo ".env" con explicaciones:
```
COOKIE_NAME=""
API_KEY=""
JWT_SECRET=""
NEXT_PUBLIC_API_KEY=""
NEXT_PUBLIC_URL=""
NEXT_PUBLIC_PROPERTY_HEADER=""
NEXT_PUBLIC_COOKIE_NAME=""
```

- Debe configurar su propia API_KEY elegida.

- JWT_SECRET debe tener claves únicas. Puede generarlas [aquí](https://keygen.io/#fakeLink/).

***

# Iniciar el proyecto
Para iniciar el proyecto, use el siguiente comando:

```npm run dev```

Este comando iniciará la aplicación y podrá comenzar a usarla como está previsto.

***

Esta documentación debería proporcionarle la información necesaria para configurar y usar velmar-frontend. Si tiene más preguntas o encuentra problemas, no dude en solicitar ayuda.
