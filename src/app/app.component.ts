import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_React';
  List= [new Pic("https://mirvdometvoem.ru/wp-content/uploads/2023/05/utro-v-sosnovom-lesu.jpg",
  "Утро в сосновом бору","Иван Иванович Шишкин","Россия"),
  new Pic("https://sun9-16.userapi.com/impg/UL2E9KNd0AB4QRArV05xuGvYki2X3q7oLMAwrA/iDbwmhk1FmE.jpg?size=898x673&quality=95&sign=046b843ea2c5138da60e93b661d38550&c_uniq_tag=mFXZkGCtLMH1d9sr8gulrlCqTK0t1xEEM0kV1WLbpJY&type=album",
  "Грачи прилетели","Алексей Кондратьевич Саврасов","Россия")]
  MouseClick(){
    
  }
}
class Pic{
  src="";
  name="";
  author="";
  date=Date.now();
  place="";
  constructor(src:string,name:string,author:string,place:string){
    this.src=src;
    this.author=author;
    this.name=name;
    this.place=place;
  }
}