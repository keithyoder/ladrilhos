// xadrez.js
// ─────────────────────────────────────────────────────
// Xadrez
//
// Estrutura:
//   - Fundo na cor bg
//   - Grade 4×4 de quadradinhos alternados na cor fg
//     (células onde linha+coluna é par recebem fg)
//     Cada célula = 25% do tile
//   - Quadradinho central na cor acc em cada célula fg
//     Tamanho: 12.5% do tile, centralizado na célula
//
// Paleta sugerida:
//   fg:  azul escuro   #1D4E8F
//   acc: terracota     #C8402A
//   bg:  areia         #F5E6C8
//
// Composição recomendada: Grade simples
// ─────────────────────────────────────────────────────

window.TILES.push({
  id: 'xadrez',
  label: 'Xadrez',
  composicao: 'simple',
  defaultPalette: { fg: '#1D4E8F', acc: '#C8402A', bg: '#F5E6C8' },
  draw(ctx, x, y, s, pal) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = pal.bg;
    ctx.fillRect(0, 0, s, s);
    const q = s / 4;
    ctx.fillStyle = pal.fg;
    for (let row = 0; row < 4; row++)
      for (let col = 0; col < 4; col++)
        if ((row+col) % 2 === 0) ctx.fillRect(col*q, row*q, q, q);
    ctx.fillStyle = pal.acc;
    const cq = s / 8;
    for (let row = 0; row < 4; row++)
      for (let col = 0; col < 4; col++)
        if ((row+col) % 2 === 0) ctx.fillRect(col*q+cq*1.5, row*q+cq*1.5, cq, cq);
    ctx.restore();
  }
});
