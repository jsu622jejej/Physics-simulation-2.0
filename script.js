const canvas = document.getElementById('wavefunctionCanvas');
     const ctx = canvas.getContext('2d');
     canvas.width = 800;
     canvas.height = 400;

     // Box dimensions
     const boxWidth = canvas.width - 100;
     const boxHeight = 50;
     const boxX = (canvas.width - boxWidth) / 2;
     const boxY = (canvas.height - boxHeight) / 2;

     // Wavefunction parameters
     const n = 1; // Quantum number (n = 1, 2, 3, ...)
     const L = boxWidth; // Length of the box
     const dx = 2; // Step size for drawing

     function drawWavefunction() {
         ctx.clearRect(0, 0, canvas.width, canvas.height);

         // Draw the box
         ctx.strokeStyle = '#333';
         ctx.lineWidth = 2;
         ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);

         // Draw the wavefunction
         ctx.beginPath();
         ctx.moveTo(boxX, boxY + boxHeight / 2);

         for (let x = 0; x <= L; x += dx) {
             const psi = Math.sqrt(2 / L) * Math.sin((n * Math.PI * x) / L); // Wavefunction
             const probabilityDensity = psi * psi; // |ψ|²
             const y = boxY + boxHeight / 2 - probabilityDensity * 100; // Scale for visualization
             ctx.lineTo(boxX + x, y);
         }

         ctx.strokeStyle = '#e74c3c';
         ctx.lineWidth = 2;
         ctx.stroke();

         // Draw the probability density
         ctx.beginPath();
         ctx.moveTo(boxX, boxY + boxHeight / 2);

         for (let x = 0; x <= L; x += dx) {
             const psi = Math.sqrt(2 / L) * Math.sin((n * Math.PI * x) / L); // Wavefunction
             const probabilityDensity = psi * psi; // |ψ|²
             const y = boxY + boxHeight / 2 - probabilityDensity * 100; // Scale for visualization
             ctx.fillStyle = 'rgba(52, 152, 219, 0.5)';
             ctx.fillRect(boxX + x, y, dx, boxHeight / 2 - (y - boxY - boxHeight / 2));
         }
     }

     drawWavefunction();
