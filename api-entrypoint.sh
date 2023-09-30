#!/bin/bash

echo "making migrations"
npx prisma migrate dev

echo "running"
npm run dev