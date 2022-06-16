#!/usr/bin/env bash

set -Eeuf -o pipefail
shopt -s inherit_errexit
set -x

main() {
  git -C ~qs/www pull --dry-run -vv
}
main "$@"
