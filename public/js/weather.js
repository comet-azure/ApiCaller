const COORDS = 'coords'; // 좌표를 받을 변수
var latitude = 0.0; // 위도
var longitude = 0.0; // 경도

/* 현재 날씨 정보를 가져오는 함수 Current Weather */
function geoWeather(position){
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	fetch(url).then(response=> response.json())
	    .then(data=> {
			const weather = data.weather[0].description; // 현재 날씨
			const temp = data.main.temp; // 현재 기온
			const humid = data.main.humidity; // 습도
			const windspeed = data.wind.speed; // 풍속
			const winddir = data.wind.deg; // 풍향
			
			// 일출 시간
			const sunrise = data.sys.sunrise;
			var srStr = unixts(sunrise); // 유닉스 -> 24시 포맷 변환
			console.log(srStr);
			// 일몰 시간
			const sunset = data.sys.sunset;
			var ssStr = unixts(sunset); // 유닉스 -> 24시 포맷 변환

			const feelslike = data.main.feels_like; // 체감온도
			const maxtemp = data.main.temp_max; // 최고기온
			const mintemp = data.main.temp_min; // 최저기온
			var rainfall_oneHr = 0.0;
			var rainfall_threeHr = 0.0;
				if ("rain" in data){
					if ("1h" in data.rain) {
						rainfall_oneHr = data.rain["1h"];
					}
					else {
						rainfall_oneHr = 0.0;
					}
					if ("3h" in data.rain) {
						rainfall_threeHr = data.rain["1h"];
					}
					else {
						rainfall_threeHr = 0.0;
					}
				}
				
				console.log(rainfall_oneHr);
				console.info(rainfall_threeHr);

	        console.log( "날씨: " + weather, "온도: " + temp, "습도: " + humid, "풍속: " + windspeed, "풍향: " + winddir, "일출: " + srStr, "일몰: " + ssStr, "체감온도: " + feelslike, "최고기온: " + maxtemp, "최저기온: " + mintemp);
	        $("#weather-desc").text(wtranslate(weather)); // 영어 -> 한국어 변환한 현재 날씨
	        $("#humidity").text(humid); // 습도
	        $("#temperature").text(temp); // 현재 기온
	        $("#wind-dir").text(winddir); // 풍향
	        $('#windspeed').text(windspeed); // 풍속
	        $("#feelslike").text(feelslike); // 체감온도
	        $("#max-temp").text(maxtemp); // 최고기온
	        $("#min-temp").text(mintemp); // 최저기온
	        $("#sunrise").text(srStr); // 일출
	        $("#sunset").text(ssStr); // 일몰

			// 날씨 아이콘
			var icon = setWeatherIndex(foundIndex);
			console.info(icon);
			$("#weather-icon").attr("src", icon);
			// 풍향 변환
			$("#wind-dir").text(degToCompass(winddir));
	});
}

// 풍향 수치(숫자)를 글자로 변환
function degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["북", "북북동", "북동", "동북동", "동", "동남동", "남동", "남남동", "남", "남남서", "남서", "서남서", "서", "서북서", "북서", "북북서"];
    return arr[(val % 16)];
}

function onGeoErr(){
	alert("위치 정보를 찾을 수 없습니다");
}

navigator.geolocation.getCurrentPosition( geoWeather ,  onGeoErr );


// 일출 일몰 시간 24시 포맷으로 변환
function unixts(t){
    var date = new Date(t*1000);
    var hour = "0" + date.getHours();
    var minute = "0" + date.getMinutes();
    return hour.substr(-2) + ":" + minute.substr(-2);
}