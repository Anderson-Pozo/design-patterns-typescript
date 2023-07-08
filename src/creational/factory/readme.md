# Factory Method

Factory Method es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán.

El patrón Factory Method sugiere que, en lugar de llamar al operador new para construir objetos directamente, se invoque a un método fábrica especial. No te preocupes: los objetos se siguen creando a través del operador new, pero se invocan desde el método fábrica. Los objetos devueltos por el método fábrica a menudo se denominan productos.

## Pasos para implementar patron factory

1.  El Producto.- Declarar la interface que es comun en todos los objetos
2.  Productos Concretos.- implementaciones de la interfaz producto
3.  Clase Creadora.- declara el metodo factory que debe retornar el mismo tipo de la interfaz producto, declarar el metodo como abstacto para obligar a las subclases a implementar sus propias versiones del metodo
4.  Creadores Concretos.- sobrescriben el Factory Method base, de modo que devuelva un tipo diferente de producto.
