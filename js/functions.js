//
// Lightbox - Gallery //
//
var $gallery = $(".gallery-wrapper");

if ($gallery.length) {
  $gallery.each(function() {
    var $this = $(this);
    $this.magnificPopup({
      delegate: 'a',
      removalDelay: '200',
      type: 'image',
      fixedContentPos: false,
      gallery: {
          enabled: true
      },
      image: {
        titleSrc: 'data-gallery-title'
      }
    });
  });
}