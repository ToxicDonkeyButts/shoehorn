#!/bin/bash
eval $(ssh-agent -s)
echo "$SSH_PRIVATE_KEY" | base64 --decode > key
chmod 600 key
ssh-add key
rsync -a -e "ssh -p $SSH_PORT -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" $TRAVIS_BUILD_DIR/ $SSH_USER@$SERVER_IP:$DEPLOY_PATH