// quatrefoil.js
// ─────────────────────────────────────────────────────
// Quatrefoil
//
// Estrutura:
//   - Fundo na cor bg
//   - 4 círculos nos cantos (raio 28%, centrados a 25% de cada borda)
//     sobrepostos, formando o padrão de 4 folhas
//   - Buraco circular no centro (raio 22%) via destination-out
//   - Círculo central pequeno (raio 12%) na cor acc
//
// Paleta sugerida:
//   fg:  azul escuro   #1D4E8F
//   acc: terracota     #C8402A
//   bg:  areia         #F5E6C8
//
// Composição recomendada: Grade simples
// ─────────────────────────────────────────────────────

window.TILES.push({
  id: 'quatrefoil',
  label: 'Quatrefoil',
  composicao: 'simple',
  defaultPalette: { fg: '#1D4E8F', acc: '#C8402A', bg: '#F5E6C8' },
  draw(ctx, x, y, s, pal) {
    const c = s / 2;
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = pal.bg;
    ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = pal.fg;
    const r = s * 0.28, off = s * 0.25;
    for (const [cx2, cy2] of [[off,off],[s-off,off],[off,s-off],[s-off,s-off]]) {
      ctx.beginPath(); ctx.arc(cx2, cy2, r, 0, Math.PI*2); ctx.fill();
    }
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath(); ctx.arc(c, c, s*0.22, 0, Math.PI*2); ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = pal.acc;
    ctx.beginPath(); ctx.arc(c, c, s*0.12, 0, Math.PI*2); ctx.fill();
    ctx.restore();
  }
});
