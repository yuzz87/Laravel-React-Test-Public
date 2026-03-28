#!/bin/sh
set -e

cd /var/www

echo "Starting backend setup..."

if [ ! -f .env ]; then
  echo ".env not found. Copying from .env.example..."
  cp .env.example .env
fi

if [ ! -f vendor/autoload.php ]; then
  echo "vendor/autoload.php not found. Running composer install..."
  composer install --no-interaction --prefer-dist
else
  echo "vendor/autoload.php exists. Skipping composer install."
fi

if ! grep -q "^APP_KEY=base64:" .env; then
  echo "APP_KEY not found. Generating..."
  php artisan key:generate --force
else
  echo "APP_KEY already exists."
fi

echo "Waiting for database..."
until php artisan migrate --force; do
  echo "Database not ready yet. Retrying in 3 seconds..."
  sleep 3
done

echo "Backend setup completed."

exec apache2-foreground