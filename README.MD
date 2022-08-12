# Projeto de estudos em SQL
API desenvolvida como estudos, acompanhando video aulas e adicionando features extras

Sistema de CRUD seguindo essa projeção e relação de tabelas.
![image](https://user-images.githubusercontent.com/98918812/177413339-29d1dbf0-a6b0-40c5-ba7f-c06113c15a63.png)

    

# Rotas e features
## Valores esperados (body)
    - Planetas: {name, position}
    - Satélites: {name, serial_number}
    - Capitão: {name, planetId}
    - Spaceship: {name, serialNumber}
## Rotas
### POST
    planetas - /planets
    satélites - /planet/:planetId/satelites
    capitão - /captains
    spaceship - /captain/newspaceship/:captainId

### GET
    listagem geral de planetas - /planets
    listagem de Capitões do planeta - /planet/:planetId/captains
    listagem de satelites do planeta - /planet/:planetId/satelites
    listagem de capitões - /captains
    detalhe de um capitão - /captain/:captainId
    listagem das spaceships - /spaceships
    detalhe de uma spaceship - /spaceship/:spaceshipId

### PUT e DELETE
    planetas - /planets/:planetId
    satélites - /planet/:planetId/satelites/:sateliteId
    capitão - /captain/:captainId
    spaceship - /spaceship/:spaceshipId


