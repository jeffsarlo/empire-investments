// ---------- Profile Popup --------------

// Open popup
$(".team-member").click(function() {

  // open window and blur background
  $("#profile-container").toggleClass("active");
  $("#page-mask").toggleClass("active");

  // grab name, title, data
  var name = $(this).siblings()[0].children[0].innerText
  var title = $(this).siblings()[0].children[1].innerText
  var data = $(this).siblings()[0].children[2].innerHTML

  // insert name, title, data into popup
  $("#profile-name").text(name)
  $("#profile-title").text(title)
  $("#profile-data").text(data)

  // grab and insert image
 	$(this).children().each(function () {
    // this gets the background of each child
    var backgroundImg = $(this).css("backgroundImage")
    // insert image into popup
    $('#popup-img').css('background-image', backgroundImg)
  })
})

// Close popup
$("#profile-container").click(function() {
  $("#profile-container").toggleClass("active")
  $("#page-mask").toggleClass("active");
})


// ----------- Mobile Navigation ------------
$("#resize ul li a, #toggle, #close-btn").click(function() {
  $("#resize").toggleClass("active")
})


// ------------- Nav scroll -----------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
  });
});


// ----- Initialize WOW animate ------------------
new WOW().init()
