// $(selector).accion()

// $(document).ready(() => {})
$(() => {
    // Selectores :
    // id = "el-1" => "#el-1"
    // class = "el-1" => ".el-1"

    // $("#el-1").hide()

    $(".hide-btn").click(() => {
        console.log("Ocultando...")
        // $("h1").hide()
        $("h1").fadeOut()
    })
    $(".show-btn").click(() => {
        console.log("OcultanDONT...")
        // $("h1").show()
        $("h1").fadeIn()
    })

    $("li").dblclick(() => {
        $("h1").css({color: "red"})
    })

    $(".new-element").click(() => {
        $("ul").prepend("<li>New Element</li>")
    })

    $("li").mouseenter((elem) => {
       elem.target.style.color = "blue"
    })

    $("li").mouseleave((elem) => {
        elem.target.style.color = "black"
     })
})