¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?
El flujo de control en JavaScript funciona de forma muy similar a otros lenguajes como C, Java o Python (con if, for, while, switch), aunque tiene particularidades como el alcance de let/const y el manejo de asincronía con async/await.

Analicemos ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?
En los operadores, JavaScript permite comparaciones y operaciones “extrañas” porque hace coerción implícita de tipos (convierte valores automáticamente), lo que explica que cadenas se comparen por orden Unicode, == funcione distinto de ===, o que + sirva tanto para sumar como para concatenar.