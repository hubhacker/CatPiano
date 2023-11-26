// Function to display note letter image
function displayNoteImage(note, width, height, x, y) {
  const img = new Image();
  img.onload = function() {
    img.width = width;
    img.height = height;
    img.style.position = 'absolute';
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    document.body.appendChild(img);

    // Fade out the image after 1.5 seconds
    setTimeout(function() {
      img.style.opacity = 0;
      setTimeout(function() {
        img.remove();
      }, 800); // Remove the image element after 1 second
    }, 1000);
  };
  img.src = `musicNotes/Note ${note}_Img.png`;
  img.alt = `Note ${note}`;
}



// pressing A on keyboard -> play "F.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 65 || e.keyCode == 97) {
    new Audio('/soundfiles/F.mp3').play();
    displayNoteImage('F', 70, 100, 610, 40);
    
  }
});

//pressing W on keyboard -> play "F#.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 87 || e.keyCode == 119) {
    new Audio('/soundfiles/F Sharp.mp3').play();
    displayNoteImage('F Sharp', 70, 100, 610, 40);
    
  }
});

//pressing S on keyboard -> play "G.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 83 || e.keyCode == 115) {
    new Audio('/soundfiles/G.mp3').play();
    displayNoteImage('G', 70, 100, 610, 40);
    
  }
});

//pressing E on keyboard -> play "G#.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 69 || e.keyCode == 101) {
    new Audio('/soundfiles/G Sharp.mp3').play();
    displayNoteImage('G Sharp', 70, 100, 610, 40);    
    
  }
});

//pressing d on keyboard -> play "A.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 68 || e.keyCode == 100) {
    new Audio('/soundfiles/A.mp3').play();
    displayNoteImage('A', 70, 100, 610, 40);    
    
  }
  
});

// pressing r on keyboard -> play "B flat.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 82 || e.keyCode == 114) {
    new Audio('/soundfiles/B flat.mp3').play();
    displayNoteImage('B Flat', 70, 100, 610, 40);    
    
  }
  
});

// pressing f on keyboard -> play "B.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 70 || e.keyCode == 102) {
    new Audio('/soundfiles/B.mp3').play();
    displayNoteImage('B', 70, 100, 610, 40);    
    
  }
  
});

// pressing g on keyboard -> play "C.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 71 || e.keyCode == 103) {
    new Audio('/soundfiles/C.mp3').play();
    displayNoteImage('C', 70, 100, 610, 40);    
    
  }
  
});

// pressing y on keyboard -> play "C#.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 89 || e.keyCode == 121) {
    new Audio('/soundfiles/C Sharp.mp3').play();
    displayNoteImage('C Sharp', 70, 100, 610, 40);    
    
  }
  
});


// pressing h on keyboard -> play "D.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 72 || e.keyCode == 100) {
    new Audio('/soundfiles/D.mp3').play();
    displayNoteImage('D', 70, 100, 610, 40);    
    
  }
  
});

// pressing U on keyboard -> plat "D#.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 85 || e.keyCode == 117) {
    new Audio('/soundfiles/D sharp.mp3').play();
    displayNoteImage('D Sharp', 70, 100, 610, 40);    
    
  }
  
});

// pressing J on keyboard -> play "E.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 74 || e.keyCode == 106) {
    new Audio('/soundfiles/E.mp3').play();
    displayNoteImage('E', 70, 100, 610, 40);    
    
  }
  
});

// pressing K on keyboard -> play "high F.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 75 || e.keyCode == 107) {
    new Audio('/soundfiles/high F.mp3').play();
    displayNoteImage('F', 70, 100, 610, 40);    
    
  }
  
});

// pressing O on keyboard -> play "high F#.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 79 || e.keyCode == 111) {
    new Audio('/soundfiles/high F Sharp.mp3').play();
    displayNoteImage('F Sharp', 70, 100, 610, 40);    
    
  }
  
});

// pressing L on keyboard ->play "high G.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 76 || e.keyCode == 108) {
    new Audio('/soundfiles/high G.mp3').play();
    displayNoteImage('G', 70, 100, 610, 40);    
    
  }
  
});


// pressing P on keyboard -> play "high G#.mp3"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 80 || e.keyCode == 112) {
    new Audio('/soundfiles/high G Sharp.mp3').play();
    displayNoteImage('G Sharp', 70, 100, 610, 40);    
    
  }
  
});


// pressing ; or : on keyboard -> play "high A.mp3"
document.addEventListener('keydown', function(e) {
  if (e.key == ";" || e.key == ":") {
    new Audio('/soundfiles/high A.mp3').play();
    displayNoteImage('A', 70, 100, 610, 40);    
    
  }
  
});


// pressing [ or { on keyboard -> play "high A#.mp3"
document.addEventListener('keydown', function(e) {
  if (e.key == "[" || e.key == "{") {
    new Audio('/soundfiles/high A Sharp.mp3').play();
    displayNoteImage('A Sharp', 70, 100, 610, 40);    

  }
  
});


// pressing ] on keyboard -> play "high B.mp3"
document.addEventListener('keydown', function(e) {
  if (e.key == "'") {
    new Audio('/soundfiles/high B.mp3').play();
    displayNoteImage('B', 70, 100, 610, 40);    
    
  }
  
});