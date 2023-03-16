
var warning_For_Id = true;////////////////////////아이디 입력란 이상여부를 true / false 로 받는 변수////////
var warning_For_Password = true;////////////////비밀번호 입력란 이상여부를 true / false 로 받는 변수////////
var warning_For_PasswordCheck = true;///////////비밀번호 확인란 이상여부를 true / false 로 받는 변수////////
var warning_For_NameCheck = true;///////////////이름 입력란 이상여부를 true / false 로 받는 변수////////
var warning_For_YearCheck = true;///////////////연도를 입력했는지
var warning_For_MonthCheck = true;//////////////월을 제대로 입력햇는지
var warning_For_DayCheck = true;////////////////날짜를 입력했는지
var warning_For_GenderCheck = true;/////////////성별을 선택했는지
var warning_For_EmailCheck = true;//////////////유효한 이메일인지
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////이상이 있으면 true, 이상이 없으면 false////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function(){//////////////////////////////페이지 로딩과 동시에 아이디 입력란에 포커스를 줌/////
    document.getElementById("inputId").focus();//////////아이디 입력란에 포커스가 갔으므로 //////////////////
}////////////////////////////////////////////////////////warning_For_Id = true 로 리턴받은 상태가 됨///////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


function checkId() {///////////////////////////////////////////////아이디 유효성 검사////////////////////////////
    let check = document.getElementById("inputId").value;
	const idForm = /^[a-z]+[a-z0-9]{5,19}$/g;
    if(idForm.test(check) == false){
        document.getElementById("warningId").setAttribute("style", "display : inline-block;");///경고메세지출력///
        warning_For_Id = true;/////////////////////////////유효성검사 통과 못했을 때///////////////////////////////
    }else{
        document.getElementById("warningId").setAttribute("style", "display : none;");
        warning_For_Id = false;
    }
}
function checkPassword(){//////////////////////////////////////////비밀번호 유효성 검사//////////////////////////
    let check = document.getElementById("inputPassword").value;
    const passwordForm = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if(passwordForm.test(check) == false){
        document.getElementById("warningPassword").setAttribute("style", "display : inline-block;");
        warning_For_Password = true;
    }else{
        document.getElementById("warningPassword").setAttribute("style", "display : none;");
        warning_For_Password = false;
    }
}
function isSamePassword(){////////////////////////////////////////비밀번호, 비밀번호 확인이 같은지 검사///////////
    let check = document.getElementById("inputPasswordCheck").value;
    let password = document.getElementById("inputPassword").value;
    if(check == password){
        document.getElementById("warningPasswordCheck").setAttribute("style", "display : none;");
        warning_For_PasswordCheck = false;
    }else{
        document.getElementById("warningPasswordCheck").setAttribute("style", "display : inline-block;");
        warning_For_PasswordCheck = true;
    }
}
function isNameEmpty(){//////////////////////////////////////////이름이 빈칸인지 아닌지 체크/////////////////////
    let check = document.getElementById("inputName").value;
    if(check != ""){
        document.getElementById("emptyName").setAttribute("style", "display : none");
        warning_For_NameCheck = false;
    }else{
        document.getElementById("emptyName").setAttribute("style", "display : block");
        warning_For_NameCheck = true;
    }
}
function birthCheck(){//////////////////////////////////////////생년월일 유효성 체크////////////정확한 연도, 날짜는 생략/////////////
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    console.log("year :" + year + ", month :",month + ", day :",day);
    if(year == ""){
        warning_For_YearCheck = true;
        document.getElementById("yearCheck").setAttribute("style", "display : block;");
    }else{
        warning_For_YearCheck = false;
        document.getElementById("yearCheck").setAttribute("style", "display : none;");
        if(month == "check"){
            warning_For_MonthCheck = true;
            document.getElementById("monthCheck").setAttribute("style", "display : block;");
        }else{
            warning_For_MonthCheck = false;
            document.getElementById("monthCheck").setAttribute("style", "display : none;");
            if(day == ""){
                warning_For_DayCheck = true;
                document.getElementById("dayCheck").setAttribute("style", "display : block;");
            }else{
                warning_For_DayCheck = false;
                document.getElementById("dayCheck").setAttribute("style", "display : none;");
            }
        }
    }
    
}
function genderCheck(){//////////////////////////////////////////////성별 유효성 체크//////////////////////////////
    let gender = document.getElementById("gender").value;
    if(gender == "check"){
        warning_For_GenderCheck = true;
        document.getElementById("genderCheck").setAttribute("style", "display : block;");
    }else{
        warning_For_GenderCheck = false;
        document.getElementById("genderCheck").setAttribute("style", "display : none;");
    }
}
function emailCheck(){///////////////////////////////////////////////이메일 유효성 체크///////////////////////////
    let reg_email =/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/g;
    let email = document.getElementById("email").value;
    if(email != ""){
        if(reg_email.test(email) == false){
            warning_For_EmailCheck = true;
            document.getElementById("emailCheck").setAttribute("style", "display : block;");
        }else{
            warning_For_EmailCheck = false;
            document.getElementById("emailCheck").setAttribute("style", "display : none;");
        }
    }else{
        warning_For_EmailCheck = false;
        document.getElementById("emailCheck").setAttribute("style", "display : none;");
    }
}


function checkPhone(){////////////////////////////////////////////휴대폰 번호 유효성 검사////////////////////////
    var regPhone= /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/g;
    console.log(document.getElementById("phoneNumber").value);
    if(regPhone.test(document.getElementById("phoneNumber").value) ==true){

        document.getElementById("wrongNumber").setAttribute("style", "display:none;");
        document.getElementById("guide").setAttribute("style", "display : inline-block; color : green");
        document.getElementById("certBox").setAttribute("id", "certBox_success");
        document.getElementById("cert").setAttribute("id", "cert_success");
    }else{
        document.getElementById("wrongNumber").setAttribute("style", "display:inline-block;");
        document.getElementById("guide").setAttribute("style", "display : none;");

    }
}

function checkValue(){////////////////////////////////////////////가입 최종검사/////////////////////////////////
    console.log(warning_For_Id);
    console.log(warning_For_Password);
    console.log(warning_For_PasswordCheck);
    if(warning_For_Id == false && 
        warning_For_Password == false && 
        warning_For_PasswordCheck == false &&
        warning_For_NameCheck == false &&
        warning_For_YearCheck == false &&
        warning_For_MonthCheck == false &&
        warning_For_DayCheck == false &&
        warning_For_GenderCheck == false &&
        warning_For_EmailCheck == false){
        document.getElementById("final").setAttribute("type", "submit");
    }else{
        alert("회원정보 입력을 완료해 주세요.");
    }
   

}


