/**
 * Created by Nishan on 6/27/2017.
 */
'use strict';
var jsPDF = require('./jspdf.debug');

var doc = new jsPDF();
doc.add('This is test string', 10, 10);
console.log(doc.getFontList());