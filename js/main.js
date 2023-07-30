$(document).ready(function () {
    $(".slide").click(function () {
        let myleft = $(".open").css("left")
        if (myleft == "0px") {
            let width = $(".inner-home").outerWidth(true)
            $(".open  ").animate({ left: `-${width}px` })
            $(".slide").animate({ left: `2%` })
        }
        else {
            $(".open ").animate({ left: `0px` })
            $(".slide").animate({ left: `${width + 10}px` })
        }
    })

    let width = $(".inner-home").outerWidth(true)
    $(".open").css({ left: `-${width}px` })

    $(".closebtn").click(function () {
        $(".open  ").animate({ left: `-${width}px` })
        $(".slide").animate({ left: `2%` })
    })
})

$(".sing").click(function () {
    $(this).next().slideToggle(600)
    $(".sing").not($(this)).next().css({ display: "none" })
})
$(".nav-link").click(function () {
    let hreF = $(this).attr("href")
    let sectionTop = $(hreF).offset().top
    $("html,body").animate({ scrollTop: sectionTop }, { duration: 1000, queue: false })
})


let time = setInterval(() => {
    let myData = new Date("2024-1-1 7:00:00")
    let data = new Date()
    let sub = myData.getTime() - data.getTime()
    let d = Math.floor((sub / (1000 * 60 * 60 * 24)))
    let h = Math.floor((sub % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let m = Math.floor((sub % (1000 * 60 * 60 * 24)) / (1000 * 60))
    let s = Math.floor((sub % (1000 * 60 * 60 * 24)) / (1000))

    document.querySelector(".days").innerHTML = d + " D"
    document.querySelector(".hours").innerHTML = h + " h"
    document.querySelector(".miniutes").innerHTML = m + " m"
    document.querySelector(".seconds").innerHTML = s + " s"

    if (d < 0) {
        clearInterval(time)
        document.getElementById("expired").innerHTML = "EXPIRED"
    }
}, 1000)


// $(function () {
//     let max = 100;
//     $("textarea").keyup(
//         function () {
//             var length = $(this).val().length
//             var char = max - length;
//             if (char <= 0) {
//                 $(".hello1").text("your available character finished")
//             }
//             else {
//                 $(".hello1").text(char)
//             }
//         }
//     )
// })

let maxNums = 100
$("textarea").keyup(function(){
    let  length = $(this).val().length
    let char = max-length
    $(".hello1").text(char)
}
)