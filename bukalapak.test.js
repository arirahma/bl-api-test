const request = require("supertest")("https://jsonplaceholder.cypress.io");
const expect = require("chai").expect;

describe("GET /posts", function () {
  it("validation response type", async function () {
    const response = await request.get("/posts");
    console.log(response.body)

    expect(response.status).to.eql(200);
    expect(Number.isInteger(response.body.userId));
    expect(Number.isInteger(response.body.id));
    expect(isNaN(response.body.title));
    expect(isNaN(response.body.body));
  });

  it("validation send data", async function () {
    const response = await request.post("/posts").send(
    {
      title: "recomendation",
      body: "motorcyle",
      userId: 12
    }
    );
    console.log(response.body)

    expect(response.status).to.eql(201);
    expect(response.body.title).to.eql("recomendation");
    expect(response.body.body).to.eql("motorcyle");
    expect(response.body.userId).to.eql(12);
    
  });

});
