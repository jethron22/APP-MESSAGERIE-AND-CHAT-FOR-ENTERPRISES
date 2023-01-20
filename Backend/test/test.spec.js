const SentMessages = require("../controller/sendAllMessage");
// const assert = require("chai").assert
const chai = require("chai")
const server = require("../server")
const chaiHttp = require("chai-http")

chai.use(chaiHttp);
const expect = chai.expect;

describe("GET /api/sentMessages", function () {

  it("should send messages", function () {
    chai.request(server)
      .post("/api/sentMessages")
      .send({
        idSender: "63ac0c9388ceda3177019bc1",
        idReceiver: "63ac0efe88ceda3177019bc5",
        message: "message envoyé avec succès chez le receiver",
      })
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      });
  });
});
