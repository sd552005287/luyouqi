/**
 * Created by boom on 16/7/8.
 */
var htmlHide = "html";
var level0 = "0";
var level1 = "1";

/* 一级菜单数组 */
var menuTitle = new Array();
/* 菜单名， 菜单访问等级 */
menuTitle[0] = new Array(level0, "状 态");
menuTitle[1] = new Array(level0, "网 络");
menuTitle[2] = new Array(level0, "安 全");
menuTitle[3] = new Array(level0, "应 用");
menuTitle[4] = new Array(level0, "管 理");
menuTitle[5] = new Array(level1, "诊 断");
menuTitle[6] = new Array(level0, "帮 助");
/*菜单按钮没有获得焦点的图片*/
var menuTitleImage = new Array();
menuTitleImage[0] = new Array(level0, "nav_condition_n.png");
menuTitleImage[1] = new Array(level0, "nav_network_n.png");
menuTitleImage[2] = new Array(level0, "nav_security_n.png");
menuTitleImage[3] = new Array(level0, "nav_yingyong_n.png");
menuTitleImage[4] = new Array(level0, "nav_administration_n.png");
menuTitleImage[5] = new Array(level1, "nav_diagnosis_n.png");
menuTitleImage[6] = new Array(level0, "nav_help_n.png");
/*菜单按钮获得焦点的图片*/
var menuTitleImageClick = new Array();
menuTitleImageClick[0] = new Array(level0, "nav_condition_h.png");
menuTitleImageClick[1] = new Array(level0, "nav_network_h.png");
menuTitleImageClick[2] = new Array(level0, "nav_security_h.png");
menuTitleImageClick[3] = new Array(level0, "nav_yingyong_h.png");
menuTitleImageClick[4] = new Array(level0, "nav_administration_h.png");
menuTitleImageClick[5] = new Array(level1, "nav_diagnosis_h.png");
menuTitleImageClick[6] = new Array(level0, "nav_help_h.png");

function creatFirstMenu (id) {
    var tmpStr = "";
    var color  = "";
    var i = 0;
    tmpStr += "<table align='center' width='730' height='150'>";
    tmpStr += "<tr>";

    /* 从1开始，0为保留 */
    for(i; i < menuTitle.length; i++)
    {
        if(i == id)
            tmpStr += "<td align='center'><a class='a' href='javascript:creatFirstMenu(" + i + ")'><div class='ttd'><div><img src='pic/" + menuTitleImageClick[i][1] + "'></div><div style='margin-top: 15px'>" +
                "<label color='#fff45c'>" + menuTitle[i][1] + "</label></div><div align='center'><div style='background: #fff45c;width: 50px;height: 3px;margin-top: 15px'></div></div></div></a></td>";
        else
            tmpStr += "<td align='center'><a class='a' href='javascript:creatFirstMenu(" + i + ")'><div class='ttd'><div><img src='pic/"+menuTitleImage[i][1]+"'></div><div style='margin-top: 15px'>" +
                "<label  color='#ffffff'>" + menuTitle[i][1] + "</label></div><div align='center'><div style='width: 50px;height: 3px;margin-top: 15px'></div></div></div></a></td>";

    }
    tmpStr += "</tr>";
    tmpStr += "</table>";
    document.getElementById('FirstMenu').innerHTML=tmpStr;
    creatLeftMenu(id);
}
function creatLeftMenu(id) {
    switch(id)
    {
        case 0:
            document.getElementById("main").src="menu_message.html"
            break;
        case 1:
            document.getElementById("main").src="menu_network.html"
            break;
        case 2:
            document.getElementById("main").src="menu_security.html"
            break;
        case 3:
            document.getElementById("main").src="menu_yingyong.html"
            break;
        case 4:
            document.getElementById("main").src="menu_admin.html"
            break;
        case 5:
            document.getElementById("main").src="menu_diagnosis.html"
            break;
        case 6:
            document.getElementById("main").src="menu_help.html"
            break;
    }
}