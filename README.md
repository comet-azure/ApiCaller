If you want to know more about ApiCaller, click here: <a href="README-EN.md">English</a>

# 1. 프로젝트 소개
- 팀 프로젝트명: Spring
- 개발 배경: 2차 팀 프로젝트
- 개발 계기: 팀원들과 스프링과 스프링부트를 기반으로 한 네이버와 비슷한 다양한 기능을 가진 포털 사이트를 구현하고 싶었다.
- 제작 기간: 2023년 4월 28일 ~ 2023년 5월 19일

# 2. 주요 기능
### 날씨 페이지(담당 부분)
- 사용자 위치(위경도 -> 동, 구 주소)와 그 위치의 현재 날씨를 아이콘으로 보여준다.
- 현재 기온, 풍속, 풍향을 알려준다.
- 주요 지역의 현재 날씨와 기온을 알려준다.

### 지도 페이지(담당 부분)
- 현재 위치를 마커로 표시, 지도로 보여준다.
- 사용자 컨트롤로 지도, 스카이뷰 전환이 가능하다.
- 사용자 컨트롤로 확대, 축소가 가능하다.

### 메인 페이지
- 쇼핑, 영화, 게시판, 날씨, 뉴스 등의 기능을 한 번에 볼 수 있다.

### 로그인 페이지
- 아이디, 비밀번호를 입력해 로그인이 가능하며 아이디가 없다면 가입하기를 눌러 회원가입 페이지로 이동한다.
- 로그인 후 프로필 사진 수정과 프로필 이름 수정이 가능하다.

### 회원가입 페이지
- 아이디, 비밀번호, 이름, 이메일 입력창이 있고 이메일 입력 후 인증 버튼을 누르면 그 주소로 인증 번호가 적힌 메일이 발송된다. 그 인증 번호를 맞게 써야만 이메일 사용이 가능하다.
- 회원가입 후 메인 페이지로 이동한다.

### 관리자 페이지
- 페이지 설정 관리가 가능하며, 새로운 메뉴 생성, 상품 등록이 가능하다.

### 카페
- 카테고리 선택 후 글을 쓸 수 있다.
- 검색, 정렬, 필터 기능으로 게시글을 조회할 수 있다.

### 쇼핑몰
- 상품을 리뷰 별로 조회하고, 장바구니, 구매하기, 결제, 리뷰 쓰기가 가능하다.

### 게임
- 포커 홀덤, 테트리스, 캔디 크러시, 십자말풀이 게임을 할 수 있다.
- 게임 아이템 구매, 유저 정보 수정이 가능하다.

