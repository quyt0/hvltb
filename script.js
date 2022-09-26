document.getElementById('create').addEventListener("click", writeText);
document.getElementById('save').addEventListener("click", saveImage);

function writeText() {
    var fullName = document.getElementById('full-name').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    var mark = document.getElementById('mark').value;
    var minu = Math.floor(Math.random() * (9 - 5 + 1) + 5);
    var sec = Math.floor(Math.random() * (40 - 1 + 1) + 1);
    var tik = Math.floor(Math.random() * 100) + 1;
    var times = '' + minu + ':' + sec + '.' + tik;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var imageObj = new Image();
    imageObj.onload = function(){
        context.drawImage(imageObj, 10, 10);
        context.font = "bold 15px Roboto";
        context.fillStyle = "#3B3B3B";
        context.fillText("A", 115, 173) //Bảng A;
        context.fillText("THPT Xuân Hoà", 126, 224.5);
        context.fillText("Vĩnh Phúc", 520, 173);
        context.fillText("12", 490, 225);
        context.fillText("Phúc Yên", 930, 173);
        context.fillText(fullName, 125, 123);
        context.fillText(dob, 528, 123);
        context.fillText(gender, 900, 123);
        context.fillStyle = "black";
        context.font = "15px Roboto";
        context.fillText(mark, 750, 350) //Điểm;
        context.fillText("Vòng loại 2022", 122, 350);
        context.fillText("Tuần 2", 390, 350);
        context.fillText(times, 1000, 350) //Thời gian;
    };
    imageObj.src = "img.png"; 
}

function saveImage() {
    var dataURL = canvas.toDataURL("image/jpeg", 1.0);
    downloadImage(dataURL, 'hinhanhthi.jpeg');
}

// Save | Download image
function downloadImage(data, filename = 'untitled.jpeg') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();  
}
