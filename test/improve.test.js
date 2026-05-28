const chai = require("chai");
const chaiHttp = require("chai-http");
const knex = require("../knex.js");
const { setupServer } = require("../server.js");

const app = setupServer();
const expect = chai.expect;
chai.use(chaiHttp);

describe("GET /api/improve", () => {
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
    const response = await request.get("/api/improve");
    expect(response).to.have.status(200);
  });

  it("データがオブジェクトであること", async () => {
    const response = await request.get("/api/improve");
    const data = JSON.parse(response.text);

    expect(data).to.be.an.instanceOf(Object);
  });

  it("データのプロパティにクラブがあること", async () => {
    const response = await request.get("/api/improve/");
    const data = JSON.parse(response.text);

    expect(data).to.have.property("ドライバー");
    expect(data).to.have.property("5番ウッド");
    expect(data).to.have.property("6番アイアン");
    expect(data).to.have.property("7番アイアン");
    expect(data).to.have.property("8番アイアン");
    expect(data).to.have.property("9番アイアン");
    expect(data).to.have.property("ピッチングウェッジ");
    expect(data).to.have.property("アプローチウェッジ");
    expect(data).to.have.property("サンドウェッジ");
  });
});
