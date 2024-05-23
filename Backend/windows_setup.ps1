# Crear el entorno virtual
python -m venv ..\.venv

# Activar el entorno virtual
..\.\.venv\Scripts\activate

# Instalar las dependencias
pip install -r requirements.txt

# Hacer las migraciones
python manage.py makemigrations
python manage.py migrate