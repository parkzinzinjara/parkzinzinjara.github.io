var diary_num = 3;
var diary_idx = 1;

window.onload = function () {
    var desc = [document.getElementById('book1_desc').innerText,
    "문산수억고등학교 웹페이지 멘토링입니다.",
    "잘 부탁드립니다!"]; // 문자열 목록
    var index = 0;

    var interval = setInterval(function() {
        $('#book1_desc').fadeOut(500, function() {
            // 지금 표시된 문자가 사라지면 수행할 작업
            index++; // 0 >> 1
            if (index === desc.length)
                index = 0;
            $(this).text(desc[index]).fadeIn(500);
        });
    }, 4000);

    var leftarrow = document.getElementById('left-arrow');
    var rightarrow = document.getElementById('right-arrow');

    leftarrow.onclick = function () {
        $('#book1_desc').fadeOut(500,function() {
            index--;
            if (index === -1)
                index = 2;
            $(this).text(desc[index]).fadeIn(500);
            clearInterval(interval); // 문자열 자동변환 주기를 초기화
            interval = setInterval(function() {
                $('#book1_desc').fadeOut(500, function() {
                    // 지금 표시된 문자가 사라지면 수행할 작업
                    index++; // 0 >> 1
                    if (index === desc.length)
                        index = 0;
                    $(this).text(desc[index]).fadeIn(500);
                });
            }, 4000);
        })
    }

    rightarrow.onclick = function () {
        $('#book1_desc').fadeOut(500,function() {
            index++;
            if (index === desc.length)
                index = 0;
            $(this).text(desc[index]).fadeIn(500);
            clearInterval(interval); // 문자열 자동변환 주기를 초기화
            interval = setInterval(function() {
                $('#book1_desc').fadeOut(500, function() {
                    // 지금 표시된 문자가 사라지면 수행할 작업
                    index++; // 0 >> 1
                    if (index === desc.length)
                        index = 0;
                    $(this).text(desc[index]).fadeIn(500);
                });
            }, 4000);
        })
    }


    

    // 문자열은 모두 따옴표를 사용해서 입력 "문자열 어쩌구저쩌구"
    // 문자열끼리는 쉼표(,)로 구분
    // 배열 대괄호[ ] 꼭 열고 닫아주기!

    replaceDiary('/diary/diary1.html');

    var diary_left_arrow =document.getElementById("diary_left_arrow");
    var diary_right_arrow =document.getElementById("diary_right_arrow");

    diary_left_arrow.onclick = diaryLeftClick;
    diary_right_arrow.onclick = diaryRightClick;
}

function replaceDiary(filename) {
    $.get(filename, function(result){
        var obj = $(result).find('p');
        console.log(obj[0]);
        document.getElementById("diary_text").innerText = obj.html();
    });

    $.get(filename, function(result){
        var obj = $(result).find('h2');
        document.getElementById("diary_title").innerText = obj.html();
    });
    
    $.get(filename, function(result){
        var obj = $(result).find('img');
        document.getElementById("diary_img").src = obj[0].src;
    });
}

function diaryLeftClick(){
    $('.diary').fadeOut(500, function(){
        diary_idx--;
        if (diary_idx < 1) diary_idx = diary_num;
        var html ="/diary/diary"+ diary_idx + ".html";
        replaceDiary(html);
        $(this).fadeIn(500);
    });
}

function diaryRightClick(){
    $('.diary').fadeOut(500, function(){
        diary_idx++;
        if (diary_idx > diary_num) diary_idx = 1;
        var html ="/diary/diary"+ diary_idx + ".html";
        replaceDiary(html);
        $(this).fadeIn(500);
    });
}