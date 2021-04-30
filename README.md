# Full Stack - Angular Frontend + Spring Backend

Backend
- Proyecto Maven creado en Spring Tool Suite 4
- Implementa una clase User y su respectivo controlador.
- El controlador es un @RestController con métodos para realizar operaciones CRUD para cada tipo de request: GET, POST, PUT, DELETE.
- El acceso a datos se realiza desde una interfaz sencilla que extiende JpaRepository<T, ID> y se inyecta en el controlador mediante @Autowired.

Frontend:
- Proyecto Angular creado en VSCode
- Utiliza Bootstrap para gestión de CSS