$(document).ready(function() {

    createTourTemplate(goodTours);
    createTravelTemplate(travelTours);
    

    $('.click').click(function() {
        alert('Vui lòng đăng nhập để thực hiện thao tác!')
    })

    var li1, li2, li3;

    $('#category > ul > li > span').click(function() {
        var category = $(this).text()
        li1 = category

        $('#category > span').text(category)
    })

    $('#area > ul > li > span').click(function() {
        var area = $(this).text()
        li2 = area

        $('#area > span').text(area)
    })

    $('#price > ul > li > span').click(function() {
        var price = $(this).text()
        li3 = price

        $('#price > span').text(price)
    })

    $('#look').click(function() {

        li2=li2 && li2.toUpperCase();

        var newGoodTours = [...goodTours];
        var newTravelTours=[...travelTours];

        if(li1.includes('Tour tốt nhất')){
            if(li2){
                newGoodTours = newGoodTours.filter(tour => tour.location.toUpperCase() === li2)

                if(li3){
                    if( li3.includes('thấp tới cao'))
                    {
                        newGoodTours.sort((a, b) => a.price - b.price)
                    }
                    else
                        newGoodTours.sort((a, b) => b.price - a.price)
                    
                    createTourTemplate(newGoodTours);
                    $('section.tour_uu_dai').css('display', 'none')
                    $('section.best-tour').css('display', 'block')
                }
            }
        }
        else if(li1.includes('Tour ưu đãi')){
            if(li2){
                
                newTravelTours = newTravelTours.filter(tour => tour.location.includes(li2));

                if(li3){
                    if( li3.includes('thấp tới cao'))
                    {
                        newTravelTours.sort((a, b) => a.price - b.price)
                    } 
                    else
                        newTravelTours.sort((a, b) => b.price - a.price)
                
                    createTravelTemplate(newTravelTours)
                    $('section.best-tour').css('display', 'none')
                    $('section.tour_uu_dai').css('display', 'block')
                   
                }
            }
        }
    
    })

})

const createTourTemplate = (goodTours) => {
    const tourContainer = $('section.best-tour > div > div.col');
    var output = ''
    goodTours.forEach(goodTour => output += 
    `
    <div>
        <div class='best-tour__img-item'>
            <img src=${goodTour.img} alt='' class='effect-img best-tour__img-square '>
            <div class='img-text'>
                <h1 class='place'>${goodTour.place}</h1>
                <h1 class='price'>${goodTour.price_text}</h1>
                <button class='best-tour_btn click'>ĐẶT NGAY</button>
                <div class='icon'>
                    <p>
                        <i class='fas fa-map-marker-alt'></i>
                        ${goodTour.location}
                    </p>
                </div>
            </div>
        </div>
    </div>
    `);
    tourContainer.html(output)
}

const createTravelTemplate = (travelTours) => {
    const travelContainer = $('.travel');
    var output = ''
    travelTours.forEach(travelTour => output += 
    `
    <div class='travel-item'>
        <div class='icon_b'>
            <p>
                <i class='fas fa-map-marker-alt'></i>
                ${travelTour.location}
            </p>
        </div>
        <img src=${travelTour.img} alt='travel1' class='travel-item-img'>
        <h3 class='travel-item-heading'>${travelTour.place}</h3>
        <div class=' rating_5 '>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
        </div>
        <div class='travel-item-price'>
        <span class='travel-item-price'>${travelTour.price_text} </span>
        </div>
        <a href='javascript:void(0);' class='travel-item-button click'>
            MUA TOUR
        </a>
    </div>
    `);
    travelContainer.html(output)
}