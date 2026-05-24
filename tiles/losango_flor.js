// losango_flor.js
// ─────────────────────────────────────────────────────
// Losango flor
//
// Inspirado em ladrilho hidráulico português clássico.
//
// Estrutura:
//   - Fundo na cor bg
//
//   - 4 triângulos retângulos nos cantos, cor fg
//     Tamanho: 25% do lado do tile
//     Ao repetir em grade, os 4 triângulos vizinhos
//     se juntam formando quadrados completos
//
//   - 8 losangos em roda no centro, alternando fg e acc
//     Cada losango = dois triângulos isósceles:
//       raio externo:  42% do tile
//       altura (cada triângulo isósceles): 18% do tile
//       raio interno:  42% - 2×18% = 6% do tile
//     Largura (meia-base):
//       hb = Rm × tan(π/8) × 0.8
//       Rm = média entre raio externo e interno
//       fator 0.8 → espaço uniforme ~20% entre losangos
//     Rotação: 22.5° (π/8) no sentido horário
//
// Paleta sugerida:
//   fg:  verde escuro  #3B6D11
//   acc: verde claro   #97C459
//   bg:  branco quente #F4F2EC
//
// Composição recomendada: Rotação 4× (espelhamento 2×2)
// ─────────────────────────────────────────────────────

window.TILES.push({
  id: 'losango_flor',
  label: 'Losango flor',
  composicao: 'mirror',
  defaultPalette: { fg: '#3B6D11', acc: '#97C459', bg: '#F4F2EC' },
  draw(ctx, x, y, s, pal) {
    ctx.save();
    ctx.translate(x, y);
    const c = s / 2;

    ctx.fillStyle = pal.bg;
    ctx.fillRect(0, 0, s, s);

    // triângulos de canto — 25% do lado
    const t = s * 0.25;
    ctx.fillStyle = pal.fg;
    ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(t,0); ctx.lineTo(0,t); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(s,0); ctx.lineTo(s-t,0); ctx.lineTo(s,t); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(0,s); ctx.lineTo(t,s); ctx.lineTo(0,s-t); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(s,s); ctx.lineTo(s-t,s); ctx.lineTo(s,s-t); ctx.closePath(); ctx.fill();

    // 8 losangos em roda
    const Re  = s * 0.42;
    const ht  = s * 0.18;
    const Ri  = Re - 2 * ht;
    const Rm  = (Re + Ri) / 2;
    const hb  = Rm * Math.tan(Math.PI / 8) * 0.8;
    const rot = Math.PI / 8; // 22.5° horário

    for (let i = 0; i < 8; i++) {
      const a  = i * Math.PI / 4 - Math.PI / 2 + rot;
      const dx = Math.cos(a), dy = Math.sin(a);
      const px = -dy,         py = dx;
      const ex = c + dx*Re,   ey = c + dy*Re;
      const ix = c + dx*Ri,   iy = c + dy*Ri;
      const mx = c + dx*Rm,   my = c + dy*Rm;
      ctx.fillStyle = i % 2 === 0 ? pal.fg : pal.acc;
      ctx.beginPath();
      ctx.moveTo(ex, ey);
      ctx.lineTo(mx + px*hb, my + py*hb);
      ctx.lineTo(ix, iy);
      ctx.lineTo(mx - px*hb, my - py*hb);
      ctx.closePath(); ctx.fill();
    }

    ctx.restore();
  }
});
