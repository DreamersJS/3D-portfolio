name: Sync Portfolio 3D with Upstream

on:
  workflow_dispatch:

permissions:
  contents: write

jobs:
  sync:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout main branch
        uses: actions/checkout@v4
        with:
          ref: main
          fetch-depth: 0

      - name: Add upstream
        run: |
          git remote add upstream https://github.com/DreamersJS/3D-portfolio.git || true

      - name: Fetch upstream
        run: git fetch upstream

      - name: Reset main branch to upstream
        run: |
          git reset --hard upstream/main

      - name: Push main branch
        run: git push origin main --force