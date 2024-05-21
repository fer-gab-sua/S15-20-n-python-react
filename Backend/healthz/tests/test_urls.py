from django.test import SimpleTestCase

# Create your tests here.


class TestUrls(SimpleTestCase):
    def test_health_check_url(self):
        response = self.client.get("/healthz/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.content, b"Si puede ver este texto, el servicios funciona correctamente")
