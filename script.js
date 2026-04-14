let buku = [
  {
    nama:"Berani Tidak Disukai",
    kategori:"Self Development",
    gambar:"asd.png"
  },
  {
    nama:"Think and Grow Rich",
    kategori:"Bisnis",
    gambar:"dsad.png"
  },
  {
    nama:"Menggali Potensi Diri",
    kategori:"Motivasi",
    gambar:"meng.png"
  }
];

function tampilkanBuku(){
  const list = document.getElementById("product-list");

  list.innerHTML = `
    <div style="
      display:flex;
      gap:30px;
      flex-wrap:wrap;
      align-items:flex-start;
    ">
  `;

  buku.forEach(b => {
    list.innerHTML += `
      <div style="
        display:inline-block;
      ">
        <img src="${b.gambar}" 
             alt="${b.nama}"
             style="
               display:block;
               max-width:180px;
               height:auto;
               border-radius:8px;
             ">
        
        <h3 style="margin-top:8px; font-size:14px;">
          ${b.nama}
        </h3>

        <p style="color:gray; font-size:13px;">
          ${b.kategori}
        </p>
      </div>
    `;
  });

  list.innerHTML += `</div>`;
}