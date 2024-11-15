if ($(".text-slider").length == 1) {
            
    var typed_strings = 
        $(".text-slider-items").text();

    var typed = new Typed(".text-slider", {
        strings: typed_strings.split(", "),
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
    });
}


function toggleDetails() {
    const details = document.getElementById("details");
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Show the details
    } else {
        details.style.display = "none"; // Hide the details
    }
}