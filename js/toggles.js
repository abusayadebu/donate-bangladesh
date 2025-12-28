

// when blogBTn clicked 
const blogButton = document.getElementById("blog-btn").addEventListener("click", function(){
    window.location.href = "blog.html"
})

// whne historybtn clicked
const historyBtn = document.getElementById("btn-history").addEventListener("click", function(){
    const donationCardSection = getSectionById("donation-card-section");
    donationCardSection.classList.add("hidden");
    const historySection = getSectionById("history-section");
    historySection.classList.remove("hidden");
})

// when donationBtn clicked
const donationBtn = document.getElementById("btn-donation").addEventListener("click", function(){
    const donationCardSection = getSectionById("donation-card-section");
    const historySection = getSectionById("history-section");

    donationCardSection.classList.remove("hidden");
    historySection.classList.add("hidden");
})

