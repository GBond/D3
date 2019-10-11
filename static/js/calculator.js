 
        $(document).ready(function(){
            $("#la").bind(
                "slider:changed", function (event, data) {              
                    $("#la_value").html(data.value.toFixed(0)); 
                    calculateEMI();
                }
            );

            $("#nm").bind(
                "slider:changed", function (event, data) {              
                    $("#nm_value").html(data.value.toFixed(0)); 
                    calculateEMI();
                }
            );
            
            $("#roi").bind(
                "slider:changed", function (event, data) {              
                    $("#roi_value").html(data.value.toFixed(2)); 
                    calculateEMI();
                }
            );
            
            function calculateEMI(){
                var loanAmount = $("#la_value").html();
                var numberOfMonths = $("#nm_value").html();
                var rateOfInterest = $("#roi_value").html();
                var monthlyInterestRatio = (rateOfInterest/100)/12;
                
                var top = Math.pow((1+monthlyInterestRatio),numberOfMonths);
                var bottom = top -1;
                var sp = top / bottom;
                var emi = ((loanAmount * monthlyInterestRatio) * sp);
                var full = numberOfMonths * emi;
                var interest = full - loanAmount;
                var int_pge =  (interest / full) * 100;
                $("#tbl_int_pge").html(int_pge.toFixed(2)+" %");
                //$("#tbl_loan_pge").html((100-int_pge.toFixed(2))+" %");
                
                var emi_str = emi.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                var loanAmount_str = loanAmount.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                var full_str = full.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                var int_str = interest.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                
                $("#emi").html(emi_str);
                $("#tbl_emi").html(emi_str);
                $("#tbl_la").html(loanAmount_str);
                $("#tbl_nm").html(numberOfMonths);
                $("#tbl_roi").html(rateOfInterest);
                $("#tbl_full").html(full_str);
                $("#tbl_int").html(int_str);
                var detailDesc = "<thead><tr class='table-head'><th>Payment No.</th><th>Begining Balance</th><th>EMI</th><th>Principal</th><th>Interest</th><th>Ending Balance</th></thead><tbody>";
                var bb=parseInt(loanAmount);
                var int_dd =0;var pre_dd=0;var end_dd=0;
                for (var j=1;j<=numberOfMonths;j++){
                    int_dd = bb * ((rateOfInterest/100)/12);
                    pre_dd = emi.toFixed(2) - int_dd.toFixed(2);
                    end_dd = bb - pre_dd.toFixed(2);
                    detailDesc += "<tr><td>"+j+"</td><td>"+bb.toFixed(2)+"</td><td>"+emi.toFixed(2)+"</td><td>"+pre_dd.toFixed(2)+"</td><td>"+int_dd.toFixed(2)+"</td><td>"+end_dd.toFixed(2)+"</td></tr>";
                    bb = bb - pre_dd.toFixed(2);
                }
                    detailDesc += "</tbody>";
                    $("#loantable").html(detailDesc);
                 
            }
            calculateEMI();

        });


