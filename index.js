var songlist=[
  {
    "name": "呓语",
    "artist": "毛不易",
    "hash": "e47173fb6b076601bdd8ce54d2d36b77",
    "album_id": "34631159"
},

  {
    "name": "水星记",
    "artist": "郭顶",
    "hash": "a72fd1726c82710619cd91789f81071b",
    "album_id": "1823892"
},
  {
  "name": "罗生门(Follow)",
  "artist": "Wzi_H张子豪、梨冻紫",
  "hash": "a3294ef23a6fee092bc7a72269730aae",
  "album_id": "79616613"
  },
  {
    "name": "像我这样的人 (Live)",
    "artist": "毛不易、徐航",
    "hash": "58ea7c57c46e1271402674e1730f0fcc",
    "album_id": "8810910"
},
  {
    "name": "最后一页",
    "artist": "江语晨",
    "hash": "ef053996094a323b42c35195e9781a30",
    "album_id": "1596655"
  },
  {
    "name": "偏爱 (Live)",
    "artist": "张芸京",
    "hash": "e3887a731f8de5d9fb4b0d2e71567d94",
    "album_id": "80705518"
  },
{
  "name": "迷人的危险 (男女对唱版)",
  "artist": "张颖轩、范茹",
  "hash": "46c196781cd00b0f125b433e9f016370",
  "album_id": ""
},
{
  "name": "红色高跟鞋 (心兮变速版)",
  "artist": "蔡健雅",
  "hash": "17405b3059ca9c5eda48c63dda4e3b2d",
  "album_id": ""
},
{
  "name": "悬溺",
  "artist": "葛东琪",
  "hash": "666484e904a54b1e62c9fbfdbe6e2563",
  "album_id": "23773597"
},
{
  "name": "虚拟",
  "artist": "陈粒",
  "hash": "aef0740270fe89918f07807c8d669fb7",
  "album_id": "1749208"
},
{
  "name": "小半",
  "artist": "陈粒",
  "hash": "afea9ffe5d7f0ef0874119a363820d33",
  "album_id": "1749208"
},
{
  "name": "小幸运 (Live)",
  "artist": "薛之谦、欧阳娜娜",
  "hash": "1616c0383a01c80738065697d8548193",
  "album_id": "1968472"
},
{
  type:"netease",
  id:"1974443814",
  name:"我记得",
  artist:"赵雷",
  album:"署前街少年",
},
{
  type:"netease",
  id:"436346833",
  name:"凄美地",
  artist:"郭顶",
  album:"飞行器的执行周期",
},
{
  type:"netease",
  id:"548885986",
  name:"落空",
  artist:"印子月",
  album:"印子月歌曲集",
},
{
  type:"netease",
  id:"95475",
  name:"老人与海",
  artist:"海鸣威 / 吴琼",
  album:"Dance Dance Dance",
},
{
  type:"netease",
  id:"1381755293",
  name:"山楂树之恋",
  artist:"程佳佳",
  album:"山楂树之恋 (完整版)",
},
{
  type:"netease",
  id:"454828906",
  name:"大海",
  artist:"张雨生",
  album:"白羽毛之恋 华语典藏情歌 Vol.2",
},
{
  type:"netease",
  id:"422252223",
  name:"月半小夜曲 (Live)",
  artist:"陈慧娴 / 李克勤",
  album:"Priscilla-ism 2016 Live",
},
{
  type:"netease",
  id:"399354374",
  name:"江南/一千年以后(Live)",
  artist:"林俊杰",
  album:"江苏卫视 2016 跨年演唱会",
},
{
  type:"netease",
  id:"1474414194",
  name:"当你",
  artist:"王心凌",
  album:"My! Cyndi!",
},
{
  type:"netease",
  id:"865632948",
  name:"若把你",
  artist:"Kirsty刘瑾睿",
  album:"若把你",
},
{
  type:"netease",
  id:"2049512697",
  name:"向云端",
  artist:"小霞 / 海洋Bo",
  album:"向云端",
},
{
  type:"netease",
  id:"1951069525",
  name:"精卫",
  artist:"30年前,50年后",
  album:"丧失年轻，勿失年华",
},
{
  type:"netease",
  id:"475479888",
  name:"在你的身边",
  artist:"盛哲",
  album:"在你的身边",
},
{
  type:"netease",
  id:"1330348068",
  name:"起风了",
  artist:"买辣椒也用券",
  album:"起风了",
},
{
  type:"netease",
  id:"1359356908",
  name:"晚安",
  artist:"颜人中",
  album:"晚安",
},
{
  type:"netease",
  id:"28563317",
  name:"阴天快乐",
  artist:"陈奕迅",
  album:"Rice & Shine",
},
{
  type:"netease",
  id:"29759733",
  name:"可乐",
  artist:"赵紫骅",
  album:"赵浴辰原创demo精选",
}

/*
{
  type:"netease",
  id:"",
  name:"",
  artist:"",
  album:"",
},*/

/*
{
  type:"netease",
  id:"441491828",
  name:"水星记",
  artist:"郭顶",
  album:"飞行器的执行周期",
}*/

];
var nowsong=0;
var audio=document.querySelector("#audio");
var LRC=null;
var getter=null;
var playbtn=document.querySelector(".playbtn");
var range=document.querySelector("input[type=range]");

