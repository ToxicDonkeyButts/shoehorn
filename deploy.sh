#!/bin/bash
eval $(ssh-agent -s)
echo "$SSH_PRIVATE_KEY" | base64 --decode > key
ssh-add key
ssh $SSH_USER@$SERVER_IP echo "hello from the server"