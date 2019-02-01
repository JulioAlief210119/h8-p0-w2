var nama = 'Xeno';
var peran = 'Tukang';

if (nama === '' ) {
    console.log("Nama harus diisi!");
}

else if(peran === '') {
    console.log("Halo "+ nama+", Pilih peranmu untuk memulai game!");
}

else  {
    console.log ("Selamat datang di Dunia Proxytia, "+nama);

    if(peran === 'Ksatria')        
        console.log( "Halo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu!");
    if(peran === 'Tabib')
        console.log("Halo "+peran+" "+nama+", kamu akan membantu temanmu yang terluka.");
    if(peran === 'Penyihir')
        console.log("Halo "+peran+" "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
    if(peran === 'Pedagang')
        console.log ("Halo "+peran+" "+nama+", Mulailah membuat platform dagangmu agar penghasilanmu dapat meningkat");
    if(peran !== '', 'Ksatria', 'Tabib', 'Penyihir', 'Pedagang')
        console.log("Maaf, telah terjadi kesalahan pada sistem!")
        console.log("Silahkan Re-Login untuk mengatasi masalah ini!")
}

