/**
 * Created by boom on 16/7/19.
 */
function initTable() {
    var xmlstr = "";
    xmlstr += "<tr align='center' bgcolor='#f8f8f8' style='height: 40px'>" +
        "<td width='40'><input type='checkbox'></td>" +
        "<td width='40'>ID</td><td width='80'>分类类型</td>" +
        "<td width='80'>IP类型</td><td width='80'>最大值</td>" +
        "<td width='80'>最小值</td><td width='80'>协议类型</td>" +
        "<td width='80'>DSCP值</td><td width='80'>TC值</td>" +
        "<td width='80'>802.1 P值</td><td width='100'>操作</td>" +
        "</tr>";
    xmlstr +="<tr align='center' style='height: 40px;font-size: 12px'>" +
        "<td><input type='checkbox'></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td><div style='color: deepskyblue'>删除</div></td>" +
        "</tr>"
    document.getElementById("qos").innerHTML = xmlstr;
}

function addClick() {
    var xmlstr = "";
    xmlstr += "<tr align='center' bgcolor='#f8f8f8' style='height: 40px'>" +
        "<td width='40'><input type='checkbox'></td>" +
        "<td width='40'>ID</td><td width='80'>分类类型</td>" +
        "<td width='80'>IP类型</td><td width='80'>最大值</td>" +
        "<td width='80'>最小值</td><td width='80'>协议类型</td>" +
        "<td width='80'>DSCP值</td><td width='80'>TC值</td>" +
        "<td width='80'>802.1 P值</td><td width='100'>操作</td>" +
        "</tr>";
    xmlstr +="<tr align='center' style='height: 40px;font-size: 12px'>" +
        "<td><input type='checkbox'></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td><div style='color: deepskyblue'>删除</div></td>" +
        "</tr>"
    alert("The paragraph is now hidden");
}

function DeleClick() {
alert("删除");
}
function SaveClick() {

}