# 3. 기술 스택
- 언어: Java, JavaScript, HTML5, CSS3
- 서버: Apache Tomcat v9.0, Node.js
- 데이터베이스: Oracle 11g
- 프레임워크: Spring Framework, Express.js
- 작업 환경: Spring Tool Suite 3.9.12 RELEASE, Visual Studio Code
- API: Geolocation API(https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API), OpenWeatherMap API(https://openweathermap.org/current), Kakao REST API - Local(https://developers.kakao.com/docs/latest/ko/local/dev-guide), Kakao Map API(https://apis.map.kakao.com/web/sample/)
- Node.js 사용 배경: 스프링으로 페이지를 제작하려고 했으나 Geolocation API를 고려하면 Node.js로 웹 서버를 만들어 연결하는 편이 더 간단했기 때문에 Node.js를 사용하기로 했다.

# 4. 결과물
- Spring 프로젝트 링크: https://github.com/steha2/os
  (날씨, 지도 페이지는 연결 안 됨 - 고정된 도메인 주소 없음)
- 날씨 페이지 화면(담당 부분):
  ![Image 001](https://github.com/comet-azure/ApiCaller/assets/50683606/a407a306-8e39-4aef-8516-74d72c88c9f8)
- 지도 페이지 화면(담당 부분):
  ![Image 003](https://github.com/comet-azure/ApiCaller/assets/50683606/a8646ca6-93a0-4f2b-919f-5900c30477db)
- 메인 페이지 화면:
  ![메인페이지](https://github.com/comet-azure/ApiCaller/assets/50683606/378262ab-bb48-47d7-8744-83b51faa28e2)
- 로그인 페이지 화면:
  ![로그인](https://github.com/comet-azure/ApiCaller/assets/50683606/1254ff79-3a3e-40e4-86ed-c17defc5611f)
  ![로그인2](https://github.com/comet-azure/ApiCaller/assets/50683606/8de8f5c0-56a8-431d-a27e-e7edc0376da1)
- 회원가입 페이지 화면:
  ![회원가입](https://github.com/comet-azure/ApiCaller/assets/50683606/5f4a026e-bdd3-46fe-affe-62e441654fcc)
- 관리자 페이지 화면:
  ![관리자](https://github.com/comet-azure/ApiCaller/assets/50683606/d5fe169a-7b61-4fd9-aae9-f23590da7044)
- 카페 페이지 화면:
  ![카페](https://github.com/comet-azure/ApiCaller/assets/50683606/ab6a1257-3262-4720-972a-4d34a9cd8002)
- 쇼핑몰 페이지 화면:
  ![쇼핑몰](https://github.com/comet-azure/ApiCaller/assets/50683606/ddbd7269-2a55-4307-a45a-59d8191fd212)
- 게임 페이지 화면:
  ![게임](https://github.com/comet-azure/ApiCaller/assets/50683606/3caacb47-6873-45b8-b8b3-17585447a05d)
  ![게임2](https://github.com/comet-azure/ApiCaller/assets/50683606/751f903d-f958-492a-a426-16095bec7675)

# 5. 개발 과정 중 발생한 문제와 해결 과정
- 문제(1): Geolocation API를 사용하면 현재 위치의 위경도를 가져올 수 있지만 주소로 나오지는 않았다.
  위경도를 주소로 바꿔줄 방법을 고민하며 찾아보니 카카오 REST API(로컬) 문서에 주소를 시도 단위, 구 단위, 동 단위로 골라서 출력할 수 있는 방법이 있었다.
  Geolocation API에서 위경도를 가져오고 그 위경도를 카카오 REST API를 통해 구, 동까지 주소를 출력하는 함수를 만들어 해결할 수 있었다.
  
- 문제(2): 날씨 페이지와 지도 페이지는 공통적으로 Geolocation API를 사용하는데, https나 로컬호스트 환경이 아니면 작동하지 않았다.
  다른 팀원의 컴퓨터에 내 컴퓨터의 IP 주소와 로컬호스트 포트 번호를 입력해도 위치 추적이 되지 않아 검색을 해본 결과, ngrok 라는 교차 플랫폼 애플리케이션을 통해 로컬호스트 환경에서 제작한 프로젝트를 https 도메인 주소로 공유할 수 있는 방법이 있었다.
  ngrok로 생성된 사이트 주소로 들어가면 누구에게나 링크만 공유하면 바로 로컬호스트 작업물을 볼 수 있었다. 아이디와 비밀번호를 정하면 추가적인 보안이 가능했으나, 팀원들의 편의를 위해 그러지 않았다.

- 문제(3): 지도 페이지를 만들 때 현 위치를 지도로 보여주는 건 성공했지만, 단순히 현 위치만 보여주는 것이 아니라 그 위치를 마커로 표시하고 더 나아가 확대, 축소 버튼 같은 기능이 더 있으면 좋겠다고 생각했다.
  그래서 카카오 지도 API 문서의 오버레이 카테고리에 있는 "마커 보여주기" 문서의 코드와 지도 카테고리에 있는 "지도에 컨트롤 올리기" 문서를 참고해 코드를 작성했다.

- 문제(4): 페이지에 현재 날씨와 전국 날씨, 3시간 간격의 오늘과 내일 날씨, 일주일 날씨를 보여주고 싶었는데 OpenWeatherMap API는 무료로는 현재 날씨를 불러오는 API만 가능했다.
  영어로 검색하여 찾아봐도 다른 API는 가능한 호출 건수가 너무 적거나 한국 날씨는 나오지 않는 곳이 많았다. 그래서 한국의 무료 API는 기상청이 가장 데이터가 많고 무료였기 때문에 기상청 API로 나머지를 하면 된다고 생각했었다.
  그러나 예보 종류는 초단기, 단기, 중기로 각각 발표 시간이 다르고 호출 가능한 데이터의 내용도 달랐다.
  초단기예보는 예보시점부터 6시간까지의 예보를, 단기예보는 예보단위가 1시간이고 오늘 포함 이틀까지의 예보, 중기예보는 3일에서 10일 후의 예보를 보여준다.
  그렇기에 초단기예보는 현재 날씨, 단기예보는 3시간 간격의 날씨, 중기예보는 일주일 날씨에 단기예보와 함께 써야 한다.
  세 가지 예보를 모두 사용해서 데이터 호출하는 함수를 하나씩 다 만들기에는 날씨와 지도 웹 페이지 디자인, 발표물 제작도 해야 했기에 시간이 빠듯했고, 결국 현재 날씨와 일출, 일몰 시간만 출력하기로 했다.

# 6. 느낀 점
- 처음 Node.js를 사용해 웹 서버를 만들고 ngrok로 연결해 로컬호스트 작업물을 https 도메인 주소로 공유하는 과정에서 이런 방식으로도 작업물 공유가 가능하다는 것을 배웠습니다.
- Node.js도 컨트롤러가 필요하고 사용 전 환경 설정이 필요하다는 점에서 스프링과 비슷하지만, 패키지 설치 후 package.json에서 start 부분에 메인이 되는 파일 이름을 넣고 Express 프레임워크를 사용해 훨씬 짧은 코드로 Tomcat 없이 자체적으로 웹 서버를 만들어 연결이 가능하다는 점에서 굉장히 유용함을 느꼈습니다.
- 기상청 API로 검색했을 때 현재 위치에 따른 모든 날씨 정보를 한 번에 보여주는 "날씨 어때?" 라는 웹 앱을 발견했습니다. 어떻게 만든 것인지 궁금해서 개발자 도구로 봤었는데 Redux로 만든 거라 코드를 읽을 수가 없었습니다. API에 대한 공부를 더 해서 나중에는 그 분처럼 모든 날씨 정보를 볼 수 있도록 이 프로젝트의 버전 2.0을 내놓고 싶습니다.

# 7. 다른 프로젝트
- 1차 팀 프로젝트(자바 스윙 기반 항공권 예약 프로그램): https://github.com/comet-azure/ar
- 스프링 게시판(PagingPractice): https://github.com/comet-azure/PagingPractice
