// Not to be exposed to public!
const key = "my key";

//http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=[key]&dataType=JSON&base_date=[today - 20230512]&base_time=[time - 1500]&nx=[x]&ny=[y]
const apiURLWeatherNow = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?ServiceKey="

//백령도, 서울, 춘천, 강릉, 정주, 대전, 대구, 부산, 울릉도, 전주, 광주, 제주
const targetLocations = [[21,135],[60,127],[73,134],[92,131],[69,106],[67,100],[89,90],[98,76],[127,127],[63,89],[65,123]];

// Value translation data, this is more or less for reference
const catLUTNow = [["T1H","기온"],["RN1","1시간강수량"],["UUU","동서바람벡터"],["VVV","남북바람벡터"],["REH","습도"],["PTY","강수형태"],["VEC","풍향"],["WSD","풍속"]];
const catLUTForecast = [["T1H","기온"],["RN1","1시간강수량"],["SKY","하늘상태"],["UUU","동서바람벡터"],["VVV","남북바람벡터"],["REH","습도"],["PTY","강수형태"],["LGT","낙뢰"],["VEC","풍향"],["WSD","풍속"]];
// 900+ / -900 = Invalid value or not measured
// For rainfall, 0, "-" or null denotes "No rainfall"
// All time should be rounded to either top of the hour (current weather) or thirty minutes past previous hour (forecast)

function kwGetWeather(lat, lon, isXY){
	// http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=[key]&dataType=JSON&base_date=[today - 20230512]&base_time=[time - 1500]&nx=[x]&ny=[y]
	if (isXY != true){ // If it's NOT an XY format
		var conv = fnLatLon2XY(lat, lon); // Convert the lat and lon value to X and Y
		var res = conv.split(" "); // Split the result into array of X and Y value
	}
	else { // If it's an XY format
		var res = [lat, lon]; // Treat lat and lon value as X and Y
	}
	var x = res[0];
	var y = res[1];
	var date = getMyDate();
	var time = roundTimeTop();
	var request = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?ServiceKey=${key}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${date}&base_time=${time}&nx=${x}&ny=${y}`;
	console.log(request);
	fetch(request).then(response => response.json())
		.then(data => {
		console.log(data);
		var a = data.response.body;
		var s = data.response.body.items[0];
		var d = data.response.body.items[0].item;
		var f = data.response.body.items[0].item.category;
		console.log(a);
		console.log(s);
		console.log(d);
		console.log(f);
	})
}

function kwGetWeatherT(lat, lon, isXY){
	// http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=[key]&dataType=JSON&base_date=[today - 20230512]&base_time=[time - 1500]&nx=[x]&ny=[y]
	if (isXY != true){ // If it's NOT an XY format
		var conv = fnLatLon2XY(lat, lon); // Convert the lat and lon value to X and Y
		var res = conv.split(" "); // Split the result into array of X and Y value
	}
	else { // If it's an XY format
		var res = [lat, lon]; // Treat lat and lon value as X and Y
	}
	var x = res[0];
	var y = res[1];
	var date = getMyDate();
	var time = roundTimeTop();
	var request = `http://127.0.0.1:3000/getUltraSrtNcst?ServiceKey=${key}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${date}&base_time=${time}&nx=${x}&ny=${y}`;
	console.log(request);
	fetch(request).then(response => response.json())
		.then(data => {
		console.log(data);
		var a = data.response.body;
		console.log(a);
		var s = data.response.body.items;
		console.log(s);
		var d = data.response.body.items.item[0];
		console.log(d);
		var f = data.response.body.items.item[0].category;
		console.log(f);
	})
}

