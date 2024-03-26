function togglePlayStop(audioId, button) {
    var audio = document.getElementById(audioId);
    var icon = button.querySelector('i');
    
    // Check if the audio is playing by checking if it has the 'fa-stop' class
    if (icon.classList.contains('fa-play')) {
      audio.play();
      icon.classList.remove('fa-play');
      icon.classList.add('fa-stop');
    } else {
      audio.pause();
      audio.currentTime = 0; // Optional: Rewind the audio to the start
      icon.classList.remove('fa-stop');
      icon.classList.add('fa-play');
    }

    audio.onended = function() {
        icon.classList.remove('fa-stop');
        icon.classList.add('fa-play');
    };
  }