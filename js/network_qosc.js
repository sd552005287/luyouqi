/**
 * Created by boom on 16/7/19.
 */
function initTable() {
    var xmlstr = "";
    xmlstr += "<tr align='center' bgcolor='#f8f8f8' style='height: 40px'>" +
        "<td width='40'><input type='checkbox'></td>" +
        "<td width='40'>ID</td><td width='80'>��������</td>" +
        "<td width='80'>IP����</td><td width='80'>���ֵ</td>" +
        "<td width='80'>��Сֵ</td><td width='80'>Э������</td>" +
        "<td width='80'>DSCPֵ</td><td width='80'>TCֵ</td>" +
        "<td width='80'>802.1 Pֵ</td><td width='100'>����</td>" +
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
        "<td><div style='color: deepskyblue'>ɾ��</div></td>" +
        "</tr>"
    document.getElementById("qos").innerHTML = xmlstr;
}

function addClick() {
    var xmlstr = "";
    xmlstr += "<tr align='center' bgcolor='#f8f8f8' style='height: 40px'>" +
        "<td width='40'><input type='checkbox'></td>" +
        "<td width='40'>ID</td><td width='80'>��������</td>" +
        "<td width='80'>IP����</td><td width='80'>���ֵ</td>" +
        "<td width='80'>��Сֵ</td><td width='80'>Э������</td>" +
        "<td width='80'>DSCPֵ</td><td width='80'>TCֵ</td>" +
        "<td width='80'>802.1 Pֵ</td><td width='100'>����</td>" +
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
        "<td><div style='color: deepskyblue'>ɾ��</div></td>" +
        "</tr>"
    alert("The paragraph is now hidden");
}

function DeleClick() {
alert("ɾ��");
}
function SaveClick() {

}