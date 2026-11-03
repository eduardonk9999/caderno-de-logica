#!/bin/bash
# Gera docs/index.html (GitHub Pages) a partir de caderno/caderno.html.
# O caderno.html não tem <html>/<head> (o Artifact adiciona), então aqui a gente embrulha.
set -e
cd "$(dirname "$0")/.."
src=caderno/caderno.html
mkdir -p docs
head_part=$(awk '{print} /<\/style>/{exit}' "$src")
body_part=$(awk 'f{print} /<\/style>/{f=1}' "$src")
cat > docs/index.html <<HTML
<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
$head_part
</head>
<body>
$body_part
</body>
</html>
HTML
echo "docs/index.html gerado"
