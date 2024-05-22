from rest_framework.test import APITestCase

# Create your tests here.


class TestUser(APITestCase):
    def test_create_user(self):
        request = self.client.post(
            '/users/', {'username': 'test', 'password': 'test'}, format='json')
        self.assertEqual(request.status_code, 200)
