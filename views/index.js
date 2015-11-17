<!doctype html>
<html>
  <head>
    <title>Right Now</title>
    <!--Import Google Icon Font-->
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified Materialize CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.2/css/materialize.min.css">
    <link rel="stylesheet" href="custom.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
  <body>
    <div class="row poll-form">
      <h5 id="poll-title">Make Your Dream Poll</h5>
        <form action="/poll/new" method="post" class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input id="poll_title" type="text" class="validate" name="poll[title]">
              <label for="poll_title">Poll Title</label>
            </div>
            <div class="input-field col s12">
              <input id="poll_question" type="text" class="validate" name="poll[question]">
              <label for="poll_question">Poll Question</label>
            </div>
            <div class="input-field col s12">
              <input id="poll_response" type="text" class="validate" name="poll[responses][]">
              <label for="poll_response">Response</label>
            </div>
          </div>
          <button id="response-btn" type="button" class="btn waves-effect waves-light">Add Response
            <i class="material-icons right">note_add</i>
          </button>

          <button id="create-poll" class="btn waves-effect waves-light" type="submit" name="action">Create Poll
            <i class="material-icons right">playlist_add</i>
          </button>
        </form>
    </div>

    <!-- Compiled and minified Materialize JavaScript -->
    <script src="/jquery.js"></script>
    <script src="/add-response.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.2/js/materialize.min.js"></script>

  </body>
</html>