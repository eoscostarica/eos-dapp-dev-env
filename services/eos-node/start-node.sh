#!/bin/bash

if [ "$(ls -A $DATADIR)" ]; then
  /opt/eosio/bin/nodeosd.sh --data-dir $DATADIR --hard-replay
else
  /opt/eosio/bin/nodeosd.sh --data-dir $DATADIR --genesis-json genesis.json --delete-all-blocks
fi