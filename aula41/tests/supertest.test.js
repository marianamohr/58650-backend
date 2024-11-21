import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const request = supertest("http://localhost:8080");

describe("testing adoptme", () => {
  /* describe("tests pets", () => {
    /it("test POST cria um pet corretamente", async () => {
      const petMock = {
        name: "Rex",
        specie: "dog",
        birthDate: "10-10-2010",
      };
      const { statusCode, ok, _body } = await request
        .post("/api/pets")
        .send(petMock);
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.equal(true);
      expect(_body.payload).to.have.property("_id");
    });
    it("test Post com dados incompletos", async () => {
      //Arrange
      const petMock = {
        specie: "dog",
        birthDate: "10-10-2010",
      };

      //Act
      const { statusCode, ok, _body } = await request
        .post("/api/pets")
        .send(petMock);

      //Assert
      expect(statusCode).to.be.equal(400);
      expect(ok).to.be.equal(false);
      expect(_body.status).to.be.equal("error");
      expect(_body.error).to.be.equal("dados faltando");
    });
     it("test GET retorna todos os pets corretamente", async () => {
      const { statusCode, ok, _body } = await request.get("/api/pets");

      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.equal(true);
      expect(_body.payload).to.be.an("array");
    });
    it("test GET retorna um pet corretamente by id", async () => {
      // arrange
      const petMock = {
        name: "bolinha",
        specie: "dog",
        birthDate: "10-10-2010",
      };

      const pet = await request.post("/api/pets").send(petMock);
      
      // act
      const { statusCode, ok, _body } = await request.get(
        `/api/pets/${pet.body.payload._id}`
      );

      // asset
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.equal(true);
      expect(_body.payload).to.be.an("object");
      expect(_body.payload).to.have.property("_id");
      expect(_body.payload._id).to.be.equal(pet.body.payload._id);
    });
  });
  describe("unprotected login", () => {
    it("erro ao tentar fazer um login sem o dado de email", async () => {
      const mockUser = { mail: "teste@teste.com", password: 123 };
      const { statusCode, _body } = await request
        .get("/api/sessions/unprotectedLogin")
        .send(mockUser);
      expect(statusCode).to.be.eql(400);
      expect(_body.error).to.be.eql("Incomplete values");
    });
    it("erro ao tentar fazer um login de uma pessoa nao cadastrada", async () => {
      const mockUser = { email: "teste@teste.com", password: 123 };
      const { statusCode, _body } = await request
        .get("/api/sessions/unprotectedLogin")
        .send(mockUser);
      expect(statusCode).to.be.eql(404);
      expect(_body.error).to.be.eql("User doesn't exist");
    });
    it("erro ao tentar fazer um login com uma senha errada", async () => {
      const mockUser = {
        first_name: "Gui",
        last_name: "salzer",
        email: "guisalzer@gmail.com",
        password: "123",
      };
      //const register = await request
      //.post("/api/sessions/register")
      //.send(mockUser);
      const { statusCode, _body } = await request
        .get("/api/sessions/unprotectedLogin")
        .send({ email: mockUser.email, password: mockUser.password });
      console.log(statusCode, _body);
      //expect(statusCode).to.be.eql(404);
      //expect(_body.error).to.be.eql("User doesn't exist");
    });
  });*/
  describe("pets com imagem", () => {
    it("deve criar um pet com a rota da imagem", async () => {
      const petMock = {
        name: "Rex",
        specie: "dog",
        birthDate: "10-10-2010",
      };
      const result = await request
        .post("/api/pets/withimage")
        .field("name", petMock.name)
        .field("specie", petMock.specie)
        .field("birthDate", petMock.birthDate)
        .attach("image", "./tests/teste.png");
        
      expect(result.ok).to.be.eql(true)
      expect(result._body.payload).to.have.property('_id')
      expect(result._body.payload.image).to.be.ok
    });
  });
});
