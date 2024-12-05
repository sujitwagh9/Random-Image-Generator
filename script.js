document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('btnId');
    const result = document.getElementById('resultId');
    const clearBtn = document.getElementById('clearBtnId'); 

    btn.addEventListener("click", async () => {
        let imgElme = result.querySelector('img');
        if (!imgElme) {
            imgElme = document.createElement('img');
            result.appendChild(imgElme);
        }
        
        try {
            const response = await fetch(`https://picsum.photos/400?random=${Date.now()}`);
            imgElme.src = response.url; 
            imgElme.style.marginTop = '10px';
            imgElme.style.border = '1px solid black';
            imgElme.style.borderRadius = '5px';
            imgElme.style.height = 'auto';
            imgElme.style.width = '50%';
            imgElme.style.display = "block";
        } catch (error) {
            console.error("Failed to fetch image:", error);
            imgElme.alt = "Error loading image";
        }
    });

    clearBtn.addEventListener("click", () => {
        const imgElme = result.querySelector('img');
        if (imgElme) {
            imgElme.remove(); 
        }
    });
});
