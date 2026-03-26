// option 2 handle event

function makeyellow(){
      document.body.style.backgroundColor = 'Yellow';
    }
    function makeRed(){
      document.body.style.backgroundColor = 'Red';
    }



// option 3 get element by ID and then set onclick

    const btnMakeBlue = document.getElementById('btn-make-blue');
    //console.log(btnMakeBlue);
    btnMakeBlue.onclick = function makeBlue(){
      document.body.style.backgroundColor = 'Blue';
    }
    

// option 3 different version
const btnMakePurple = document.getElementById('btn-make-purple');
    // console.log(btnMakePurple);
    btnMakePurple.onclick = makePurple;
    function makePurple(){
      document.body.style.backgroundColor = 'purple';
    }














