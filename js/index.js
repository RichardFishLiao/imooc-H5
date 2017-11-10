var getElement=function(seletor){
    return document.querySelector(seletor);
}

var getAllElement = function(seletor){
    return document.querySelectorAll(seletor);
}

var getCls= function (element){
    return element.getAttribute('class');
}

var setCls = function(element,cls){
    return element.setAttribute('class',cls);
}

var addCls  = function(element,cls){
    var baseCls = getCls(element);
    if(baseCls.indexOf(cls) !=-1){
        setCls(element,baseCls+' '+cls);
    }
}

var delCls  = function(element,cls){
    var baseCls = getCls(element);
    if(baseCls.indexOf(cls) !=-1){
        setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,''));
    }
}
var screenAnimateElements = {
    '.screen-1':[
        '.screen-1_heading',
        '.screen-1_shadow',
        '.screen-1_phone',
    ],
    '.screen-2':[
        '.screen-2_heading',
        '.screen-2_subheading',
        '.screen-2_phone',
        '.screen-2_point_i_1',
        '.screen-2_point_i_2',
        '.screen-2_point_i_3',

    ],
    '.screen-3':[
        '.screen-3_heading',
        '.screen-3_subheading',
        '.screen-3_features',
        '.screen-3_phone',
    ]
}

var setScreenAnimateInit=function(seleClass){
    var screen=document.querySelector(seleClass);
    var animateElement = screenAnimateElements[seleClass];

    for(var i in animateElement){
        var element = document.querySelector(animateElement[i])
        console.log(0)
        var elementClass = element.getAttribute('class');
        element.setAttribute('class',elementClass + ' '+ animateElement[i].substr(1)+'_animate_init');
    }
}
var playScreenAnimateDone = function(seleClass){
    var screen=document.querySelector(seleClass);
    var animateElement = screenAnimateElements[seleClass];

    for(var i in animateElement){
        var element = document.querySelector(animateElement[i])
        console.log(1)
        var elementClass = element.getAttribute('class');
        element.setAttribute('class',elementClass.replace('_animate_init','_animate_done'));
    }

}


// 初始化init
window.onload=function(){
    for(k in screenAnimateElements){
        setScreenAnimateInit(k);
    }
}

// 滚动到哪就播放

window.onscroll = function(){
    var top = window.pageYOffset;

    if(top>80){
        addCls(getElement('.header'),'.header_status_back');
    }
    else{
        delCls(getElement('.header'),'.header_status_back');
    }
    
    if(top>1){
        playScreenAnimateDone('.screen-1')
    }
    if(top>800){
        playScreenAnimateDone('.screen-2')
    }
    if(top>1600){
        playScreenAnimateDone('.screen-3')
    }
    if(top>2400){
        playScreenAnimateDone('.screen-4')
    }
}