function play(id){
  nowsong=id;
  var aq=document.querySelector(".playlist li.act");
  if(aq){
    aq.classList.remove('act');
  }
  document.querySelectorAll('.playlist li')[id].classList.add('act');
  if(getter){
    getter.abort();
    getter=null;
  } 
  ref();
  if(songlist[id].type=='netease'){
    initPlayer('netease',songlist[id].id,songlist[id].album);
  }else if(songlist[id].type=='url'){
    initPlayer('url',songlist[id].title,songlist[id].artist,songlist[id].album,songlist[id].img,songlist[id].url,songlist[id].lrc??'');
  }else{
    initPlayer('kugou',songlist[id].hash,songlist[id].album_id);
  }
}

function initPlayer(k,m,n,o,p,q,r){
  if(k=='netease'){
    getter=get('https://api.gumengya.com/Api/Netease?format=json&id='+m,function(res){
      getter=null;
      if(res.code==200){
        var song=res.data;
        document.querySelector("#album_img").src= document.querySelector("#bg_img").src=song.pic;
        document.querySelector("#album_name").innerText=n;
        document.querySelector("#singer").innerText=song.author;
        document.querySelector("#title").innerText=song.title;
        audio.src=song.url;
        LRC=kugou.parseLrc(song.lrc);
      }else{
        alert('歌曲获取出错！');
        document.querySelector(".next").click();
      }
    },function(){
      getter=null;
      alert('歌曲获取出错！');
      document.querySelector(".next").click();
    })
  }else if(k=='url'){
    document.querySelector("#album_img").src= document.querySelector("#bg_img").src=p;
    document.querySelector("#album_name").innerText=o;
    document.querySelector("#singer").innerText=n;
    document.querySelector("#title").innerText=m;
    audio.src=q;
    LRC=kugou.parseLrc(r);
  }else{
    getter=kugou.getSongDetails(m,n,function(song){
      getter=null;
      if(song.error){
        alert('歌曲获取出错！');
        document.querySelector(".next").click();
        return;
      }
      // 修复https加载http的问题
      document.querySelector("#album_img").src= document.querySelector("#bg_img").src=song.img.replace('http://','https://');
      document.querySelector("#album_name").innerText=song.album;
      document.querySelector("#singer").innerText=song.artist;
      document.querySelector("#title").innerText=song.songname
      if(song.ispriviage){
        document.querySelector("#title").innerHTML+='<span class="vip">VIP</span>';
      }
      audio.src=song.url;
      LRC=song.lrc;
    })
  }
}


function get(url,cb,err){
  var xhr=new XMLHttpRequest();
  xhr.open('GET',url);
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
      cb(JSON.parse(xhr.responseText));
    }
  }
  xhr.onerror=err;
  xhr.send();
  return {
    abort:function(){
      xhr.abort();
    }
  }
}

function ref(){
  document.querySelector("#album_img").src= document.querySelector("#bg_img").src='';
  document.querySelector("#album_img").style.opacity= document.querySelector("#bg_img").style.opacity='';
  document.querySelector("#album_name").innerHTML='--';
  document.querySelector("#singer").innerHTML='--';
  document.querySelector("#title").innerHTML='获取中...';
}
document.querySelector("#album_img").onload=document.querySelector("#bg_img").onload=function(){
  this.style.opacity='1';
}

