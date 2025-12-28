const donateActionButton = document.querySelectorAll(".doante-action-btn")

for(const button of donateActionButton){
    // noakhaliBtn clicked
    const noakhaliBtn = button.addEventListener("click", function(){
        const noakhaliInputNumber = getInputFieldValueById("noakhali-input");
        const feniInputNumber = getInputFieldValueById("feni-input")
        const quotaInputNumber = getInputFieldValueById("quota-input");

        // take main balance
        const mainBalance = getTextValuebyId("main-balance"); 

        // take every donations text number
        const noaKhaliDonation = getTextValuebyId("noakhali-donation");
        const feniDonation = getTextValuebyId("feni-donation");
        const quotaDonation = getTextValuebyId("quota-donation");


        // noakhali btn
        if(noakhaliInputNumber !== 0 && !isNaN(noakhaliInputNumber) && button.id === "noakhali-btn"){
            const updateBalance = mainBalance - noakhaliInputNumber;
            const updateNoakhali = noaKhaliDonation + noakhaliInputNumber;
            // show main and noakhali balance
            document.getElementById("main-balance").innerText = updateBalance;
            document.getElementById("noakhali-donation").innerText = noakhaliInputNumber;
        }

        // feni btn
         else if (feniInputNumber !== 0 && !isNaN(feniInputNumber) && button.id === "feni-btn") {

            const updatedMain = mainBalance - feniInputNumber;
            const updatedFeni = feniDonation + feniInputNumber;

            document.getElementById("main-balance").innerText = updatedMain;
            document.getElementById("feni-donation").innerText = updatedFeni;
        }
        


        // Quota button
        else if (quotaInputNumber !== 0 && !isNaN(quotaInputNumber) && button.id === "quota-btn") {

            const updatedMain = mainBalance - quotaInputNumber;
            const updatedQuota = quotaDonation + quotaInputNumber;

            document.getElementById("main-balance").innerText = updatedMain;
            document.getElementById("quota-donation").innerText = updatedQuota;
        }

        else{
            alert("sorry number na")
        }
        


        
        
    })

    

}
