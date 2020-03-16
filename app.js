const request = require('request');
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });



nightmare
  //id is added onto the webpage to go to the page.
  .goto('https://students.genesisedu.com/bernardsboe/sis/view?gohome=true')
  .click("input#j_username")
  .insert("input#j_username",process.argv[2])
  .click("input#j_password")
  .insert("input#j_password",process.argv[3])
  .click('input[type=submit]')
  .wait(1000)
  .click('button#__button1__')
  .wait(1000)
  .click("#attendanceType")
  .select("#attendanceType",'Present')
  .click('input[type=submit]')
  .then(console.log)
  .catch(error => {
   console.error('Search failed:', error)
 })