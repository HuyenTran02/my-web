$(document).ready(function (){
    
    var offset = 0;
    createGameTemplate(data, offset);
    var count = 0;

    $(".fa-chevron-circle-right").click( function(){
        $("#name").removeClass("correct")
        $("#name").removeClass("incorrect")
        if(++offset < data.length)
            createGameTemplate(data, offset);
            else{
                offset=data.length-1
                alert(
                    `Cảm ơn bạn đã tham gia!
Điểm của bạn là: ${count} / ${data.length}`)
            }
    }) 

    $("#btn").click(function() {
        if(offset >= 0 && offset < data.length){
            var value = $("#name").val();
            value = value.toLowerCase();
        
            var ketQua = data[offset].answer;
            ketQua = ketQua.toLowerCase();
            
            if (value){
                $(".answer p").css("display", "block")
                if(value.includes(ketQua)) {
                    $("#name").addClass("correct")
                    count++;
                }
                else {
                    $("#name").addClass("incorrect")
            }}
            else
                alert("Vui long nhap dap an.")
        }
    }) 

    $(".fa-chevron-circle-left").click( function(){
        $("#name").removeClass("correct")
        $("#name").removeClass("incorrect")
        if(--offset >= 0)
            createGameTemplate(data, offset);
            else{
                offset=0 
                alert("Vui lòng nhấn sang phải để trả lời câu hỏi khác!")
            }
    })
})

const createGameTemplate = (data, dem) => {
    var cauHoi = '', hinh ='', dapAn = '', input ='';
    cauHoi += `<p>${data[dem].question}</p>`
    hinh += `<img src=${data[dem].img} alt="HoiAn">`
    dapAn += `<p>Đáp án: ${data[dem].answer}</p>`
    input += `<input type="text" placeholder="Nhập đáp án..." id="name">`
    
    
    $(".question p").html(cauHoi);
    $(".img").html(hinh);
    $(".answer").html(dapAn);
    $(".input").html(input);
   
}