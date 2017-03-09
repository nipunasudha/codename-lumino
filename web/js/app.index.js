$(function () {
    alert()
    setInterval(fetchData, 300)
})

function fetchData() {
    console.log("======req sent======")
    $.get("http://localhost:5000/", function (data) {
        console.log(data)
        $('#count').text(data[0])
        $("#photo").prop('src', "/img/photoFromCam.jpg?" + new Date().getTime())
    })
        .done(function () {

        })
        .fail(function () {
            console.log("error!")
        })
        .always(function () {
        });
}
//php app/console server:start