$(function () {

    setInterval(fetchData, 2000)
})

function fetchData() {
    console.log("======req sent======")
    $.get("http://localhost:5000/", function (data) {
        console.log(data)
    })
        .done(function () {

        })
        .fail(function () {
            console.log("error!")
        })
        .always(function () {
        });
}