import { User } from "../../../src/models/User";
import { signup, login, logout } from "../../../src/api/endpoints/auth";

describe( signup.name, () => {
  it("should return Object", function () {
    const requestBody = signup( new User() );

    expect( requestBody ).toBeInstanceOf( Object );
    expect( requestBody.uri ).toBe("register");
    expect( requestBody.method ).toBe( "POST" );
    expect( requestBody.body ).toBeInstanceOf( Object );
    expect( requestBody.body ).toStrictEqual( (new User()).getData() );
  });

  it("should throw TypeError", function () {
    [ {}, 1, "string", null, undefined ].forEach( payload => {
      expect( () => signup( payload ) ).toThrow( TypeError );
    });
  });
});

describe( login.name, () => {
  it("should return Object", function () {
    const email = "123@test.tt";
    const password = "1234";

    const requestBody = login( email, password );

    expect( requestBody ).toBeInstanceOf( Object );
    expect( requestBody.uri ).toBe("login");
    expect( requestBody.method ).toBe( "POST" );
    expect( requestBody.body ).toBeInstanceOf( Object );
    expect( requestBody.body ).toStrictEqual({
      email, password
    });
  });

  it("should throw Error", function () {
    expect( () => signup( "123@test.tt" ) ).toThrow( Error );
    expect( () => signup( null, "1234" ) ).toThrow( Error );
  });
});

describe( logout.name, () => {
  it("should return Object", function () {
    const requestBody = logout();
    expect( requestBody ).toBeInstanceOf( Object );
    expect( requestBody.uri ).toBe("logout");
    expect( requestBody.method ).toBe( "POST" );
  });
});
