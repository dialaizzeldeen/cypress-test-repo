import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import { contains, when } from "cypress/types/jquery";
import  LoginPageActions  from "../../objectsFile/loginActions";
import  LoginPageAssertions  from "../../objectsFile/loginAssertions";


const loginPageActions = new LoginPageActions();
const loginPageAssertions=new LoginPageAssertions();

Given('I open R365 login page', () => {
  loginPageActions.openR365LoginPage();
  });
 
  When('Insert username {string}', (content) => { 
    loginPageActions.fillUsernameField(content);
  });
  When('Insert password {string}', (content) => { 
    loginPageActions.fillPasswordField(content);
});
 
  When('Click on SignIn button', () => {
    loginPageActions.clickOnSigninButton();
  });
  
  Then('Error message {string} should display', (content) => {
    loginPageAssertions.CheckErrorMessageIsDisplay(content);

  });
  
  Then('HomePage {string} open', (content)=>{
    if(content=="shouldnt"){
    loginPageAssertions.checkHomePageIsOpen(false);}
    else if(content =="should"){
    loginPageAssertions.checkHomePageIsOpen(true);
    }
   
  });
  
