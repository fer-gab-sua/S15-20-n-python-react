#!/bin/bash

# Crear el entorno virtual
python3 -m venv ../env

# Activar el entorno virtual
source ../env/bin/activate

# Instalar las dependencias
pip install -r requirements.txt

# Hacer las migraciones
python manage.py migrate