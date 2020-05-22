if ($('.percents-line').length) {
  $(window).scroll(function () {
    let allHeightWindow = $(window).scrollTop();
    var blockStatus = true;
    for (let i = 0; i < $('.progress-bars').length; i++) {
      if (allHeightWindow >= $($('.progress-bars')[i]).offset().top - 400 && blockStatus) {
        var persentId = $($('.progress-bars')[i]).attr('id');
        var progressBar = $('#' + persentId + ' .percents-line .percent-progress');

        for (var j = 0; j < progressBar.length; j++) {
          var progressData = 100 - $(progressBar[j]).attr('data-progress');
          if ($(progressBar[j]).attr('data-speed') && Number.isInteger(+$(progressBar[j]).attr('data-speed'))) {
            var progressSpeed = + $(progressBar[j]).attr('data-speed');
          } else {
            var progressSpeed = 2;
          }
          $(progressBar[j]).css('right', progressData + '%').css('transition', 'all ' + progressSpeed + 's ease-in-out');

          var speedGrow = +$(progressBar[j]).attr('data-speed');
          var endGrow = +$(progressBar[j]).attr('data-progress');
          if ($(progressBar[j]).attr('data-start-grow')) {
            var startGrow = +$(progressBar[j]).attr('data-start-grow');
          } else {
            var startGrow = 0;
          }

          $(progressBar[j]).animate({ num: endGrow - startGrow }, {
            duration: speedGrow * 1000,
            step: function (val, params) {
              if (this.getAttribute('data-start-grow')) {
                var startGrow = +this.getAttribute('data-start-grow');
              } else {
                startGrow = 0;
              }
              val += startGrow;
              console.log(this.getAttribute('data-start-grow'));
              this.innerHTML = (val++).toFixed(0) + '%';
            }
          });
        }
      }
    }
  });
}