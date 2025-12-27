const donateActionButton = document.querySelectorAll(".doante-action-btn")

for(const button of donateActionButton){
    // noakhaliBtn clicked
    const NoakhaliBtn = button.addEventListener("click", function(){
        const noakhaliInputNumber = getInputFieldValueById("noakhali-input");
        const mainBalance = getTextValuebyId("main-balance"); 
        const mainUpdateBalance = mainBalance - noakhaliInputNumber;

        // show the main balance
        document.getElementById("main-balance").innerText = mainUpdateBalance;
        const noaKhaliDonation = getTextValuebyId("noakhali-donation")

        const noaKhaliDonationtotal = noaKhaliDonation + noakhaliInputNumber;
        
        // show the noakhali total balance-
        document.getElementById("noakhali-donation").innerText = noaKhaliDonationtotal;
        
    })

    

}
