#!/bin/sh
npx payload migration:run
exec "$@"
