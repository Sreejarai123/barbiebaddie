<html>
  <head>
    <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css">
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <style>
  body {
    background-image: url("images/logo.gif");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
  </head>
  <body>
    <script>
    var delayTime = 8000; // 5 seconds
    // Function to navigate to the specified URL
    function navigateToNextPage() {
      window.location.href = "{{ site.baseurl }}/start";
    }
    // Set a timeout to navigate after the delay
    setTimeout(navigateToNextPage, delayTime);
    </script>
  </body>
</html>