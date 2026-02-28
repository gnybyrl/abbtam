function hideAll() {
    document.getElementById("kredit").style.display = "none"
    document.getElementById("depozit").style.display = "none"
    document.getElementById("avtomobil").style.display = "none"
    document.getElementById("ipoteka").style.display = "none"
}

function hideCss() {
    document.getElementById("kreditBtn").style.color = ""
    document.getElementById("kreditBtn").style.backgroundColor = ""

    document.getElementById("depozitBtn").style.color = ""
    document.getElementById("depozitBtn").style.backgroundColor = ""

    document.getElementById("avtomobilBtn").style.color = ""
    document.getElementById("avtomobilBtn").style.backgroundColor = ""

    document.getElementById("ipotekaBtn").style.color = ""
    document.getElementById("ipotekaBtn").style.backgroundColor = ""
}


//                 KREDIT BASLADI

let kreditMebleg = document.getElementById("kreditMebleg")
let kreditMuddet = document.getElementById("kreditMuddet")
let kreditFaiz = document.getElementById("kreditFaiz")
let ntcKredit = document.getElementById("ntcKredit")
function showKredit() {
    hideAll()
    document.getElementById("kredit").style.display = "flex"
    hideCss()
    document.getElementById("kreditBtn").style.backgroundColor = "black"
    document.getElementById("kreditBtn").style.color = "white"
    kreditHesabla()
}



let meblegK = 5000
let muddetK = 12
let faizK = 10.9


function kreditHesabla() {
        let ayliqFaizK = faizK / 100 / 12
        let ust = ayliqFaizK * Math.pow(1 + ayliqFaizK, muddetK)
        let alt = Math.pow(1 + ayliqFaizK, muddetK) - 1        
        let ayliqOdenisK = meblegK * (ust / alt)        
        ayliqOdenisK = ayliqOdenisK.toFixed(2)
        
        ntcKredit.innerHTML = ayliqOdenisK + " ₼"
    }
    
    
    
    function meblegDeyisK(value) {
        meblegK = value
        kreditMebleg.innerHTML = value + " ₼"
        kreditHesabla()
    }
    
    function muddetDeyisK(value) {
        muddetK = value
        kreditMuddet.innerHTML = value + " ay"
        kreditHesabla()
    }
    
    function faizDeyisK(value) {
        faizK = value
        kreditFaiz.innerHTML = value + " %"
        kreditHesabla()
    }
    
    
    //               KREDIT BITDI
    
    
    //                 DEPOZIT BASLADI
    
    
    
    let faizD = 8
    let muddetD = 12
    let zamanTipiD = "ay"
    
    let depozitMebleg = document.getElementById("depozitMebleg")
    let netice = document.getElementById("ntcDepozit")
    let faizAy = document.getElementById("faizAy")
    
    let range = document.getElementById("rangeD")
    let faizDerece = document.getElementById("faizDerece")
    let valyuta = "₼"
    let valyutaSpan = document.getElementsByClassName("valyuta")


    
    function showDepozit() {
        hideAll()
        document.getElementById("depozit").style.display = "flex"
        hideCss()
        document.getElementById("depozitBtn").style.backgroundColor = "black"
        document.getElementById("depozitBtn").style.color = "white"
        depozitHesabla()
    }
    
    function meblegDeyisD(value) {
        depozitMebleg.innerHTML = value + "" + valyuta
        depozitHesabla()
    }
    
    
    let btnler = document.querySelectorAll("#aylar button")
    
    btnler.forEach(btn => {
        btn.onclick = function () {
            muddetD = Number(this.textContent) 
            depozitHesabla()
        }
    })
        
    
    function aznBtn() {
        valyuta = "₼"
        faizD = 8
        
        for (let i = 0; i < valyutaSpan.length; i++) {
            valyutaSpan[i].innerHTML = "₼"
        }
        
        faizDerece.innerHTML = "8 %"
        depozitHesabla()
    }
    
    
    
    
    function usdBtn() {
        valyuta = "$"
        faizD = 2.5
        
        for (let i = 0; i < valyutaSpan.length; i++) {
            valyutaSpan[i].innerHTML = "$"
        }
        
        faizDerece.innerHTML = "2.5 %"
        depozitHesabla()
    }




function depozitHesabla() {


    
    let meblegD = range.value * 1
    let qazancD = 0
    
    if (zamanTipiD == "ay") {
        qazancD = meblegD * faizD / 100 * muddetD / 12
    } else {
        qazancD = meblegD * faizD / 100 * muddetD
    }
    let ayliqD = qazancD / muddetD
    
    netice.innerHTML = qazancD.toFixed(2) + "" +  valyuta
    faizAy.innerHTML = ayliqD.toFixed(2) + "" +  valyuta
    
    
}

let muddetBtnler = document.querySelectorAll("#aylar button")

for (let i = 0; i < muddetBtnler.length; i++) {
    muddetBtnler[i].onclick = function () {
        muddetD = Number(this.textContent)
        depozitHesabla()
    }
}


function aylarBtn() {

    zamanTipiD = "ay"
    let ayBtn = document.getElementsByClassName("ayBtn")
    let ilBtn = document.getElementsByClassName("ilBtn")

    for (let i = 0; i < ayBtn.length; i++) {
        ayBtn[i].style.display = "inline-block"
    }

    for (let i = 0; i < ilBtn.length; i++) {
        ilBtn[i].style.display = "none"
    }

    depozitHesabla()
}


