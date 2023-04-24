#!/usr/bin/env bash
WORK_DIR="$(dirname "$(readlink -f "$0")")"
node $WORK_DIR/index.js
