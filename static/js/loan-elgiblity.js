 function eligiable() {
     var P1 = document.formval2.pr_amt2.value; // pick the form input value..
     var rate1 = document.formval2.int_rate2.value; // pick the form input value..
     var n1 = document.formval2.period2.value; // pick the form input value..
     var r1 = rate1 / (12 * 100); // to calculate rate percentage..
     var prate1 = (P1 * r1 * Math.pow((1 + r1), n1 * 12)) / (Math.pow((1 + r1), n1 * 12) - 1); // to calculate compound interest..
     var emi1 = Math.ceil(prate1 * 100) / 100; // to parse emi amount..
     var existing = document.formval2.ExLoan.value;
     var existingLoan = (existing - (existing * 60 / 100));
     var income1 = document.formval2.NetIncome.value;
     if (income1 <= 14999) {
         var incomere = ((income1) * 40 / 100) - existingLoan;
     } else if (income1 <= 29999) {
         var incomere = ((income1) * 45 / 100) - existingLoan;
     } else if (income1 >= 30000) {
         var incomere = ((income1) * 50 / 100) - existingLoan;
     }
     var incomereq = Math.floor(incomere / emi1 * P1);
     var prate2 = (incomereq * r1 * Math.pow((1 + r1), n1 * 12)) / (Math.pow((1 + r1), n1 * 12) - 1); // to calculate compound interest2..
     var emi2 = Math.ceil((prate2) * 100) / 100; // to parse emi2 amount..   //Check again Reminder
     // to assign value in field1 as fixed upto two decimal..
     if (incomereq > P1) {
         document.formval3.field13.value = ("You are Eligible for this loan");
         document.formval3.field11.value = (("₹ " + P1 + " at EMI " + "₹ " + emi1.toFixed(0)));
         document.formval3.field12.value = ("You are Eligible for a maximum loan of " + ("₹ " + incomereq + " at EMI " + "₹ " + emi2.toFixed(0)));
          
     } else {
         document.formval3.field13.value = ("You are not Eligible for this loan");
         document.formval3.field11.value = ("");
         document.formval3.field12.value = ("You are Eligible for a maximum loan of " + ("₹ " + incomereq + " at EMI " + "₹ " + emi2.toFixed(0)));
     }

     //to assign value in field2.. 
 }
