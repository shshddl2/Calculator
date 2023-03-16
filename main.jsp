<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>네이버: 회원가입</title>
    <link rel="stylesheet" href="css/main.css" />
  </head>

  <body>
    <script type = "text/javascript" src = "script/main.js"></script>
    <header>
      <div>
        <select class="language" name="language">
          <option value="Korean">한국어</option>
          <option value="Japanese">일본어</option>
          <option value="English">영어</option>
          <option value="Chinese">중국어</option>
        </select>
      </div>
    </header>

    <div class="logotap">
      <div>
        <a class="logo" href="#home">
          <img src="img/Naver_Logotype.svg.png" alt="logo"/></a>
        <div class="tap1">
          <input type="checkbox" name = "check" id = "mainCheck_" onclick="change()">
            <label for="mainCheck_"><img
            src="img/top_check_button.png"
            alt="mainCheck"/>

          <b class="font1"><u>네이버 이용약관, 개인정보 수집 및 이용, 위치기반서비스 이<br/>용약관(선택)
              , 프로모션 정보 수신(선택)에 모두 동의합니다.</u></b>
        </label>
        <form action="join.html" method="post">
          <div class="tap2">
            <input type = "checkbox" name = "check" id = "Check_1_" onclick="change_target()">
            <label for="Check_1_">
            <img src="img/middle_check_button.png" alt="Check" />

            <b class="font2"
              >네이버 이용약관 동의<span class="spanGrren">(필수)</span></b>
            </label>
            <div class="scrollBox">
                <b>여러분을 환영합니다.</b><br><br>네이버 서비스 및 제품(이하 ‘서비스’)을 이용해
              주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과
              관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와
              이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의
              관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수
              있는 유익한 정보를 포함하고 있습니다. 네이버 서비스를 이용하시거나
              네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영
              정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게
              살펴봐 주시기 바랍니다.
            </div>

            <div class="tap3">
                <input type = "checkbox" name = "check" id = "Check_2_" onclick="change_target()">
            <label for="Check_2_">
              <img
                src="img/middle_check_button.png"
                alt="Check"/>
              <b class="font3"
                >개인정보 수집 및 이용 동의<span class="spanGrren" >(필수)</span ></b>
                    <div class="scrollBox">
                       네이버 서비스 및 제품(이하 ‘서비스’)을 이용해
                      주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과
                      관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와
                      이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의
                      관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수
                      있는 유익한 정보를 포함하고 있습니다.<Br> 네이버 서비스를 이용하시거나
                      네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영
                      정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게
                      살펴봐 주시기 바랍니다.
                    </div>
                    </label>
              <div class="tap4">
                <input type = "checkbox" name = "check" id = "Check_3_" onclick="change_target()">
            <label for="Check_3_">
                <img
                  src="img/middle_check_button.png"
                  alt="Check"
                />

                <b class="font4"
                  >위치기반서비스 이용약관 동의<span class="spanGray">(선택)</span></b >

                  <div class="scrollBox">
                   네이버 서비스 및 제품(이하 ‘서비스’)을 이용해
                  주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과
                  관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와
                  이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의
                  관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수
                  있는 유익한 정보를 포함하고 있습니다. 네이버 서비스를 이용하시거나
                  네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영
                  정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게
                  살펴봐 주시기 바랍니다.
                </div>
                </label>

                <div class="tap5">
                    <input type = "checkbox" name = "check" id = "Check_4_" onclick="change_target()">
            <label for="Check_4_">
                  <img
                    
                    src="img/middle_check_button.png"
                    alt="Check"/>
                    

                  <b class="font5">프로모션 정보 수신 동의<span class="spanGray" >(선택)</span></b>

                  <div class="font6">
                    네이버에서 제공하는 이벤트/혜택 등 다양한 정보를 휴대전화(네이버앱 알림 또는 문자),
                    이메일로 받아보실 수 있습니다. 일부 서비스(별도 회원 체계로 운영하거나 네이버
                    가입 이후 추가 가입하여 이용하는 서비스 등)의 경우, 개별 서비스에 대해 별도
                    수신 동의를 받을 수 있으며, 이때에도 수신 동의에 대해 별도로 안내하고 동의를 받습니다.
                  </div>
                  </label>
                </form> 
                  <a href="https://www.naver.com"><button class="cancelBtn" type="button">취소</button></a>
                  <button id="enterBtn" type="button" onclick="requireCheck()">확인</button>
                

                  <div class="font7">회사, 동아리 등 단체에서 사용할 ID가 필요하세요?
                     <span class="spanLink"><U>단체 회원 가입</U></span>
                </div>
                  
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>