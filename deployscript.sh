now rm `now ls novacharta-website` -y

NEW_DEPLOY_NAME="$(now -c)"

now alias set $NEW_DEPLOY_NAME novacharta-website-dev.now.sh
