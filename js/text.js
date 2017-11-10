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
function setAnimate(seleClass){
    var screen=document.querySelector(seleClass);
    var animateElement = screenAnimateElements[seleClass];
    
    var isAnimateDone = false ;
    var isAnimateDone1 = false ;

    screen.onclick=function(){
        
        //初始状态
        if(isAnimateDone1 === false){
            for(var i in animateElement){
                var element = document.querySelector(animateElement[i])
                console.log(0)
                var elementClass = element.getAttribute('class');
                element.setAttribute('class',elementClass + ' '+ animateElement[i].substr(1)+'_animate_init');
            }
            isAnimateDone1 = true;
            return ; // 这个的意思是这个判断搞定之后就丢掉不要
        }//一开始就是进入这个状态
        //init 用于切换 init->done
        if(isAnimateDone === false){
            for(var i in animateElement){
                var element = document.querySelector(animateElement[i])
                console.log(1)
                var elementClass = element.getAttribute('class');
                element.setAttribute('class',elementClass.replace('_animate_init','_animate_done'));
            }
            isAnimateDone = true;
            return ;
        }
        //done 也是用于切换
        if(isAnimateDone === true){
            for(var i in animateElement){
                var element = document.querySelector(animateElement[i])
                console.log(2)
                var elementClass = element.getAttribute('class');
                element.setAttribute('class',elementClass.replace('_animate_done','_animate_init'));
            }
            isAnimateDone = false;
            return ;
        }
        
    }
}

setAnimate('.screen-1');
setAnimate('.screen-2');
setAnimate('.screen-3');
setAnimate('.screen-4');
setAnimate('.screen-5');
setAnimate('.screen-6');

