//请勿抄袭
function startTime() {
    var date = new Date();
    var d = date.getDay();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    var 电路 = 'https://us04web.zoom.us/j/2468450244?pwd=M3QzTzJpYmhraytpbnNMRmZrU05hdz09';
    var 英文 = 'https://zoom.us/j/91898041291?pwd=eDJTSko2V1RhdjFSUCtBWG9TWHRoZz09';
    var 国文 = 'https://meet.google.com/lookup/aitlqfg7rw';
    var 华文 = 'https://meet.google.com/lookup/e7mv5pql56';
    var Dp = 'https://zoom.us/j/5906765099?pwd=bUNLT2RmcVpJbjJWbTEwbzFXZ3NZZz09';
    var 数学 = 'https://us04web.zoom.us/j/4645446141?pwd=VXlSbUxISGo2NG1DRldIRWg4MXNIdz09';
    var 物理 = "https://zoom.us/j/3901234262?pwd=NFFHYkpHK09va2pVU1AxWU52ejAvZz09";
    var 宝哥 = "https://meet.google.com/lookup/f4jrhfglxq";
    var 国历 = "https://meet.google.com/lookup/bjtzgmbgcx";
    var 体育 = "https://meet.google.com/lookup/cqjmopwuvn";
    var 空节 = "#";
    document.getElementById('time').innerHTML = d + ":" + h + ":" + m + ":" + s;
    document.getElementById('currentSubject').innerHTML = "Current Link : -";
    document.getElementById('nextSubject').innerHTML = "Next Link : -";

    if (d == 0 && h == 17 && m == 8) {
        document.getElementById('currentLink').setAttribute("href", 华文);
        document.getElementById('currentSubject').innerHTML = "Current Link : 华文";
    }

    //开始定时

    //星期一
    if (d == 1 && h == 7 && m > 10 && m < 45) {
        document.getElementById('nextLink').setAttribute("href", Dp);
        document.getElementById('nextSubject').innerHTML = "Next Link : 电机";
    }
    if (d == 1 && ((h == 7 && m >= 45) || (h == 8 && m < 35))) {
        document.getElementById('currentLink').setAttribute("href", Dp);
        document.getElementById('nextLink').setAttribute("href", 数学);
        document.getElementById('currentSubject').innerHTML = "Current Link : 电机";
        document.getElementById('nextSubject').innerHTML = "Next Link : 数学";
    }
    if (d == 1 && ((h == 8 && m >= 35) || (h == 9 && m < 30))) {
        document.getElementById('currentLink').setAttribute("href", 数学);
        document.getElementById('nextLink').setAttribute("href", 国文);
        document.getElementById('currentSubject').innerHTML = "Current Link : 数学";
        document.getElementById('nextSubject').innerHTML = "Next Link : 国文";
    }
    if (d == 1 && ((h == 9 && m >= 30) || (h == 10 && m < 20))) {
        document.getElementById('currentLink').setAttribute("href", 国文);
        document.getElementById('nextLink').setAttribute("href", 宝哥);
        document.getElementById('currentSubject').innerHTML = "Current Link : 国文";
        document.getElementById('nextSubject').innerHTML = "Next Link : 电子";
    }
    if (d == 1 && ((h == 10 && m >= 20) || (h == 11 && m < 10))) {
        document.getElementById('currentLink').setAttribute("href", 宝哥);
        document.getElementById('nextLink').setAttribute("href", 华文);
        document.getElementById('currentSubject').innerHTML = "Current Link : 电子";
        document.getElementById('nextSubject').innerHTML = "Next Link : 华文";
    }
    if (d == 1 && ((h == 11 && m >= 10) || (h == 12 && m < 30))) {
        document.getElementById('currentLink').setAttribute("href", 华文);
        document.getElementById('nextLink').setAttribute("href", 宝哥);
        document.getElementById('currentSubject').innerHTML = "Current Link : 华文";
        document.getElementById('nextSubject').innerHTML = "Next Link : 数位";
    }
    if (d == 1 && ((h == 12 && m >= 30) || (h == 13 && m < 15))) {
        document.getElementById('currentLink').setAttribute("href", 宝哥);
        document.getElementById('nextLink').setAttribute("href", 英文);
        document.getElementById('currentSubject').innerHTML = "Current Link : 数位";
        document.getElementById('nextSubject').innerHTML = "Next Link : 英文";
    }
    if (d == 1 && h == 13 && m >= 15 && m <= 59) {
        document.getElementById('currentLink').setAttribute("href", 英文);
        document.getElementById('nextLink').setAttribute("href", 电路);
        document.getElementById('currentSubject').innerHTML = "Current Link : 英文";
        document.getElementById('nextSubject').innerHTML = "Next Link : 班会/电路";
    }
    if (d == 1 && (h == 14 || (h == 15 && m < 20))) {
        document.getElementById('currentLink').setAttribute("href", 电路);
        document.getElementById('nextLink').setAttribute("href", 空节);
        document.getElementById('currentSubject').innerHTML = "Current Link : 班会/电路";
        document.getElementById('nextSubject').innerHTML = "Next Link : -";
    }
    //星期一完

    //星期二
    if (d == 2 && h == 7 && m > 10 && m < 45) {
        document.getElementById('nextLink').setAttribute("href", 英文);
        document.getElementById('currentSubject').innerHTML = "Current Link : -";
        document.getElementById('nextSubject').innerHTML = "Next Link : 英文";
    }
    if (d == 2 && ((h == 7 && m >= 45) || (h == 8 && m < 35))) {
        document.getElementById('currentLink').setAttribute("href", 英文);
        document.getElementById('nextLink').setAttribute("href", 物理);
        document.getElementById('currentSubject').innerHTML = "Current Link : 英文";
        document.getElementById('nextSubject').innerHTML = "Next Link : 物理";
    }
    if (d == 2 && ((h == 8 && m >= 35) || (h == 9 && m < 30))) {
        document.getElementById('currentLink').setAttribute("href", 物理);
        document.getElementById('nextLink').setAttribute("href", 宝哥);
        document.getElementById('currentSubject').innerHTML = "Current Link : 物理";
        document.getElementById('nextSubject').innerHTML = "Next Link : 数位";
    }
    if (d == 2 && ((h == 9 && m >= 30) || (h == 10 && m < 20))) {
        document.getElementById('currentLink').setAttribute("href", 宝哥);
        document.getElementById('nextLink').setAttribute("href", 宝哥);
        document.getElementById('currentSubject').innerHTML = "Current Link : 数位";
        document.getElementById('nextSubject').innerHTML = "Next Link : 数位实习";
    }
    if (d == 2 && ((h == 10 && m >= 20) || (h == 11 && m < 10))) {
        document.getElementById('currentLink').setAttribute("href", 宝哥);
        document.getElementById('nextLink').setAttribute("href", 宝哥);
        document.getElementById('currentSubject').innerHTML = "Current Link : 数位实习";
        document.getElementById('nextSubject').innerHTML = "Next Link : 数位实习";
    }
    if (d == 2 && ((h == 11 && m >= 10) || (h == 12 && m < 30))) {
        document.getElementById('currentLink').setAttribute("href", 宝哥);
        document.getElementById('nextLink').setAttribute("href", 电路);
        document.getElementById('currentSubject').innerHTML = "Current Link : 数位实习";
        document.getElementById('nextSubject').innerHTML = "Next Link : 电子实习";
    }
    if (d == 2 && ((h == 12 && m >= 30) || (h == 13 && m < 15))) {
        document.getElementById('currentLink').setAttribute("href", 电路);
        document.getElementById('nextLink').setAttribute("href", 电路);
        document.getElementById('currentSubject').innerHTML = "Current Link : 电子实习";
        document.getElementById('nextSubject').innerHTML = "Next Link : 电子实习";
    }
    if (d == 2 && h == 13 && m >= 15 && m <= 59) {
        document.getElementById('currentLink').setAttribute("href", 电路);
        document.getElementById('nextLink').setAttribute("href", 数学);
        document.getElementById('currentSubject').innerHTML = "Current Link : 电子实习";
        document.getElementById('nextSubject').innerHTML = "Next Link : 数学";
    }
    if (d == 2 && h == 14 && m < 35) {
        document.getElementById('currentLink').setAttribute("href", 数学);
        document.getElementById('nextLink').setAttribute("href", 空节);
        document.getElementById('currentSubject').innerHTML = "Current Link : 数学";
        document.getElementById('nextSubject').innerHTML = "Next Link : -";
    }
    //星期二完

    //星期三
    if (d == 3 && h == 7 && m > 10 && m < 45) {
        document.getElementById('nextLink').setAttribute("href", 华文);
        document.getElementById('currentSubject').innerHTML = "Current Link : -";
        document.getElementById('nextSubject').innerHTML = "Next Link : 华文";
    }
    if (d == 3 && ((h == 7 && m >= 45) || (h == 8 && m < 35))) {
        document.getElementById('currentLink').setAttribute("href", 华文);
        document.getElementById('nextLink').setAttribute("href", 体育);
        document.getElementById('currentSubject').innerHTML = "Current Link : 华文";
        document.getElementById('nextSubject').innerHTML = "Next Link : 体育";
    }
    if (d == 3 && ((h == 8 && m >= 35) || (h == 9 && m < 30))) {
        document.getElementById('currentLink').setAttribute("href", 体育);
        document.getElementById('nextLink').setAttribute("href", 宝哥);
        document.getElementById('currentSubject').innerHTML = "Current Link : 体育";
        document.getElementById('nextSubject').innerHTML = "Next Link : 电子";
    }
    if (d == 3 && ((h == 9 && m >= 30) || (h == 10 && m < 20))) {
        document.getElementById('currentLink').setAttribute("href", 宝哥);
        document.getElementById('nextLink').setAttribute("href", 英文);
        document.getElementById('currentSubject').innerHTML = "Current Link : 电子";
        document.getElementById('nextSubject').innerHTML = "Next Link : 英文";
    }
    if (d == 3 && ((h == 10 && m >= 20) || (h == 11 && m < 10))) {
        document.getElementById('currentLink').setAttribute("href", 英文);
        document.getElementById('nextLink').setAttribute("href", Dp);
        document.getElementById('currentSubject').innerHTML = "Current Link : 英文";
        document.getElementById('nextSubject').innerHTML = "Next Link : 电机";
    }
    if (d == 3 && ((h == 11 && m >= 10) || (h == 12 && m < 30))) {
        document.getElementById('currentLink').setAttribute("href", Dp);
        document.getElementById('nextLink').setAttribute("href", 数学);
        document.getElementById('currentSubject').innerHTML = "Current Link : 电机";
        document.getElementById('nextSubject').innerHTML = "Next Link : 数学";
    }
    if (d == 3 && ((h == 12 && m >= 30) || (h == 13 && m < 15))) {
        document.getElementById('currentLink').setAttribute("href", 数学);
        document.getElementById('nextLink').setAttribute("href", 国文);
        document.getElementById('currentSubject').innerHTML = "Current Link : 数学";
        document.getElementById('nextSubject').innerHTML = "Next Link : 国文";
    }
    if (d == 3 && h == 13 && m >= 15 && m <= 59) {
        document.getElementById('currentLink').setAttribute("href", 国文);
        document.getElementById('nextLink').setAttribute("href", 空节);
        document.getElementById('currentSubject').innerHTML = "Current Link : 国文";
        document.getElementById('nextSubject').innerHTML = "Next Link : 选修课";
    }
    if (d == 3 && (h == 14 || (h == 15 && m < 20))) {
        document.getElementById('currentLink').setAttribute("href", 空节);
        document.getElementById('currentSubject').innerHTML = "Current Link : 选修课";
        document.getElementById('nextSubject').innerHTML = "Next Link : -";
    }
    //星期三完

    //星期四
    if (d == 4 && h == 7 && m > 10 && m < 45) {
        document.getElementById('nextLink').setAttribute("href", 数学);
        document.getElementById('currentSubject').innerHTML = "Current Link : -";
        document.getElementById('nextSubject').innerHTML = "Next Link : 数学";
    }
    if (d == 4 && ((h == 7 && m >= 45) || (h == 8 && m < 35))) {
        document.getElementById('currentLink').setAttribute("href", 数学);
        document.getElementById('nextLink').setAttribute("href", 数学);
        document.getElementById('currentSubject').innerHTML = "Current Link : 数学";
        document.getElementById('nextSubject').innerHTML = "Next Link : 数学";
    }
    if (d == 4 && ((h == 8 && m >= 35) || (h == 9 && m < 30))) {
        document.getElementById('currentLink').setAttribute("href", 数学);
        document.getElementById('nextLink').setAttribute("href", 英文);
        document.getElementById('currentSubject').innerHTML = "Current Link : 数学";
        document.getElementById('nextSubject').innerHTML = "Next Link : 英文";
    }
    if (d == 4 && ((h == 9 && m >= 30) || (h == 10 && m < 20))) {
        document.getElementById('currentLink').setAttribute("href", 英文);
        document.getElementById('nextLink').setAttribute("href", 电路);
        document.getElementById('currentSubject').innerHTML = "Current Link : 英文";
        document.getElementById('nextSubject').innerHTML = "Next Link : 电路";
    }
    if (d == 4 && ((h == 10 && m >= 20) || (h == 11 && m < 10))) {
        document.getElementById('currentLink').setAttribute("href", 电路);
        document.getElementById('nextLink').setAttribute("href", 国文);
        document.getElementById('currentSubject').innerHTML = "Current Link : 电路";
        document.getElementById('nextSubject').innerHTML = "Next Link : 国文";
    }
    if (d == 4 && ((h == 11 && m >= 10) || (h == 12 && m < 30))) {
        document.getElementById('currentLink').setAttribute("href", 国文);
        document.getElementById('nextLink').setAttribute("href", 华文);
        document.getElementById('currentSubject').innerHTML = "Current Link : 国文";
        document.getElementById('nextSubject').innerHTML = "Next Link : 华文";
    }
    if (d == 4 && ((h == 12 && m >= 30) || (h == 13 && m < 15))) {
        document.getElementById('currentLink').setAttribute("href", 华文);
        document.getElementById('nextLink').setAttribute("href", 华文);
        document.getElementById('currentSubject').innerHTML = "Current Link : 华文";
        document.getElementById('nextSubject').innerHTML = "Next Link : 华文";
    }
    if (d == 4 && h == 13 && m >= 15 && m <= 59) {
        document.getElementById('currentLink').setAttribute("href", 华文);
        document.getElementById('nextLink').setAttribute("href", 空节);
        document.getElementById('currentSubject').innerHTML = "Current Link : 华文";
        document.getElementById('nextSubject').innerHTML = "Next Link : -";
    }
    if (d == 4 && (h == 14 || (h == 15 && m < 20))) {
        document.getElementById('currentLink').setAttribute("href", 空节);
    }
    //星期四完

    //星期五
    if (d == 5 && h == 7 && m > 10 && m < 45) {
        document.getElementById('nextLink').setAttribute("href", 宝哥);
        document.getElementById('currentSubject').innerHTML = "Current Link : -";
        document.getElementById('nextSubject').innerHTML = "Next Link : 数位";
    }
    if (d == 5 && ((h == 7 && m >= 45) || (h == 8 && m < 35))) {
        document.getElementById('currentLink').setAttribute("href", 宝哥);
        document.getElementById('nextLink').setAttribute("href", 数学);
        document.getElementById('currentSubject').innerHTML = "Current Link : 数位";
        document.getElementById('nextSubject').innerHTML = "Next Link : 数学";
    }
    if (d == 5 && ((h == 8 && m >= 35) || (h == 9 && m < 30))) {
        document.getElementById('currentLink').setAttribute("href", 数学);
        document.getElementById('nextLink').setAttribute("href", 英文);
        document.getElementById('currentSubject').innerHTML = "Current Link : 数学";
        document.getElementById('nextSubject').innerHTML = "Next Link : 英文";
    }
    if (d == 5 && ((h == 9 && m >= 30) || (h == 10 && m < 20))) {
        document.getElementById('currentLink').setAttribute("href", 英文);
        document.getElementById('nextLink').setAttribute("href", 电路);
        document.getElementById('currentSubject').innerHTML = "Current Link : 英文";
        document.getElementById('nextSubject').innerHTML = "Next Link : 电路";
    }
    if (d == 5 && ((h == 10 && m >= 20) || (h == 11 && m < 10))) {
        document.getElementById('currentLink').setAttribute("href", 电路);
        document.getElementById('nextLink').setAttribute("href", 华文);
        document.getElementById('currentSubject').innerHTML = "Current Link : 电路";
        document.getElementById('nextSubject').innerHTML = "Next Link : 华文";
    }
    if (d == 5 && ((h == 11 && m >= 10) || (h == 12 && m < 30))) {
        document.getElementById('currentLink').setAttribute("href", 华文);
        document.getElementById('nextLink').setAttribute("href", Dp);
        document.getElementById('currentSubject').innerHTML = "Current Link : 华文";
        document.getElementById('nextSubject').innerHTML = "Next Link : 电脑";
    }
    if (d == 5 && ((h == 12 && m >= 30) || (h == 13 && m < 15))) {
        document.getElementById('currentLink').setAttribute("href", Dp);
        document.getElementById('nextLink').setAttribute("href", Dp);
        document.getElementById('currentSubject').innerHTML = "Current Link : 电脑";
        document.getElementById('nextSubject').innerHTML = "Next Link : 电脑";
    }
    if (d == 5 && h == 13 && m >= 15 && m <= 59) {
        document.getElementById('currentLink').setAttribute("href", Dp);
        document.getElementById('nextLink').setAttribute("href", 物理);
        document.getElementById('currentSubject').innerHTML = "Current Link : 电脑";
        document.getElementById('nextSubject').innerHTML = "Next Link : 物理";
    }
    if (d == 5 && h == 14 && m < 45) {
        document.getElementById('currentLink').setAttribute("href", 物理);
        document.getElementById('nextLink').setAttribute("href", 国文);
        document.getElementById('currentSubject').innerHTML = "Current Link : 物理";
        document.getElementById('nextSubject').innerHTML = "Next Link : 国文";
    }
    if (d == 5 && ((h == 14 && m >= 45) || (h == 15 && m < 20))) {
        document.getElementById('currentLink').setAttribute("href", 国文);
        document.getElementById('nextLink').setAttribute("href", 空节);
        document.getElementById('currentSubject').innerHTML = "Current Link : 国文";
        document.getElementById('nextSubject').innerHTML = "Next Link : -";
    }
    //星期五完

    //星期六
    if (d == 6 && h == 7 && m > 10 && m < 45) {
        document.getElementById('currentLink').setAttribute("href", 空节);
        document.getElementById('nextLink').setAttribute("href", 物理);
        document.getElementById('currentSubject').innerHTML = "Current Link : -";
        document.getElementById('nextSubject').innerHTML = "Next Link:物理";
    }
    if (d == 6 && ((h == 7 && m >= 45) || (h == 8 && m < 35))) {
        document.getElementById('currentLink').setAttribute("href", 物理);
        document.getElementById('nextLink').setAttribute("href", 宝哥);
        document.getElementById('currentSubject').innerHTML = "Current Link:物理";
        document.getElementById('nextSubject').innerHTML = "Next Link:电子";
    }
    if (d == 6 && ((h == 8 && m >= 35) || (h == 9 && m < 30))) {
        document.getElementById('currentLink').setAttribute("href", 宝哥);
        document.getElementById('nextLink').setAttribute("href", 国历);
        document.getElementById('currentSubject').innerHTML = "Current Link:电子";
        document.getElementById('nextSubject').innerHTML = "Next Link:国历";
    }
    if (d == 6 && ((h == 9 && m >= 30) || (h == 10 && m < 20))) {
        document.getElementById('currentLink').setAttribute("href", 国历);
        document.getElementById('nextLink').setAttribute("href", Dp);
        document.getElementById('currentSubject').innerHTML = "Current Link:国历";
        document.getElementById('nextSubject').innerHTML = "Next Link:电机";
    }
    if (d == 6 && ((h == 10 && m >= 20) || (h == 11 && m < 10))) {
        document.getElementById('currentLink').setAttribute("href", Dp);
        document.getElementById('nextLink').setAttribute("href", 空节);
        document.getElementById('currentSubject').innerHTML = "Current Link:电机";
        document.getElementById('nextSubject').innerHTML = "Next Link:联课活动";
    }
    if (d == 6 && ((h == 11 && m >= 10) || (h == 12 && m < 40))) {
        document.getElementById('currentLink').setAttribute("href", 空节);
        document.getElementById('currentSubject').innerHTML = "Current Link:联课活动";
        document.getElementById('nextSubject').innerHTML = "Next Link:-";
    }
    //星期六完
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // 在小过10的号码前面加零
    return i;
}
//请勿抄袭