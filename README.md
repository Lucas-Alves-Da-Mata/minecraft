# Minecraft Hub

Um hub de conteúdo Minecraft completo com criador de skins, catálogo de mobs 3D, central de mods e visualização interativa.

## Funcionalidades

- **Sistema de Abas**: Navegação por abas (HOME, SKINS, MOBS, MODS) com persistência de estado
- **Preview 3D de Skins**: Visualização 3D de skins de jogadores com animação de caminhada
- **Editor de Skins**: Canvas de pixel art 64×64 com ferramentas (lápis, borracha, preenchimento, conta-gotas), camadas base/overlay e exportação PNG
- **Catálogo de Mobs**: 14 mobs com preview 3D em tempo real, filtros por categoria (passivo/neutro/hostil), busca e paginação
- **Página de Detalhes**: Ao clicar em um mob, abre página dedicada com preview 3D grande, metadados completos, nível de ameaça e tabela de drops
- **Central de Mods**: Grade de mods com filtros por versão, tipo e ordenação
- **Renderizador 3D Próprio**: Engine que converte geometrias Bedrock para Three.js com suporte a ossos, UV mapping e rotações

## Como Usar

1. Abra o arquivo `index.html` em um navegador
2. Navegue pelas abas usando o menu superior
3. Na aba MOBS, clique em qualquer card para ver os detalhes do mob
4. Na aba SKINS, use o editor para criar skins personalizadas

## Estrutura do Projeto

```
minecraft/
├── index.html              # Página principal (SPA)
├── mob.html                # Página de detalhes do mob
├── css/
│   └── style.css           # Estilos completos com tema Minecraft
├── js/
│   ├── app.js              # Lógica principal (dados + todas as funções)
│   ├── mob-detail.js       # Lógica da página de detalhes
│   ├── mob3d.js            # Renderizador 3D (Bedrock → Three.js)
│   ├── mob3d.data.js       # Geometrias embutidas (14 mobs)
│   └── mob3d.tex.js        # Texturas base64 (15 texturas)
├── assets/
│   └── mobs/
│       ├── models/         # JSON de geometrias Bedrock (backup)
│       └── textures/       # PNGs de texturas (fallback)
└── database/
    └── schema.sql          # Schema PostgreSQL (planejamento futuro)
```

## Tecnologias

- HTML5 / CSS3 / JavaScript (ES6+)
- [Three.js](https://threejs.org/) (0.147.0) — Renderização WebGL
- [skinview3d](https://github.com/bs-community/skinview3d) (3.4.2) — Visualização 3D de skins
- Fonte: Press Start 2P (Google Fonts)

## Licença

MIT
