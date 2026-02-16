const request = require('supertest');
const app = require('./index');

describe('GET /hello/:name', () => {
  it('should return "hi" followed by the name parameter', async () => {
    const name = 'Hamza';
    const res = await request(app).get(`/hello/${name}`);

    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe(`hi ${name}`);
  });
});