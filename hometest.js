var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

    triggerElement: '.box1',
    reverse: false


})

    .setClassToggle('.box1', 'fade-in')
    .addIndicators({
        name: 'INDICATIONS',
        indent: 200,
        colorStart: '#fff'
    })
    .addTo(controller);


var scene2 = new ScrollMagic.Scene({

    triggerElement: '.box2',
    reverse: false


})

    .setClassToggle('.box2', 'fade-in')
    .addIndicators({
        name: 'INDICATIONS',
        indent: 200,
        colorStart: '#fff'
    })
    .addTo(controller);

var scene3 = new ScrollMagic.Scene({

    triggerElement: '.box3',
    reverse: false


})

    .setClassToggle('.box3', 'fade-in')
    .addIndicators({
        name: 'INDICATIONS',
        indent: 200,
        colorStart: '#fff'
    })
    .addTo(controller);
