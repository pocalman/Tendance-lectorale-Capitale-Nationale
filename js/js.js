let annee = ""
$(".annee").click(function (e) {
    e.preventDefault();
    $(".annee").removeClass("current");
    $(this).addClass("current");
    annee = $(this).html() /*pour l'année courante*/
});

$("#2008").click(function (e) {
    e.preventDefault();
    $(".ADQ_CAQ").html('ADQ');
    $("#La_Peltrie polygon").css("fill", "rgb(15, 163, 244)");
    $("#Portneuf polygon").css("fill", "rgb(15, 163, 244)");
    $("#Louis-Hebert polygon").css("fill", "red");
    $("#Jean-Talon polygon").css("fill", "red");
    $("#Taschereau polygon").css("fill", "blue");
    $("#Jean-Lessage polygon").css("fill", "rgb(15, 163, 244)");
    $("#Vanier polygon").css("fill", "red");
    $("#Chauveau polygon").css("fill", "rgb(15, 163, 244)");
    $("#Charlesbourg polyline").css("fill", "red");
    $("#Montmorency polygon").css("fill", "red");
    $("#Charlevoix-Cote-de-Beaupre polygon").css("fill", "blue");
    $(this).addClass(".fadeIn");
});

$("#2012").click(function (e) {
    e.preventDefault();
    $(".ADQ_CAQ").html('CAQ');
    $("#La_Peltrie polygon").css("fill", "rgb(15, 163, 244)");
    $("#Portneuf polygon").css("fill", "rgb(15, 163, 244)");
    $("#Louis-Hebert polygon").css("fill", "red");
    $("#Jean-Talon polygon").css("fill", "red");
    $("#Taschereau polygon").css("fill", "blue");
    $("#Jean-Lessage polygon").css("fill", "red");
    $("#Vanier polygon").css("fill", "rgb(15, 163, 244)");
    $("#Chauveau polygon").css("fill", "rgb(15, 163, 244)");
    $("#Charlesbourg polyline").css("fill", "rgb(15, 163, 244)");
    $("#Montmorency polygon").css("fill", "rgb(15, 163, 244)");
    $("#Charlevoix-Cote-de-Beaupre polygon").css("fill", "blue");
});

$("#2014").click(function (e) {
    e.preventDefault();
    $(".ADQ_CAQ").html('CAQ');
    $("#La_Peltrie polygon").css("fill", "rgb(15, 163, 244)");
    $("#Portneuf polygon").css("fill", "red");
    $("#Louis-Hebert polygon").css("fill", "red");
    $("#Jean-Talon polygon").css("fill", "red");
    $("#Taschereau polygon").css("fill", "blue");
    $("#Jean-Lessage polygon").css("fill", "red");
    $("#Vanier polygon").css("fill", "red");
    $("#Chauveau polygon").css("fill", "rgb(15, 163, 244)");
    $("#Charlesbourg polyline").css("fill", "red");
    $("#Montmorency polygon").css("fill", "red");
    $("#Charlevoix-Cote-de-Beaupre polygon").css("fill", "red");
});

$("#2018").click(function (e) {
    e.preventDefault();
    $(".ADQ_CAQ").html('CAQ');
    $("#La_Peltrie polygon").css("fill", "rgb(15, 163, 244)");
    $("#Portneuf polygon").css("fill", "rgb(15, 163, 244)");
    $("#Louis-Hebert polygon").css("fill", "rgb(15, 163, 244)");
    $("#Jean-Talon polygon").css("fill", "red");
    $("#Taschereau polygon").css("fill", "#DD6326");
    $("#Jean-Lessage polygon").css("fill", "#DD6326");
    $("#Vanier polygon").css("fill", "rgb(15, 163, 244)");
    $("#Chauveau polygon").css("fill", "rgb(15, 163, 244)");
    $("#Charlesbourg polyline").css("fill", "rgb(15, 163, 244)");
    $("#Montmorency polygon").css("fill", "rgb(15, 163, 244)");
    $("#Charlevoix-Cote-de-Beaupre polygon").css("fill", "rgb(15, 163, 244)");
});

$("#playReplay").click(function(){
    $("#diagramme_a_bande").toggleClass("jouer");
    });

