#¿Qué son las APIs?

Las Interfaces de Programacion de Aplicaciones (APIs por sus siglas en inglés) son construcciones disponibles en los lenguajes de programación que permiten a los desarrolladores crear funcionalidades complejas de una manera simple. Estas abstraen el código más complejo para proveer una sintaxis más fácil de usar en su lugar.

JavaScript del lado cliente, particularmente, tiene muchas APIs disponibles — estas no son parte del lenguaje en sí, sino que están construidas sobre el núcleo de este lenguaje de programación, proporcionándote superpoderes adicionales para usar en tu código. Por lo general, se dividen en dos categorías:

**Las APIs de navegador** están integradas en tu navegador web y pueden exponer datos del navegador y del entorno informático circundante y hacer cosas complejas y útiles con él. Por ejemplo, la API de Geolocalización proporciona algunas construcciones simples de JavaScript para obtener datos de ubicación con los que, por ejemplo, trazar tu ubicación en un mapa de Google. Realmente, el navegador está haciendo uso de códigos de bajo nivel complejos en segundo plano (por ejemplo, C++) para comunicarse con el hardware GPS del dispositivo (o lo que esté disponible para determinar los datos de posición), recuperar datos de posición y devolverlos al entorno del navegador para su uso en tu código. Pero una vez más, la API se encarga de abstraer esta complejidad.

**Las APIs de terceros** no están incluídas por defecto en el navegador, y por lo general es necesario obtener el código e información desde algún lugar de la Web. Por ejemplo, la API de Twitter permite hacer cosas como mostrar tus últimos tweets en un sitio web. Proporciona un conjunto especial de construcciones que puedes usar para consultar el servicio de Twitter y devolver información específica.

En particular, las categorías más comunes de APIs de navegador más usadas (y que trataremos con mayor detalle en este módulo) son:

APIs para manipular documentos
APIs que obtienen datos del servidor
Audio and Video APIs 
Device APIs