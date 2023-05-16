<html>
  <head>
    <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css">
    <style>
        .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top:50px;
      }
    .typing {
  width: 22ch;
  animation: typing 2s steps(22);
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: Press+Start+2P;
  font-size: 2em;
}
  @keyframes typing {
  from {
    width: 0
  }
}
    @keyframes blink {
  50% {
    border-color: transparent
  }
}
.typing2 {
  width: 22ch;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  animation-delay: 5s;
  overflow: hidden;
  border-right: 3px solid;
  font-family: Press+Start+2P;
  font-size: 2em;
}
    </style>
  </head>
  <body>
  <br>
  <br>
  <div class="nes-container with-title is-centered">
  <p class="title">Container.is-centered</p>
    <section class="nes-container">
      <section class="message-list">
        <section class="message -left">
          <i class="nes-bcrikko"></i>
          <!-- Balloon -->
          <div class="nes-balloon from-left">
            <p class="typing">I cheated on you.</p>
          </div>
        </section>
        <section class="message -right">
          <!-- Balloon -->
          <div class="hide">
          </div>
          <div class="nes-balloon from-right">
            <p class="typing2">damn</p>
          </div>
          <i class="nes-bcrikko"></i>
        </section>
      </section>
    </section>
    </div>
    <div class="center">
    <a class="nes-btn is-primary" href="{{ site.baseurl }}/game">Continue to game &gt;</a>
    </div>
  </body>
</html>
