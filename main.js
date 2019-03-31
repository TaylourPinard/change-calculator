$(document).ready( function(){
    var amountDue = document.getElementById('amount-due');
    var amountReceived = document.getElementById('amount-received');
    const calculateButton = document.getElementById('calculate-change');
    const dollarsOutput = document.getElementById('dollars-output');
    const quartersOutput = document.getElementById('quarters-output');
    const dimesOutput = document.getElementById('dimes-output');
    const nickelsOutput = document.getElementById('nickels-output');
    const penniesOutput = document.getElementById('pennies-output');

    var change = [0, 0, 0, 0, 0];
    calculateButton.addEventListener('click', function(){
        var total = amountDue.value;
        var tendered = amountReceived.value;
        var changeDue = tendered - total;
        changeDue = Math.round(changeDue * 100) / 100;
        if (changeDue < 0){
            alert("not enough tender to complete sale");
        }
        else {
            clearAnyPrevious();
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
        change[4] = Math.round(changeDue * 100);
        if(change[4] == 5){
            change[4] = 0;
            change[3] = 1;
        }
        changeDue = 0;
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
        change.values = [0, 0, 0, 0, 0];
        dollarsOutput.innerHTML = "";
        quartersOutput.innerHTML = "";
        dimesOutput.innerHTML = "";
        nickelsOutput.innerHTML = "";
        penniesOutput.innerHTML = "";
    }
});