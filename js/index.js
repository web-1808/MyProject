
/*var Mydate=new Date('2019-4-1');

var nowDate=new Date();
var offset=Mydate-nowDate;
console.log(offset);

var dat=offset/1000/60/60/24;
console.log(dat);
var days=Math.floor(dat);
//1.
console.log(days);
//2.
var num=1000*60*60*24;
var host=offset%num;
var h=Math.floor(host/3600000);
console.log(h);
//console.log(Mydate.toLocaleString());
//console.log(nowDate.toLocaleString()); 
var timerS=document.getElementsByClassName('timer')[0];
*/
new Vue({
    el:'.main',
    data:{
               mylist:[0,1,2,3,4,5,6,7,8],
                Mydata:[{uname:'张**0',phone:'150****90678',title:'以砍价',sd:'1000元'},
                {uname:'张**1',phone:'150****90678',title:'以砍价',sd:'1000元'},
                {uname:'刘**2',phone:'150****90678',title:'以砍价',sd:'1000元'},
                {uname:'张**3',phone:'150****90678',title:'以砍价',sd:'1000元'},{uname:'张**4',phone:'150****90678',title:'以砍价',sd:'1000元'},
                {uname:'张**5',phone:'150****90678',title:'以砍价',sd:'1000元'},{uname:'张**6',phone:'150****90678',title:'以砍价',sd:'1000元'},
                {uname:'张**7',phone:'150****90678',title:'以砍价',sd:'1000元'},{uname:'张**8',phone:'150****90678',title:'以砍价',sd:'1000元'}],
                selectedss:false,
                uname:'aaaa',
                show:false,
                isShow:false,
                curent:0,
                lists:['hong','gre','lan'],
                a:0
    },
    methods:{
        selectedls(){
            var nowState=!this.selectedss;
this.selectedss=nowState;
        },
        popup(){
            this.show=true;
        },
        showpopup(){
            this.isShow=true;
        },
        onChange(index){
            this.curent=index;
            console.log(index);
        }
    },
    mounted(){
//console.log(this.Mydata.slice(0,2));
localStorage.setItem('uname','aaa');
var unames=localStorage.getItem('uname');
console.log(unames);
this.$dialog.alert({
    message:'Content'
});
 var i=0;
setInterval(()=>{
   
    i++;
    if(i>this.lists.length-1){
        i=0;
    }
    this.a=i;
    console.log(i);
},3000)
    },
    created(){
        new QRCode(document.getElementById('qrcode'),'your content');
        var qrcode=new QRCode('qrcode',{
            text:'your content',
            width:256,
            height:256,
            colorDark:'#000',
            colorLight:'#fff',
correctLevel:QRCode.CorrectLevel.H
        });
        qrcode.clear();
        qrcode.makeCode('new content');
    }
});
/*
0 1 2 3 4 5
i,i+2 1,3       
 */

