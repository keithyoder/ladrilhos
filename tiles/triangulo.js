// triangulo.js
// ─────────────────────────────────────────────────────
// Três triângulos
//
// Simetria: C1 — nenhuma simetria geométrica
// Composições úteis:
//   simple  — grade simples (todos iguais)
//   rot4    — rotação 90° (cria ampulhetas e losangos)
//   mirror  — espelho 2×2
//
// Estrutura:
//   - Triângulo grande (fg): metade do tile
//     vértices: (0,0) → (s,0) → (0,s)
//   - Triângulo médio (acc): outro canto
//     vértices: (s,0) → (s,s) → (0,s)
//   - Triângulo pequeno (bg): subdivide o triângulo médio
//     vértices: (s,0) → (s,s) → (c,c)
//
// Paleta sugerida:
//   fg:  azul    #3B7EA1
//   acc: cinza   #8A9BA8
//   bg:  branco  #E8E8E8
// ─────────────────────────────────────────────────────

window.TILES.push({
  id: 'triangulo',
  label: 'Triângulo',
  simetria: 'C1',
  composicoes: ['simple', 'rot4', 'mirror'],
  composicao: 'rot4',
  defaultPalette: { fg: '#3B7EA1', acc: '#8A9BA8', bg: '#E8E8E8' },
  draw(ctx, x, y, s, pal) {
    ctx.save();
    ctx.translate(x, y);
    const c = s / 2;
    ctx.fillStyle = pal.fg;
    ctx.beginPath();
    ctx.moveTo(0,0); ctx.lineTo(s,0); ctx.lineTo(0,s);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = pal.acc;
    ctx.beginPath();
    ctx.moveTo(s,0); ctx.lineTo(s,s); ctx.lineTo(0,s);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = pal.bg;
    ctx.beginPath();
    ctx.moveTo(s,0); ctx.lineTo(s,s); ctx.lineTo(c,c);
    ctx.closePath(); ctx.fill();
    ctx.restore();
  }
});