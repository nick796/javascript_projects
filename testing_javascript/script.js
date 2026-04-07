// 1. Βρίσκουμε το κουμπί από το HTML χρησιμοποιώντας το ID του
const button = document.getElementById('btn-palette');

// 2. Βρίσκουμε το μέρος που θα μπούν τα χρώματα
const grid = document.getElementById('colors-grid');

// 3. Λέμε στον "υπάλληλο" τι να κάνει όταν κάποιος πατήσει το κουμπί
button.onclick = function() {
    
    // Αδειάζουμε την περιοχή για να μην μαζεύονται πολλά χρώματα
    grid.innerHTML = "";

    // Διαλέγουμε έναν τυχαίο αριθμό για το πρώτο χρώμα (0 έως 360)
    // Σκέψου το σαν να γυρνάμε έναν τροχό με χρώματα
    let randomNumber = Math.random() * 360;
    let startColor = Math.floor(randomNumber);

    // Θέλουμε 5 χρώματα, οπότε θα επαναλάβουμε την ίδια δουλειά 5 φορές
    for (let i = 0; i < 5; i++) {
        
        // Υπολογίζουμε το επόμενο χρώμα προσθέτοντας 20 μοίρες στον τροχό
        let hue = (startColor + (i * 20)) % 360;
        
        // Φτιάχνουμε το "όνομα" του χρώματος (π.χ. hsl(120, 70%, 60%))
        let colorName = "hsl(" + hue + ", 70%, 60%)";

        // Δημιουργούμε ένα νέο "κουτάκι" (div) στη μνήμη
        let card = document.createElement("div");
        
        // Του δίνουμε την κλάση CSS που φτιάξαμε για να φαίνεται όμορφο
        card.className = "color-card";

        // Βάζουμε μέσα στο κουτάκι το χρώμα και το όνομά του
        card.innerHTML = `
            <div class="color-box" style="background-color: ${colorName}"></div>
            <div class="color-info">${colorName}</div>
           
        `;

        // Τέλος, το εμφανίζουμε στη σελίδα μας
        grid.appendChild(card);
    }
};