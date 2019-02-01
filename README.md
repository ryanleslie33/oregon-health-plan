# _Oregon-health_

#### _{Allows a user to enter in information they want to receive about doctors in there area and health coverage}, {January 25, 2019}_

#### By _**{Ryan Leslie}**_

## Description

_This application is was built purely for educational purposes, it is replica of the oregon.gov website with a few modifications that I have added to apply good code practice in angular while using API calls and a database. So far the application has similar buttons to the actual website but only a few of them work(listed below in the specs). I plan on finishing all the links that the actual website has but will have my own dynamic forms and functions that makes the site much more simple. I want the application to eventually take in your information and save that into a database so you can login with that specific info authentication and see you inputted info. Also the API call will be able to look up doctors in your area that take whatever type of insurance that you qualify for or have. There is also a lot of layout and styling that I want to change on this application to make it more clean and similar to its actual replica website._

## Setup/Installation Requirements

* _Clone this repository to your terminal_
* _open it up in atom or Visual Studio or a text editor of your choice_
* _run a npm install in your terminal_
* _if everything loads correctly you should be able to run ng serve and use the application_


## Specifications
* _user can enter there name, address, and year income to see if they are eligible for OHP health insurance, if there yearly income is above 35,000 the output will return false_.

* _If user is not eligible for OHP health insurance they can click a button to see list of paid Insurance packages they have available._

* _User can click on the link "Quick Start Guide" , Output will direct you to a new page that has input fields for name, address, and salary._

* _If user fills out the forms and clicks on add, Output will save the users information onto the database and display the information on the screen._

* _If the user clicks on the enter-enroll button next to the add button, Output will take them to a new page that lets them know there information has been submitted with a button to take them back to the home-page. _

* _API specs-----------------------------these specs are to be ignored until API is correctly installed_

* _User can to enter a medical issue to receive a list of doctors in the portland area that fit the input_.

* _User can enter a name to receive a list of doctors in the Portland area that fit search criteria_

* _After user had entered in the name or criteria the output should display first name, last name, address, phone number, and whether or not the doctor is taking new patients._

* _If the output does not meet any of the search criteria and there are no doctors available it should output "no doctors meet the criteria"_






## Known Bugs

_At this time the application is not complete and will have API and database to go along with the input to record and output information other than then there is no known bugs at this time_

## Support and contact details

_{If you have any questions about this application or are having trouble running it, You can contact me at the email address listed below._

  _ryanleslie33@aol.com_

## Technologies Used

_this application is written in type script and angular with a firebase database system_

### License

*This application is Licensed under the MIT software Licence agreement. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*

Copyright (c) 2019 **_{Ryan Leslie, Epicodus}_**
