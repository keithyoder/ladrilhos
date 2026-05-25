# Simetria de Ladrilhos
 
Referência de grupos de simetria e composições possíveis.
A simetria é avaliada apenas pela **geometria** do tile, independente das cores.
 
---
 
## Grupos de simetria
 
### D4 — simetria total
**Descrição:** 4 rotações (0°, 90°, 180°, 270°) + 4 reflexões (horizontal, vertical, diagonal ↘, diagonal ↗).  
**Variantes únicas:** 1 — todas as transformações produzem o mesmo tile.  
**Composições:** qualquer modo produz o mesmo resultado visual. Grade simples é suficiente.  
**Tiles:** quatrefoil, pétala, flor, estrela, xadrez, losango flor.
 
---
 
### D2 — simetria em 2 eixos
**Descrição:** rotação 180° + 2 eixos de reflexão. Três subtipos:
- **D2h** — reflexão horizontal + vertical
- **D2d** — reflexão diagonal ↘ + diagonal ↗
- **D2r** — só rotações 0° e 180° (sem reflexões)
**Variantes únicas:** 2.  
**Composições interessantes:**
- Grade simples
- Par (0° + 90°) — única combinação que acrescenta algo
**Tiles:** chevron (D2h — reflexão vertical + horizontal... ver abaixo)
---
 
### D1 — simetria em 1 eixo
**Descrição:** 1 eixo de reflexão apenas. Quatro subtipos:
- **D1h** — reflexão horizontal
- **D1v** — reflexão vertical
- **D1d↘** — reflexão diagonal ↘
- **D1d↗** — reflexão diagonal ↗
**Variantes únicas:** 4 (2 rotações × 2 lados do eixo).  
**Composições interessantes:**
- Grade simples
- Par horizontal (0° + 180°)
- Par vertical (0° + 180°)
- Rotação 4× — célula 2×2 com 0°/90°/180°/270°
- Espelho 2×2
**Tiles:** chevron (D1v), diagonal (D1d↘)
---
 
### C4 — rotação de 90° sem reflexão
**Descrição:** 4 rotações (0°, 90°, 180°, 270°), mas sem nenhum eixo de reflexão. O tile rotacionado é igual, mas o reflexo é diferente.  
**Variantes únicas:** 1 para rotações, 2 incluindo reflexões.  
**Composições interessantes:**
- Grade simples
- Par (original + reflexo) — cria padrão novo
**Tiles:** (nenhum ainda)
---
 
### C2 — rotação de 180° sem reflexão
**Descrição:** apenas rotações 0° e 180° são iguais. 90° e 270° são diferentes. Sem reflexões.  
**Variantes únicas:** 2 para rotações, 4 incluindo reflexões.  
**Composições interessantes:**
- Grade simples
- Par horizontal (0° + 90°)
- Par vertical (0° + 90°)
- Rotação 4× — célula 2×2
**Tiles:** (nenhum ainda)
---
 
### C1 — nenhuma simetria
**Descrição:** nenhuma rotação ou reflexão produz o mesmo tile. Máxima riqueza de composição.  
**Variantes únicas:** 8 (4 rotações × 2 reflexões).  
**Composições interessantes:**
- Grade simples
- Par horizontal — por coluna (0° + qualquer)
- Par vertical — por linha (0° + qualquer)
- Rotação 4× — célula 2×2 com 0°/90°/180°/270°
- Espelho 2×2 — célula 2×2 com flips
- Célula 2×2 livre — qualquer combinação das 8 variantes
**Tiles:** triângulo
---
 
## Classificação dos tiles atuais
 
| Tile | Grupo | Descrição da simetria |
|---|---|---|
| quatrefoil | D4 | 4 rotações + 4 reflexões |
| pétala | D4 | 4 rotações + 4 reflexões |
| flor | D4 | 4 rotações + 4 reflexões |
| estrela | D4 | 4 rotações + 4 reflexões |
| xadrez | D4 | 4 rotações + 4 reflexões |
| losango flor | D4 | 4 rotações + 4 reflexões (simetria D8 por causa da rotação de 45°) |
| chevron | D1v | reflexão vertical apenas |
| diagonal | D1d↘ | reflexão na diagonal ↘ apenas |
| triângulo | C1 | nenhuma simetria |
 
---
 
## Notas
 
- A simetria é sempre avaliada na **geometria**, não nas cores.
- Colorir regiões diferentes pode quebrar a simetria visual sem mudar a simetria geométrica.
- Para composições em grade, só tiles com simetria C1 ou D1 geram padrões emergentes ricos.
- O campo `simetria` em cada arquivo `.js` deve refletir a simetria geométrica do tile.
 