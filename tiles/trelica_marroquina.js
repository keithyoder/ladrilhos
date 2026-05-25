// trelica_marroquina.js
// ─────────────────────────────────────────────────────
// Treliça Marroquina (Lobed Square Quarter)
//
// Inspirado na treliça marroquina clássica.
// Um quarto da forma lobada — 4 tiles em rotação 4×
// formam a forma completa.
//
// Estrutura:
//   - Fundo na cor bg (exterior)
//   - Forma principal na cor fg (interior):
//       dois lados retos (topo e esquerda)
//       dois arcos côncavos definindo a cintura
//   - Quadrado no canto inferior direito na cor bg
//   - Borda na cor acc apenas nos dois arcos e no
//     canto interno em L — NÃO nas bordas externas
//     nem nas bordas do quadrado
//
// Proporções (construíveis com régua e compasso):
//   quadrado interno: 60% do tile
//   raio dos arcos:   30% do tile
//   borda (linha):    10% do tile
//   centro arco direito:   (s, s*0.4)   — borda direita na linha do quadrado
//   centro arco inferior:  (s*0.4, s)   — borda inferior na linha do quadrado
//
// Simetria: D1d↘ — reflexão na diagonal ↘
// Composição recomendada: Rotação 4× (2×2)
//
// Paleta sugerida:
//   fg:  azul escuro   #1D4E8F
//   acc: amarelo       #E8A020
//   bg:  areia         #F5E6C8
// ─────────────────────────────────────────────────────

window.TILES.push({
  id: 'trelica_marroquina',
  label: 'Treliça',
  simetria: 'D1d↘',
  composicoes: ['rot4', 'mirror'],
  composicao: 'rot4',
  defaultPalette: { fg: '#1D4E8F', acc: '#E8A020', bg: '#F5E6C8' },
  draw(ctx, x, y, s, pal) {
    ctx.save();
    ctx.translate(x, y);

    const q  = s * 0.60;  // tamanho do quadrado
    const r  = s * 0.30;  // raio dos arcos
    const lw = s * 0.10;  // largura da borda
    const m  = s - q;     // margem = s * 0.40

    // centros dos arcos
    const cRx = s,  cRy = m;   // centro arco direito
    const cBx = m,  cBy = s;   // centro arco inferior

    // pontos dos arcos externos
    const arc1Start = { x: s,     y: m - r };   // topo do arco direito
    const arc1End   = { x: s - r, y: m     };   // fim do arco direito = canto do quadrado horizontal
    const arc2Start = { x: m,     y: s - r };   // início arco inferior
    const arc2End   = { x: m - r, y: s     };   // fim arco inferior

    // ── fundo bg ──
    ctx.fillStyle = pal.bg;
    ctx.fillRect(0, 0, s, s);

    // ── forma principal fg ──
    ctx.fillStyle = pal.fg;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(s, 0);
    ctx.lineTo(arc1Start.x, arc1Start.y);
    ctx.arc(cRx, cRy, r, -Math.PI/2, Math.PI, true);  // arco côncavo direito
    ctx.lineTo(m, m);
    ctx.lineTo(arc2Start.x, arc2Start.y);
    ctx.arc(cBx, cBy, r, -Math.PI/2, 0, true);         // arco côncavo inferior
    ctx.lineTo(0, s);
    ctx.closePath();
    ctx.fill();

    // ── quadrado bg ──
    ctx.fillStyle = pal.bg;
    ctx.fillRect(m, m, q, q);

    // ── borda acc nos arcos e no L interno ──
    ctx.strokeStyle = pal.acc;
    ctx.lineWidth   = lw;
    ctx.lineCap     = 'butt';
    ctx.lineJoin    = 'round';

    // clip para não vazar fora do tile
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, s, s);
    ctx.clip();

    ctx.beginPath();
    ctx.moveTo(arc1Start.x, arc1Start.y);
    ctx.arc(cRx, cRy, r, -Math.PI/2, Math.PI, true);  // arco direito
    ctx.lineTo(m, m);                                   // L horizontal
    ctx.lineTo(arc2Start.x, arc2Start.y);               // L vertical
    ctx.arc(cBx, cBy, r, -Math.PI/2, 0, true);         // arco inferior
    ctx.stroke();

    ctx.restore();
    ctx.restore();
  }
});