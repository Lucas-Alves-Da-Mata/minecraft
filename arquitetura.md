# Arquitetura e Documentação do Projeto - Minecraft Hub

## Visão Geral

Este projeto é um **hub de conteúdo Minecraft** que combina um **Criador de Skins** e um **Guia de Mobs**. A aplicação oferece uma experiência interativa inspirada no estilo visual do Minecraft, com navegação por abas, renderização 3D e uma interface semelhante à de um jogo.

## Stack Tecnológico

### Frontend
- **HTML5** - Estrutura semântica da página
- **CSS3** - Estilização com variáveis CSS e layout responsivo
- **JavaScript (ES6+)** - Lógica de aplicação do lado do cliente
- **Three.js (0.147.0)** - Biblioteca 3D para a visualização de mobs em 3D
- **skinview3d (3.4.2)** - Biblioteca para visualização 3D de skins Minecraft
- **Fontes** - Press Start 2P (fonte monoespaçada estilo Minecraft)

### Arquivos Principais
- `index.html` - Página principal, rotas de navegação e includes de scripts
- `css/style.css` - Estilos unificados com tema Minecraft
- `js/app.js` - Lógica principal do hub (skins + mobs)
- `js/mob-detail.js` - Detalhes da página de mobs (novo componente)
- `js/mob3d.js` - Renderização 3D de mobs (Bedrock + Three.js)
- `js/mob3d.data.js` - Geometrias de mobs embutidas (JSON, 1.21.0)
- `js/mob3d.tex.js` - Texturas de mobs embutidas (base64)
- `assets/mobs/models/` - Arquivos JSON de modelos de mobs (alternativo)
- `assets/mobs/textures/` - Texturas PNG de mobs (alternativo)

## Funcionalidades Principais

### 1. Sistema de Abas e Navegação
- **Três abas principais**: HOME (vestuário + notícias), SKINS (skin editor + skins em destaque), MOBS (catalogo de mobs com previews 3D), MODS (central de mods)
- **Navegação suave** usando âncoras de hash (`#tab-name`)
- **Persistência de estado** da aba ativa entre as interações do usuário

### 2. Preview 3D de Skins (HOME - Vestuário)
- **skinview3d** para visualização 3D de skins de jogadores (Steve/Alex, Herobrine, Ninja, Zumbi, Creeper)
- **Animation de caminhada** e rotação automática desativada em dispositivos móveis
- **Fallback** para visualização 2D como fallback para navegadores sem suporte

### 3. Editor de Skins (SKINS)
- **Canvas de pixel art de 64×64** para edição de skins
- **Três camadas**: base, sobreposição, com ferramentas de preenchimento, lápis, borracha e conta-gotas
- **Visualização 3D sincronizada** mostrando a skin no torso, cabeça e membros
- **Exportação** para PNG

### 4. Preview 3D de Mobs (MOBS)
- **Catálogo de 12 mobs** (lobo, zumbi, creeper, guardaívo, axolote, etc.)
- **Preview 3D em tempo real** (rotação no eixo Y)
- **Seletor de categoria** (passivo/neutro/hostil/todos)
- **Filtro de pesquisa** no nome/descrição do mob
- **Cards de mobs interativos** que navegam para páginas de detalhes dedicadas

### 5. Página de Detalhes de Mobs (NOVO)
- **Página dedicada** (`mob.html?id=<id>`) para cada mob
- **Preview 3D em grande escala** (reutilizando Mob3D.createViewer)
- **Metadados completos**: nome, emoji, bioma, categoria, nível de ameaça, descrição
- **Tabela de drops/loot** para mobs que possuem drops
- **Link de retorno** para voltar ao catálogo de mobs
- **Fallback** para body image caso a engine 3D falhe

### 6. Central de Mods (MODS)
- **Grade de mods** com filtros de versão/tipo/ordenação
- **Tags de loader** (Forge/Fabric)
- **Estatísticas de downloads** e classificações de popularidade
- **Simulação de download** do botão "DOWNLOAD DIRECT"

### 7. UI/UX e Estilos
- **Tema inspirado no Minecraft** com paleta de cores (amarelo, azul, verde, vermelho)
- **Bordas estilo Minecraft** (3px, offsets) e sombreamento
- **Tipografia** Press Start 2P para títulos e botoes
- **元件元件元组件** (componentes) reutilizáveis (panels, buttons, inputs)
- **Design responsivo** com breakpoints para mobile/tablet/desktop

## Arquitetura Técnica

### 1. Arquitetura do Frontend (App.js)

O `app.js` é o script principal que contém toda a lógica da aplicação:

