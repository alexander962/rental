jQuery(document).ready(function() {
  let linksArray = $(".rental-main__block-img");
  linksArray.each((_, item) => {
    {var $elem = $(item);}
    $elem.click((e) => {
        let $elemActive = $(e.currentTarget);
        $('.rental-main__right-main').children().replaceWith(() => $elemActive.clone())
        // $('.rental-main__right-main').append((index, $elemActive) => $elemActive)
      }
    );
  });

  let linksArray2 = $(".rental-list__item");
  let linksArray3 = $(".rental-list__text");
  linksArray2.each((_, item) => {
    {var $elem = $(item);}
    $elem.click((e) => {
        let $elemActive = $(e.currentTarget);
        for (let i = 0; i < linksArray2.length; i++) {
          if ($elemActive[0] === linksArray2[i]) {
            linksArray2[i].classList.add("rental-list__item-active")
            linksArray3[i].classList.add("rental-list__text-active")
          } else {
            linksArray2[i].classList.remove("rental-list__item-active")
            linksArray3[i].classList.remove("rental-list__text-active")
          }
        }
      }
    );
  })
});