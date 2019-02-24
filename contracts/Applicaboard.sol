pragma solidity >=0.4.21 <0.6.0;

contract Applicaboard {
  event NewApplication(uint applicationId,
                       address applicant,
                       string text);

  event NewResponse(uint applicationId,
                    address applicant,
                    string text,
                    string response);

  struct Application {
    address applicant;
    string text;
    bool resolved;
    string response;
  }

  Application[] public _applications;

  function getApplicationsCount() public view returns (uint) {
    return _applications.length;
  }

  function createApplication(string memory text) public {
    Application memory application = Application(msg.sender, text, false, '');

    uint applicationId = _applications.push(application) - 1;

    emit NewApplication(applicationId,
                        application.applicant,
                        application.text);
  }

  function createResponse(uint applicationId, string memory response) public {
    Application storage application = _applications[applicationId];

    require(!application.resolved);

    application.resolved = true;
    application.response = response;

    emit NewResponse(applicationId,
                     application.applicant,
                     application.text,
                     application.response);
  }
}
