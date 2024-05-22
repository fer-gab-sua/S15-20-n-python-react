from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions

# Instance of User model
User = get_user_model()

# Serializer for User model


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'first_name',
                  'last_name',]
        extra_kwargs = {'password': {'write_only': True}, }

    def validate(self, data):
        user = User(**data)
        password = data.get('password')

        if not password:
            raise serializers.ValidationError(
                'Favor indique el password para validar el usuario dado')

        try:
            validate_password(password, user)
        except exceptions.ValidationError as exc:
            raise serializers.ValidationError(str(exc))

        return data
