const mongoose = require('mongoose');
const supertest = require('supertest');
const assert = require('assert');
const app = require('../app/app');
const User = require('../app/user-schema');
const data = require('./test-db-info-mongo.json');

const api = supertest(app);

beforeEach(async () => {
  await User.deleteMany({});
  User.collection.insertMany(data, (err, r) => {
    assert.equal(null, err);
    assert.equal(4, r.insertedCount);
  });
});

test('notes are returned as json', async () => {
  await api
    .get('/players/')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

afterAll(() => {
  mongoose.connection.close();
});
