var hod = 0;
const zeroPic = '<div class="zero"></div>';
const crossPic = '<div class="cross"></div>'
var allCell = document.getElementsByClassName('.cell');

var winСomb = [
    [allCell[1], allCell[2], allCell[3]],
    [allCell[4], allCell[5], allCell[6]],
    [allCell[7], allCell[8], allCell[9]],
    [allCell[1], allCell[5], allCell[9]],
    [allCell[3], allCell[5], allCell[7]],
    [allCell[1], allCell[4], allCell[7]],
    [allCell[2], allCell[5], allCell[8]],
    [allCell[3], allCell[6], allCell[9]]
];
var pointsPlayers = document.querySelector('.points');
document.querySelector('.field').onclick = function(event) {
    if(event.target.className == 'cell') {
        if (hod%2==0) {
            event.target.innerHTML = crossPic;

            pointsPlayers.querySelector('.cross+span').innerHTML = parseInt(pointsPlayers.querySelector('.cross+span').innerHTML) + 1;
        } else {
            event.target.innerHTML = zeroPic;
            pointsPlayers.querySelector('.zero+span').innerHTML = parseInt(pointsPlayers.querySelector('.zero+span').innerHTML) + 1;
        }
        hod++;
        checkWinner();
    }
    if(hod == 9) {
        pointsPlayers.querySelector('.cross\+span').innerHTML = 'Draw';
        pointsPlayers.querySelector('.zero\+span').innerHTML = 'Draw';
        document.querySelector('.field').style.pointerEvents = 'none';
        document.querySelector('.field').style.opacity = '0.5';
    }
}

var checkWinner = function() {
    allCell = document.getElementsByClassName('cell');
    console.log(allCell)
    winСomb = [
        [allCell[0], allCell[1], allCell[2]],
        [allCell[3], allCell[4], allCell[5]],
        [allCell[6], allCell[7], allCell[8]],
        [allCell[0], allCell[4], allCell[8]],
        [allCell[2], allCell[4], allCell[6]],
        [allCell[0], allCell[3], allCell[6]],
        [allCell[1], allCell[4], allCell[7]],
        [allCell[2], allCell[5], allCell[8]]
    ];

    for (var i = 0; i < winСomb.length; i++) {
        if(winСomb[i][0].innerHTML == winСomb[i][1].innerHTML && winСomb[i][1].innerHTML == winСomb[i][2].innerHTML && winСomb[i][2].innerHTML == crossPic) {
            console.log('Победили крестики');
            console.log(pointsPlayers);
            pointsPlayers.querySelector('.cross\+span').innerHTML = 'Win';
            pointsPlayers.querySelector('.zero\+span').innerHTML = 'Loss';
            document.querySelector('.field').style.pointerEvents = 'none';
            document.querySelector('.field').style.opacity = '0.5';
            break;
        }
        if(winСomb[i][0].innerHTML == winСomb[i][1].innerHTML && winСomb[i][1].innerHTML == winСomb[i][2].innerHTML && winСomb[i][2].innerHTML == zeroPic) {
            pointsPlayers.querySelector('.cross\+span').innerHTML = 'Loss';
            pointsPlayers.querySelector('.zero\+span').innerHTML = 'Win';
            document.querySelector('.field').style.pointerEvents = 'none';
            document.querySelector('.field').style.opacity = '0.5';
            break;
        }
    }

}
