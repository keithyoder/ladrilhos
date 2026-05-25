# Ladrilhos

Simulador de mosaico de ladrilhos hidráulicos portugueses.

**[→ Abrir o simulador](https://keithyoder.github.io/ladrilhos/mosaico_hidraulico.html)**

---

Visualize padrões geométricos clássicos em grade, com controle de composição, cores e junta. Inspirado nos ladrilhos hidráulicos tradicionais de Portugal e Brasil.

## Funcionalidades

- 9 padrões geométricos incluídos
- 3 modos de composição: grade simples, rotação 4×, espelho 2×2
- 8 paletas de cores
- Controle de tamanho do ladrilho e espessura da junta
- Exportar o mosaico como PNG

## Adicionar um novo ladrilho

1. Crie um arquivo `.js` na pasta `tiles/` (use qualquer tile existente como template)
2. Adicione `<script src="tiles/meu_tile.js"></script>` no HTML, junto aos outros
3. O app detecta automaticamente e adiciona o padrão à grade

Cada tile define sua simetria geométrica (`simetria`) e os modos de composição recomendados (`composicoes`). Veja [SIMETRIA.md](SIMETRIA.md) para referência.

## Estrutura

```
mosaico_hidraulico.html   — app principal
SIMETRIA.md               — referência de grupos de simetria
tiles/
  quatrefoil.js           — D4
  estrela.js              — D4
  flor.js                 — D4
  xadrez.js               — D4
  losango_flor.js         — D4
  petala.js               — D4
  chevron.js              — D1v
  diagonal.js             — D1d↘
  triangulo.js            — C1
```

## Tecnologia

HTML5 Canvas, JavaScript puro, zero dependências. Funciona direto do browser sem servidor.