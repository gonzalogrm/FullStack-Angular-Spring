# Full Stack - Angular Frontend + Spring Backend

Backend
- Proyecto Maven creado en Spring Tool Suite 4
- Implementa una clase User y su respectivo controlador.
- El controlador es un @RestController con métodos para realizar operaciones CRUD para cada tipo de request: GET, POST, PUT, DELETE.
- El acceso a datos se realiza desde una interfaz sencilla que extiende JpaRepository<T, ID> y se inyecta en el controlador mediante @Autowired.

Frontend:
- Proyecto Angular creado en VSCode
- Utiliza Bootstrap para gestión de CSS

NOTA SOBRE INFORMACIÓN SENSITIVA
- Al tratarse de un proyecto de ejemplo se incluye un archivo de configuración con usuario y contraseña ficticios para que el proyecto esté listo para ser utilizado.
- En casos reales no se debe incluir información sensitiva en archivos de configuración en repositorios públicos.
