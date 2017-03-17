$(function () {
    setInterval(fetchData, 1000)
})

function fetchData() {
    console.log("======req sent======")
    // console.log(data)
    // $('#count').text(data[0])
    // $("#photo").prop('src', "/img/photoFromCam.jpg?" + new Date().getTime())

    paldi_post({'name': 'Kasun Gayashan'}, function (data) {
        console.log(data)
    })

}