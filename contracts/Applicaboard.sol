pragma solidity >=0.4.21 <0.6.0;

contract Applicaboard {
  event NewApplication(uint applicationId, address applicant, string text);

  struct Application {
    address applicant;
    string text;
  }

  Application[] public _applications;

  function createApplication(string memory text) public {
    Application memory application = Application(msg.sender, text);
    uint applicationId = _applications.push(application) - 1;
    emit NewApplication(applicationId,
                        application.applicant,
                        application.text);
  }
}
