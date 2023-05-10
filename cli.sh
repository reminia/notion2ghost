#!/usr/bin/env bash
WORK_DIR=$(dirname $(readlink -f $0))
cd $WORK_DIR
node index.js
