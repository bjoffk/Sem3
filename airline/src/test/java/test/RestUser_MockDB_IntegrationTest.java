//package test;
//
//import entity.PU;
//import org.junit.BeforeClass;
//import io.restassured.RestAssured;
//import static io.restassured.RestAssured.*;
//import io.restassured.parsing.Parser;
//import java.io.IOException;
//import java.net.MalformedURLException;
//import javax.servlet.ServletException;
//import org.apache.catalina.LifecycleException;
//import static org.hamcrest.Matchers.*;
//import org.junit.AfterClass;
//import org.junit.Before;
//import org.junit.Ignore;
//import org.junit.Test;
//import test.utils.EmbeddedTomcat;
//
//public class RestUser_MockDB_IntegrationTest {
//
//  private static final int SERVER_PORT = 9999;
//  private static final String APP_CONTEXT = "/seed";
//  private static EmbeddedTomcat tomcat;
//
//  public RestUser_MockDB_IntegrationTest() {
//  }
//  private static String securityToken;
//
//  //Override in a derived test-class to repeat the tests with an alternative database
//  public void setupUsersInDB() {
//    PU.setPU_Name("pu_memorydb_mock");
////    utils.MakeTestUsers.main(null);
//  }
//
//  //Utility method to login and set the securityToken
//  private static void login(String role, String password) {
//    String json = String.format("{username: \"%s\", password: \"%s\"}", role, password);
//    //System.out.println(json);
//    securityToken = given()
//            .contentType("application/json")
//            .body(json)
//            .when().post("/api/login")
//            .then()
//            .extract().path("token");
//    //System.out.println("Token: " + securityToken);
//
//  }
//
//  private void logOut() {
//    securityToken = null;
//  }
//
//  @BeforeClass
//  public static void setUpBeforeAll() throws ServletException, MalformedURLException, LifecycleException {
//    tomcat = new EmbeddedTomcat();
//    tomcat.start(SERVER_PORT, APP_CONTEXT);
//    RestAssured.baseURI = "http://localhost";
//    RestAssured.port = SERVER_PORT;
//    RestAssured.basePath = APP_CONTEXT;
//    RestAssured.defaultParser = Parser.JSON;
//  }
//
//  @AfterClass
//  public static void after() throws ServletException, MalformedURLException, LifecycleException, IOException {
//    tomcat.stop();
//  }
//
//  @Before
//  public void setup() {
//    setupUsersInDB();
//  }
//
//  @Test
//  public void testRestNoAuthenticationRequired() {
//    given()
//            .contentType("application/json")
//            .when()
//            .get("/api/demoall").then()
//            .statusCode(200)
//            .body("message", equalTo("result for all"));
//  }
//
////  @Test
////  public void tesRestForAdmin() {
////    login("admin", "test");
////    given()
////            .contentType("application/json")
////            .header("Authorization", "Bearer " + securityToken)
////            .when()
////            .get("/api/demoadmin").then()
////            .statusCode(200)
////            .body("message", equalTo("Hello Admin from server (call accesible by only authenticated ADMINS)"))
////            .body("serverTime", notNullValue());
////  }
//
////  @Test
////  public void testRestForUser() {
////    login("user", "test");
////    given()
////            .contentType("application/json")
////            .header("Authorization", "Bearer " + securityToken)
////            .when()
////            .get("/api/demouser").then()
////            .statusCode(200)
////            .body("message", equalTo("Hello User from Server (Accesible by only authenticated USERS)"));
////  }
//
//  @Test
//  public void userNotAuthenticated() {
//    logOut();
//    given()
//            .contentType("application/json")
//            .when()
//            .get("/api/demouser").then()
//            .statusCode(401)
//            .body("error.message", equalTo("No authorization header provided"));
//  }
//
//  @Test
//  public void adminNotAuthenticated() {
//    logOut();
//    given()
//            .contentType("application/json")
//            .when()
//            .get("/api/demoadmin").then()
//            .statusCode(401)
//            .body("error.message", equalTo("No authorization header provided"));
//
//  }
//
//}
