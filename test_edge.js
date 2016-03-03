/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'background',
                display: 'block',
                type: 'image',
                tag: 'img',
                rect: ['0px', '-19px','127.6%','105.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"First/background.png",'0%','0%','100%','auto']
            },
            {
                id: 'Rectangle',
                display: 'block',
                type: 'rect',
                rect: ['69px', '409px','100%','22.5%','auto', 'auto'],
                clip: ['rect(0px 500px 119px 0px)'],
                fill: ["rgba(88,103,136,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'cloud1',
                display: 'block',
                type: 'image',
                rect: ['304px', '212px','21.2%','12.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"First/cloud1.png",'0px','0px']
            },
            {
                id: 'cloud2',
                display: 'block',
                type: 'image',
                rect: ['24px', '193px','28.4%','12.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"First/cloud.png",'0px','0px']
            },
            {
                id: 'super_father',
                display: 'block',
                type: 'image',
                tag: 'img',
                rect: ['503px', '357px','59.2%','50.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"First/super_father.png",'0px','0px']
            },
            {
                id: 'super_kid',
                display: 'block',
                type: 'image',
                tag: 'img',
                rect: ['626px', '223px','24.4%','22.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"First/super_kid.png",'0px','0px']
            },
            {
                id: 'words',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['4.7%', '61%','81.7%','14%','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"First/words.png",'0px','0px'],
                filter: [0, 0, 0.92, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'bg1',
                display: 'block',
                type: 'image',
                tag: 'img',
                rect: ['444px', '1px','101.8%','85.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Third/bg1.jpg",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 5, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'background3',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Second/background.jpg",'0px','0px']
            },
            {
                id: 'year2',
                display: 'none',
                type: 'image',
                rect: ['1px', '6px','135px','235px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Second/year.png",'0px','0px']
            },
            {
                id: 'bg1_word',
                display: 'block',
                type: 'image',
                tag: 'img',
                rect: ['-1.8%', '-27.6%','101.8%','27.6%','auto', 'auto'],
                clip: ['rect(0px 452px 146px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Third/bg1_word.jpg",'0px','0px']
            },
            {
                id: 'bg2',
                display: 'block',
                type: 'image',
                tag: 'img',
                rect: ['446px', '0px','101.8%','99.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Third/bg2.jpg",'0px','0px']
            },
            {
                id: 'bg2_word',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['7%', '13.6%','101.8%','29.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Third/bg2_word.jpg",'0px','0px']
            },
            {
                id: 'bg3',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['341px', '407px','100.9%','99.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Third/bg3.jpg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'bg3_word',
                display: 'block',
                type: 'image',
                tag: 'img',
                rect: ['99.8%', '-28.9%','101.8%','28%','auto', 'auto'],
                clip: ['rect(0px 452px 148px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Third/bg3_word.jpg",'0px','0px']
            },
            {
                id: 'bg4',
                display: 'block',
                type: 'image',
                tag: 'img',
                rect: ['446px', '0px','99.8%','99.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Third/bg4.jpg",'0px','0px']
            },
            {
                id: 'bg4_word2',
                display: 'block',
                type: 'image',
                tag: 'img',
                rect: ['-102.2%', '0.4%','101.8%','27.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Third/bg4_word.jpg",'0px','0px']
            },
            {
                id: 'background4',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['446px', '0px','99.8%','99.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Fourth/background.jpg",'0px','0px']
            },
            {
                id: 'word',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['105px', '-219px','52.9%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Fourth/word.png",'0px','0px']
            },
            {
                id: 'plane1',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['423px', '519px','186px','129px','auto', 'auto'],
                autoOrient: true,
                fill: ["rgba(0,0,0,0)",im+"Fourth/plane1.png",'0px','0px']
            },
            {
                id: 'plane2',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['-174px', '538px','30.4%','19.4%','auto', 'auto'],
                autoOrient: true,
                fill: ["rgba(0,0,0,0)",im+"Fourth/plane2.png",'0px','0px']
            },
            {
                id: 'touxiang',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['124px', '69px','200px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"touxiang.png",'0px','0px']
            },
            {
                id: 'background5',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['-1669px', '-139px','230.6%','129.1%','auto', 'auto'],
                clip: ['rect(0px 887px 683px 108px)'],
                fill: ["rgba(0,0,0,0)",im+"Last/background.jpg",'0px','0px'],
                transform: [[],[],[],['0.6674','0.80343']]
            },
            {
                id: 'word2',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['8.8%', '-0.9%','81.8%','65.4%','auto', 'auto'],
                clip: ['rect(0px 363px 346px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Last/word.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['0%', '73.4%','auto','auto','auto', 'auto'],
                text: "——Made By 信鑫<br>QQ:45808948<br>Wechat:xx-software",
                font: ['Tahoma, Geneva, sans-serif', 25, "rgba(241,209,209,1.00)", "500", "none", ""]
            },
            {
                id: 'icon_left',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['87.2%', '47.3%','10%','5.3%','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"icon_up.png",'0px','0px'],
                transform: [[],['90']]
            },
            {
                id: 'icon_right',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['87.2%', '47.3%','10%','5.3%','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"icon_up.png",'0px','0px'],
                transform: [[],['90']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_bg1_word}": [
                ["style", "top", '-27.22%'],
                ["style", "background-size", [100.4,100.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "clip", [4,446,146,4], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '-5.23%'],
                ["transform", "scaleX", '0.91646']
            ],
            "${_bg3}": [
                ["style", "top", '354px'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "height", '131.95%'],
                ["style", "opacity", '0'],
                ["style", "left", '302px'],
                ["style", "width", '132.89%']
            ],
            "${_cloud2}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '24px'],
                ["style", "top", '192px']
            ],
            "${_super_kid}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '626px'],
                ["style", "top", '223px']
            ],
            "${_plane1}": [
                ["motion", "location", '515.7617px 583.9287px'],
                ["style", "opacity", '0.41880300641059875'],
                ["style", "display", 'none']
            ],
            "${_word2}": [
                ["style", "top", '8.88%'],
                ["transform", "scaleX", '1.27851'],
                ["transform", "scaleY", '1.27851'],
                ["style", "clip", [0,363,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none'],
                ["style", "height", '65.41%'],
                ["style", "left", '7.43%'],
                ["style", "width", '81.76%']
            ],
            "${_background4}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '101.7%'],
                ["style", "opacity", '0'],
                ["style", "left", '446px'],
                ["style", "width", '100.34%']
            ],
            "${_bg1}": [
                ["style", "-webkit-transform-origin", [50,54], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["style", "left", '440px'],
                ["style", "width", '99.6%'],
                ["style", "top", '12px'],
                ["transform", "scaleY", '1.05'],
                ["style", "display", 'block'],
                ["style", "height", '95.27%'],
                ["subproperty", "filter.blur", '5px'],
                ["style", "clip", 0, {valueTemplate:'auto'} ],
                ["subproperty", "filter.saturate", '0.8']
            ],
            "${_Rectangle}": [
                ["style", "top", '409px'],
                ["transform", "scaleY", '1.0042'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '1.276'],
                ["style", "clip", [0,500,119,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '62px']
            ],
            "${_icon_left}": [
                ["style", "top", '51.3%'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '74.32%']
            ],
            "${_bg2}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '99.81%'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.2820509970188141'],
                ["style", "left", '445px'],
                ["style", "display", 'block']
            ],
            "${_bg2_word}": [
                ["style", "top", '13.61%'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '0%'],
                ["style", "clip", 0, {valueTemplate:'auto'} ]
            ],
            "${_super_father}": [
                ["style", "top", '357px'],
                ["transform", "rotateZ", '1deg'],
                ["style", "display", 'block'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '503px'],
                ["style", "opacity", '0']
            ],
            "${_cloud1}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '249px'],
                ["style", "top", '209px']
            ],
            "${_touxiang}": [
                ["style", "top", '88px'],
                ["style", "opacity", '0'],
                ["style", "left", '124px'],
                ["style", "display", 'none']
            ],
            "${_year2}": [
                ["style", "top", '6px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '1px'],
                ["transform", "scaleX", '1']
            ],
            "${_bg3_word}": [
                ["style", "top", '-28.54%'],
                ["style", "left", '99.55%'],
                ["style", "clip", [2,342,182,12], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["subproperty", "filter.drop-shadow.offsetV", '-4px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_background5}": [
                ["style", "top", '-139px'],
                ["transform", "scaleY", '0.80343'],
                ["style", "left", '-1669px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.02'],
                ["style", "clip", [22,887,683,108], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0.6674']
            ],
            "${_background}": [
                ["style", "top", '-3px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '105.29%'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "width", '132.56%']
            ],
            "${_bg4}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '99.62%'],
                ["style", "opacity", '0'],
                ["style", "left", '443px'],
                ["style", "width", '99.78%']
            ],
            "${_background3}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '100%'],
                ["style", "opacity", '0'],
                ["style", "left", '444px'],
                ["style", "width", '100%']
            ],
            "${_bg4_word2}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["style", "top", '0.19%'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '-101.58%'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(241,209,209,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '50.9%'],
                ["style", "font-size", '20px'],
                ["style", "top", '79.96%'],
                ["style", "height", '90px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "display", 'none'],
                ["style", "width", 'auto']
            ],
            "${_words}": [
                ["subproperty", "filter.contrast", '0.92'],
                ["subproperty", "filter.hue-rotate", '-4deg'],
                ["style", "opacity", '0.025640999898314476'],
                ["style", "left", '4.73%'],
                ["style", "width", '81.65%'],
                ["style", "top", '61.76%'],
                ["transform", "scaleY", '1.58667'],
                ["style", "display", 'none'],
                ["style", "height", '14.03%'],
                ["subproperty", "filter.saturate", '0.2'],
                ["subproperty", "filter.drop-shadow.offsetV", '-4px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(251,239,223,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_word}": [
                ["motion", "location", '222.5003px -101.5px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "height", 'auto'],
                ["style", "width", '52.93%']
            ],
            "${_icon_right}": [
                ["style", "top", '51.3%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '3.83%']
            ],
            "${_plane2}": [
                ["motion", "location", '-106.7378px 588.78115px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.5128210186958313'],
                ["style", "height", '19.37%'],
                ["style", "width", '30.41%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 41021,
            autoPlay: true,
            timeline: [
                { id: "eid791", tween: [ "style", "${_icon_right}", "left", '3.83%', { fromValue: '3.83%'}], position: 10500, duration: 0 },
                { id: "eid291", tween: [ "style", "${_background3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid292", tween: [ "style", "${_background3}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid323", tween: [ "style", "${_background3}", "display", 'block', { fromValue: 'block'}], position: 7687, duration: 0, easing: "easeInQuad" },
                { id: "eid364", tween: [ "style", "${_background3}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInQuad" },
                { id: "eid536", tween: [ "style", "${_background3}", "display", 'none', { fromValue: 'none'}], position: 25000, duration: 0, easing: "easeInQuad" },
                { id: "eid646", tween: [ "style", "${_touxiang}", "display", 'none', { fromValue: 'none'}], position: 31500, duration: 0, easing: "easeInOutElastic" },
                { id: "eid723", tween: [ "style", "${_touxiang}", "display", 'block', { fromValue: 'none'}], position: 31750, duration: 0, easing: "easeInQuad" },
                { id: "eid418", tween: [ "style", "${_bg3}", "top", '-265px', { fromValue: '354px'}], position: 16499, duration: 1984, easing: "easeInQuad" },
                { id: "eid445", tween: [ "style", "${_bg3}", "top", '-264px', { fromValue: '-265px'}], position: 20495, duration: 0, easing: "easeInQuad" },
                { id: "eid867", tween: [ "style", "${_bg4_word2}", "display", 'block', { fromValue: 'block'}], position: 22249, duration: 0, easing: "easeInQuad" },
                { id: "eid638", tween: [ "style", "${_bg4_word2}", "display", 'none', { fromValue: 'block'}], position: 25999, duration: 0, easing: "easeInQuad" },
                { id: "eid605", tween: [ "style", "${_bg1_word}", "opacity", '1', { fromValue: '0'}], position: 12980, duration: 1770, easing: "easeInQuad" },
                { id: "eid608", tween: [ "style", "${_bg1_word}", "opacity", '0', { fromValue: '1'}], position: 14750, duration: 750, easing: "easeInQuad" },
                { id: "eid893", tween: [ "style", "${_background}", "top", '-3px', { fromValue: '-3px'}], position: 0, duration: 0, easing: "easeInElastic" },
                { id: "eid262", tween: [ "style", "${_Rectangle}", "left", '62px', { fromValue: '62px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid603", tween: [ "style", "${_bg1_word}", "top", '1.13%', { fromValue: '-27.22%'}], position: 12980, duration: 1770, easing: "easeInQuad" },
                { id: "eid607", tween: [ "style", "${_bg1_word}", "top", '-30.43%', { fromValue: '1.13%'}], position: 14750, duration: 750, easing: "easeInQuad" },
                { id: "eid566", tween: [ "style", "${_plane2}", "opacity", '1', { fromValue: '0.5128210186958313'}], position: 24249, duration: 6000, easing: "easeInQuad" },
                { id: "eid865", tween: [ "style", "${_bg2_word}", "display", 'block', { fromValue: 'none'}], position: 15500, duration: 0, easing: "easeInQuad" },
                { id: "eid531", tween: [ "style", "${_bg2_word}", "display", 'none', { fromValue: 'block'}], position: 17999, duration: 0, easing: "easeInQuad" },
                { id: "eid582", tween: [ "style", "${_bg3_word}", "top", '1.7%', { fromValue: '-28.54%'}], position: 17500, duration: 2995, easing: "easeInQuad" },
                { id: "eid575", tween: [ "style", "${_plane1}", "opacity", '1', { fromValue: '0.41880300641059875'}], position: 24249, duration: 3500, easing: "easeInQuad" },
                { id: "eid299", tween: [ "style", "${_background3}", "left", '0px', { fromValue: '444px'}], position: 7000, duration: 687, easing: "easeInQuad" },
                { id: "eid358", tween: [ "style", "${_background3}", "left", '-444px', { fromValue: '0px'}], position: 10750, duration: 2250, easing: "easeInQuad" },
                { id: "eid737", tween: [ "color", "${_Text}", "color", 'rgba(236,80,80,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,209,209,1)'}], position: 39250, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid300", tween: [ "style", "${_background3}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 687, easing: "easeInQuad" },
                { id: "eid350", tween: [ "style", "${_background3}", "opacity", '0', { fromValue: '1'}], position: 10750, duration: 2250, easing: "easeInQuad" },
                { id: "eid288", tween: [ "style", "${_icon_left}", "left", '72.3%', { fromValue: '74.32%'}], position: 6000, duration: 500 },
                { id: "eid289", tween: [ "style", "${_icon_left}", "left", '77.03%', { fromValue: '72.3%'}], position: 6500, duration: 500 },
                { id: "eid806", tween: [ "style", "${_icon_left}", "left", '84.23%', { fromValue: '77.03%'}], position: 10500, duration: 0 },
                { id: "eid855", tween: [ "style", "${_icon_left}", "left", '79.05%', { fromValue: '85.78%'}], position: 24249, duration: 0, easing: "easeInQuad" },
                { id: "eid854", tween: [ "style", "${_icon_left}", "left", '76.13%', { fromValue: '79.05%'}], position: 33000, duration: 0, easing: "easeInQuad" },
                { id: "eid650", tween: [ "style", "${_touxiang}", "opacity", '1', { fromValue: '0'}], position: 31500, duration: 1500, easing: "easeInQuad" },
                { id: "eid684", tween: [ "style", "${_touxiang}", "opacity", '0.025641025641026', { fromValue: '1'}], position: 33000, duration: 2250, easing: "easeInQuad" },
                { id: "eid912", tween: [ "style", "${_background5}", "display", 'block', { fromValue: 'none'}], position: 34000, duration: 0 },
                { id: "eid356", tween: [ "style", "${_year2}", "left", '-150px', { fromValue: '1px'}], position: 10750, duration: 2250, easing: "easeInQuad" },
                { id: "eid752", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 39250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid428", tween: [ "style", "${_bg3}", "opacity", '1', { fromValue: '0'}], position: 16499, duration: 1984, easing: "easeInQuad" },
                { id: "eid446", tween: [ "style", "${_bg3}", "opacity", '0', { fromValue: '1'}], position: 20495, duration: 1248, easing: "easeInQuad" },
                { id: "eid510", tween: [ "transform", "${_bg4_word2}", "scaleY", '2', { fromValue: '1'}], position: 24249, duration: 1750, easing: "easeInQuad" },
                { id: "eid151", tween: [ "style", "${_cloud2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeInQuad" },
                { id: "eid247", tween: [ "style", "${_cloud2}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 687, easing: "easeInQuad" },
                { id: "eid576", tween: [ "style", "${_background4}", "height", '101.7%', { fromValue: '101.7%'}], position: 25749, duration: 0, easing: "easeInQuad" },
                { id: "eid522", tween: [ "style", "${_bg4}", "left", '0px', { fromValue: '443px'}], position: 20999, duration: 1250, easing: "easeInQuad" },
                { id: "eid712", tween: [ "style", "${_word2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutElastic" },
                { id: "eid728", tween: [ "style", "${_word2}", "display", 'block', { fromValue: 'none'}], position: 35226, duration: 0, easing: "easeInQuad" },
                { id: "eid317", tween: [ "style", "${_cloud2}", "display", 'none', { fromValue: 'block'}], position: 7687, duration: 0, easing: "easeInQuad" },
                { id: "eid540", tween: [ "style", "${_cloud2}", "display", 'none', { fromValue: 'none'}], position: 25000, duration: 0, easing: "easeInQuad" },
                { id: "eid253", tween: [ "style", "${_super_kid}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 927, easing: "easeOutQuart" },
                { id: "eid226", tween: [ "style", "${_super_kid}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 687 },
                { id: "eid936", tween: [ "transform", "${_word2}", "scaleY", '1.27851', { fromValue: '1.27851'}], position: 39250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid862", tween: [ "transform", "${_bg1_word}", "scaleX", '0.91646', { fromValue: '0.91646'}], position: 12980, duration: 0, easing: "easeInQuad" },
                { id: "eid550", tween: [ "style", "${_background4}", "opacity", '1', { fromValue: '0'}], position: 24249, duration: 1500 },
                { id: "eid694", tween: [ "style", "${_background4}", "opacity", '0', { fromValue: '1'}], position: 33274, duration: 1976, easing: "easeInQuad" },
                { id: "eid399", tween: [ "style", "${_bg2_word}", "left", '0.23%', { fromValue: '0%'}], position: 15500, duration: 1500, easing: "easeInQuad" },
                { id: "eid590", tween: [ "style", "${_bg1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid597", tween: [ "style", "${_bg1}", "display", 'block', { fromValue: 'none'}], position: 10283, duration: 0, easing: "easeInQuad" },
                { id: "eid563", tween: [ "style", "${_bg1}", "display", 'none', { fromValue: 'block'}], position: 15217, duration: 0, easing: "easeInQuad" },
                { id: "eid397", tween: [ "style", "${_bg2_word}", "top", '0.76%', { fromValue: '13.61%'}], position: 15500, duration: 1500, easing: "easeInQuad" },
                { id: "eid572", tween: [ "motion", "${_plane1}", [[515.76, 583.93, 0, 0],[392.39, 487.32, -95.6, -79.48, -203.79, -169.43],[260.28, 420.62, -46.44, -38.29, -108.04, -89.07],[181.66, 352.65, -137.78, -152.91, -43.3, -48.05],[111.24, 244.27, 0, 0]]], position: 24249, duration: 3500, easing: "easeInQuad" },
                { id: "eid688", tween: [ "motion", "${_plane1}", [[111.24, 244.27, 0, 0],[-89.17, 275.45, 0, 0]]], position: 33274, duration: 1976, easing: "easeInQuad" },
                { id: "eid947", tween: [ "style", "${_Text}", "left", '50.9%', { fromValue: '50.9%'}], position: 39250, duration: 0 },
                { id: "eid199", tween: [ "transform", "${_super_father}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1306, duration: 1316, easing: "easeInQuad" },
                { id: "eid184", tween: [ "transform", "${_super_father}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 2622, duration: 1378, easing: "easeInQuad" },
                { id: "eid869", tween: [ "style", "${_bg1_word}", "clip", [4,446,166,4], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [4,446,146,4]}], position: 12980, duration: 0, easing: "easeInQuad" },
                { id: "eid878", tween: [ "style", "${_bg1_word}", "clip", [4,446,217,4], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [4,446,166,4]}], position: 14687, duration: 0, easing: "easeInQuad" },
                { id: "eid788", tween: [ "style", "${_icon_right}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid790", tween: [ "style", "${_icon_right}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
                { id: "eid795", tween: [ "style", "${_icon_right}", "display", 'none', { fromValue: 'block'}], position: 12242, duration: 0 },
                { id: "eid757", tween: [ "style", "${_icon_right}", "display", 'block', { fromValue: 'none'}], position: 14687, duration: 0 },
                { id: "eid798", tween: [ "style", "${_icon_right}", "display", 'none', { fromValue: 'block'}], position: 15217, duration: 0 },
                { id: "eid801", tween: [ "style", "${_icon_right}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid802", tween: [ "style", "${_icon_right}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid804", tween: [ "style", "${_icon_right}", "display", 'block', { fromValue: 'none'}], position: 19970, duration: 0 },
                { id: "eid807", tween: [ "style", "${_icon_right}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid814", tween: [ "style", "${_icon_right}", "display", 'block', { fromValue: 'none'}], position: 24249, duration: 0, easing: "easeInQuad" },
                { id: "eid817", tween: [ "style", "${_icon_right}", "display", 'none', { fromValue: 'block'}], position: 24924, duration: 0 },
                { id: "eid818", tween: [ "style", "${_icon_right}", "display", 'block', { fromValue: 'none'}], position: 33000, duration: 0, easing: "easeInQuad" },
                { id: "eid821", tween: [ "style", "${_icon_right}", "display", 'none', { fromValue: 'block'}], position: 33919, duration: 0 },
                { id: "eid823", tween: [ "style", "${_icon_right}", "display", 'block', { fromValue: 'none'}], position: 41000, duration: 0 },
                { id: "eid560", tween: [ "style", "${_plane1}", "display", 'block', { fromValue: 'none'}], position: 24249, duration: 0, easing: "easeInOutQuint" },
                { id: "eid725", tween: [ "style", "${_plane1}", "display", 'none', { fromValue: 'block'}], position: 35226, duration: 0, easing: "easeInQuad" },
                { id: "eid319", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 7687, duration: 0, easing: "easeInQuad" },
                { id: "eid542", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 25000, duration: 0, easing: "easeInQuad" },
                { id: "eid286", tween: [ "transform", "${_icon_left}", "rotateZ", '-90deg', { fromValue: '-90deg'}], position: 6000, duration: 0 },
                { id: "eid523", tween: [ "style", "${_bg4_word2}", "left", '0%', { fromValue: '-101.58%'}], position: 22249, duration: 2000, easing: "easeInQuad" },
                { id: "eid562", tween: [ "style", "${_plane2}", "display", 'block', { fromValue: 'none'}], position: 24249, duration: 0, easing: "easeInOutQuint" },
                { id: "eid724", tween: [ "style", "${_plane2}", "display", 'none', { fromValue: 'block'}], position: 35226, duration: 0, easing: "easeInQuad" },
                { id: "eid775", tween: [ "style", "${_icon_left}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid776", tween: [ "style", "${_icon_left}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid314", tween: [ "style", "${_icon_left}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
                { id: "eid796", tween: [ "style", "${_icon_left}", "display", 'none', { fromValue: 'block'}], position: 12242, duration: 0 },
                { id: "eid797", tween: [ "style", "${_icon_left}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0 },
                { id: "eid799", tween: [ "style", "${_icon_left}", "display", 'none', { fromValue: 'block'}], position: 15217, duration: 0 },
                { id: "eid800", tween: [ "style", "${_icon_left}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid803", tween: [ "style", "${_icon_left}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid805", tween: [ "style", "${_icon_left}", "display", 'block', { fromValue: 'none'}], position: 19970, duration: 0 },
                { id: "eid808", tween: [ "style", "${_icon_left}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid815", tween: [ "style", "${_icon_left}", "display", 'block', { fromValue: 'none'}], position: 24249, duration: 0 },
                { id: "eid816", tween: [ "style", "${_icon_left}", "display", 'none', { fromValue: 'block'}], position: 24924, duration: 0 },
                { id: "eid819", tween: [ "style", "${_icon_left}", "display", 'block', { fromValue: 'none'}], position: 33000, duration: 0 },
                { id: "eid820", tween: [ "style", "${_icon_left}", "display", 'none', { fromValue: 'block'}], position: 33919, duration: 0 },
                { id: "eid251", tween: [ "style", "${_background}", "left", '-97px', { fromValue: '0px'}], position: 1750, duration: 872, easing: "easeInQuad" },
                { id: "eid942", tween: [ "style", "${_Text}", "top", '79.96%', { fromValue: '79.96%'}], position: 39250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid621", tween: [ "style", "${_bg3_word}", "opacity", '1', { fromValue: '0'}], position: 17500, duration: 2995, easing: "easeInQuad" },
                { id: "eid622", tween: [ "style", "${_bg3_word}", "opacity", '0', { fromValue: '1'}], position: 20495, duration: 1248, easing: "easeInQuad" },
                { id: "eid923", tween: [ "style", "${_words}", "display", 'block', { fromValue: 'none'}], position: 4927, duration: 0 },
                { id: "eid849", tween: [ "style", "${_bg3}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0, easing: "easeInQuad" },
                { id: "eid624", tween: [ "style", "${_bg3}", "display", 'none', { fromValue: 'block'}], position: 21743, duration: 0, easing: "easeInQuad" },
                { id: "eid176", tween: [ "style", "${_super_father}", "top", '-11px', { fromValue: '357px'}], position: 2622, duration: 1378, easing: "easeInQuad" },
                { id: "eid231", tween: [ "style", "${_super_father}", "top", '-252px', { fromValue: '-11px'}], position: 7000, duration: 687 },
                { id: "eid158", tween: [ "style", "${_cloud1}", "opacity", '1', { fromValue: '0'}], position: 872, duration: 215, easing: "easeInQuad" },
                { id: "eid246", tween: [ "style", "${_cloud1}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 687, easing: "easeInQuad" },
                { id: "eid929", tween: [ "style", "${_words}", "opacity", '0.99145296571028', { fromValue: '0.025640999898314476'}], position: 4927, duration: 2073 },
                { id: "eid932", tween: [ "style", "${_words}", "opacity", '0', { fromValue: '0.9914529919624329'}], position: 7000, duration: 687 },
                { id: "eid315", tween: [ "style", "${_super_kid}", "display", 'none', { fromValue: 'block'}], position: 7687, duration: 0 },
                { id: "eid599", tween: [ "style", "${_bg1}", "top", '13px', { fromValue: '12px'}], position: 14438, duration: 260, easing: "easeInQuad" },
                { id: "eid386", tween: [ "style", "${_bg1}", "top", '552px', { fromValue: '13px'}], position: 14698, duration: 519, easing: "easeInQuad" },
                { id: "eid832", tween: [ "style", "${_bg1}", "width", '99.6%', { fromValue: '99.6%'}], position: 10283, duration: 0, easing: "easeInQuad" },
                { id: "eid559", tween: [ "motion", "${_plane2}", [[-106.74, 588.78, 0, 0],[355.75, 485.97, 310.64, -157.27, 596.79, -302.15],[576.52, 215.22, 61.87, -152.54, 120.89, -298.05],[520.73, 30.53, -47.32, -70.98, -109.27, -163.91],[261.9, -38.52, -191.73, -32.65, -311.45, -53.04],[71.5, 93.51, 0, 0]]], position: 24249, duration: 6000, easing: "easeInOutQuint" },
                { id: "eid686", tween: [ "motion", "${_plane2}", [[71.5, 93.79, 0, 0],[-68.97, 107.73, 0, 0]]], position: 33274, duration: 1976, easing: "easeInQuad" },
                { id: "eid945", tween: [ "style", "${_word2}", "left", '7.43%', { fromValue: '7.43%'}], position: 39250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid633", tween: [ "style", "${_bg4}", "opacity", '1', { fromValue: '0'}], position: 20999, duration: 1250, easing: "easeInQuad" },
                { id: "eid634", tween: [ "style", "${_bg4}", "opacity", '0', { fromValue: '1'}], position: 24249, duration: 1750, easing: "easeInQuad" },
                { id: "eid892", tween: [ "style", "${_background}", "height", '102.27%', { fromValue: '105.29%'}], position: 0, duration: 0, easing: "easeInElastic" },
                { id: "eid306", tween: [ "style", "${_year2}", "opacity", '1', { fromValue: '0'}], position: 7687, duration: 2813, easing: "easeInQuad" },
                { id: "eid352", tween: [ "style", "${_year2}", "opacity", '0', { fromValue: '1'}], position: 10750, duration: 2250, easing: "easeInQuad" },
                { id: "eid301", tween: [ "style", "${_year2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid302", tween: [ "style", "${_year2}", "display", 'block', { fromValue: 'none'}], position: 7687, duration: 0, easing: "easeInQuad" },
                { id: "eid363", tween: [ "style", "${_year2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInQuad" },
                { id: "eid535", tween: [ "style", "${_year2}", "display", 'none', { fromValue: 'none'}], position: 25000, duration: 0, easing: "easeInQuad" },
                { id: "eid549", tween: [ "style", "${_background4}", "left", '0px', { fromValue: '446px'}], position: 24249, duration: 1500 },
                { id: "eid693", tween: [ "style", "${_background4}", "left", '-451px', { fromValue: '0px'}], position: 33274, duration: 1976, easing: "easeInQuad" },
                { id: "eid88", tween: [ "style", "${_Rectangle}", "clip", [0,500,119,500], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,500,119,0]}], position: 0, duration: 1306, easing: "easeInQuad" },
                { id: "eid577", tween: [ "style", "${_background4}", "width", '100.46%', { fromValue: '100.34%'}], position: 24249, duration: 1500, easing: "easeInQuad" },
                { id: "eid159", tween: [ "style", "${_cloud1}", "top", '123px', { fromValue: '209px'}], position: 872, duration: 215, easing: "easeInQuad" },
                { id: "eid640", tween: [ "style", "${_background4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid641", tween: [ "style", "${_background4}", "display", 'block', { fromValue: 'none'}], position: 24249, duration: 0 },
                { id: "eid695", tween: [ "style", "${_background4}", "display", 'none', { fromValue: 'none'}], position: 35250, duration: 0, easing: "easeInOutElastic" },
                { id: "eid594", tween: [ "style", "${_bg2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid610", tween: [ "style", "${_bg2}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0, easing: "easeInQuad" },
                { id: "eid618", tween: [ "style", "${_bg2}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0, easing: "easeInQuad" },
                { id: "eid532", tween: [ "style", "${_bg2}", "display", 'none', { fromValue: 'none'}], position: 24924, duration: 0, easing: "easeInQuad" },
                { id: "eid426", tween: [ "style", "${_bg3}", "width", '201.24%', { fromValue: '132.89%'}], position: 16499, duration: 1984, easing: "easeInQuad" },
                { id: "eid792", tween: [ "style", "${_icon_right}", "top", '51.3%', { fromValue: '51.3%'}], position: 10500, duration: 0 },
                { id: "eid913", tween: [ "style", "${_icon_right}", "top", '60.3%', { fromValue: '51.3%'}], position: 41000, duration: 0 },
                { id: "eid606", tween: [ "style", "${_bg1_word}", "left", '-0.9%', { fromValue: '-5.23%'}], position: 12980, duration: 2520, easing: "easeInQuad" },
                { id: "eid651", tween: [ "style", "${_touxiang}", "top", '57px', { fromValue: '88px'}], position: 31500, duration: 2419, easing: "easeInQuad" },
                { id: "eid683", tween: [ "style", "${_touxiang}", "top", '-242px', { fromValue: '57px'}], position: 33919, duration: 1331, easing: "easeInQuad" },
                { id: "eid644", tween: [ "motion", "${_word}", [[222.5, -101.5, 0, 0],[222.5, 420.5, 0, 0]]], position: 28250, duration: 3976, easing: "easeInOutElastic" },
                { id: "eid679", tween: [ "motion", "${_word}", [[222.5, 420.5, 0, 0],[222.5, 685.5, 0, 0]]], position: 33274, duration: 1976, easing: "easeInQuad" },
                { id: "eid153", tween: [ "style", "${_cloud2}", "top", '110px', { fromValue: '192px'}], position: 0, duration: 750, easing: "easeInQuad" },
                { id: "eid248", tween: [ "style", "${_cloud2}", "top", '159px', { fromValue: '110px'}], position: 750, duration: 6250, easing: "easeInQuad" },
                { id: "eid307", tween: [ "transform", "${_year2}", "scaleX", '1.25', { fromValue: '1'}], position: 7687, duration: 1563, easing: "easeInQuad" },
                { id: "eid309", tween: [ "transform", "${_year2}", "scaleX", '1', { fromValue: '1.25'}], position: 9250, duration: 1250, easing: "easeInQuad" },
                { id: "eid287", tween: [ "style", "${_icon_left}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 500 },
                { id: "eid735", tween: [ "style", "${_word2}", "clip", [0,363,400,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,363,0,0]}], position: 35226, duration: 4024, easing: "easeInOutQuad" },
                { id: "eid645", tween: [ "style", "${_word}", "display", 'block', { fromValue: 'none'}], position: 28250, duration: 0, easing: "easeInOutElastic" },
                { id: "eid891", tween: [ "style", "${_background}", "width", '126.81%', { fromValue: '132.56%'}], position: 0, duration: 0, easing: "easeInElastic" },
                { id: "eid616", tween: [ "transform", "${_bg2}", "scaleY", '0', { fromValue: '1'}], position: 17000, duration: 1000, easing: "easeInQuad" },
                { id: "eid396", tween: [ "style", "${_bg2_word}", "opacity", '1', { fromValue: '0'}], position: 15500, duration: 1500, easing: "easeInQuad" },
                { id: "eid411", tween: [ "style", "${_bg2_word}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 1000, easing: "easeInQuad" },
                { id: "eid175", tween: [ "style", "${_super_father}", "left", '60px', { fromValue: '503px'}], position: 2622, duration: 1378, easing: "easeInQuad" },
                { id: "eid230", tween: [ "style", "${_super_father}", "left", '-342px', { fromValue: '60px'}], position: 7000, duration: 687 },
                { id: "eid636", tween: [ "transform", "${_bg4}", "scaleY", '2', { fromValue: '1'}], position: 24249, duration: 1750, easing: "easeInQuad" },
                { id: "eid583", tween: [ "style", "${_bg2}", "left", '1px', { fromValue: '445px'}], position: 14750, duration: 750, easing: "easeInQuad" },
                { id: "eid390", tween: [ "style", "${_bg2}", "left", '1px', { fromValue: '0px'}], position: 18483, duration: 17, easing: "easeInQuad" },
                { id: "eid681", tween: [ "style", "${_word}", "opacity", '0', { fromValue: '1'}], position: 33274, duration: 1976, easing: "easeInQuad" },
                { id: "eid417", tween: [ "style", "${_bg3}", "left", '-227px', { fromValue: '302px'}], position: 16499, duration: 1984, easing: "easeInQuad" },
                { id: "eid448", tween: [ "style", "${_bg3}", "left", '-668px', { fromValue: '-227px'}], position: 20495, duration: 1248, easing: "easeInQuad" },
                { id: "eid935", tween: [ "transform", "${_word2}", "scaleX", '1.27851', { fromValue: '1.27851'}], position: 39250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid392", tween: [ "style", "${_bg2}", "opacity", '1', { fromValue: '0.2820509970188141'}], position: 14750, duration: 750, easing: "easeInQuad" },
                { id: "eid617", tween: [ "style", "${_bg2}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 1000, easing: "easeInQuad" },
                { id: "eid308", tween: [ "transform", "${_year2}", "scaleY", '1.25', { fromValue: '1'}], position: 7687, duration: 1563, easing: "easeInQuad" },
                { id: "eid310", tween: [ "transform", "${_year2}", "scaleY", '1', { fromValue: '1.25'}], position: 9250, duration: 1250, easing: "easeInQuad" },
                { id: "eid195", tween: [ "style", "${_super_kid}", "left", '208px', { fromValue: '626px'}], position: 4000, duration: 927, easing: "easeOutQuart" },
                { id: "eid223", tween: [ "style", "${_super_kid}", "left", '-69px', { fromValue: '208px'}], position: 7000, duration: 687 },
                { id: "eid934", tween: [ "style", "${_icon_left}", "top", '51.3%', { fromValue: '51.3%'}], position: 10500, duration: 0 },
                { id: "eid196", tween: [ "style", "${_super_kid}", "top", '28px', { fromValue: '223px'}], position: 4000, duration: 927, easing: "easeOutQuart" },
                { id: "eid224", tween: [ "style", "${_super_kid}", "top", '-161px', { fromValue: '28px'}], position: 7000, duration: 687 },
                { id: "eid245", tween: [ "style", "${_background}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 687, easing: "easeInQuad" },
                { id: "eid425", tween: [ "style", "${_bg3}", "height", '200.09%', { fromValue: '131.95%'}], position: 16499, duration: 1984, easing: "easeInQuad" },
                { id: "eid316", tween: [ "style", "${_super_father}", "display", 'none', { fromValue: 'block'}], position: 7687, duration: 0 },
                { id: "eid408", tween: [ "transform", "${_bg2_word}", "scaleX", '0', { fromValue: '1'}], position: 17000, duration: 1000, easing: "easeInQuad" },
                { id: "eid586", tween: [ "style", "${_bg3_word}", "left", '5.41%', { fromValue: '99.55%'}], position: 17500, duration: 2995, easing: "easeInQuad" },
                { id: "eid619", tween: [ "style", "${_bg3_word}", "left", '-93.02%', { fromValue: '5.41%'}], position: 20495, duration: 1248, easing: "easeInQuad" },
                { id: "eid810", tween: [ "style", "${_bg4_word2}", "opacity", '1', { fromValue: '0'}], position: 22249, duration: 2000, easing: "easeInQuad" },
                { id: "eid812", tween: [ "style", "${_bg4_word2}", "opacity", '0', { fromValue: '1'}], position: 24249, duration: 1500, easing: "easeInQuad" },
                { id: "eid813", tween: [ "style", "${_bg4_word2}", "opacity", '1', { fromValue: '0'}], position: 25749, duration: 250, easing: "easeInQuad" },
                { id: "eid635", tween: [ "transform", "${_bg4}", "scaleX", '2', { fromValue: '1'}], position: 24249, duration: 1750, easing: "easeInQuad" },
                { id: "eid593", tween: [ "style", "${_bg1_word}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid863", tween: [ "style", "${_bg1_word}", "display", 'block', { fromValue: 'none'}], position: 12980, duration: 0, easing: "easeInQuad" },
                { id: "eid609", tween: [ "style", "${_bg1_word}", "display", 'none', { fromValue: 'block'}], position: 15500, duration: 0, easing: "easeInQuad" },
                { id: "eid294", tween: [ "style", "${_cloud1}", "left", '249px', { fromValue: '249px'}], position: 872, duration: 0, easing: "easeInQuad" },
                { id: "eid783", tween: [ "style", "${_icon_right}", "opacity", '1', { fromValue: '1'}], position: 10500, duration: 0 },
                { id: "eid509", tween: [ "transform", "${_bg4_word2}", "scaleX", '2', { fromValue: '1'}], position: 24249, duration: 1750, easing: "easeInQuad" },
                { id: "eid870", tween: [ "subproperty", "${_bg3_word}", "filter.drop-shadow.offsetV", '-4px', { fromValue: '-4px'}], position: 17500, duration: 0, easing: "easeInQuad" },
                { id: "eid409", tween: [ "transform", "${_bg2_word}", "scaleY", '0', { fromValue: '1'}], position: 17000, duration: 1000, easing: "easeInQuad" },
                { id: "eid177", tween: [ "style", "${_super_father}", "opacity", '1', { fromValue: '0'}], position: 2622, duration: 1378, easing: "easeInQuad" },
                { id: "eid232", tween: [ "style", "${_super_father}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 687 },
                { id: "eid831", tween: [ "style", "${_bg1}", "height", '95.27%', { fromValue: '95.27%'}], position: 10283, duration: 0, easing: "easeInQuad" },
                { id: "eid946", tween: [ "style", "${_word2}", "top", '8.88%', { fromValue: '8.88%'}], position: 39250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid592", tween: [ "style", "${_bg3_word}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid868", tween: [ "style", "${_bg3_word}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0, easing: "easeInQuad" },
                { id: "eid623", tween: [ "style", "${_bg3_word}", "display", 'none', { fromValue: 'block'}], position: 21743, duration: 0, easing: "easeInQuad" },
                { id: "eid318", tween: [ "style", "${_cloud1}", "display", 'none', { fromValue: 'block'}], position: 7687, duration: 0, easing: "easeInQuad" },
                { id: "eid541", tween: [ "style", "${_cloud1}", "display", 'none', { fromValue: 'none'}], position: 25000, duration: 0, easing: "easeInQuad" },
                { id: "eid591", tween: [ "style", "${_bg4}", "display", 'none', { fromValue: 'block'}], position: 76, duration: 0, easing: "easeInQuad" },
                { id: "eid579", tween: [ "style", "${_bg4}", "display", 'block', { fromValue: 'none'}], position: 20999, duration: 0, easing: "easeInQuad" },
                { id: "eid637", tween: [ "style", "${_bg4}", "display", 'none', { fromValue: 'block'}], position: 25999, duration: 0, easing: "easeInQuad" },
                { id: "eid320", tween: [ "style", "${_background}", "display", 'none', { fromValue: 'block'}], position: 7687, duration: 0, easing: "easeInQuad" },
                { id: "eid871", tween: [ "style", "${_bg3_word}", "clip", [2,342,196,12], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2,342,182,12]}], position: 17500, duration: 0, easing: "easeInQuad" },
                { id: "eid835", tween: [ "style", "${_bg1}", "opacity", '1', { fromValue: '0'}], position: 10283, duration: 1550, easing: "easeInQuad" },
                { id: "eid383", tween: [ "style", "${_bg1}", "opacity", '0', { fromValue: '1'}], position: 14698, duration: 519, easing: "easeInQuad" },
                { id: "eid359", tween: [ "style", "${_bg1}", "left", '4px', { fromValue: '440px'}], position: 10283, duration: 2337, easing: "easeInQuad" },
                { id: "eid387", tween: [ "style", "${_bg1}", "left", '7px', { fromValue: '4px'}], position: 12620, duration: 1818, easing: "easeInQuad" },
                { id: "eid598", tween: [ "style", "${_bg1}", "left", '6px', { fromValue: '7px'}], position: 14438, duration: 779, easing: "easeInQuad" },
                { id: "eid931", tween: [ "style", "${_words}", "top", '48.71%', { fromValue: '61.76%'}], position: 4927, duration: 2073 },
                { id: "eid360", tween: [ "subproperty", "${_bg1}", "filter.blur", '0px', { fromValue: '5px'}], position: 10283, duration: 2337, easing: "easeInQuad" },
                { id: "eid615", tween: [ "transform", "${_bg2}", "scaleX", '0', { fromValue: '1'}], position: 17000, duration: 1000, easing: "easeInQuad" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-11252879");