audio.oncanplay=function(){
  try{audio.play();}catch(e){
    console.log('Auto-Play is prevent.')
  }
}
audio.onplay=function(){
  playbtn.className='bi bi-pause playbtn';
  playbtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5"/></svg>'
  document.querySelector(".player").classList.add('play')
}
audio.onpause=function(){
  playbtn.className='bi bi-play-fill playbtn';
  playbtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>'
  document.querySelector(".player").classList.remove('play')
}
audio.ontimeupdate=function(){
  document.querySelector(".time").innerHTML=getFormatTime(audio.currentTime) + '/' + getFormatTime(audio.duration);
  range.max=audio.duration;
  if(!window.___) range.value=audio.currentTime;
  var s='';
  for (var k in LRC) {
    if (parseFloat(k) > audio.currentTime) {
      document.querySelector(".lrc").innerHTML=s;
      s=-1;
      break;
    }
    s=LRC[k];
  }
  if(s!=-1){
    document.querySelector(".lrc").innerHTML=s;
  }
}
audio.onended=function(){
  var isLoop=document.querySelector(".item.isrepeat").classList.contains('act');
  if(isLoop){
    audio.currentTime=0;
    audio.play();
  }else{
    document.querySelector(".next").click();
  }
}
function getFormatTime(s) {
  var m = Math.floor(s / 60);
  if (m < 10) m = '0' + m;
  var s2 = parseInt(s % 60);
  if (s2 < 10) s2 = '0' + s2;
  return m + ':' + s2;
}

playbtn.onclick=function(){
  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
  }
}
range.onchange=function(){
  audio.currentTime=range.value;
}
range.onmousedown=function(){
  window.___=true;
  document.onmouseup=function(){
    window.___=false;
    document.onmouseup=null;
  }
}

// touch
range.addEventListener('touchstart',function(){
  window.___=true;
  document.addEventListener('touchend',function(){
    window.___=false;
    document.ontouchend=null;
  },{
    passive:false
  });
},{
  passive:false
})
document.querySelector(".last").onclick=function(){
  if(nowsong==-1){
    rplay();
    return;
  } 
  play(nowsong-1<0?songlist.length-1:nowsong-1);
}
document.querySelector(".next").onclick=function(){
  if(nowsong==-1){
    rplay();
    return;
  } 
  play(nowsong+1>songlist.length-1?0:nowsong+1);
}

function rplay(){
  play(Math.floor(Math.random()*songlist.length));
}
var pl=document.querySelector(".playlist ul");
songlist.forEach(function(r,i){
  var li=document.createElement('li');
  li.innerHTML=i+' '+r.name+' - '+r.artist;
  li.onclick=function(){
    play(i);
  }
  pl.append(li);
})


document.querySelector(".item.playlistbtn").onclick=function(e){
  e.stopPropagation();
  document.querySelector(".playlist").style.display='block';
  var actLi=document.querySelector(".playlist li.act");
  actLi&&actLi.scrollIntoView({
    block:"center"
  });
}
document.querySelector(".item.randombtn").onclick=rplay;
document.querySelector(".item.isrepeat").onclick=function(){
  if(this.classList.contains('act')){
    this.classList.remove('act');
  }else{
    this.classList.add('act');
  }
}

document.onclick=function(){
  document.querySelector(".playlist").style.display='';
};

/*
?type=index&i=<歌曲歌单索引> 播放歌单内歌曲
?type=kugou&hash=<hash>&album_id=<album_id> 从酷狗音乐获取歌曲播放
?type=netease&id=<id> 从网易云音乐获取歌曲播放

当type!=index时，会判断歌曲是否存在歌单中
 */
(function(){
  var us=new URL(location.href).searchParams;
  if(us.get('type')=='index'){
    var i=parseInt(us.get('i'));
    i&&!isNaN(i)&&i>=0&&i<songlist.length?play(i):rplay();
  }else if(us.get('type')=='kugou'){
    var h=us.get('hash');
    var a=us.get('album_id');
    if(!h||!a){
      rplay();
      return;
    }
    for(var i=0;i<songlist.length;i++){
      if(songlist[i].hash==h){
        play(i);
        return;
      }
    }
    nowsong=-1;
    initPlayer('kugou',h,a);
  }else if(us.get('type')=='netease'){
    var id=us.get('id');
    if(!id){
      rplay();
      return;
    }
    for(var i=0;i<songlist.length;i++){
      if(songlist[i].id==id){
        play(i);
        return;
      }
    }
    nowsong=-1;
    initPlayer('netease',id,'');
  }else if(us.get('type')=='url'){
    var url=us.get('url');
    var title=us.get('title');
    var artist=us.get('artist');
    var album=us.get('album');
    var img=us.get('img');
    if(!url){
      rplay();
      return;
    }
    initPlayer('url',title,artist,album,img,url);
  }else{
    rplay();
  }
})()
