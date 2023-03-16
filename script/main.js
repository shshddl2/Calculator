function change(){

    if(document.getElementById("mainCheck_").checked == true){
        console.log(document.getElementById("mainCheck_").checked);
        document.getElementById("mainCheck_").checked = true;
        document.getElementById("Check_1_").checked = true;
        document.getElementById("Check_2_").checked = true;
        document.getElementById("Check_3_").checked = true;
        document.getElementById("Check_4_").checked = true;
    }else{
        console.log(document.getElementById("mainCheck_").checked);
        document.getElementById("mainCheck_").checked = false;
        document.getElementById("Check_1_").checked = false;
        document.getElementById("Check_2_").checked = false;
        document.getElementById("Check_3_").checked = false;
        document.getElementById("Check_4_").checked = false;
    }
    
}
function change_target(){
    let count = 0;
    for(i = 1; i <= 4; i ++){
        if(document.getElementById("Check_" + i + "_").checked == true){
            count ++;
            if(count == 4){
                document.getElementById("mainCheck_").checked = true;
            }else{
                document.getElementById("mainCheck_").checked = false;
            }
        }else{
            count --;
        }
    }
}
function requireCheck(){
    let check_1 = document.getElementById("Check_1_").checked;
    let check_2 = document.getElementById("Check_2_").checked;
    if(!(check_1 == true && check_2 == true)){
        alert("필수 동의 내용에 체크해주세요.");
    }else{
        document.getElementById("enterBtn").setAttribute("type", "submit");
    }
    
}


// function all(){
//     if(document.getElementById("Check_1_").checked == true && document.getElementById("Check_2_").checked == true
//     && document.getElementById("Check_3_").checked == true && document.getElementById("Check_4_").checked == true){
//         document.getElementById("mainCheck").setAttribute("src", "img/top_check_button_on.png");
//     }
//     else{
//         document.getElementById("mainCheck").setAttribute("src", "img/top_check_button.png");
//     }
// }