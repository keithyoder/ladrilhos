// estrela.js
// ─────────────────────────────────────────────────────
// Estrela de 8 pontas
//
// Estrutura:
//   - Fundo na cor bg
//   - Estrela de 8 pontas centrada no tile
//     Pontas externas: raio 46% do tile
//     Pontas internas: raio 22% do tile
//     Ângulo inicial: -π/8 (ponta para cima)
//   - Círculo central pequeno (raio 10%) na cor acc
//
// Paleta sugerida:
//   fg:  azul escuro   #1D4E8F
//   acc: terracota     #C8402A
//   bg:  areia         #F5E6C8
//
// Composição recomendada: Rotação por 90°
// ─────────────────────────────────────────────────────

window.TILES.push({
  id: 'estrela',
  label: 'Estrela',
  composicao: 'rot4',
  defaultPalette: { fg: '#1D4E8F', acc: '#C8402A', bg: '#F5E6C8' },
  draw(ctx, x, y, s, pal) {
    ctx.save();
    ctx.translate(x + s/2, y + s/2);
    ctx.fillStyle = pal.bg;
    ctx.fillRect(-s/2, -s/2, s, s);
    ctx.fillStyle = pal.fg;
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI / 4) - Math.PI / 8;
      const r = i % 2 === 0 ? s * 0.46 : s * 0.22;
      i === 0
        ? ctx.moveTo(Math.cos(angle)*r, Math.sin(angle)*r)
        : ctx.lineTo(Math.cos(angle)*r, Math.sin(angle)*r);
    }
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = pal.acc;
    ctx.beginPath(); ctx.arc(0, 0, s*0.1, 0, Math.PI*2); ctx.fill();
    ctx.restore();
  }
});
