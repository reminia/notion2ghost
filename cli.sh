#!/usr/bin/env bash
WORK_DIR=$(dirname $(readlink -f $0))
cd $WORK_DIR
NODE_ENV=production node index.js