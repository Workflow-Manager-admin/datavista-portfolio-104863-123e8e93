#!/bin/bash
cd /home/kavia/workspace/code-generation/datavista-portfolio-104863-123e8e93/portfolio_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

