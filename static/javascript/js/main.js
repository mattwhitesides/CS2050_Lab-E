(function() {
  $(document).ready(function() {
    $("#notepadTutorial").click(function() {
      return $("#sftpTutorialDiv").load("notepadTutorial.html");
    });
    return;
    $("#sublimeTutorial").click(function() {
      return $("#sftpTutorialDiv").load("sublimeTutorial.html");
    });
  });

  return;

}).call(this);
