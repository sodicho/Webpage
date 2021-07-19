// function move(loc) {
//   if (loc.id === 'compsci'){
//     const t1 = document.getElementById('CS');
//     console.log(t1);
//     window.scrollTo(0,625);
//   }

//  }

// const home = document.getElementById('ho');
// const cs = document.getElementById('compsci');
// const act = document.getElementById('aft');
// const why = document.getElementById('last');
// home.addEventListener("click", function(){move(home)}, false);
// cs.addEventListener("click",  function(){move(cs)}, false);
// act.addEventListener("click",  function(){move(act)}, false);
// why.addEventListener("click",  function(){move(why)}, false);

// console.log(cs);

$(function() {
    $(document).scroll(function (){
        var $nav = $(".navbar");
        var $arrow = $(".arrow");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $arrow.toggleClass('scrolled', $(this).scrollTop() > $nav.height());  
    });
});


function toTop(){
  window.scrollTo(0,0);
}

const arr = document.getElementById('arr');
arr.addEventListener("click", toTop);

// Wrap every letter in a span
	// Credit to Tobais Ahlin for this beatiful design

    var textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '.ml1 .letter',
        scale: [0.3,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i+1)
      }).add({
        targets: '.ml1 .line',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i)
      }).add({
        targets: '.ml1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
    
    anime.timeline({loop: true})
      .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
      }).add({
        targets: '.ml12 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
      });

/* $(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== ""){
            event.preventDefault();

            var hash = this.hash;

            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                window.location.hash = hash;
            });
        }
    });
});*/
