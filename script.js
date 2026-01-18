// 1. تأثير الـ 3D
VANTA.NET({
  el: "#vanta-canvas",
  mouseControls: true, touchControls: true,
  minHeight: 200.00, minWidth: 200.00,
  scale: 1.00, scaleMobile: 1.00,
  color: 0x007bff, backgroundColor: 0xffffff,
  points: 10.00, maxDistance: 20.00, spacing: 17.00
});

// 2. وظائف فتح وإغلاق المودال
function openOrderModal(serviceName) {
    document.getElementById("orderModal").style.display = "flex";
    document.getElementById("serviceNameDisplay").innerText = serviceName;
    document.getElementById("serviceInput").value = serviceName;
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}

// 3. إرسال الفورم برابط الإيميل
const form = document.getElementById("mainForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    fetch(e.target.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            closeModal('orderModal');
            document.getElementById("thankYouModal").style.display = "flex";
            form.reset();
        }
    });
});

// 4. أنيميشن التمرير
function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) el.classList.add("active");
    });
}
window.addEventListener("scroll", reveal);
window.onload = reveal;
