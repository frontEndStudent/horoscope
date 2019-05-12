<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>



  <title>Horoscope LAB3</title>
</head>

<body>
  <div class="container">
    <h1 class="teal-text text-lighten-2">Check your zodiac sign</h1>
    <article>
      <label for="birthdate">Enter Your Birthday in month/day/year format</label>
      <br>
      <input class="teal-text" type="date" name="birthdate" id="birthdate">
      <section>
      <?php if (!(isset($_SESSION["horoscope"]))): ?>
        <input type="submit" class="save waves-effect waves-light btn" name="save" value="Save"
          onclick="saveHoroscope()">
          <?php else: ?>
        <input type="submit" class="update waves-effect waves-light btn" name="update" value="Edit"
          onclick="updateHoroscope()">
        <input type="submit" class="delete waves-effect waves-light btn" name="delete" value="Delete"
          onclick="deleteHoroscope()">
          <?php endif; ?>
      </section>
    </article>
    <blockquote class="sign flow-text red-text text-darken-4"></blockquote>

  </div>

  <script src="js/script.js"></script>
</body>

</html>