#!/usr/bin/env bash
# Push all Supabase env vars to Vercel (requires: vercel login)
# Usage: ./scripts/setup-vercel-env.sh [project-name]
set -euo pipefail

PROJECT="${1:-imoti-nadezhda}"

if [[ ! -f .env ]]; then
  echo "Missing .env file. Copy .env.example to .env and fill in values."
  exit 1
fi

set -a
source .env
set +a

vars=(
  VITE_SUPABASE_URL
  VITE_SUPABASE_PUBLISHABLE_KEY
  VITE_SUPABASE_PROJECT_ID
  SUPABASE_URL
  SUPABASE_PUBLISHABLE_KEY
  SUPABASE_SECRET_KEY
  SUPABASE_JWKS_URL
)

for var in "${vars[@]}"; do
  value="${!var:-}"
  if [[ -z "$value" ]]; then
    echo "Skipping empty: $var"
    continue
  fi
  echo "Setting $var on project $PROJECT..."
  printf '%s' "$value" | npx vercel env add "$var" production preview development --force --project "$PROJECT"
done

echo "Done. Redeploy with: npx vercel --prod --project $PROJECT"
