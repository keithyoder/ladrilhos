// flor.js
// ─────────────────────────────────────────────────────
// Flor de 4 pétalas
//
// Estrutura:
//   - Fundo na cor bg
//   - 4 pétalas elípticas na cor fg, distribuídas a 90°
//     Cada pétala: elipse raio maior 60%, menor 35% do
//     raio da flor (30% do tile), centrada a 50% do raio
//     em cada direção, rotacionada no eixo da direção
//   - Círculo de limpeza central na cor bg (raio 18%)
//   - Miolo central na cor acc (raio 10%)
//
// Paleta sugerida:
//   fg:  azul escuro   #1D4E8F
//   acc: terracota     #C8402A
//   bg:  areia         #F5E6C8
//
// Composição recomendada: Grade simples
// ─────────────────────────────────────────────────────

window.TILES.push({
  id: 'flor',
  label: 'Flor',
  composicao: 'simple',
  defaultPalette: { fg: '#1D4E8F', acc: '#C8402A', bg: '#F5E6C8' },
  draw(ctx, x, y, s, pal) {
    ctx.save();
    ctx.translate(x + s/2, y + s/2);
    ctx.fillStyle = pal.bg;
    ctx.fillRect(-s/2, -s/2, s, s);
    const pr = s * 0.3;
    ctx.fillStyle = pal.fg;
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      ctx.save();
      ctx.translate(Math.cos(a)*pr*0.5, Math.sin(a)*pr*0.5);
      ctx.rotate(a);
      ctx.beginPath(); ctx.ellipse(0, 0, pr*0.35, pr*0.6, 0, 0, Math.PI*2);
      ctx.fill(); ctx.restore();
    }
    ctx.fillStyle = pal.bg;
    ctx.beginPath(); ctx.arc(0, 0, s*0.18, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = pal.acc;
    ctx.beginPath(); ctx.arc(0, 0, s*0.1, 0, Math.PI*2); ctx.fill();
    ctx.restore();
  }
});
