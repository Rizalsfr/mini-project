function keliling() {
        const s1 = document.getElementById("s1");
        const s2 = document.getElementById("s2");
        const s3 = document.getElementById("s3");

        const no1 = parseFloat(s1.value.trim(), 10);
        const no2 = parseFloat(s2.value.trim(), 10);
        const no3 = parseFloat(s3.value.trim(), 10);
        hasil = no1 + no2 + no3;

        const result = hasil;
    document.getElementById("hasilnya").textContent = result;
    return false;
}

function kelilingReset() {
    document.getElementById("resetKeliling").reset();
}

function luas() {
        const alas = document.getElementById("alas");
        const tinggi = document.getElementById("tinggi");

        const a = parseFloat(alas.value.trim(), 10);
        const t = parseFloat(tinggi.value.trim(), 10);
        luasSegitiga = 0.5 * a * t;

        const result = luasSegitiga;
    document.getElementById("hasil").textContent = result;
    return false;
}

function luasReset() {
    document.getElementById("resetLuas").reset();
}


