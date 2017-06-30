/**
 * Created by Nishan on 5/1/2017.
 */
'use strict';

angular.module('mainModule').controller('emailController2', ['$scope', '$http', 'EmailDataStore',
    function ($scope, $http, EmailDataStore) {
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
        $scope.emailData = EmailDataStore.get();
        $scope.emailContent.to = $scope.emailData.to;
        $scope.emailContent.subject = 'Drug Reorder Request For '+$scope.emailData.name;
        $scope.emailContent.text = 'Dear Officer,\n'+
                                    'The Quantities of the below Drugs are Low.\n'+
                                    'Name     \t: '+$scope.emailData.name+'\n'+
                                    'Catagary \t: '+$scope.emailData.category+'\n'+
                                    'Price(Rs) \t:'+$scope.emailData.price+'\n'+
                                    'Quantity in Hand :'+$scope.emailData.qty+'\n'+
                                    'Please be kind enough to send us new stocks'+'\n\n'+


                                    'Best Regards,'+'\n'+
                                    'Chief Pharmasist';
        $scope.emailContent.date = new Date().toDateString();


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
        };

        $http.get('/emails').then(function(emailData){
            $scope.emailHistory = emailData.data;
        });
    }
]);