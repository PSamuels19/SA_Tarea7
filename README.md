# SA_Tarea7
Tarea # 7: Contenedores de Software Avanzado 

Opción 1: Leer un código fuente (lenguaje compilado), hacer una compilación y proveer un sitio web con los artefactos.

http://localhost:3000/

Opción 2: Leer un código fuente de un sitio web (lenguaje libre - interpretado), y realizar el despliegue del sitio web del mismo posterior a un proceso de entrega.

http://localhost:3000/index


TIPS

Docker compose
: tool for defining & running multi-container docker applications
: use yaml files to configure application services (docker-compose.yml)
: can start all services with a single command : docker compose up
: can stop all services with a single command : docker compose down
: can scale up selected services when required

Step 1 : install docker compose
   (already installed on windows and mac with docker)
   docker-compose -v
   
   2 Ways

   1.  https://github.com/docker/compose/rel...

   2. Using PIP
    pip install -U docker-compose

Step 2 : Create docker compose file at any location on your system
   docker-compose.yml

Step 3 : Check the validity of file by command
    docker-compose config

Step 4 : Run docker-compose.yml file by command
   docker-compose up -d

Steps 5 : Bring down application by command
   docker-compose down
