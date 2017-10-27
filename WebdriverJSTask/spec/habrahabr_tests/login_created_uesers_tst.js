const webdriver = require('selenium-webdriver');

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.manage().window().maximize();

const world = require('../../page_objects/world');

describe("habrahabr.ru tests", function() {

  let originalTimeout;
  const userNickName = "kirillmolotil";
  const usersPassword = "qweasdzxc123";
  const usersEmail = "bogdanetskirill@gmail.com";
  const usersActivityOutput = "Нет публикаций с новыми комментариями.";
  let numberOfHabraUsers,
      numberOfHabraBoysUsers,
      numberOfHabraGirlsUser,
      numberOfHabraOthersUsers;

  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    driver.get(world.homePage.homePageUrl);
  });

  afterAll(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    driver.quit();
  });

it("login already registered user", (done) => {

  (driver.findElement(world.homePage.header.loginButton).click()
  ).then(() => {
    return driver.findElement(world.loginPage.emailField).sendKeys(usersEmail);
  }).then(() => {
    return driver.findElement(world.loginPage.passwordField).sendKeys(usersPassword);
  }).then(() => {
    driver.findElement(world.loginPage.enteringButton).click();
  }).then(() =>{
    return driver.wait(driver.findElement(world.homePage.header.habrahabrLogo), 5000);
  }).then(() => {
    driver.sleep(1000);
    return driver.findElement(world.homePage.header.habrahabrLogo).click();
  }).then(() => {
    return driver.findElement(world.homePage.header.loggedUsersButton).click();
  }).then(() => {
    return driver.wait(driver.findElement(world.homePage.header.loggedUsersProfile), 5000)
  }).then(() => {
    return driver.findElement(world.homePage.header.loggedUsersProfile).getText();
  }).then((usersNickname) => {
    expect(userNickName).toEqual(usersNickname);
  }).then(() => {
    return driver.findElement(world.homePage.header.tracker).click();
  }).then(() => {
    return driver.wait(driver.findElement(world.trackerPage.trackerUsersPersonalInfo), 5000);
  }).then(() => {
    return driver.findElement(world.trackerPage.trackerUsersPersonalInfo).click();
  }).then(() => {
    return driver.wait(driver.findElement(world.trackerPage.trackerUsersInfoOutput), 5000);
  }).then(() => {
    return driver.findElement(world.trackerPage.trackerUsersInfoOutput).getText();
  }).then((usersActivity) => {
    expect(usersActivityOutput).toEqual(usersActivity);
    done();
  });
});

  it("verification that above habrahabr.ru users more boys than girls", (done) => {
    (driver.findElement(world.homePage.header.users).click()
    ).then(() => {
      return driver.wait(driver.findElement(world.usersPage.numberOfAllUsers), 5000);
    }).then(() => {
      return driver.findElement(world.usersPage.numberOfAllUsers).getText();
    }).then((numberOfAllUsers) => {
      numberOfHabraUsers = numberOfAllUsers;
      // done();
      return driver.findElement(world.usersPage.numberOfBoys).getText();
    }).then((numberOfBoys) => {
      numberOfHabraBoysUsers = numberOfBoys;
      return driver.findElement(world.usersPage.numberOfGirls).getText();
    }).then((numberOfGirls) => {
      numberOfHabraGirlsUser = numberOfGirls;
      expect(numberOfHabraBoysUsers).toBeGreaterThan(numberOfHabraGirlsUser);
      done();
    });
  });
});
