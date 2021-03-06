(function() {
  var addEventListener = function() {
    $.material.init();
    $('.anchor-link').click(function(e) {
      if (window.location.pathname == '/') {
        e.preventDefault();
        var target = e.currentTarget;
        var targetId = $(target).data('target');
        $.scrollTo('#' + targetId, 600, {'offset': {'top': -80}});
      }
    });
  };
  $(document).on('turbolinks:load', addEventListener);
})();
