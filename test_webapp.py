import unittest
import webapp


class HomeViewTest(unittest.TestCase):

    def setUp(self):
      self.app = webapp.app.test_client()
      self.app.testing = True

    def test_home_page(self):
        home = self.app.get('/')
        self.assertIn('Home Page', str(home.data))


if __name__ == "__main__":
    unittest.main()
