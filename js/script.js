const notyf = new Notyf({
    duration: 1000,
    position: {
      x: 'right',
      y: 'top',
    },
    types: [
      {
        type: 'playing',
        background: '#01000E',
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'warning'
        }
      },
    ]
  });

function playPause(e, msg) {
    if (e.querySelector("i").className == "fa-solid fa-play") {
        e.querySelector("i").className = "fa-solid fa-pause";
        e.querySelector("audio").play();
        notyf.open({
            type: 'playing',
            message: '<i class="fa-solid fa-headphones"></i>&nbsp;&nbsp;&nbsp;' + msg
          });
    } else {
        e.querySelector("i").className = "fa-solid fa-play";
        e.querySelector("audio").pause();
    }
}