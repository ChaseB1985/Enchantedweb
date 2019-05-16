$(function(openTimer) {
    var $timer = $('#timer');
    var $countdownText = $('#countdownText');
    var now = moment();
    var openingToday = moment({
      hour: 8
    });
    var closingTime = moment({
      hour: 17
    });
    var openingTime = moment({
      year: now.year(),
      month: now.month(),
      date: now.date() + 1,
      hour: 8
    });
    if (now.diff(openingToday) < 0) {
      $timer.countdown({
        until: openingToday._d
      });
      $countdownText.addClass('closed');
    } else if (now.diff(closingTime) < 0) {
      $timer.countdown({
        until: closingTime._d
      });
      $countdownText.addClass('opened');
    } else {
      $timer.countdown({
        until: openingTime._d
      });
      $countdownText.addClass('closed');
    }
  });