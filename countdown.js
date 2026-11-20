// Fills [data-countdown] with "Starts in N days" / "Commence dans N jours", etc.
(function () {
  var start = new Date('2026-11-28T10:00:00+01:00');
  var end = new Date('2026-11-29T10:00:00+01:00');
  var now = new Date();
  var day = 864e5;
  var midnight = function (d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); };
  var days = Math.round((midnight(start) - midnight(now)) / day);

  var text = {
    en: function () {
      if (now >= end) return 'That was Hackathon #1';
      if (now >= start) return 'Happening right now';
      if (days === 0) return 'Starts today at 10:00';
      if (days === 1) return 'Starts tomorrow';
      return 'Starts in ' + days + ' days';
    },
    fr: function () {
      if (now >= end) return 'C\'était le Hackathon #1';
      if (now >= start) return 'C\'est en ce moment';
      if (days === 0) return 'Aujourd\'hui à 10h00';
      if (days === 1) return 'C\'est demain';
      return 'Dans ' + days + ' jours';
    }
  };

  document.querySelectorAll('[data-countdown]').forEach(function (el) {
    var f = text[el.getAttribute('data-lang')] || text.en;
    el.textContent = f();
  });
})();
