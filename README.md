# Hard-Tech
## Sitio web de venta de Hardware para pc



### Equipo de trabajo:
- Tomas Williams
- Jeremias Marrades
- Federico Frau
- Facundo Gimenez
- Cristian Fernandez

## Descripcion general del proyecto:
Este proyecto se trata de una pagina web e-commerce. Nos destinamos a crear una pagina web dinamica, donde mostramos nuestros
productos que estarian en venta que a su vez son subidos por un administrador. Nuestra pagina se llama Hard-Tech y el grupo 
los tiburones.

## Paginas y funcionalidades
### 1. Pagina Inicio 
En esta pagina se muestran todos los productos que son consumidos desde un json cargado en el localstorage. Buscamos que la visualizacion de estos sea
la mejor posible. Seria la pagina principal para el usuario comun que ingrese a la pagina.
![2024-02-05_143153](https://github.com/willytucuman/e-commerceG4/assets/124631401/3906294b-b0a8-44e1-8b70-fb7c1138c204)

### 2. Pagina Acerca de nosotros
En esta pagina damos una breve descripcion de como somos como grupo y que buscamos. Junto a los perfiles de cada uno se encuentra una breve descripcion y los enlaces
a las redes sociales principales de cada uno.

![2024-02-05_143355](https://github.com/willytucuman/e-commerceG4/assets/124631401/f2bc73e4-eaf8-4574-9eda-e61343eb5fb5)

### 3.Pagina error 404 
Esta pagina es la tipica pagina de error al no encontrar el servidor una pagina solicitada por el cliente, obviamente con un formato mucho mas lindo y moderno.

![2024-02-05_143452](https://github.com/willytucuman/e-commerceG4/assets/124631401/a0a61e14-8575-48c9-a05a-8c36fd4aee46)

### 4. Pagina de registro y login
En la pagina de registro se le permite a cualquier usuario que entre a la pagina, registrarse en la pagina y loguearse. Una vez el usuario se registra 
llenando sus datos y definiendo una contrasena, automaticamente se lo dirige al inicio para ver los productos. Si el usuario ya existe en la base de datos
que por el momento es el localstorage, puede ingresar con su usuario y contrasena. El admin es el unico usuario que ya se carga en el localstorage de manera 
predeterminada.

![2024-02-05_150523](https://github.com/willytucuman/e-commerceG4/assets/124631401/f7800b2f-462f-4081-9d85-47c753abeb4a)

### 5. Pagina de panel de administrador
Esta es una pagina que contiene todo el crud del administrador donde es el usuario de administrador el unico que puede ingresar alli con su usuario y contrasena.
Desde alli el carga productos que quiere que sean visualizados en el inicio de la pagina. Si un usuario quisiera acceder a ese panel cambiandole la url hacia el directorio
donde se encuentra este mismo panel, no podria ya que tiene una ruta protegida.

![2024-02-05_150630](https://github.com/willytucuman/e-commerceG4/assets/124631401/3e9487a9-5f8d-47e3-b9f2-1552b790e867)


## Que tecnologias utilizamos para esta pagina?
Simplemente nada mas que:

- Html
- Css
- Bootstrap
- Javascript

## Como clonar el repositorio en tu pc y poder tener nuestra pagina para ver el codigo con git?
- Entra a la cli de git y posicionate preferentemente en tu escritorio

bash

`cd Desktop`

- Clona el repo de toda la pagina

bash

`git clone https://github.com/willytucuman/e-commerceG4.git`

- Abri el repo desde tu ide y desplega el index.html con live server preferentemente.

