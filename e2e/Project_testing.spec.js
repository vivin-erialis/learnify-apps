Feature('Project testing');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Mengakses navbar home, dashboard, dan about', ({ I }) => {
  // akses home
  I.waitForElement('.nav-list', 20);
  I.seeElement('.nav-list');
  I.waitForElement('.home a', 20);
  I.seeElement('.home a');
  I.click('.home a');
  I.amOnPage('/');
  I.seeElement('#main-content');

  // akses dashboard
  I.waitForElement('.nav-list', 20);
  I.seeElement('.nav-list');
  I.waitForElement('.dash a', 20);
  I.seeElement('.dash a');
  I.click('.dash a');
  I.amOnPage('/');
  I.seeElement('#dashboard');

  // akses about
  I.waitForElement('.nav-list', 20);
  I.seeElement('.nav-list');
  I.waitForElement('.about a', 20);
  I.seeElement('.about a');
  I.click('.about a');
  I.amOnPage('/');
  I.seeElement('#about');
});

Scenario('Mengakses Salah Satu Modul dan Detail Modul dari Navbar', ({ I }) => {
// akses navbar module
  I.seeElement('.dropdown');
  I.waitForElement('.dropdown');
  I.seeElement('.dropdown-button');
  I.click('.dropdown-button');
  I.click('[href="#/bisnis"]');

  // klik detail
  I.waitForElement('.module-item', 20);
  I.seeElement('.module-item');
  I.waitForElement('.module-item a', 20);
  I.seeElement('.module-item a');
  I.click(locate('.module-item a').first());
  I.seeElement('#details .module-item .container');
});
