# Mesa de Craft

Um criador de skins de Minecraft por peças, onde os usuários podem montar suas próprias skins selecionando diferentes partes e cores.

## Funcionalidades

- **Seleção de Peças**: Escolha entre diferentes cabeças, corpos, braços, pernas e acessórios
- **Personalização de Cores**: Paleta de cores do Minecraft + seletor personalizado
- **Preview 3D**: Visualização em tempo real usando a biblioteca skinview3d
- **Exportação**: Baixe sua skin em PNG
- **Carregar Skin Existente**: Importe skins de jogadores existentes pelo nome
- **Templates Prontos**: Steve, Alex e Cavaleiro

## Como Usar

1. Abra o arquivo `index.html` em um navegador
2. Selecione uma categoria de peças (Cabeças, Corpos, etc.)
3. Clique em uma peça para selecioná-la
4. Escolha uma cor na paleta
5. Acompanhe o preview 3D em tempo real
6. Clique em "Baixar PNG" para exportar

## Estrutura do Projeto

```
minecraft-skin-creator/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos CSS
├── js/
│   ├── app.js          # Lógica principal da aplicação
│   ├── skinComposer.js # Lógica de composição de skins
│   └── parts.js        # Dados das peças disponíveis
├── assets/
│   ├── heads/          # Imagens de cabeças
│   ├── bodies/         # Imagens de corpos
│   ├── arms/           # Imagens de braços
│   ├── legs/           # Imagens de pernas
│   └── accessories/    # Imagens de acessórios
└── lib/
    └── skinview3d.bundle.js  # Biblioteca de renderização 3D
```

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)
- [skinview3d](https://github.com/bs-community/skinview3d) - Renderização 3D de skins

## Hospedagem

O projeto pode ser hospedado gratuitamente em:
- GitHub Pages
- Vercel
- Netlify

## Licença

MIT