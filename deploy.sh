#!/bin/bash
eval $(ssh-agent -s)
echo "StrictHostKeyChecking no" >> .ssh/config
echo "$SSH_PRIVATE_KEY" | base64 --decode > key
chmod 600 key
ssh-add key
ssh $SSH_USER@$SERVER_IP echo "hello from the server"