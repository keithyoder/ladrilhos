// triangulo.js
// ─────────────────────────────────────────────────────
// Três triângulos
//
// Inspirado em ladrilho hidráulico moderno.
//
// Estrutura:
//   - Triângulo grande (fg): metade do tile
//     vértices: (0,0) → (s,0) → (0,s)
//   - Triângulo médio (acc): outro canto
//     vértices: (s,0) → (s,s) → (0,s)
//   - Triângulo pequeno (bg): subdivide o triângulo médio
//     vértices: (s,0) → (s,s) → (c,c)
//     onde c = centro do tile
//
// As três cores devem ter contraste entre si para
// o efeito geométrico funcionar bem.
//
// Paleta sugerida:
//   fg:  azul           #3B7EA1
//   acc: cinza          #8A9BA8
//   bg:  branco/creme   #E8E8E8
//
// Composição recomendada: Rotação por 90°
// ─────────────────────────────────────────────────────

window.TILES.push({
  id: 'triangulo',
  label: 'Triângulo',
  composicao: 'rot4',
  defaultPalette: { fg: '#3B7EA1', acc: '#8A9BA8', bg: '#E8E8E8' },
  draw(ctx, x, y, s, pal) {
    ctx.save();
    ctx.translate(x, y);
    const c = s / 2;

    // triângulo grande — fg
    ctx.fillStyle = pal.fg;
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(s, 0); ctx.lineTo(0, s);
    ctx.closePath(); ctx.fill();

    // triângulo médio — acc
    ctx.fillStyle = pal.acc;
    ctx.beginPath();
    ctx.moveTo(s, 0); ctx.lineTo(s, s); ctx.lineTo(0, s);
    ctx.closePath(); ctx.fill();

    // triângulo pequeno — bg (subdivide o médio)
    ctx.fillStyle = pal.bg;
    ctx.beginPath();
    ctx.moveTo(s, 0); ctx.lineTo(s, s); ctx.lineTo(c, c);
    ctx.closePath(); ctx.fill();

    ctx.restore();
  }
});