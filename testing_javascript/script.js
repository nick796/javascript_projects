// 1. Επιλογή των στοιχείων από το HTML
const btn = document.getElementById('btn-palette');
const container = document.getElementById('colors-grid');

/**
 * Συνάρτηση μετατροπής HSL σε HEX.
 * Το HSL είναι πιο εύκολο για τον υπολογισμό "σχετικών" χρωμάτων,
 * αλλά το HEX είναι το standard για αντιγραφή και χρήση σε CSS.
 */
function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}

/**
 * Κύρια λειτουργία παραγωγής παλέτας
 */
btn.addEventListener('click', () => {
    // Καθαρισμός των προηγούμενων χρωμάτων από την οθόνη
    container.innerHTML = '';

    // Δημιουργία μιας τυχαίας βάσης (Base Hue) από 0 έως 360 μοίρες
    const baseHue = Math.floor(Math.random() * 360);
    const saturation = 70; // Σταθερός κορεσμός για ζωντανά χρώματα
    const lightness = 60;  // Σταθερή φωτεινότητα για να είναι ευανάγνωστα

    // Loop για τη δημιουργία 5 σχετικών χρωμάτων
    for (let i = 0; i < 5; i++) {
        // Υπολογισμός νέου Hue: Προσθέτουμε 20 μοίρες για κάθε επόμενο χρώμα (Analogous Theory)
        // Το % 360 διασφαλίζει ότι αν ξεπεράσουμε τις 360 μοίρες, ξαναγυρνάμε στο 0
        const currentHue = (baseHue + (i * 20)) % 360;
        
        const hexColor = hslToHex(currentHue, saturation, lightness);

        // Δημιουργία του "Card" στοιχείου
        const colorCard = document.createElement('div');
        colorCard.classList.add('color-card');

        // Προσθήκη HTML περιεχομένου στο Card
        colorCard.innerHTML = `
            <div class="color-box" style="background-color: ${hexColor}"></div>
            <span class="hex-code">${hexColor}</span>
        `;

        // Λειτουργία Αντιγραφής (Copy to Clipboard)
        colorCard.addEventListener('click', () => {
            // Χρήση του σύγχρονου Clipboard API
            navigator.clipboard.writeText(hexColor).then(() => {
                // Προαιρετικό: Μικρό feedback στον χρήστη
                const hexLabel = colorCard.querySelector('.hex-code');
                const originalText = hexLabel.innerText;
                hexLabel.innerText = "COPIED!";
                hexLabel.style.color = "purple";

                // Επαναφορά του κειμένου μετά από 1 δευτερόλεπτο
                setTimeout(() => {
                    hexLabel.innerText = originalText;
                    hexLabel.style.color = "#333";
                }, 1000);
            });
        });

        // Τοποθέτηση του νέου Card μέσα στο container
        container.appendChild(colorCard);
    }
});