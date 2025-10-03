
function printSection(id) {
  // Ambil konten bagian yang mau diprint
  let content = document.getElementById(id).innerHTML;

  // Buka jendela baru untuk print
  let printWindow = window.open("", "", "width=800,height=600");
  printWindow.document.write("<html><head><title>Print</title>");
  printWindow.document.write("<link rel='stylesheet' href='style.css'>"); // biar ikut CSS utama
  printWindow.document.write("</head><body>");
  printWindow.document.write(content);
  printWindow.document.write("</body></html>");
  printWindow.document.close();
  printWindow.print();
}


