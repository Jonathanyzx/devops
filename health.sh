#!/usr/bin/env bash

set -euo pipefail

echo "Campus-notes DevOps Lab"
echo "Current user: $(whoami)"
echo "Current directory: $(pwd)"
echo "Date: $(date)"

echo "Disk usage:"
df -h
