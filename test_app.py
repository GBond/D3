import unittest
import app


class HomeViewTest(unittest.TestCase):

    def setUp(self):
      self.app = app.app.test_client()
      self.app.testing = True

    def test_home_page(self):
        home = self.app.get('/')
        self.assertIn('Borrow - A Loan Company Whom You can Trust with Your Personal Data', str(home.data))


if __name__ == "__main__":
    unittest.main()