```javascript
// Modulos principais
var MOBS_DATA = [...]      // Dados estáticos do catálogo de mobs
var MODS_DATA = [...]      // Dados estáticos de mods

// Funções principais
function initTabs()               // Sistema de navegação por abas
function initSteveViewer()        // Preview 3D de skins (skinview3d)
function initFeaturedSkins()       // Grid de skins em destaque
function initGallery()            // Gallery de skins do editor
function initSkinDownloads()       // Ações de download de skins
function initSkinEditor()          // Editor de skin de 64x64 pixels
function initMobs()                // Catalogo de mobs com preview 3D
function initMods()                // Central de mods com filtros
function initPlayButton()          // Modal de conexão do servidor
function initOptionsButton()       // Modal de opções (som, partículas, nuvem, FOV)
function initMarketButton()        // Modal do marketplace
function initFooterActions()       // Botões do footer (entrar, debug)

// Utilidades
var mobsController = null        // Controller de estado dos mobs (refresh, dispose)
var OPTIONS = { sound: true, particles: true, cloud: false, fov: 70 }
var MARKET_ITEMS = [...]          // Itens do marketplace
var FEATURED_SKINS = [...]        // Destaques do skin editor
```

### 2. Sistema de Renderização 3D de Mobs (mob3d.js)

O `mob3d.js` implementa um **renderizador WebGL** que converte geometrias Bedrock para a API Three.js:

```javascript
// Arquitetura principal
var CONFIG = {                   // Mapping slug -> textura/geometria
    wolf:    { geo: 'geometry.wolf', tex: 'textures/wolf.png' },
    zombie:  { geo: 'geometry.zombie.v1.8', tex: 'textures/zombie.png' },
    // ... outros mobs
};

// Funções principais
function buildCube(cube, boneInflate, tex, boneMirror, bonePivot)   // Caixa 3D com mapeamento UV
function buildBones(geo, info, tex)                                 // Hierarquia de ossos + fusão de mesh
function buildAsset(slug)                                           // Promise de um grupo THREE de um mob
function MobViewer(canvas, slug, onError)                            // Wrapper com controles OrbitControls
```

#### Convenções da Arquitetura Bedrock→Three.js
- **Z negado**: Bedrock "south" (+Z) → Three.js -Z (inverso)
- **Ordem de Euler**: (+rx, -ry, -rz) no estilo ZYX
- **Regiões UV**: Tira lateral [west][north][east][south]
- **Pivot de osso**: Ponto de rotação para cada osso

### 3. Sistema de Asset Management

#### Geometrias (mob3d.data.js)
- **Formato**: JSON Bedrock 1.21.0/1.8.0 com `minecraft:geometry` e `bones`
- **Chave única**: `window.MOB3D_MODELS['wolf']` (string JSON)
- **Fallback**: Arquivos `.geo.json` em `assets/mobs/models/` (mesmo conteúdo, para uso offline)

#### Texturas (mob3d.tex.js)
- **Embebidas como base64**: `window.MOB3D_TEXTURES['textures/wolf.png'] = 'data:image/png;base64,...'`
- **Fallback**: Arquivos `.png` em `assets/mobs/textures/` (mesmo 64×32)
- **Cache**: Armazenado localmente para load offline rápido

### 4. Arquitetura de Estado (app.js)

#### Gerenciamento de Abas e UI
- **Navegação por hash** (`location.hash`)
- **Estado do controller** (mobsController, listeners de eventos)
- **Modal + Toast System** para dialogs e notificações
- **Observer** para ResizeObserver (detecção de redimensionamento)

#### Fluxo de Controle
1. **DOMContentLoaded** → `init()` principal
2. `init()` → initTabs() + initBgCanvas() + initSteveViewer() + initMobs() + initMods() + ...
3. **Evento do usuário** (click, input, touch) → listeners de eventos nos módulos específicos
4. **Render** → `requestAnimationFrame` loops (draw canvas BG, 3D animations)
5. **Dispose** → limpar listeners, desconectar observers, liberar recursos WebGL

## Casos de Uso e Fluxos de Usuário

### Fluxo 1: Usuário clica em um mob no catálogo
1. Usuário clica em um `.mob-card` no `#mob-grid` (app.js line 498)
2. Navegação → `mob.html?id=wolf` (hash + query param)
3. `mob-detail.js` lê `?id=wolf`, resolve via `MCHub.findMobById`
4. Popula DOM do detalhe (título, emoji, categoria, biome, ameaça, descrição, drops)
5. `Mob3D.createViewer(canvas, 'wolf')` renderiza preview 3D
6. Usuário visualiza e clica em "VOLTAR AOS MOBS"

