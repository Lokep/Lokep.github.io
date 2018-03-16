/**
 * Created by yeebee on 2018/3/14.
 */
window.onload=function () {

    /*表单信息*/
    // var userName = document.getElementById('userName');
    // var phone = document.getElementById('phone');
    // var companyName = document.getElementById('companyName');
    // var position = document.getElementById('position');

    /*选项部分*/
    // var performance = document.getElementById('performance');
    // var creativity = document.getElementById('creativity');
    // var cost = document.getElementById('cost');
    // var affect = document.getElementById('affect');
    // var practicability = document.getElementById('practicability');
    // var profession = document.getElementById('profession');
    // var stability = document.getElementById('stability');
    // var hommization = document.getElementById('hommization');
    // var content = document.getElementById('content');

    /*想法填写部分*/
    var thought = document.getElementById('thought');

    /*构造函数们*/

    var checkPhone = new CheckPhone('phone');

    var complete = new Complete('phone');
    var checkUser = new Complete('userName');
    var checkCompany = new Complete('companyName');

    var userInfo = ['userName','phone','companyName','position'];
    var _classList = ['performance','creativity','cost','affect','operation','practicability','profession','stability','hommization','content'];
    var finish = new Init(_classList);


    /*ajax调取接口部分*/

    var Submit = document.getElementById('dis_submit');
    Submit.onclick = function () {

        var cc = CheckChoose(_classList,'dis_thought_detail');

        console.log(cc);

        var ct = CheckThought('thought');

        console.log(ct);
        if(cc.length<10||ct===''){
            return false
        }else{

            var Info = InfoCollection(userInfo,cc,ct);
            console.log(Info);

            $.ajax({
                //请求方式
                type:'POST',
                //发送请求的地址
                url:'http://javaapi.yeebee.com.cn/feedback/feedback',
                //服务器返回的数据类型
                dataType:'json',
                //发送到服务器的数据，对象必须为key/value的格式，jquery会自动转换为字符串格式
                data:{
                    name:Info.name,
                    phone:Info.phone,
                    company:Info.company,
                    position:Info.position,
                    performance:Info.performance,//0-3，由差到好，3最好。一下相同
                    innovation:Info.innovation,
                    priceRatio:Info.priceRatio,
                    visualEffect:Info.visualEffect,
                    executable:Info.executable,
                    practicability:Info.executable,
                    technical:Info.technical,
                    stability:Info.stability,
                    humanitarian:Info.humanitarian,
                    content:Info.content,
                    advice:Info.advice
                },
                // success:function(data){
                //     console.log(data);
                // },
                // error:function(err){
                //     console.log(err);
                // }
            }).then(function (res) {
                console.log(res)
            });
        }

    };














};

/*表单部分失去焦点即判断是否为空*/
//表单信息必填部分
function Complete(el) {
    this.id = document.getElementById(el);
    this.id.addEventListener('blur',function () {
        var val = this.value.trim();
        (!val)?(this.parentNode.classList.add('empty')):(this.parentNode.classList.remove('empty'));
    },false);
}
//手机号码的正则
function CheckPhone(el) {
    var Rex = /^1[3578]{1}[0-9]{9}/;
    this.id = document.getElementById(el);
    this.id.addEventListener('blur',function () {
        (!Rex.test(this.value.trim()))?(alert('ur phone number is wrong')):'';
    },false);
}

//过滤字符串中误写入的空格
String.prototype.trim = function () {
    return this.replace(/\s/g, '');
};



/*选项部分*/
function Init(arr) {
    for(var i=0;i<arr.length;i++){
        this.Choose(arr[i]);
    }
}

Init.prototype.Choose = function(el) {
    var cl = document.getElementsByClassName(el);
    for(var n=0;n<cl.length;n++){
        cl[n].onclick = function () {
            for(var m=0;m<cl.length;m++){

                cl[m].children[0].classList.remove('checked');
            }
            this.children[0].classList.add('checked');
        }
    }
};

/*在点击提交按钮时，
*    表单部分已经在填写时已判断是否为空；
*    所以只需判断 选项 部分 和 建议 部分
* */

function CheckChoose(arr,parent){
    var res = [],choose=[];
    var _parent = document.getElementsByClassName(parent);
    for(var i=0;i<arr.length;i++){
        var cl = document.getElementsByClassName(arr[i]);
        for(var n=0;n<cl.length;n++){
            res.push(cl[n].children[0].className);
        }
    }

    for(var m=0;m<res.length;m+=4){
        var index = m/4;
        var list = res.slice(m,m+4);
        (list.indexOf('checked')!==-1)?(_parent[index].classList.remove('empty'),choose.push(list.indexOf('checked'))):_parent[index].classList.add('empty');
    }
    return choose;
}

/*判断想法是否为空*/
function CheckThought(el) {
    var id = document.getElementById(el);
    (id.value==='')?id.parentNode.classList.add('empty'):(id.parentNode.classList.remove('empty'));
    return id.value;
}

/*收集数据*/
function InfoCollection(userInfo,choose,thought) {
    return Info = {
        name : document.getElementById(userInfo[0]).value,
        phone:document.getElementById(userInfo[1]).value,
        company:document.getElementById(userInfo[2]).value,
        position:document.getElementById(userInfo[3]).value,
        performance:choose[0],
        innovation:choose[1],
        priceRatio:choose[2],
        visualEffect:choose[3],
        executable:choose[4],
        practicability:choose[5],
        technical:choose[6],
        stability:choose[7],
        humanitarian:choose[8],
        content:choose[9],
        advice:thought
    }
}