import pytest
from app import app as flask_app

@pytest.fixture
def client():
    with flask_app.test_client() as client:
        yield client

def test_hello(client):
    response = client.get('/hello/world')
    assert response.status_code == 200
    assert b'Hello, world!' in response.data