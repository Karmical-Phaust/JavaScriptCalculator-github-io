var scores = {
    tên: "",
    toán: 0,
    lý: 0,
    hóa: 0
}

var table = document.getElementById("table");

function submit() {
    var name = document.getElementById("name");
    var math = document.getElementById("math");
    var physic = document.getElementById("physic");
    var chemist = document.getElementById("chemist");

    const m = Number(math.value);
    const p = Number(physic.value);
    const c = Number(chemist.value);

    if (name.value == "" || math.value == "" || physic.value == "" || chemist.value == "") {
        alert("Xin hãy nhập đủ thông tin!");
        return null;
    } else if (Number.isNaN(m) == true || Number.isNaN(p) == true || Number.isNaN(c) == true) {
        alert("Xin hãy nhập đúng định dạng!");
        return null;
    } else if (m < 0 || m > 10 || p < 0 || p > 10 || c < 0 || c > 10) {
        alert("Xin hãy nhập đúng số liệu!");
        return null;
    }

    console.log(typeof name.value);

    scores.tên = name.value;
    scores.toán = m;
    scores.lý = p;
    scores.hóa = c;

    name.value = null;
    math.value = null;
    physic.value = null;
    chemist.value = null;

    var row = table.insertRow(-1);
    var cell6 = row.insertCell(0);
    var cell5 = row.insertCell(0);
    var cell4 = row.insertCell(0);
    var cell3 = row.insertCell(0);
    var cell2 = row.insertCell(0);
    var cell1 = row.insertCell(0);

    var i = 0;
    while (i < table.rows.length - 1) {
        i++;
    }

    k = i.toFixed(0);

    cell1.innerHTML = k;
    cell2.innerHTML = scores.tên;
    cell3.innerHTML = scores.toán;
    cell4.innerHTML = scores.lý;
    cell5.innerHTML = scores.hóa;
    cell6.innerHTML = "?";
}

function ave() {
    if (table.rows.length > 1) {

        for (var i = 1, n = table.rows; i < n.length; i++) {
            var c2, c3, c4, aver;
            c2 = Number(n[i].cells[2].innerHTML);
            c3 = Number(n[i].cells[3].innerHTML);
            c4 = Number(n[i].cells[4].innerHTML);
            aver = ((c2 + c3 + c4) / 3).toFixed(1);
            n[i].cells[5].innerHTML = aver;
        }

    } else {

        alert("Hãy nhập ít nhất điểm của 1 học sinh!");
        return null;

    }
}

function excellent() {
    for (var i = 1, n = table.rows; i < n.length; i++) {
        var c5 = n[i].cells[5].innerHTML;
        if (c5 != '?') {

            var ave = Number(c5);
            if (ave >= 8.0) {
                n[i].style.color = "red";
            }

        } else {
            alert("Xin hãy tính tất cả điểm trung bình trước!");
            break;
        }
    }
}

document.getElementById("btn").addEventListener("click", submit);
document.getElementById("btn-ave").addEventListener("click", ave);
document.getElementById("btn-exc").addEventListener("click", excellent);