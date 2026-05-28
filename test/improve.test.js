const chai = require("chai");
const chaiHttp = require("chai-http");
const knex = require("./knex.js");
const { setupServer } = require("./server.js");

const app = setupServer();
const expect = chai.expect;
chai.use(chaiHttp);
