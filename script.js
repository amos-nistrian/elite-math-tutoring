var logo

// when window is first loaded
function checkSize(width) {
  if (width < 480) {
    removeLogo()
  }
}

// when window is resized
function reCheckSize() {
  var screenWidth = window.outerWidth
  if (screenWidth < 480) {
    var element = document.querySelector("#logo")
    if (element != null) {
      removeLogo()
    }
  } else {
    // screenwidth is big enough for logo

    // check if you can find the element
    var element = document.querySelector("#logo")

    // if the logo is not there add it back
    if (element == null) {
      var parent = document.querySelector("#myNav")
      parent.append(logo)
    }
  }
}

function removeLogo() {
  var parent = document.querySelector("#myNav")
  logo = document.querySelector("#logo")
  parent.removeChild(logo)
}
