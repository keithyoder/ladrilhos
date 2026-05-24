// chevron.js
// ─────────────────────────────────────────────────────
// Chevron (setas)
//
// Estrutura:
//   - Fundo na cor bg
//   - 3 faixas de chevron na cor fg
//     Tile dividido em 3 linhas horizontais iguais
//     Cada chevron: ponta central a 30% da faixa,
//     retorno descendo a 70% da faixa
//   - Duas barras horizontais finas na cor acc (8% do tile):
//     topo e base
//
// Paleta sugerida:
//   fg:  azul escuro   #1D4E8F
//   acc: terracota     #C8402A
//   bg:  areia         #F5E6C8
//
// Composição recomendada: Grade simples
// ─────────────────────────────────────────────────────

window.TILES.push({
  id: 'chevron',
  label: 'Chevron',
  composicao: 'simple',
  defaultPalette: { fg: '#1D4E8F', acc: '#C8402A', bg: '#F5E6C8' },
  draw(ctx, x, y, s, pal) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = pal.bg;
    ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = pal.fg;
    const h = s / 3;
    for (let i = 0; i < 3; i++) {
      const yy = i * h;
      ctx.beginPath();
      ctx.moveTo(0, yy+h*0.3); ctx.lineTo(s/2, yy); ctx.lineTo(s, yy+h*0.3);
      ctx.lineTo(s, yy+h); ctx.lineTo(s/2, yy+h*0.7); ctx.lineTo(0, yy+h);
      ctx.closePath(); ctx.fill();
    }
    ctx.fillStyle = pal.acc;
    ctx.fillRect(0, 0, s, s*0.08);
    ctx.fillRect(0, s*0.92, s, s*0.08);
    ctx.restore();
  }
});
