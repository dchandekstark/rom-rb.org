$(function(){var t={SQL:"rom-sql",MongoDB:"rom-mongo"},e=$("#gem-install-code"),o=$("#db-select .value");$("#db-dropdown a").on("click",function(n){var l=$(n.target).text();o.text(l),e.text("$ gem install "+t[l]),n.preventDefault()})});