### Fluxo 2: Usuário abre uma aba e realiza ações
1. Usuário clica em `[MOBS]` na navegação principal → `#tab-mobs` ativo
2. Cards de mobs são renderizados via `initMobs`/`render`
3. `Mob3D.createViewer(vc, mob.id)` mostra preview 3D nos cards
4. Usuário filtra via botões de categoria ou campo de busca
5. `render()` reconstrói o DOM com filtered+mapped mobs
6. `mobsController.dispose()` limpa viewers anteriores

### Fluxo 3: Editor de Skins
1. Usuário navega para `[SKINS]` → `#tab-skins`
2. Canvas de edição de skin 64×64 + paleta de cores + camadas + ferramentas
3. `skinview3d` no preview 3D mostra visualização em tempo real da skin editada
4. Usuário desenha, preenche, apaga → canvas atualizado
5. Usuário clica em "EXPORTAR PNG" → download de skin customizada

## Tecnologias e Ferramentas

### Bibliotecas Principais
- **Three.js (0.147.0)**: Renderizador WebGL, Camera Perspective, malhas, materials, OrbitControls
- **skinview3d (3.4.2)**: Visualização 3D de skins, WalkingAnimation, SkinViewer
- **ResizeObserver**: Detecção de redimensionamento responsivo

### Workflow de Desenvolvimento
- **HTML/CSS/JS**: Arquivo único, sem build tools (para distribuição simples)
- **Modulos do Node**: Sem módulos; script único para entrega
- **Controle de versão**: Git (commit messages em PT-BR)
- **Documentação**: README.md + session-summary.md + arquitetura.md

## Manutenção e Extensão

### Adicionar um novo mob
1. **JSON**: Adicione à `MOBS_DATA` em `app.js` (id, name, cat, desc, biome, threat, tl, emoji, drops)
2. **Modelo 3D**: Adicione geometria em `assets/mobs/models/<name>.json` (convertida do Bedrock)
3. **Textura**: Adicione PNG em `assets/mobs/textures/<name>.png` (64× riga)
4. **Carregue**: Adicione mapeamento em `mob3d.data.js` e `mob3d.tex.js` (ou faça com que carreguem localmente via fallback)
5. **Test**: Verifique a visualização no catálogo e na página de detalhes

### Adicionar um novo módulo
1. **Dados**: Adicione à `MODS_DATA` em `app.js` (id, title, ver, type, desc, loader, dl, emoji)
2. **UI**: O componente já lida com qualquer entrada em `MODS_DATA`
3. **CSS**: Estilos genéricos aplicam-se automaticamente

### Manutenção do código
- **JavaScript ES6+**: Sem características recentes não compatíveis
- **Sem dependências externas**: Todos os assets embutidos, operacional offline
- **Sem linting/typecheck**: Assumindo linting manual; testes não presentes

## Casos de Borda e Considerações de Produção

### Renderização 3D
- **Fallback**: Se Three.js/skinview3d não carregar, usamos background image de body MC-heads.net
- **Cleanup**: `MobViewer.prototype.dispose()` libera texturas WebGL e observers
- **Performance**: `requestAnimationFrame` loop estático, sem partículas pesadas

### Arquitetura de Asset
- **Cobertura offline**: Base64 + fallback local garantem funcionamento sem internet
- **Tamanho do arquivo**: Embed de texturas (base64) ~150KB; geometrias ~50KB; total <1MB do JS principal
- **Nenhuma chamada de rede** após load inicial (SPA-like)

### Segurança
- **Sem keypoints**: Sem autenticação, sem armazenamento de senhas
- **CSP**: Sem política de Content-Security-Policy definida (para desenvolvimento local)
- **XSS**: Event listeners via `addEventListener` com funções anônimas (razoavelmente seguro)

## Resumo

Este projeto é um **Single-Page Application** completo que simula um hub de conteúdo Minecraft com:
- **Skin editor** (pixel art 64×64 com preview 3D)
- **Catálogo de mobs** (12 mobs com preview 3D, filtros, busca)
- **Central de mods** (grade com filtros, simulação de download)
- **Página de detalhes dedicada** para cada mob (3D + metadados completos)

A aplicação utiliza as **convenções Bedrock→Three.js** para renderizar mobs, emulando a engine de visualização do Minecraft dentro do navegador. Tudo é **embutido** (JSON + base64) para funcionamento offline, tornando-a uma experiência totalmente standalone.

**Principais arquiteturas:** Frontend stateless + composicional, gerenciamento centralizado de estado (app.js), renderizador 3D reutilizável (Mob3D), asset management embutido + fallback local.
