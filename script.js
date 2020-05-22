function getStart(){
    console.log("Click on get Start")
    window.location.href = 'track-record.html'
}

window.addEventListener('load', function(){
    btn = document.getElementById('get-start-btn')
    btn.addEventListener('click', getStart)
})

