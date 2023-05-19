var foundIndex = 17;

function wtranslate(input){
   var en = ["thunderstorm with light rain","thunderstorm with rain","thunderstorm with heavy rain","light thunderstorm","thunderstorm","heavy thunderstorm","ragged thunderstorm","thunderstorm with light drizzle","thunderstorm with drizzle","thunderstorm with heavy drizzle","light intensity drizzle","drizzle","heavy intensity drizzle","light intensity drizzle rain","drizzle rain","heavy intensity drizzle rain","shower rain and drizzle","heavy shower rain and drizzle","shower drizzle","light rain","moderate rain","heavy intensity rain","very heavy rain","extreme rain","freezing rain","light intensity shower rain","shower rain","heavy intensity shower rain","ragged shower rain","light snow","snow","heavy snow","sleet","light shower sleet","light rain and snow","rain and snow","light shower snow","shower snow","heavy shower snow","mist","smoke","haze","sand/dust whirls","fog","sand","dust","volcanic ash","squalls","tornado","clear sky","few clouds","scattered clouds","broken clouds","overcast clouds", ""];
   var kr = ["비","비","비","비","비","비","비","비","비","비","이슬비","이슬비","비","이슬비","비","비","비" ,"비","비","비","비","비","비","비","비","비","비","비","비","눈","눈","눈","눈","진눈깨비","비/눈","비/눈","눈","눈","눈","박무","연기","연무","모래/먼지 소용돌이","안개","모래","먼지","화산재","스콜","토네이도","맑음","구름 조금","구름 조금","구름 많음","흐림", ""];
   // console.log(en.length);
   try {
      var found = en.findIndex(elem => elem === input);
      console.log(found);
      if (found === -1){
         foundIndex = en.lengh-1;
         return kr[en.length-1];
      }
      else {
         foundIndex = found;
         console.log(setWeatherIndex(found));
         return kr[found];
      }
   }
   catch (error){
      console.error(error);
      foundIndex = en.length-1;
      return kr[en.length-1];
   }
}

function setWeatherIndex(index){
   var imgID = [0,0,0,0,0,0,0,0,0,0,17,17,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,3,3,1,1,1,4,5,6,7,4,8,9,10,11,11,12,13,14,15,16,17,18];
   // console.log(imgID.length);
   var imgs = ["img/rain.svg","img/snow.svg","img/snow.svg","img/snow.svg","img/fog.svg","img/fog.svg","img/fog.svg","img/dust.svg","img/sand.svg","img/ash.svg","img/rain.svg","img/tornado.svg","img/sunny.svg","img/littlecloudy.svg","img/cloudy.svg","img/cloudy.svg","img/cloudy.svg","img/light-rain.svg","img/error.svg"];
   // console.log(imgs.length);
   var rn = imgID[index];
   return imgs[rn];
}