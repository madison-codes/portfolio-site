var menuHeaderNav = document.getElementById('menu-header-nav')


menuHeaderNav.addEventListener ('hover', function () {
    if (guessInputField.value === '') {
      guessButton.disabled = true;
      return clearFieldButton.disabled = true;
    }
    else {
      clearFieldButton.disabled = false;
      guessButton.disabled = false;
      resetButton.disabled = false;
    }
});

function toggle('menuHeaderNav') {
  var menuHeaderNav = document.getElementById('menu-header-nav');
	if ( menuHeaderNav.style.display != 'none' ) {
		el.style.display = 'none';
	}
	else {

		el.style.display = '';

	}

}
