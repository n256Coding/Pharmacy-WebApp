/**
 * Created by Nishan on 4/29/2017.
 */
'use strict';

var PDFDocument = require('pdfkit');
var blobStream = require('blob-stream');
var doc = new PDFDocument();
var stream = doc.pipe(blobStream());

doc.fontSize(30);
doc.text('Hello World!');
doc.end();

var getPDF = function() {
    stream.on('finish', function () {
        return stream.toBlobURL('application/pdf');
    });
};

module.exports = getPDF;