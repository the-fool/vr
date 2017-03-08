#!/bin/bash

set -e

yarn
npm run build
scp -i ~/.ssh/victor.pem dist/{*.js,*.css,*.html} ec2-user@victorruble.com:/usr/share/nginx/html
ssh -i ~/.ssh/victor.pem ec2-user@victorruble.com 'sudo service nginx restart'
