from rest_framework.test import APITestCase
from health.views import HealthListView

# Create your tests here.


class HealthTestCase(APITestCase):
    def test_create_message(self):
        request = self.client.post(
            '/health/', {'message': 'El servicio se encuentra en operativo'}, format='json')
        self.assertEqual(request.status_code, 200)

    def test_health_check_url(self):
        response = self.client.get('/health/')
        self.assertEqual(response.status_code, 200)
