/**
 * Created by Nishan on 5/1/2017.
 */
'use strict';

angular.module('mainModule').controller('emailController', ['$scope', '$http', 'EmailDataStore', 'OrderInvoiceService',
    function ($scope, $http, EmailDataStore, OrderInvoiceService) {
        function validateEmailAddress(email){
            email = email.toString();
            if(email.indexOf('@') > 0 && email.indexOf('.') > -1 && email.lastIndexOf('.') > email.indexOf('@'))
            {
                return false;
            }
            else
                return true;

        }


        $scope.emailContent = {};
        //$scope.emailData = [];
        $scope.emailData = EmailDataStore.get();
        $scope.emailContent.to = '';
        $scope.emailContent.subject = 'Drug Order Request';
        $scope.emailContent.text = 'Dear Officer,\n'+
                                    'The Quantities of the below Drugs are Low.\n'+
                                    'Name\t\t\t Qty\n';
        for(var i=0; i<$scope.emailData.length; i++){
            $scope.emailContent.text = $scope.emailContent.text.toString().concat($scope.emailData[i].drug_name.toString(),'\t\t', $scope.emailData[i].approved_quantity, '\n');
        }
        $scope.emailContent.text = $scope.emailContent.text +'Please be kind enough to send us new stocks'+'\n\n'+
                                                                'Best Regards,'+'\n'+
                                                                'Chief Pharmasist';
        $scope.emailContent.date = new Date().toDateString();
        console.log($scope.emailContent.htmlContent);

        $scope.emailContent.htmlContent = "<div class='well'>" +
                        "<p>Dear Officer, </br>The Quantities of the below Drugs are Low.</p>" +
                        "<table class='table'>" +
                        "<thead>" +
                        "<tr>" +
                        "<th style='width: 100px;'>Name</th>" +
                        "<th style='width: 100px;'>Type</th>" +
                        "<th style='width: 30px;'>Qty</th>" +
                        "</tr>" +
                        "</thead>" +
                        "<tbody>";
                        for(var i=0; i<$scope.emailData.length; i++){
                        //for(var data in $scope.emailData){
                            $scope.emailContent.htmlContent += "<tr><td>" + $scope.emailData[i].drug_name+"</td>"+
                                "<td>" + $scope.emailData[i].drug_type + "</td>" +
                                "<td>" + $scope.emailData[i].approved_quantity + "</td></tr>";
                        }
        $scope.emailContent.htmlContent += '</tbody>'+
                        "</table>" +
                        "<p>Please be kind enough to send us new stocks</br>" +
                        "</br>" +
                        "Best Regards,<br>" +
                        "Chief Pharmasist</p>" +
                        "</div>";


        $scope.sendEmail = function () {
            console.log('email controller: ');
            if($scope.emailContent.to.toString().trim() == "") {
                alert('Please enter receiver email address');
                return;
            }
            else if(validateEmailAddress($scope.emailContent.to)){
                alert('Incorrect email address, Check email address again');
                return;
            }
            $http.post('/stocks/email', $scope.emailContent).then(function (output) {
                console.log(output.data);
                alert(output.data+'Message sent successfully');
            });
            $http.put('/drugRequests/ordered', $scope.emailData).then(function (success) {
                console.log(success);
            });
            OrderInvoiceService.makeOrder();
        };

        $http.get('/emails').then(function(emailData){
            $scope.emailHistory = emailData.data;
        });
    }
]);