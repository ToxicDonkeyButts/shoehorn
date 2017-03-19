#!/bin/bash
echo "Hello world"

eval $(ssh-agent -s)
ssh-add <(echo "$SSH_PRIVATE_KEY")

ssh $SSH_USER@$SERVER_IP echo "hello from the server"