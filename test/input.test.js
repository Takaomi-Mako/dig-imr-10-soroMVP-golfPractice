const chai = require("chai");
const chaiHttp = require("chai-http");
const knex = require("../knex.js");
const { setupServer } = require("../server.js");

const app = setupServer();
const expect = chai.expect;
chai.use(chaiHttp);

describe("POST /api/input", () => {
  let request;

  before(async () => {
    await knex.migrate
      .forceFreeMigrationsLock()
      .then(() => knex.migrate.rollback({ all: true }))
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
      .catch(console.error);

    request = chai.request(app).keepOpen();
  });

  after(() => {
    request.close();
  });

  it("ステータスが200であること", async () => {
    const newData = {
      date: "2026-05-25",
      club: "8番アイアン",
      amount: 5,
      intention: "捕まえる",
      miss: ["スライス", "トップ"],
    };
    const response = await request.post("/api/input").send(newData);
    expect(response).to.have.status(200);
  });

  it("データが配列であること", async () => {
    const newData = {
      date: "2026-05-25",
      club: "8番アイアン",
      amount: 5,
      intention: "捕まえる",
      miss: ["スライス", "トップ"],
    };
    const response = await request.post("/api/input").send(newData);
    const data = JSON.parse(response.text);

    expect(data).to.be.an.instanceOf(Array);
  });
});
