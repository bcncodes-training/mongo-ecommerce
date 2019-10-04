#### Mongo Ecommerce Fran
---

__Conexión a base de datos Mongo Atlas__

- SHELL -> mongo "mongodb+srv://eommerce-3f5ka.mongodb.net/admin"  --username fparrar
- COMPASS -> mongodb+srv://fparrar:<password>@eommerce-3f5ka.mongodb.net/admin
- ROBO 3T OR OTHER APPLICATION -> <FROM_SRV PARAMETER> --> mongodb+srv://fparrar:<password>@eommerce-3f5ka.mongodb.net/admin?retryWrites=true&w=majority

Password enviada por pull request. 


__Ejercicio__

- Crear una bd para un ecommerce que contenga las siguientes colecciones:
  - USER
  - PRODUCT
  - CATEGORY
  - CART

- Generar consultas sobre las colecciones anteriores para llevar a cabo las siguientes operaciones:
  
  -  Generar algunas consultas sobre productos, que puedan ser requeridas por los usuarios (Buscar por tipo de producto, talla, tamaño, precios, recomendados, ofertas, últimas adquisiciones, etc…)
  -  Realizar un mantenimiento de la jerarquía de categorías añadiendo una nueva categoría y modificando una categoría. Realizar también las consultas para obtener el hilo de Ariadna de un producto determinado
  -  Gestionar el carrito: Añadir un producto al carrito, eliminar un producto del carrito, abandono del carrito sin comprar, pagar.
