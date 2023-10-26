#!/bin/bash
. /etc/profile

set -e

npm i -g pnpm@7

pnpm install
pnpm run build
