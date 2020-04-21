    function calculateCompoundTable()
    {

        var d1 = new Date();

        //number of milliseconds since 1/1/1970
        var n1 = d1.getTime();


        //When the calculate button is pressed, do this:
        var balance = parseFloat(document.getElementById("principal").value);
        var interestRate = parseFloat(document.getElementById("interest").value/100.0);
        var terms = parseInt(document.getElementById("terms").value);

        //set the div string 'Result'
        var div = document.getElementById("Result");

        //clears the results so you can re-make the table with new inputs without having to refresh the page
        div.innerHTML = "";

        //makes sure the inputs are valid and shows a message if they are not
        var balVal = validateCompoundInputs(balance);
        var intrVal = validateCompoundInputs(interestRate);

        if (balVal && intrVal)
        {
            //Returns div string if inputs are valid
            div.innerHTML += compoundAmortization(balance, interestRate, terms);
        }
        else
        {
            //returns error if inputs are invalid
            div.innerHTML += "Please Check your inputs and retry - invalid values.";
        }
        var d2 = new Date();
        var n2 = d2.getTime();




    }

     //function to make the table
     //Does the math to find the parts/info of the loan that are necessary for making the table.
     //Displays ammortization table

    function compoundAmortization(balance, interestRate, terms)
    {
        //Calculate the monthly rate
        var monthlyRate = interestRate/12;

        //Calculate the payment
        var payment = balance * (monthlyRate/(1-Math.pow(1+monthlyRate, -terms)));

        //begin building the return string for the display of the amortization table
        var result = "Loan amount: $" + balance.toFixed(2) +  "<br />" +
            "Interest rate: " + (interestRate*100).toFixed(2) +  "%<br />" +
            "Number of months: " + terms + "<br />" +
            "Monthly payment: $" + payment.toFixed(2) + "<br />" +
            "Total paid: $" + (payment * terms).toFixed(2) + "<br /><br />";

        //add header row for table to labels
        result += "<table border='1'><tr><th>Month #</th><th>Balance</th>" +
            "<th>Interest</th><th>Principal</th>";


         // Loop that calculates the monthly Loan amounts
         //adds that amount to the table for displaying
        for (var count = 0; count < terms; ++count)
        {
            //in-loop interest amount holder
            var interest = 0;

            //in-loop monthly principal amount holder
            var monthlyPrincipal = 0;

            //start a new table row on each loop iteration
            result += "<tr align=center>";

            //display the month number in col 1 using the loop count variable
            result += "<td>" + (count + 1) + "</td>";


            //code for displaying in loop balance
            result += "<td> $" + balance.toFixed(2) + "</td>";

            //calc the in-loop interest amount and display
            interest = balance * monthlyRate;
            result += "<td> $" + interest.toFixed(2) + "</td>";

            //calc the in-loop monthly principal and display
            monthlyPrincipal = payment - interest;
            result += "<td> $" + monthlyPrincipal.toFixed(2) + "</td>";

            //end the table row on each iteration of the loop
            result += "</tr>";

            //update the balance for each loop iteration
            balance = balance - monthlyPrincipal;
        }

        //closes the open table when, as this is the end of making the table for display
        result += "</table>";

        function myFunction() {
        var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
     }

        //puts the table on the page
        return result;
    }

    function validateCompoundInputs(value)
    {
        //checks to see if the user gave valid inputs and tells them with an error message if they have not
        if ((value == null) || (value == ""))
        {
            return false;
        }
        else
        {
            return true;
        }
    }

















 function calculateSimpleTable()
    {
        //When the calculate button is pressed, do this:
        var loanAmount = parseFloat(document.getElementById("loanAmount").value);
        //divide the interest variable by 100 to get the percentage
        var interestRate = parseFloat(document.getElementById("interest").value/100.0);
        var duration = parseInt(document.getElementById("duration").value);

        //set the div string 'Result'
        var div = document.getElementById("Result");

        //clears the results so you can re-make the table with new inputs without having to refresh the page
        div.innerHTML = "";

        //makes sure the inputs are valid and shows a message if they are not
        var balVal = validateCompoundInputs(loanAmount);
        var intrVal = validateCompoundInputs(interestRate);

        if (balVal && intrVal)
        {
            //Returns div string if inputs are valid
            div.innerHTML += simpleAmortization(loanAmount, interestRate, duration);
        }
        else
        {
            //returns error if inputs are invalid
            div.innerHTML += "Please Check your inputs and retry - invalid values.";
        }
    }


function simpleAmortization(loanAmount, interestRate, duration)
    {
        //Calculate the monthly rate by dividing by 12 (12 months)
        var monthlyRate = interestRate/12;

        var interestAmount = monthlyRate * loanAmount;

        var principlePmt = loanAmount / duration;

        //Calculate the payment
        var payment = interestAmount + principlePmt;

        //begin building the return string for the display of the amortization table
        var result = "Loan amount: $" + loanAmount.toFixed(2) +  "<br>" +
            "Interest rate: " + (interestRate*100).toFixed(2) +  "%<br>" +
            "Number of months: " + duration + "<br>" +
            "Monthly payment: $" + payment.toFixed(2) + "<br>" +
            "Total paid: $" + (payment * duration).toFixed(2) + "<br><br>";

        //add header row for table to labels
        result += "<table border='1'><tr><th>Month #</th><th>Beginning Balance</th>" +
            "<th>Interest</th><th>Principal</th><th>Payment</th><th>Ending Balance</th>";


         // Loop that calculates the monthly Loan amounts
         //adds that amount to the table for displaying
        for (var count = 0; count < duration; ++count)
        {

            //start a new table row on each loop iteration
            result += "<tr align=center>";

            //display the month number in col 1 using the loop count variable
            result += "<td>" + (count + 1) + "</td>";

            //code for displaying in loop balance
            result += "<td> $" + loanAmount.toFixed(2) + "</td>";

            //calc the in-loop interest amount and display
            result += "<td> $" + interestAmount.toFixed(2) + "</td>";

            //calc the in-loop monthly principal and display
            result += "<td> $" + principlePmt.toFixed(2) + "</td>";

            result += "<td>" + payment.toFixed(2) + "</td>";

            //update the balance for each loop iteration
            loanAmount = loanAmount - principlePmt;

            //ending balance
            result += "<td>" + loanAmount.toFixed(2) + "</td>";

            //end the table row on each iteration of the loop
            result += "</tr>";


        }

        //closes the open table when it is the end of making the table for display
        result += "</table>";

        //puts the table on the page
        return result;
    }
