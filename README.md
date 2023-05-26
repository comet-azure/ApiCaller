<a href="README-EN.md">English</a>

# 1. 프로젝트 소개
- 팀 프로젝트명: Spring
- 개발 배경: 학원 2차 팀 프로젝트
- 개발 계기: 팀원들과 스프링과 스프링부트를 기반으로 한 네이버와 비슷한 다양한 기능을 가진 포털 사이트를 구현하고 싶었고, 그 중 날씨와 지도 페이지를 맡기로 하였기 때문에 개발하게 되었다.

# 2. 개발 과정
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
  
# 3. 기술 스택
- 언어: JavaScript, HTML5, CSS3
- 서버: Node.js
- 프레임워크: Express.js
- 사용 배경: 스프링으로 페이지를 제작하려고 했으나 Geolocation API를 고려하면 Node.js로 웹 서버를 만들어 연결하는 편이 더 간단했기 때문에 Node.js를 사용하기로 했다.

# 4. 결과물
- 날씨 페이지 화면:
  ![Image 001](https://github.com/comet-azure/ApiCaller/assets/50683606/a407a306-8e39-4aef-8516-74d72c88c9f8)
- 지도 페이지 화면:
  ![Image 003](https://github.com/comet-azure/ApiCaller/assets/50683606/a8646ca6-93a0-4f2b-919f-5900c30477db)

# 5. 느낀 점
- 처음 Node.js를 사용해 웹 서버를 만들고 ngrok로 연결해 로컬호스트 작업물을 https 도메인 주소로 공유하는 과정에서 이런 방식으로도 작업물 공유가 가능하다는 것을 배웠습니다.
- Node.js도 컨트롤러가 필요하고 사용 전 환경 설정이 필요하다는 점에서 스프링과 비슷하지만, 패키지 설치 후 package.json에서 start 부분에 메인이 되는 파일 이름을 넣고 Express 프레임워크를 사용해 훨씬 짧은 코드로 Tomcat 없이 자체적으로 웹 서버를 만들어 연결이 가능하다는 점에서 굉장히 유용함을 느꼈습니다.
- 기상청 API로 검색했을 때 현재 위치에 따른 모든 날씨 정보를 한 번에 보여주는 "날씨 어때?" 라는 웹 앱을 발견했습니다. 어떻게 만든 것인지 궁금해서 개발자 도구로 봤었는데 Redux로 만든 거라 코드를 읽을 수가 없었습니다.
  API에 대한 공부를 더 해서 나중에는 그 분처럼 모든 날씨 정보를 볼 수 있도록 이 프로젝트의 버전 2.0을 내놓고 싶습니다.

