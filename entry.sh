#!/bin/sh

mkdir -p /var/run/autokit
echo '{ "devices": {} }' > /var/run/autokit/devices

udevadm trigger
npm run serve