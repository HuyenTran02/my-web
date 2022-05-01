$(document).ready(function() {

    createTourTemplate(tours);
    createRoomTemplate(rooms);

    $("header, section, footer").addClass("wow animate__fadeIn")
    $("section.resort > div.content > div.resort-items > figure").addClass("wow animate__flipInY")
    $("section.hotels > div.content > div.h-items > figure").addClass("wow animate__zoomIn")

    $(".click").click(function() {
        alert('Vui lòng đăng nhập để thực hiện thao tác!')
    })

    wow = new WOW ({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 0,
        mobile: true,
        live: true
    })    

    wow.init();

    var li1, li2, li3;

    $("#category > ul > li > span").click(function() {
        var category = $(this).text()
        li1 = category

        $("#category > span").text(category)
    })

    $("#area > ul > li > span").click(function() {
        var area = $(this).text()
        li2 = area

        $("#area > span").text(area)
    })

    $("#price > ul > li > span").click(function() {
        var price = $(this).text()
        li3 = price

        $("#price > span").text(price)
    })
    
    $("#look").click(function() {
        
        li1 = li1 && li1.toUpperCase();
    
        var newTours = [...tours];
        var newRooms = [...rooms]

        if(li1.includes('KHU NGHỈ DƯỠNG')) {
            
            if(li2){
                newTours = newTours.filter(tour => tour.location === li2 );
                if(li3) {
                    if(li3.includes('thấp đến cao'))
                    {
                        newTours.sort((a, b) => a.price - b.price)
                    }
                    else
                        newTours.sort((a, b) => b.price - a.price)

                    createTourTemplate(newTours);

                    $("button.click").click(function() {
                        alert('Vui lòng đăng nhập để thực hiện thao tác!')
                     })
        
                    $(".hotels").css("display", "none")
        
                    $(".resort").css({
                        "animation": "flash 1s ease-out",
                        "display" : "block"
                    })
                }
                else
                    alert('Vui lòng chọn đầy đủ!')   
            }
            else
                alert('Vui lòng chọn đầy đủ!')
        }
        else if(li1.includes('KHÁCH SẠN')) {
                if(li2){
                    newRooms = newRooms.filter(room => room.location.includes(li2));

                    if(li3) {
                        
                        if(li3.includes('thấp đến cao'))
                        {
                            newRooms.sort((a, b) => a.price - b.price)
                        }
                        else
                            newRooms.sort((a, b) => b.price - a.price)

                        createRoomTemplate(newRooms)

                        $("button.click").click(function() {
                            alert('Vui lòng đăng nhập để thực hiện thao tác!')
                        })
    
                        $(".resort").css("display", "none")

                        // tạo hiệu ứng nháy khi click vào nút tìm
                        $(".hotels").css({
                            "animation": "flash 1s ease-out",
                            "display" : "block"
                        })
                    }
                    else
                        alert('Vui lòng chọn đầy đủ!')   
                }
                else
                    alert('Vui lòng chọn đầy đủ!')
            }
            else 
                alert('Vui lòng chọn đầy đủ!')
    });
})

const createRating = (rating) => {
    var output = ''
    for(var i = 0; i < rating; i++) {
        output+= `<i class="fas fa-star"></i>`
    }
    return output
}

const createTourTemplate = (tours) => {
    const resortContainer = $('.resort-items');
    var output = ''
    tours.forEach(tour => output += 
    `<figure>
        <img src=${tour.img} alt="">
        <figcaption class="flex">
            <div>
                <div class="r-title">
                    <p><i class="fas fa-map-marker-alt"></i> ${tour.location}</p>
                    <div class="flex">
                        <h3>${tour.name}</h3>
                    </div>
                </div>
                <div class="r-info">
                    <div>
                        <div class="rating">
                            ${createRating(tour.rating)}
                        </div>
                        <p>Giá: ${tour.textPrice} VND</p>
                    </div>
                    <div class="btn">
                        <button class="click">Đặt ngay</button>
                    </div>
                </div>
            </div>
        </figcaption>
    </figure>`);
    resortContainer.html(output)
}

const createRoomTemplate = (rooms) => {
    const hotelContainer = $(".h-items");
    var output = "";
    rooms.forEach(room => output += 
        `
        <figure>
            <div class="flex">
                <img src=${room.img} alt="">
                <figcaption>
                    <div class="h-title">
                        <p><i class="fas fa-map-marker-alt"></i> ${room.location}</p>
                        <h3>${room.name}</h3>
                    </div>
                    <div class="h-info">
                        <div>
                            <div class="rating"> ${createRating(room.rating)} </div>
                            <p>Giá: ${room.textPrice} VND</p>
                        </div>
                        <div class="btn">
                            <button class="click">Đặt ngay</button>
                        </div>
                    </div>
                </figcaption>  
            </div>
        </figure>
        `)
    hotelContainer.html(output)
}