#!/usr/bin/env bash
set -euo pipefail

# Create a small "diagnostics bundle" zip for Netlify/Vite issues.
# Run from the repo root (the folder containing package.json and client/).

ROOT_DIR="$(pwd)"
OUT_DIR="${ROOT_DIR}/_netlify_debug_bundle"
ZIP_NAME="netlify_debug_bundle.zip"

echo "Repo root: ${ROOT_DIR}"

# Safety: refuse to run if we don't see expected structure
if [[ ! -f "${ROOT_DIR}/package.json" ]]; then
  echo "ERROR: package.json not found in current directory."
  echo "Run this from your repo root (where package.json lives)."
  exit 1
fi

if [[ ! -d "${ROOT_DIR}/client" ]]; then
  echo "ERROR: client/ directory not found."
  echo "This script assumes your Vite app is in ./client"
  exit 1
fi

# Clean previous bundle
rm -rf "${OUT_DIR}"
rm -f "${ROOT_DIR}/${ZIP_NAME}"
mkdir -p "${OUT_DIR}"

# Helper to copy a file if it exists, preserving folders
copy_if_exists () {
  local rel="$1"
  local src="${ROOT_DIR}/${rel}"
  if [[ -f "${src}" ]]; then
    mkdir -p "${OUT_DIR}/$(dirname "${rel}")"
    cp -p "${src}" "${OUT_DIR}/${rel}"
    echo "  + ${rel}"
  fi
}

echo "Copying key config files..."
copy_if_exists "netlify.toml"
copy_if_exists "package.json"
copy_if_exists "package-lock.json"
copy_if_exists "pnpm-lock.yaml"
copy_if_exists "yarn.lock"
copy_if_exists "tsconfig.json"
copy_if_exists "vite.config.ts"
copy_if_exists "vite.config.js"
copy_if_exists "postcss.config.js"
copy_if_exists "tailwind.config.js"
copy_if_exists "tailwind.config.ts"
copy_if_exists "components.json"

echo "Copying client entrypoints..."
copy_if_exists "client/index.html"
copy_if_exists "client/vite.config.ts"
copy_if_exists "client/vite.config.js"
copy_if_exists "client/package.json"
copy_if_exists "client/package-lock.json"
copy_if_exists "client/tsconfig.json"
copy_if_exists "client/postcss.config.js"
copy_if_exists "client/tailwind.config.js"
copy_if_exists "client/tailwind.config.ts"

# Copy source directories (client/src and client/public are usually enough)
echo "Copying client/src and client/public (excluding node_modules/dist/.git/.env*)..."
mkdir -p "${OUT_DIR}/client"

rsync -a \
  --exclude ".git/" \
  --exclude "node_modules/" \
  --exclude "dist/" \
  --exclude ".cache/" \
  --exclude ".local/" \
  --exclude ".DS_Store" \
  --exclude ".env" \
  --exclude ".env.*" \
  "${ROOT_DIR}/client/src" "${OUT_DIR}/client/" 2>/dev/null || true

rsync -a \
  --exclude ".git/" \
  --exclude "node_modules/" \
  --exclude "dist/" \
  --exclude ".cache/" \
  --exclude ".local/" \
  --exclude ".DS_Store" \
  --exclude ".env" \
  --exclude ".env.*" \
  "${ROOT_DIR}/client/public" "${OUT_DIR}/client/" 2>/dev/null || true

# Copy any build scripts referenced in earlier logs (script/build.ts etc.)
echo "Copying build scripts (if present)..."
if [[ -d "${ROOT_DIR}/script" ]]; then
  rsync -a \
    --exclude ".git/" \
    --exclude "node_modules/" \
    --exclude "dist/" \
    --exclude ".cache/" \
    --exclude ".local/" \
    --exclude ".DS_Store" \
    --exclude ".env" \
    --exclude ".env.*" \
    "${ROOT_DIR}/script" "${OUT_DIR}/" 2>/dev/null || true
fi

echo "Copying server/ and shared/ ONLY if they exist (sometimes referenced by build)..."
for d in server shared; do
  if [[ -d "${ROOT_DIR}/${d}" ]]; then
    rsync -a \
      --exclude ".git/" \
      --exclude "node_modules/" \
      --exclude "dist/" \
      --exclude ".cache/" \
      --exclude ".local/" \
      --exclude ".DS_Store" \
      --exclude ".env" \
      --exclude ".env.*" \
      "${ROOT_DIR}/${d}" "${OUT_DIR}/" 2>/dev/null || true
  fi
done

# Final safety: ensure no .env files slipped in
echo "Checking for .env files in bundle..."
if find "${OUT_DIR}" -type f -name ".env*" | grep -q .; then
  echo "ERROR: .env files found in the bundle. Removing them for safety..."
  find "${OUT_DIR}" -type f -name ".env*" -delete
fi

echo "Creating zip: ${ZIP_NAME}"
(
  cd "${OUT_DIR}"
  zip -qr "${ROOT_DIR}/${ZIP_NAME}" .
)

echo "Done."
echo "Created: ${ROOT_DIR}/${ZIP_NAME}"
echo "You can upload that zip here."

