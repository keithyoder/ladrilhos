// diagonal.js
// ─────────────────────────────────────────────────────
// Diagonal
//
// Simetria: D1d↘ — reflexão na diagonal ↘ apenas
// Composições úteis:
//   simple  — grade simples
//   rot4    — rotação 90° (cria losangos no centro)
//   mirror  — espelho 2×2
//
// Estrutura:
//   - Fundo bg (triângulo inferior-esquerdo)
//   - Triângulo superior-direito na cor fg
//     (top-left → top-right → bottom-right)
//   - Dois triângulos pequenos de canto na cor acc (18% do tile):
//       bottom-left e top-right
//
// Paleta sugerida:
//   fg:  azul escuro   #1D4E8F
//   acc: terracota     #C8402A
//   bg:  areia         #F5E6C8
// ─────────────────────────────────────────────────────

window.TILES.push({
  id: 'diagonal',
  label: 'Diagonal',
  simetria: 'D1d↘',
  composicoes: ['simple', 'rot4', 'mirror'],
  composicao: 'rot4',
  defaultPalette: { fg: '#1D4E8F', acc: '#C8402A', bg: '#F5E6C8' },
  draw(ctx, x, y, s, pal) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = pal.bg;
    ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = pal.fg;
    ctx.beginPath();
    ctx.moveTo(0,0); ctx.lineTo(s,0); ctx.lineTo(s,s);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = pal.acc;
    const t = s * 0.18;
    ctx.beginPath(); ctx.moveTo(0,s-t); ctx.lineTo(t,s); ctx.lineTo(0,s); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(s-t,0); ctx.lineTo(s,0); ctx.lineTo(s,t); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
});