# Velmar-frontend
Welcome to my fictional ecommerce site, designed to showcase my web development skills using modern technologies such as Next.js, TypeScript, and Tailwind CSS. The app allows users to browse and filter a wide variety of products, simulate purchases, register and manage their profiles, and view their order history. Additionally, users can register as sellers to create, edit, and delete products, categories, and brands. This project demonstrates my ability to develop intuitive and functional user interfaces and manage business logic in an ecommerce environment.

[Documentación en español](README-es.md)

## Table of contents
- [Clone the project](#clone-the-project)
- [Dependency installation](#dependency-installation)
- [Environment variables](#environment-variables)
- [Starting the project](#Starting-the-project)

***

## Clone the project
To get started, you'll need to clone the project repository into your desired directory. Use the following command:

```git clone https://github.com/diegonacimiento/velmar-frontend.git```


***

## Dependency installation
To install the necessary dependencies for Velmar, run the following command:

``` npm install ```

***

## Environment variables
Velmar relies on some environment variables. You should create a ".env" file in the project's root directory and define these variables. Here's an example of a ".env" file with explanations:
```
BACKEND_URL=""
FRONTEND_URL=""
COOKIE_NAME=""
PROPERTY_HEADER=""
API_KEY=""
JWT_SECRET=""
NODE_ENV=""
NEXT_PUBLIC_API_KEY=""
NEXT_PUBLIC_BACKEND_URL=""
NEXT_PUBLIC_FRONTEND_URL=""
NEXT_PUBLIC_PROPERTY_HEADER=""
NEXT_PUBLIC_COOKIE_NAME=""
```

- You must configure your own chosen API_KEY.

- JWT_SECRET should have unique keys. You can generate them [here](https://keygen.io/#fakeLink/).

***

# Starting the project
To start the project, use the following command:

```npm run dev```

This command will launch the app, and you can begin using it as intended.

***

This documentation should provide you with the necessary information to set up and use velmar-frontend. If you have more questions or encounter issues, feel free to request assistance.