function kwGetForecast(lat, lon, isXY){
	// http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=[key]&dataType=JSON&base_date=[today - 20230512]&base_time=[time - 1530]&nx=[x]&ny=[y]
	if (isXY != true){ // If it's NOT an XY format
		var conv = fnLatLon2XY(lat, lon); // Convert the lat and lon value to X and Y
		var res = conv.split(" "); // Split the result into array of X and Y value
	}
	else { // If it's an XY format
		var res = [lat, lon]; // Treat lat and lon value as X and Y
	}
	var x = res[0];
	var y = res[1];
	var date = getMyDate();
	var time = roundTimeThirty();
	var request = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${key}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${date}&base_time=${time}&nx=${x}&ny=${y}`;
	console.log(request);
	fetch(request).then(response => response.json())
		.then(data => {
		console.log(data);
	})
}
function kwGetForecastT(lat, lon, isXY){
	// http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=[key]&dataType=JSON&base_date=[today - 20230512]&base_time=[time - 1530]&nx=[x]&ny=[y]
	if (isXY != true){ // If it's NOT an XY format
		var conv = fnLatLon2XY(lat, lon); // Convert the lat and lon value to X and Y
		var res = conv.split(" "); // Split the result into array of X and Y value
	}
	else { // If it's an XY format
		var res = [lat, lon]; // Treat lat and lon value as X and Y
	}
	var x = res[0];
	var y = res[1];
	var date = getMyDate();
	var time = roundTimeThirty();
	var request = `http://127.0.0.1:3000/getUltraSrtFcst?serviceKey=${key}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${date}&base_time=${time}&nx=${x}&ny=${y}`;
	console.log(request);
	fetch(request).then(response => response.json())
		.then(data => {
		console.log(data);
	})
}

function roundTimeThirty(){
	var date = new Date();
	var hour = 0;
	var min = "30";
	if (date.getMinutes() >= 30){
		hour = date.getHours();
	}
	if (date.getMinutes() < 30){
		hour = date.getHours() - 1;
	}
	hour = "0" + hour;
	var x = hour.substr(-2) + min;
	return x;
}

function roundTimeTop(){
	var date = new Date();
	var hour = date.getHours() - 1;
	var min = "00";
	hour = "0" + hour;
	var x = hour.substr(-2) + min;
	return x;
}

function getMyDate(){
	var date = new Date();
	var mo = date.getMonth() + 1;
	mo = "0" + mo;
	var dt = "0" + date.getDate(); 
	var output = date.getFullYear() + mo.substr(-2) + dt.substr(-2);
	return output;
}
// Function modified from https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=javaking75&logNo=220089575454

   // 위경도 -> GridXY

//----------------------------------------------------------
// 기상청 홈페이지에서 발췌한 변환 함수
//
// LCC DFS 좌표변환을 위한 기초 자료
//
var RE = 6371.00877; // 지구 반경(km)
var GRID = 5.0; // 격자 간격(km)
var SLAT1 = 30.0; // 투영 위도1(degree)
var SLAT2 = 60.0; // 투영 위도2(degree)
var OLON = 126.0; // 기준점 경도(degree)
var OLAT = 38.0; // 기준점 위도(degree)
var XO = 43; // 기준점 X좌표(GRID)
var YO = 136; // 기준점 Y좌표(GRID)

// console.log(fnLatLon2XY(35.1768136,129.0969838));

function fnLatLon2XY(lat, lon) {
		var strXY = "";
		var xy = dfs_xy_conv("toXY", lat, lon);
		strXY += xy.x + " " + xy.y + String.fromCharCode(10);
		console.log(strXY);
		return strXY;
}

function dfs_xy_conv(code, v1, v2) {
	var DEGRAD = Math.PI / 180.0;
	var re = RE / GRID;
	var slat1 = SLAT1 * DEGRAD;
	var slat2 = SLAT2 * DEGRAD;
	var olon = OLON * DEGRAD;
	var olat = OLAT * DEGRAD;
	var sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
	sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
	var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
	sf = Math.pow(sf, sn) * Math.cos(slat1) / sn;
	var ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
	ro = re * sf / Math.pow(ro, sn);
	var rs = {};
	rs['lat'] = v1;
	rs['lng'] = v2;
	var ra = Math.tan(Math.PI * 0.25 + (v1) * DEGRAD * 0.5);
	ra = re * sf / Math.pow(ra, sn);
	var theta = v2 * DEGRAD - olon;
	if (theta > Math.PI) theta -= 2.0 * Math.PI;
	if (theta < -Math.PI) theta += 2.0 * Math.PI;
	theta *= sn;
	rs['x'] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
	rs['y'] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
	return rs;
}

// VERSION 1.0.0.3