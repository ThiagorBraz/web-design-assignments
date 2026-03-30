$(document).ready(function () {
    $(".element").hover(
        function () {
            $(".element").css({
                "background-color": "purple",
                "color": "pink",
                "border": "3px dotted yellow"
            });
        },
        function () {
            $(".element").css({
                "background-color": "pink",
                "color": "purple",
                "border": "3px solid yellow"
            });
        }
    );
});
$(document).ready(function () {
    $("#kidsImage").hover(
        function () {
            $("#kidsText").fadeIn();
        },
        function () {
            $("#kidsText").fadeOut();
        }
    );

    $("#activityImage").hover(
        function () {
            $("#activityText").fadeIn();
        },
        function () {
            $("#activityText").fadeOut();
        }
    );
});

function getName() {
    let inputVal = document.getElementById("nameInput").value;
    let dessertVal = document.getElementById("dessertSelect").value;
    let nameDiv = document.getElementById("nameDiv");
    nameDiv.innerText = `Hi ${inputVal}, you selected ${dessertVal}.`;
}

var images = document.getElementsByClassName("image");
var dropzones = document.getElementsByClassName("dropzone");

function dragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function allowDrop(e) {
    e.preventDefault();
}
function dropImage(e) {
    e.preventDefault();
    var imageId = e.dataTransfer.getData("text");
    var image = document.getElementById(imageId);
    e.target.appendChild(image);
}