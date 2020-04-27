#!/bin/bash

REDES=( "agenda" "autenticacao" )

for REDE in "${REDES[@]}"
do
   TEM_REDE_AGENDA="$(docker network ls -f name=^$REDE$ | grep $REDE)"

    if [[ $TEM_REDE_AGENDA == "" ]]; then
      docker network create $REDE > /dev/null
    fi

done

docker-compose up -d
