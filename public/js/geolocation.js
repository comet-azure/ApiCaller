var latitude = 0.0;
var longitude = 0.0;
/* 사용자 위치 변수 */
var loc = document.getElementById('userloc');

/* 페이지 실행 시 현재 위치 정보 가져옴 */
navigator.geolocation.getCurrentPosition(function(pos) {
   console.log(pos);
   latitude = pos.coords.latitude;
   longitude = pos.coords.longitude;
   //alert("현재 위치: " + latitude + ", " + longitude);
   loc.innerHTML = latitude + ", " +longitude;
});

/* 버튼 클릭 시 현재 위치 정보 가져옴 */
function findLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showYourLocation, showErrorMsg);
	} else { 
		loc.innerHTML = "사용자의 웹 브라우저가 Geolocation API를 지원하지 않음";
	}
}

/* 현재 위치 HTML로 출력 */
function showYourLocation(position) {
	loc.innerHTML = "위도: " + position.coords.latitude + ", 경도: " + position.coords.longitude;	
}

/* 에러 메시지 */
function showErrorMsg(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
        loc.innerHTML = "사용자가 위치 정보 요청을 거부"
        break;

        case error.POSITION_UNAVAILABLE:
        loc.innerHTML = "위치 정보를 사용할 수 없음"
        break;

        case error.TIMEOUT:
        loc.innerHTML = "위치 정보 요청이 허용 시간을 초과"
        break;

        case error.UNKNOWN_ERROR:
        loc.innerHTML = "알 수 없는 오류 발생"
        break;
    }
}

/* 카카오 REST API 좌표 -> 주소 변환 */
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const api_key = "Your API Key";
    const url = 'https://dapi.kakao.com/v2/local/geo/coord2address.json?x=' + lon + '&y=' + lat;
    fetch(url, {
            method: "post",
            headers: new Headers({
                "Authorization": "KakaoAK " + api_key
            })
        }).then(response => response.json())
        .then(data => {
        	console.log(data);
        	var gu = data.documents[0].address.region_2depth_name;
        	var dong = data.documents[0].address.region_3depth_name;
        	var addr = gu + " " + dong;
        	console.log(addr);
        	loc.innerHTML = addr;
        });
}

function onGeoErr(){
	alert("위치 정보를 찾을 수 없습니다");
}

navigator.geolocation.getCurrentPosition( onGeoOk ,  onGeoErr );