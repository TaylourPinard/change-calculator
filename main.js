$(document).ready( function(){
    var amountDue = document.getElementById('amount-due');
    var amountRecived = document.getElementById('amount-recieved');
    const calculateButton = document.getElementById('calculate-change');
    const dollarsOutput = document.getElementById('dollars-output');
    const quartersOutput = document.getElementById('quarters-output');
    const dimesOutput = document.getElementById('dimes-output');
    const nickelsOutput = document.getElementById('nickels-output');
    const penniesOutput = document.getElementById('pennies-output');

    var change = [0, 0, 0, 0, 0];
    calculateButton.addEventListener('click', function(){
        amountDue = amountDue.value;
        amountRecived = amountRecived.value;
        if(amountRecived < amountDue){
            alert("Not enough tender to complete sale");
        }
        else {
            clearAnyPrevious();
            var changeDue = amountRecived - amountDue;
            console.log(changeDue);
            appendResults(calculateChange(changeDue));
        }
    });

    function calculateChange(changeDue){
        change[0] = Math.floor(changeDue / 1);
        changeDue -= change[0];
        change[1] = Math.floor(changeDue / 0.25);
        changeDue -= change[1] * 0.25;
        change[2] = Math.floor(changeDue / 0.1);
        changeDue -= change[2] * 0.1;
        change[3] = Math.floor(changeDue / 0.05);
        changeDue -= change[3] * 0.05;
        change[4] = Math.floor(changeDue / 0.01);
        changeDue -= change[4] * 0.01;
        return change;
    }

    function appendResults(change){
        dollarsOutput.append(change[0]);
        quartersOutput.append(change[1]);
        dimesOutput.append(change[2]);
        nickelsOutput.append(change[3]);
        penniesOutput.append(change[4]);
    }

    function clearAnyPrevious(){
        change = [0, 0, 0, 0, 0];
        document.getElementById('dollars-output').innerHTML = "";
        document.getElementById('quarters-output').innerHTML = "";
        document.getElementById('dimes-output').innerHTML = "";
        document.getElementById('nickels-output').innerHTML = "";
        document.getElementById('pennies-output').innerHTML = "";
    }
});