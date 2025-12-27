const donateActionButton = document.querySelectorAll(".doante-action-btn")

for(const button of donateActionButton){
    // noakhaliBtn clicked
    const NoakhaliBtn = button.addEventListener("click", function(){
        const noakhaliInputNumber = getInputFieldValueById("noakhali-input");

        const mainBalance = document.getElementById("main-balance").innerText;
        const mainBalanceNumber = parseInt(mainBalance);
        
        const mainUpdateBalance = mainBalanceNumber - noakhaliInputNumber;

        // show the main balance
        document.getElementById("main-balance").innerText = mainUpdateBalance;
        const noaKhaliDonation = document.getElementById("noakhali-donation").innerText;
        const noaKhaliDonationNumber = parseInt(noaKhaliDonation);

        const noaKhaliDonationtotal = noaKhaliDonationNumber + noakhaliInputNumber;
        
        // show the noakhali total balance-
        document.getElementById("noakhali-donation").innerText = noaKhaliDonationtotal;

        
        
    })
}
