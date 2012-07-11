(function($) {
  var k = '38384040373937396665', input = '', f = function(i){return i}, last = [];
  $(document).keyup(function(e) {
    input += '/' + e.keyCode;
    last = input.split('/').slice(-10).filter(f);
    input = last.join('/');
    last.join('') == k && $(document).trigger('konami');
  });
})(jQuery);
