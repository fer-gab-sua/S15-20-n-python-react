from django.test import TestCase

# Create your tests here.


class TeamListViewTests(TestCase):
    def test_index_returns_200(self):
        request = self.client.get('/team/team/list/')
        self.assertEqual(request.status_code, 200)
