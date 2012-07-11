konami Code jQuery Plugin
=========================

This jQuery plugin triggers a 'konami' event when the konami code was entered.::

  ↑ ↑ ↓ ↓ ← → ← → b a


How to use it
-------------

Example code::

  <script>
    $(document).bind('konami', function() {
      document.location.href = 'konami.html';
    });
  </script>


Credits
-------

The implementation is based on `this konami plugin`_.

.. _`this konami plugin`: https://github.com/fathwad/konami
