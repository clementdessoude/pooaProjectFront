#!/bin/sh

exec npm run build
exec docker build . -t clement26695/myseries_front