window.onload = function () {

    var options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Progression du vote de chaque parti en fonction du temps",
            fontSize: 16,
        },
        axisX: {
            valueFormatString: "YYYY"
        },
        axisY: {
            title: "% de votes",
            suffix: "%",
            minimum: 0,
            maximum: 50,
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "bottom",
            horizontalAlign: "left",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [{
                type: "line",
                showInLegend: true,
                name: "ADQ/CAQ (à partir de 2011)",
                yValueFormatString: "##,##%",
                color: "#0FA3F4",
                dataPoints: [{
                        x: new Date(2008, 12, 08),
                        y: 28.48
                    },
                    {
                        x: new Date(2012, 09, 04),
                        y: 35.19
                    },
                    {
                        x: new Date(2014, 04, 07),
                        y: 33.59
                    },
                    {
                        x: new Date(2018, 10, 01),
                        y: 43
                    },
                ]
            },
            {
                type: "line",
                showInLegend: true,
                name: "PLQ",
                markerType: "square",
                xValueFormatString: "DD MMM, YYYY",
                color: "red",
                yValueFormatString: "##,##%",
                dataPoints: [{
                        x: new Date(2008, 12, 08),
                        y: 37.06
                    },
                    {
                        x: new Date(2012, 09, 04),
                        y: 31.63
                    },
                    {
                        x: new Date(2014, 04, 07),
                        y: 38.89
                    },
                    {
                        x: new Date(2018, 10, 01),
                        y: 22
                    },
                ]
            },
            {
                type: "line",
                showInLegend: true,
                name: "PQ",
                markerType: "cross",
                xValueFormatString: "DD MMM, YYYY",
                color: "blue",
                yValueFormatString: "##,##%",
                dataPoints: [{
                        x: new Date(2008, 12, 08),
                        y: 29.19
                    },
                    {
                        x: new Date(2012, 09, 04),
                        y: 24.08
                    },
                    {
                        x: new Date(2014, 04, 07),
                        y: 18.13
                    },
                    {
                        x: new Date(2018, 10, 01),
                        y: 11.96
                    },
                ]
            },
            {
                type: "line",
                showInLegend: true,
                name: "QS",
                markerType: "triangle",
                xValueFormatString: "DD MMM, YYYY",
                color: "rgb(221, 99, 38)",
                yValueFormatString: "##,##%",
                dataPoints: [{
                        x: new Date(2008, 12, 08),
                        y: 3.52
                    },
                    {
                        x: new Date(2012, 09, 04),
                        y: 4.73
                    },
                    {
                        x: new Date(2014, 04, 07),
                        y: 6.38
                    },
                    {
                        x: new Date(2018, 10, 01),
                        y: 17.60
                    },
                ]
            }
        ]
    };
    $("#chartContainer").CanvasJSChart(options);

    function toogleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }

}


$('.nav-link').click(function (e) {
    e.preventDefault;
    var lien = $(this);
    var sectionID = lien.attr('href');
    var positionSectionTop = $(sectionID).offset().top;
    $('html,body').animate({
        scrollTop: positionSectionTop
    }, 1000, 'swing');
});

var headerMince = false;
$(window).scroll(function () {
    var y_position = window.pageYoffset;
    var y_menu = 150;
    if (y_position > y_menu && !headerMince) {
        $('#main-header').addClass('headerMince');
        headerMince = true;
    } else if (y_position < y_menu && headerMince) {
        $('#main-header').removeClass('headerMince');
        headerMince = false;
    }

})

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

$('nav-link').click(function (e) {
    e.preventDefault;
    var lien = $(this);
    var sectionID = lien('href');
    var positionSectionTop = $(sectionID).offset().top;
    $('html, body').animate({
        scrollTop: positionSectionTop
    }, 1000, 'swing');
});

var headerMince = false;
$(window).scroll(function () {
    var y_position = window.pageYOffset;
    var y_menu = 150;
    if (y_position > y_menu && !headerMince) {
        $('#main-header').addClass("headerMince");
        headerMince = true;
    } else if (y_position < y_menu && headerMince) {
        $('#main-header').removeClass("headerMince");
        headerMince = false;
    }
})


var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    } /* Adapté de ceci: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar */
}