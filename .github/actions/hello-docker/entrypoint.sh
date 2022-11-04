#!/bin/sh -l -p

echo "::debug ::Debug Message"
echo "::Warning ::Warning Message"
echo "::error ::Error Message"

echo "::add-mask::$1"
echo  "Hello $1"

time = $(date)

echo "::set-output name=time::$time"

echo "::group::some expandable logs"
echo "some stuff"
echo "some stuff"
echo "::endgroup::"

echo '::set-env name=HELLO::hello'