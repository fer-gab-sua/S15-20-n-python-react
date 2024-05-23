# Crear el entorno virtual
python -m venv ..\env

# Activar el entorno virtual
..\.\env\Scripts\activate

# Instalar las dependencias
pip install -r requirements.txt

# Hacer las migraciones
python manage.py migrate