function illerBtn() {

    zamanTipiD = "il"
    let ayBtn = document.getElementsByClassName("ayBtn")
    let ilBtn = document.getElementsByClassName("ilBtn")

    for (let i = 0; i < ayBtn.length; i++) {
        ayBtn[i].style.display = "none"
    }

    for (let i = 0; i < ilBtn.length; i++) {
        ilBtn[i].style.display = "inline-block"
    }

    depozitHesabla()
}



//  AVTO BASLADI

let avtoMebleg = document.getElementById('avtoMebleg')
let avtoMuddet = document.getElementById('avtoMuddet')
let avtoFaiz = document.getElementById('avtoFaiz')

let meblegDeyisA = document.getElementById("meblegDeyisA")
let faizDeyisA = document.getElementById("faizDeyisA")
let muddetDeyisA = document.getElementById("muddetDeyisA")

let ntcAvtomobil = document.getElementById("ntcAvtomobil")
let kreditAvtomobil = document.getElementById("kreditAvtomobil")
let faizAvtomobil = document.getElementById("faizAvtomobil")
let komissiyaAvtomobil = document.getElementById("komissiyaAvtomobil")
let umumiAvtomobil = document.getElementById("umumiAvtomobil")

let avtoMinQiymet = document.getElementById("avtoMinQiymet")

let illikFaiz = 14


function showAvtomobil() {
    hideAll()
    document.getElementById("avtomobil").style.display = "flex"
    hideCss()
    document.getElementById("avtomobilBtn").style.backgroundColor = "black"
    document.getElementById("avtomobilBtn").style.color = "white"
    hesabla()
}

function hesabla() {
    
    let qiymet = Number(meblegDeyisA.value)
    let ilkinFaiz = Number(faizDeyisA.value)
    let muddet = Number(muddetDeyisA.value)
    
    avtoMebleg.innerHTML = qiymet + " ₼"
    avtoFaiz.innerHTML = ilkinFaiz + " %"
    avtoMuddet.innerHTML = muddet + " ay"
    faizAvtomobil.innerHTML = illikFaiz + " %"
    
    let ilkinOdenis = qiymet * ilkinFaiz / 100
    let kreditMeblegi = qiymet - ilkinOdenis
    let ayliqFaiz = illikFaiz / 12 / 100
    let ayliqOdenis =
    kreditMeblegi *
    (ayliqFaiz * Math.pow(1 + ayliqFaiz, muddet)) /
    (Math.pow(1 + ayliqFaiz, muddet) - 1)
    
    let umumiOdenis = ayliqOdenis * muddet
    
    let komissiya = kreditMeblegi * 0.005
    if (komissiya < 20) {
        komissiya = 20
    }
    
    ntcAvtomobil.innerHTML = ayliqOdenis.toFixed(2) + " ₼"
    kreditAvtomobil.innerHTML = kreditMeblegi.toFixed(2) + " ₼"
    komissiyaAvtomobil.innerHTML = komissiya.toFixed(2) + " ₼"
    umumiAvtomobil.innerHTML = (umumiOdenis + komissiya).toFixed(2) + " ₼"
}


meblegDeyisA.oninput = hesabla
faizDeyisA.oninput = hesabla
muddetDeyisA.oninput = hesabla



function secElektrik() {
    illikFaiz = 14
    faizDeyisA.min = 10
    avtoMinQiymet.innerHTML = "10 %"
    
    if (faizDeyisA.value < 10) {
        faizDeyisA.value = 10
    }
    
    hesabla()
}

function secHibrid() {
    illikFaiz = 14.5
    faizDeyisA.min = 20
    avtoMinQiymet.innerHTML = "20 %"
    
    if (faizDeyisA.value < 20) {
        faizDeyisA.value = 20
    }
    
    hesabla()
}

function secDiger() {
    illikFaiz = 15
    faizDeyisA.min = 40
    avtoMinQiymet.innerHTML = "40 %"
    
    if (faizDeyisA.value < 40) {
        faizDeyisA.value = 40
    }
    
    hesabla()
}


//               IPOTEKA BASLADI

let ipotekaMebleg = document.getElementById('ipotekaMebleg')
let ipotekaMuddet = document.getElementById('ipotekaMuddet')

let meblegDeyisI = document.getElementById("meblegDeyisI")
let muddetDeyisI = document.getElementById("muddetDeyisI")

let ntcIpoteka = document.getElementById('ntcIpoteka')
let faizIl = document.getElementById('faizIl')
let illikDerece = document.getElementById('illikDerece')

let faizIp = 4



function showIpoteka() {
    hideAll()
    document.getElementById("ipoteka").style.display = "flex"
    hideCss()
    document.getElementById("ipotekaBtn").style.backgroundColor = "black"
    document.getElementById("ipotekaBtn").style.color = "white"
    ipotekaHesabla()
}

function ipotekaHesabla() {
    let mebleg = Number(meblegDeyisI.value)
    let il = Number(muddetDeyisI.value)

    let aySayi = il * 12
    let ayliqFaiz = faizIp / 100 / 12

    let ayliqOdenis = mebleg * (ayliqFaiz * Math.pow(1 + ayliqFaiz, aySayi)) / (Math.pow(1 + ayliqFaiz, aySayi) - 1)

    ntcIpoteka.innerHTML = ayliqOdenis.toFixed(2) + " ₼"
    ipotekaMebleg.innerHTML = mebleg + " ₼"
    ipotekaMuddet.innerHTML = il + " il"
    faizIl.innerHTML = mebleg + " ₼"
    illikDerece.innerHTML = faizIp + " %"
}

function faizSec(deyer) {
    faizIp = deyer
    ipotekaHesabla()
}

meblegDeyisI.oninput = ipotekaHesabla
muddetDeyisI.oninput = ipotekaHesabla




hideAll()
showKredit()