/**
 * Created by Nishan on 6/29/2017.
 */
'use strict';

function showPDF() {
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.canvas.height = 72 * 11;
    pdf.canvas.width = 72 * 8.5;
    html2pdf(document.body, pdf, function(pdf){
        pdf.output('dataurlnewwindow');
    });
}

/*
 doc.output('save', 'filename.pdf'); //Try to save PDF as a file (not works on ie before 10, and some mobile devices)
 doc.output('datauristring');        //returns the data uri string
 doc.output('datauri');              //opens the data uri in current window
 doc.output('dataurlnewwindow');     //opens the data uri in new window
 */