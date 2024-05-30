$(document).ready(function(){

    $('#profile__ripple').ripples({
        resolution: 512,
        dropRadius: 10
    });

    const bars = document.querySelectorAll('.progress__bar');

    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage;
        bar.style.width = percentage; // Set the width of the progress bar
        console.log(percentage);
    });

    // Counter

    const counters = document.querySelectorAll('.counter');
    console.log(counters);

    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = 0;

            let target = +counter.dataset.count;
            let step = target / 100;

            let countIt = function() {
                let displayedCount = +counter.innerText;
                if (displayedCount < target) {
                    counter.innerText = Math.ceil(displayedCount + step); // Fixed typo here
                    setTimeout(countIt, 50);
                } else {
                    counter.innerText = target;
                }
            };

            countIt();
        });
    }

    runCounter();

    let counterSection = document.querySelector('.counter__section');

    let options = {
        rootMargin: '0px 0px -100px 0'
    };

    const sectionObserver = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            runCounter();
        }
    }, options);

    sectionObserver.observe(counterSection); // Fixed typo here


    //image filter

    var $wrapper = $('.portfolio__wrapper')

    //Initialize isotope

    $wrapper.isotope ({
        filter : "*",
        layoutMode : 'masonry',
        animationOptions : {
            duration:750,
            easing:'Linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');
    
    links.forEach( link => {

        let selector = link.dataset.filter;
        console.log();
        link.addEventListener('click', function(e){
            e.preventDefault();
            
            $wrapper.isotope ({
                filter : selector,
                layoutMode : 'masonry',
                animationOptions : {
                    duration:750,
                    easing:'Linear'
                }
            });

            links.forEach(link =>{
                link.classList.remove('active');
            })

            e.target.classList.add('active');

        });
    })

    $('.magnify').magnificPopup ({
        type: 'image' ,
        gallery: {
            enable : true
        },
        zoom : {
        enable : true
        }

    });

    // Slider
    $('.slider').slick({
        arrows: false,
        autoplay: true

    });
});
