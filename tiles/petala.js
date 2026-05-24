// petala.js
// ─────────────────────────────────────────────────────
// Pétala
//
// Inspirado em ladrilho hidráulico clássico.
//
// Estrutura:
//   - Fundo na cor fg (escura)
//   - 4 círculos, um centrado no meio de cada lado
//     Raio: 48% do tile
//   - A interseção de dois círculos adjacentes forma
//     uma pétala (lente) na cor bg (clara)
//     Resultado: 4 pétalas simétricas, uma por quadrante
//
// Geometria:
//   - círculo topo:    centro (c, 0),   raio r
//   - círculo base:    centro (c, s),   raio r
//   - círculo esquerda: centro (0, c),  raio r
//   - círculo direita:  centro (s, c),  raio r
//   Cada pétala = círculo lateral clipado pelo círculo topo ou base
//
// Paleta sugerida:
//   fg:  vermelho escuro  #7B2008
//   bg:  creme            #F4F0E0
//   acc: (não usado)
//
// Composição recomendada: Grade simples
// ─────────────────────────────────────────────────────

window.TILES.push({
  id: 'petala',
  label: 'Pétala',
  composicao: 'simple',
  defaultPalette: { fg: '#7B2008', bg: '#F4F0E0', acc: '#C8402A' },
  draw(ctx, x, y, s, pal) {
    ctx.save();
    ctx.translate(x, y);
    const c = s / 2;
    const r = s * 0.48;

    // fundo escuro
    ctx.fillStyle = pal.fg;
    ctx.fillRect(0, 0, s, s);

    // 4 pétalas: cada uma é a interseção de dois círculos adjacentes
    // implementado com save/clip/fill/restore
    function petal(clipCx, clipCy, fillCx, fillCy) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(clipCx, clipCy, r, 0, Math.PI * 2);
      ctx.clip();
      ctx.fillStyle = pal.bg;
      ctx.beginPath();
      ctx.arc(fillCx, fillCy, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // pétala top-left:  clip=topo,  fill=esquerda
    petal(c, 0, 0, c);
    // pétala top-right: clip=topo,  fill=direita
    petal(c, 0, s, c);
    // pétala bot-left:  clip=base,  fill=esquerda
    petal(c, s, 0, c);
    // pétala bot-right: clip=base,  fill=direita
    petal(c, s, s, c);

    ctx.restore();
  }
});