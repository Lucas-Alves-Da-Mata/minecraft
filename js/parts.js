const SKIN_PARTS = {
    heads: [
        {
            id: 'head_1',
            name: 'Padrão',
            preview: null,
            texture: {
                front: { x: 8, y: 8, w: 8, h: 8 },
                back: { x: 24, y: 8, w: 8, h: 8 },
                left: { x: 16, y: 8, w: 8, h: 8 },
                right: { x: 0, y: 8, w: 8, h: 8 },
                top: { x: 8, y: 0, w: 8, h: 8 },
                bottom: { x: 16, y: 0, w: 8, h: 8 }
            }
        },
        {
            id: 'head_2',
            name: 'Cabelo Curto',
            preview: null,
            texture: {
                front: { x: 8, y: 8, w: 8, h: 8 },
                back: { x: 24, y: 8, w: 8, h: 8 },
                left: { x: 16, y: 8, w: 8, h: 8 },
                right: { x: 0, y: 8, w: 8, h: 8 },
                top: { x: 8, y: 0, w: 8, h: 8 },
                bottom: { x: 16, y: 0, w: 8, h: 8 },
                hatFront: { x: 40, y: 8, w: 8, h: 8 },
                hatTop: { x: 40, y: 0, w: 8, h: 8 }
            }
        },
        {
            id: 'head_3',
            name: 'Cabelo Longo',
            preview: null,
            texture: {
                front: { x: 8, y: 8, w: 8, h: 8 },
                back: { x: 24, y: 8, w: 8, h: 8 },
                left: { x: 16, y: 8, w: 8, h: 8 },
                right: { x: 0, y: 8, w: 8, h: 8 },
                top: { x: 8, y: 0, w: 8, h: 8 },
                bottom: { x: 16, y: 0, w: 8, h: 8 },
                hatFront: { x: 40, y: 8, w: 8, h: 8 },
                hatBack: { x: 56, y: 8, w: 8, h: 8 },
                hatLeft: { x: 48, y: 8, w: 8, h: 8 },
                hatRight: { x: 32, y: 8, w: 8, h: 8 },
                hatTop: { x: 40, y: 0, w: 8, h: 8 }
            }
        },
        {
            id: 'head_4',
            name: 'Careca',
            preview: null,
            texture: {
                front: { x: 8, y: 8, w: 8, h: 8 },
                back: { x: 24, y: 8, w: 8, h: 8 },
                left: { x: 16, y: 8, w: 8, h: 8 },
                right: { x: 0, y: 8, w: 8, h: 8 },
                top: { x: 8, y: 0, w: 8, h: 8 },
                bottom: { x: 16, y: 0, w: 8, h: 8 }
            }
        }
    ],
    bodies: [
        {
            id: 'body_1',
            name: 'Camiseta',
            preview: null,
            texture: {
                front: { x: 20, y: 20, w: 8, h: 12 },
                back: { x: 32, y: 20, w: 8, h: 12 },
                left: { x: 28, y: 20, w: 4, h: 12 },
                right: { x: 16, y: 20, w: 4, h: 12 },
                top: { x: 20, y: 16, w: 8, h: 4 },
                bottom: { x: 28, y: 16, w: 8, h: 4 }
            }
        },
        {
            id: 'body_2',
            name: 'Jaqueta',
            preview: null,
            texture: {
                front: { x: 20, y: 20, w: 8, h: 12 },
                back: { x: 32, y: 20, w: 8, h: 12 },
                left: { x: 28, y: 20, w: 4, h: 12 },
                right: { x: 16, y: 20, w: 4, h: 12 },
                top: { x: 20, y: 16, w: 8, h: 4 },
                bottom: { x: 28, y: 16, w: 8, h: 4 },
                jacketFront: { x: 20, y: 36, w: 8, h: 12 },
                jacketBack: { x: 32, y: 36, w: 8, h: 12 },
                jacketLeft: { x: 28, y: 36, w: 4, h: 12 },
                jacketRight: { x: 16, y: 36, w: 4, h: 12 },
                jacketTop: { x: 20, y: 32, w: 8, h: 4 },
                jacketBottom: { x: 28, y: 32, w: 8, h: 4 }
            }
        },
        {
            id: 'body_3',
            name: 'Armadura',
            preview: null,
            texture: {
                front: { x: 20, y: 20, w: 8, h: 12 },
                back: { x: 32, y: 20, w: 8, h: 12 },
                left: { x: 28, y: 20, w: 4, h: 12 },
                right: { x: 16, y: 20, w: 4, h: 12 },
                top: { x: 20, y: 16, w: 8, h: 4 },
                bottom: { x: 28, y: 16, w: 8, h: 4 }
            }
        },
        {
            id: 'body_4',
            name: 'Moletom',
            preview: null,
            texture: {
                front: { x: 20, y: 20, w: 8, h: 12 },
                back: { x: 32, y: 20, w: 8, h: 12 },
                left: { x: 28, y: 20, w: 4, h: 12 },
                right: { x: 16, y: 20, w: 4, h: 12 },
                top: { x: 20, y: 16, w: 8, h: 4 },
                bottom: { x: 28, y: 16, w: 8, h: 4 }
            }
        }
    ],
    arms: [
        {
            id: 'arm_1',
            name: 'Braço Curto',
            preview: null,
            texture: {
                front: { x: 44, y: 20, w: 4, h: 12 },
                back: { x: 52, y: 20, w: 4, h: 12 },
                left: { x: 48, y: 20, w: 4, h: 12 },
                right: { x: 40, y: 20, w: 4, h: 12 },
                top: { x: 44, y: 16, w: 4, h: 4 },
                bottom: { x: 48, y: 16, w: 4, h: 4 }
            }
        },
        {
            id: 'arm_2',
            name: 'Braço Longo',
            preview: null,
            texture: {
                front: { x: 44, y: 20, w: 4, h: 12 },
                back: { x: 52, y: 20, w: 4, h: 12 },
                left: { x: 48, y: 20, w: 4, h: 12 },
                right: { x: 40, y: 20, w: 4, h: 12 },
                top: { x: 44, y: 16, w: 4, h: 4 },
                bottom: { x: 48, y: 16, w: 4, h: 4 }
            }
        }
    ],
    legs: [
        {
            id: 'leg_1',
            name: 'Perna Curta',
            preview: null,
            texture: {
                front: { x: 4, y: 20, w: 4, h: 12 },
                back: { x: 12, y: 20, w: 4, h: 12 },
                left: { x: 8, y: 20, w: 4, h: 12 },
                right: { x: 0, y: 20, w: 4, h: 12 },
                top: { x: 4, y: 16, w: 4, h: 4 },
                bottom: { x: 8, y: 16, w: 4, h: 4 }
            }
        },
        {
            id: 'leg_2',
            name: 'Perna Longa',
            preview: null,
            texture: {
                front: { x: 4, y: 20, w: 4, h: 12 },
                back: { x: 12, y: 20, w: 4, h: 12 },
                left: { x: 8, y: 20, w: 4, h: 12 },
                right: { x: 0, y: 20, w: 4, h: 12 },
                top: { x: 4, y: 16, w: 4, h: 4 },
                bottom: { x: 8, y: 16, w: 4, h: 4 }
            }
        }
    ]
};

const MINECRAFT_COLORS = [
    '#f9d3b5', '#e8b890', '#c68e5b', '#9d6b42', '#754c28', '#4b2e13',
    '#ffffff', '#f0e6d2', '#d4a543', '#b5722c', '#6b3a1f', '#2d1a0e',
    '#1a8a1a', '#2e5cb8', '#6b3fa0', '#8b4513', '#1a1a1a', '#4169e1',
    '#ff0000', '#ff6600', '#ffff00', '#00ff00', '#00ffff', '#0000ff',
    '#9900ff', '#ff00ff', '#ff0066', '#993300', '#006600', '#003366',
    '#5a9e3f', '#3d6b2c', '#8b4513', '#a0522d', '#cd853f', '#deb887',
    '#d4d4d4', '#a8a8a8', '#7c7c7c', '#505050', '#2c2c2c', '#000000',
    '#87ceeb', '#4682b4', '#2f4f4f', '#228b22', '#32cd32', '#90ee90',
    '#daa520', '#ffd700', '#ff8c00', '#ff4500', '#dc143c', '#8b0000'
];

const SKIN_TEMPLATES = [
    {
        id: 'steve',
        name: 'Steve',
        description: 'O classico Minecraft Steve',
        parts: { head: 'head_1', body: 'body_1', armR: 'arm_1', armL: 'arm_1', legR: 'leg_1', legL: 'leg_1' },
        colors: { head: '#c68e5b', body: '#4a9bd9', armR: '#c68e5b', armL: '#c68e5b', legR: '#3d3d8f', legL: '#3d3d8f' },
        model: 'default',
        tags: ['classico', 'padrao']
    },
    {
        id: 'alex',
        name: 'Alex',
        description: 'A variante feminina do Minecraft',
        parts: { head: 'head_1', body: 'body_1', armR: 'arm_1', armL: 'arm_1', legR: 'leg_1', legL: 'leg_1' },
        colors: { head: '#f0a67a', body: '#5a7a3f', armR: '#f0a67a', armL: '#f0a67a', legR: '#5a5a5a', legL: '#5a5a5a' },
        model: 'slim',
        tags: ['feminino', 'padrao']
    },
    {
        id: 'knight',
        name: 'Cavaleiro',
        description: 'Um valente cavaleiro medieval',
        parts: { head: 'head_1', body: 'body_3', armR: 'arm_2', armL: 'arm_2', legR: 'leg_2', legL: 'leg_2' },
        colors: { head: '#a8a8a8', body: '#7c7c7c', armR: '#a8a8a8', armL: '#a8a8a8', legR: '#505050', legL: '#505050' },
        model: 'default',
        tags: ['medieval', 'armadura']
    },
    {
        id: 'ninja',
        name: 'Ninja',
        description: 'Mestre das sombras',
        parts: { head: 'head_2', body: 'body_2', armR: 'arm_2', armL: 'arm_2', legR: 'leg_2', legL: 'leg_2' },
        colors: { head: '#2c2c2c', body: '#1a1a1a', armR: '#2c2c2c', armL: '#2c2c2c', legR: '#1a1a1a', legL: '#1a1a1a' },
        model: 'default',
        tags: ['martial', 'escuro']
    },
    {
        id: 'astronaut',
        name: 'Astronauta',
        description: 'Explorador do espaco',
        parts: { head: 'head_1', body: 'body_2', armR: 'arm_2', armL: 'arm_2', legR: 'leg_2', legL: 'leg_2' },
        colors: { head: '#f0f0f0', body: '#d4d4d4', armR: '#f0f0f0', armL: '#f0f0f0', legR: '#a8a8a8', legL: '#a8a8a8' },
        model: 'default',
        tags: ['espaco', 'futurista']
    },
    {
        id: 'zombie',
        name: 'Zumbi',
        description: 'O classico mob do Minecraft',
        parts: { head: 'head_4', body: 'body_1', armR: 'arm_1', armL: 'arm_1', legR: 'leg_1', legL: 'leg_1' },
        colors: { head: '#5a8a3f', body: '#3d6b2c', armR: '#5a8a3f', armL: '#5a8a3f', legR: '#3d6b2c', legL: '#3d6b2c' },
        model: 'default',
        tags: ['mob', 'monstro']
    },
    {
        id: 'robot',
        name: 'Robot',
        description: 'Maquina inteligente',
        parts: { head: 'head_1', body: 'body_3', armR: 'arm_2', armL: 'arm_2', legR: 'leg_2', legL: 'leg_2' },
        colors: { head: '#4682b4', body: '#5a9e3f', armR: '#4682b4', armL: '#4682b4', legR: '#3d6b2c', legL: '#3d6b2c' },
        model: 'default',
        tags: ['futurista', 'metal']
    },
    {
        id: 'pirate',
        name: 'Pirata',
        description: 'Corsario dos mares',
        parts: { head: 'head_3', body: 'body_2', armR: 'arm_2', armL: 'arm_2', legR: 'leg_2', legL: 'leg_2' },
        colors: { head: '#8b4513', body: '#2c2c2c', armR: '#8b4513', armL: '#8b4513', legR: '#1a1a1a', legL: '#1a1a1a' },
        model: 'default',
        tags: ['maritimo', 'aventureiro']
    },
    {
        id: 'ice_king',
        name: 'Rei do Gelo',
        description: 'Senhor do gelo eterno',
        parts: { head: 'head_3', body: 'body_4', armR: 'arm_2', armL: 'arm_2', legR: 'leg_2', legL: 'leg_2' },
        colors: { head: '#87ceeb', body: '#4682b4', armR: '#87ceeb', armL: '#87ceeb', legR: '#2f4f4f', legL: '#2f4f4f' },
        model: 'default',
        tags: ['frio', 'magico']
    },
    {
        id: 'fire_lord',
        name: 'Senhor do Fogo',
        description: 'Mestre das chamas',
        parts: { head: 'head_4', body: 'body_3', armR: 'arm_2', armL: 'arm_2', legR: 'leg_2', legL: 'leg_2' },
        colors: { head: '#ff4500', body: '#ff6600', armR: '#ff4500', armL: '#ff4500', legR: '#8b0000', legL: '#8b0000' },
        model: 'default',
        tags: ['fogo', 'poderoso']
    }
];

const MOB_CARDS = [
    // === PASSIVOS ===
    { id: 'mob_allay', name: 'Allay', emoji: '🧚', category: 'passive', description: 'Criatura azul voadora que coleta itens', colors: { head: '#4fc3f7', body: '#29b6f6', armR: '#81d4fa', armL: '#81d4fa', legR: '#4fc3f7', legL: '#4fc3f7' }, tags: ['voador', 'amigo'] },
    { id: 'mob_armadillo', name: 'Armadillo', emoji: '🦔', category: 'passive', description: 'Tatu que solta escamas de armadura', colors: { head: '#8d6e63', body: '#6d4c41', armR: '#a1887f', armL: '#a1887f', legR: '#5d4037', legL: '#5d4037' }, tags: ['deserto', 'util'] },
    { id: 'mob_axolotl', name: 'Axolotl', emoji: '🦎', category: 'passive', description: 'Salamandra aquatica que regenera vida', colors: { head: '#f48fb1', body: '#f06292', armR: '#f8bbd0', armL: '#f8bbd0', legR: '#ec407a', legL: '#ec407a' }, tags: ['aquatico', 'lutador'] },
    { id: 'mob_bat', name: 'Bat', emoji: '🦇', category: 'passive', description: 'Morcego das cavernas escuras', colors: { head: '#4a4a4a', body: '#3a3a3a', armR: '#5a5a5a', armL: '#5a5a5a', legR: '#2a2a2a', legL: '#2a2a2a' }, tags: ['noturno', 'caverna'] },
    { id: 'mob_camel', name: 'Camel', emoji: '🐫', category: 'passive', description: 'Animal do deserto para montar', colors: { head: '#d4a574', body: '#c9956a', armR: '#deb887', armL: '#deb887', legR: '#b8860b', legL: '#b8860b' }, tags: ['deserto', 'montaria'] },
    { id: 'mob_cat', name: 'Cat', emoji: '🐱', category: 'passive', description: 'Gato domestico que afasta creepers', colors: { head: '#ff9800', body: '#f57c00', armR: '#ffb74d', armL: '#ffb74d', legR: '#e65100', legL: '#e65100' }, tags: ['domestico', 'util'] },
    { id: 'mob_chicken', name: 'Chicken', emoji: '🐔', category: 'passive', description: 'Galinha que poe ovos', colors: { head: '#ffffff', body: '#f5f5f5', armR: '#e0e0e0', armL: '#e0e0e0', legR: '#ff9800', legL: '#ff9800' }, tags: ['fazenda', 'alimento'] },
    { id: 'mob_cod', name: 'Cod', emoji: '🐟', category: 'passive', description: 'Bacalhau comum dos oceanos', colors: { head: '#90a4ae', body: '#78909c', armR: '#b0bec5', armL: '#b0bec5', legR: '#607d8b', legL: '#607d8b' }, tags: ['aquatico', 'alimento'] },
    { id: 'mob_cow', name: 'Cow', emoji: '🐄', category: 'passive', description: 'Vaca que fornece leite e couro', colors: { head: '#795548', body: '#5d4037', armR: '#8d6e63', armL: '#8d6e63', legR: '#4e342e', legL: '#4e342e' }, tags: ['fazenda', 'alimento'] },
    { id: 'mob_donkey', name: 'Donkey', emoji: '🫏', category: 'passive', description: 'Jumento que pode carregar baus', colors: { head: '#8d6e63', body: '#795548', armR: '#a1887f', armL: '#a1887f', legR: '#6d4c41', legL: '#6d4c41' }, tags: ['montaria', 'transporte'] },
    { id: 'mob_fox', name: 'Fox', emoji: '🦊', category: 'passive', description: 'Raposa que pega itens e sementes', colors: { head: '#ff6d00', body: '#e65100', armR: '#ff9800', armL: '#ff9800', legR: '#bf360c', legL: '#bf360c' }, tags: ['floresta', 'rapida'] },
    { id: 'mob_frog', name: 'Frog', emoji: '🐸', category: 'passive', description: 'Sapo que pula e come slimes', colors: { head: '#4caf50', body: '#388e3c', armR: '#66bb6a', armL: '#66bb6a', legR: '#2e7d32', legL: '#2e7d32' }, tags: ['pantano', 'pulador'] },
    { id: 'mob_glowsquid', name: 'Glow Squid', emoji: '🦑', category: 'passive', description: 'Lula brilhante das profundezas', colors: { head: '#00e5ff', body: '#00b8d4', armR: '#18ffff', armL: '#18ffff', legR: '#0097a7', legL: '#0097a7' }, tags: ['aquatico', 'brilhante'] },
    { id: 'mob_happyghast', name: 'Happy Ghast', emoji: '😇', category: 'passive', description: 'Ghast feliz que voa e transporta jogadores', colors: { head: '#e0e0e0', body: '#bdbdbd', armR: '#f5f5f5', armL: '#f5f5f5', legR: '#9e9e9e', legL: '#9e9e9e' }, tags: ['voador', 'transporte'] },
    { id: 'mob_horse', name: 'Horse', emoji: '🐴', category: 'passive', description: 'Cavalo para montar e explorar', colors: { head: '#8d6e63', body: '#795548', armR: '#a1887f', armL: '#a1887f', legR: '#5d4037', legL: '#5d4037' }, tags: ['montaria', 'rapido'] },
    { id: 'mob_mooshroom', name: 'Mooshroom', emoji: '🍄', category: 'passive', description: 'Vaca cogumelo das ilhas', colors: { head: '#f44336', body: '#d32f2f', armR: '#ef5350', armL: '#ef5350', legR: '#c62828', legL: '#c62828' }, tags: ['raro', 'ilha'] },
    { id: 'mob_mule', name: 'Mule', emoji: '🐴', category: 'passive', description: 'Mula para transportar baus', colors: { head: '#795548', body: '#6d4c41', armR: '#8d6e63', armL: '#8d6e63', legR: '#5d4037', legL: '#5d4037' }, tags: ['transporte', 'bau'] },
    { id: 'mob_ocelot', name: 'Ocelot', emoji: '🐆', category: 'passive', description: 'Gato selvagem das selvas', colors: { head: '#ffc107', body: '#ffb300', armR: '#ffca28', armL: '#ffca28', legR: '#ffa000', legL: '#ffa000' }, tags: ['selva', 'raro'] },
    { id: 'mob_parrot', name: 'Parrot', emoji: '🦜', category: 'passive', description: 'Papagaio que imita sons', colors: { head: '#f44336', body: '#2196f3', armR: '#4caf50', armL: '#ffeb3b', legR: '#9c27b0', legL: '#ff9800' }, tags: ['selva', 'colorido'] },
    { id: 'mob_pig', name: 'Pig', emoji: '🐷', category: 'passive', description: 'Porco que fornece carne', colors: { head: '#f8bbd0', body: '#f48fb1', armR: '#fce4ec', armL: '#fce4ec', legR: '#f06292', legL: '#f06292' }, tags: ['fazenda', 'alimento'] },
    { id: 'mob_rabbit', name: 'Rabbit', emoji: '🐰', category: 'passive', description: 'Coelho que pula e solta pele', colors: { head: '#a1887f', body: '#8d6e63', armR: '#bcaaa4', armL: '#bcaaa4', legR: '#795548', legL: '#795548' }, tags: ['pulador', 'pele'] },
    { id: 'mob_salmon', name: 'Salmon', emoji: '🐟', category: 'passive', description: 'Salmão dos rios e oceanos', colors: { head: '#e57373', body: '#ef5350', armR: '#ef9a9a', armL: '#ef9a9a', legR: '#c62828', legL: '#c62828' }, tags: ['aquatico', 'alimento'] },
    { id: 'mob_sheep', name: 'Sheep', emoji: '🐑', category: 'passive', description: 'Ovelha que fornece la e carne', colors: { head: '#ffffff', body: '#f5f5f5', armR: '#e0e0e0', armL: '#e0e0e0', legR: '#bdbdbd', legL: '#bdbdbd' }, tags: ['fazenda', 'la'] },
    { id: 'mob_skeletonhorse', name: 'Skeleton Horse', emoji: '💀', category: 'passive', description: 'Cavalo esqueleto das tempestades', colors: { head: '#bdbdbd', body: '#9e9e9e', armR: '#d4d4d4', armL: '#d4d4d4', legR: '#757575', legL: '#757575' }, tags: ['undead', 'raro'] },
    { id: 'mob_sniffer', name: 'Sniffer', emoji: '🐽', category: 'passive', description: 'Mob antigo que escava sementes', colors: { head: '#2e7d32', body: '#1b5e20', armR: '#43a047', armL: '#43a047', legR: '#0d3b0f', legL: '#0d3b0f' }, tags: ['antigo', 'escavador'] },
    { id: 'mob_snowgolem', name: 'Snow Golem', emoji: '⛄', category: 'passive', description: 'Golem de neve que atira bolas de neve', colors: { head: '#ffffff', body: '#e0e0e0', armR: '#f5f5f5', armL: '#f5f5f5', legR: '#bdbdbd', legL: '#bdbdbd' }, tags: ['golem', 'neve'] },
    { id: 'mob_squid', name: 'Squid', emoji: '🦑', category: 'passive', description: 'Lula que solta tinta', colors: { head: '#37474f', body: '#263238', armR: '#455a64', armL: '#455a64', legR: '#1c2f38', legL: '#1c2f38' }, tags: ['aquatico', 'tinta'] },
    { id: 'mob_strider', name: 'Strider', emoji: '🦎', category: 'passive', description: 'Caminhante que anda sobre lava', colors: { head: '#e53935', body: '#c62828', armR: '#ef5350', armL: '#ef5350', legR: '#b71c1c', legL: '#b71c1c' }, tags: ['nether', 'lava'] },
    { id: 'mob_tadpole', name: 'Tadpole', emoji: '🐸', category: 'passive', description: 'Girino que se transforma em sapo', colors: { head: '#4caf50', body: '#388e3c', armR: '#66bb6a', armL: '#66bb6a', legR: '#2e7d32', legL: '#2e7d32' }, tags: ['aquatico', 'jovem'] },
    { id: 'mob_tropicalfish', name: 'Tropical Fish', emoji: '🐠', category: 'passive', description: 'Peixe colorido dos recifes', colors: { head: '#ff9800', body: '#4caf50', armR: '#2196f3', armL: '#ffeb3b', legR: '#f44336', legL: '#9c27b0' }, tags: ['aquatico', 'colorido'] },
    { id: 'mob_turtle', name: 'Turtle', emoji: '🐢', category: 'passive', description: 'Tartaruga marinha que poe ovos', colors: { head: '#4caf50', body: '#388e3c', armR: '#66bb6a', armL: '#66bb6a', legR: '#795548', legL: '#795548' }, tags: ['praia', 'ovos'] },
    { id: 'mob_villager', name: 'Villager', emoji: '👨‍🌾', category: 'passive', description: 'Aldeao que troca e trabalha', colors: { head: '#c68e5b', body: '#795548', armR: '#c68e5b', armL: '#c68e5b', legR: '#5d4037', legL: '#5d4037' }, tags: ['aldeia', 'troca'] },
    { id: 'mob_wanderingtrader', name: 'Wandering Trader', emoji: '🧙', category: 'passive', description: 'Mercador viajante que vende itens raros', colors: { head: '#c68e5b', body: '#2196f3', armR: '#c68e5b', armL: '#c68e5b', legR: '#1565c0', legL: '#1565c0' }, tags: ['mercador', 'viajante'] },
    { id: 'mob_zombiehorse', name: 'Zombie Horse', emoji: '🐴', category: 'passive', description: 'Cavalo zumbi das sombras', colors: { head: '#4caf50', body: '#388e3c', armR: '#66bb6a', armL: '#66bb6a', legR: '#2e7d32', legL: '#2e7d32' }, tags: ['undead', 'montaria'] },

    // === NEUTROS ===
    { id: 'mob_bee', name: 'Bee', emoji: '🐝', category: 'neutral', description: 'Abelha que poliniza e produz mel', colors: { head: '#ffc107', body: '#4a4a4a', armR: '#ffb300', armL: '#ffb300', legR: '#333333', legL: '#333333' }, tags: ['abelha', 'mel'] },
    { id: 'mob_cavespider', name: 'Cave Spider', emoji: '🕷️', category: 'neutral', description: 'Aranha venenosa das minas', colors: { head: '#1b5e20', body: '#2e7d32', armR: '#388e3c', armL: '#388e3c', legR: '#0d3b0f', legL: '#0d3b0f' }, tags: ['veneno', 'caverna'] },
    { id: 'mob_dolphin', name: 'Dolphin', emoji: '🐬', category: 'neutral', description: 'Golfinho que guia para tesouros', colors: { head: '#90a4ae', body: '#78909c', armR: '#b0bec5', armL: '#b0bec5', legR: '#607d8b', legL: '#607d8b' }, tags: ['aquatico', 'guia'] },
    { id: 'mob_enderman', name: 'Enderman', emoji: '👤', category: 'neutral', description: 'Criatura que teleporta e carrega blocos', colors: { head: '#212121', body: '#1a1a1a', armR: '#424242', armL: '#424242', legR: '#0d0d0d', legL: '#0d0d0d' }, tags: ['ender', 'teleporte'] },
    { id: 'mob_fox2', name: 'Fox', emoji: '🦊', category: 'neutral', description: 'Raposa noturna que ataca se provocada', colors: { head: '#ff6d00', body: '#e65100', armR: '#ff9800', armL: '#ff9800', legR: '#bf360c', legL: '#bf360c' }, tags: ['noturno', 'atacante'] },
    { id: 'mob_goat', name: 'Goat', emoji: '🐐', category: 'neutral', description: 'Cabra das montanhas que ataca', colors: { head: '#9e9e9e', body: '#757575', armR: '#bdbdbd', armL: '#bdbdbd', legR: '#616161', legL: '#616161' }, tags: ['montanha', 'chifres'] },
    { id: 'mob_iron_golem', name: 'Iron Golem', emoji: '🤖', category: 'neutral', description: 'Golem de ferro que protege aldeias', colors: { head: '#9e9e9e', body: '#757575', armR: '#bdbdbd', armL: '#bdbdbd', legR: '#424242', legL: '#424242' }, tags: ['golem', 'protetor'] },
    { id: 'mob_llama', name: 'Llama', emoji: '🦙', category: 'neutral', description: 'Lhama que escupe e carrega baus', colors: { head: '#a1887f', body: '#8d6e63', armR: '#bcaaa4', armL: '#bcaaa4', legR: '#6d4c41', legL: '#6d4c41' }, tags: ['transporte', 'escupe'] },
    { id: 'mob_panda', name: 'Panda', emoji: '🐼', category: 'neutral', description: 'Panda que pode ser agressivo', colors: { head: '#ffffff', body: '#212121', armR: '#212121', armL: '#212121', legR: '#000000', legL: '#000000' }, tags: ['bamboo', 'raro'] },
    { id: 'mob_piglin', name: 'Piglin', emoji: '🐗', category: 'neutral', description: 'Porco guerreiro que adora ouro', colors: { head: '#ff9800', body: '#f57c00', armR: '#ffb74d', armL: '#ffb74d', legR: '#e65100', legL: '#e65100' }, tags: ['nether', 'ouro'] },
    { id: 'mob_polarbear', name: 'Polar Bear', emoji: '🐻‍❄️', category: 'neutral', description: 'Urso polar que protege filhotes', colors: { head: '#ffffff', body: '#f5f5f5', armR: '#e0e0e0', armL: '#e0e0e0', legR: '#bdbdbd', legL: '#bdbdbd' }, tags: ['gelo', 'forte'] },
    { id: 'mob_spider', name: 'Spider', emoji: '🕷️', category: 'neutral', description: 'Aranha que sobe paredes', colors: { head: '#4a4a4a', body: '#3a3a3a', armR: '#5a5a5a', armL: '#5a5a5a', legR: '#2a2a2a', legL: '#2a2a2a' }, tags: ['noturno', 'parede'] },
    { id: 'mob_traderllama', name: 'Trader Llama', emoji: '🦙', category: 'neutral', description: 'Lhama do mercador viajante', colors: { head: '#2196f3', body: '#1565c0', armR: '#42a5f5', armL: '#42a5f5', legR: '#0d47a1', legL: '#0d47a1' }, tags: ['mercador', 'azul'] },
    { id: 'mob_wolf', name: 'Wolf', emoji: '🐺', category: 'neutral', description: 'Lobo que pode ser domesticado', colors: { head: '#9e9e9e', body: '#757575', armR: '#bdbdbd', armL: '#bdbdbd', legR: '#616161', legL: '#616161' }, tags: ['domestico', 'companion'] },
    { id: 'mob_zombifiedpiglin', name: 'Zombified Piglin', emoji: '🧟', category: 'neutral', description: 'Piglin zumbificado do Nether', colors: { head: '#ffc107', body: '#4caf50', armR: '#ffb300', armL: '#ffb300', legR: '#388e3c', legL: '#388e3c' }, tags: ['nether', 'undead'] },

    // === HOSTIS ===
    { id: 'mob_blaze', name: 'Blaze', emoji: '🔥', category: 'hostile', description: 'Criatura de fogo das fornalhas', colors: { head: '#ff9800', body: '#e65100', armR: '#ffb300', armL: '#ffb300', legR: '#bf360c', legL: '#bf360c' }, tags: ['nether', 'fogo'] },
    { id: 'mob_bogged', name: 'Bogged', emoji: '💀', category: 'hostile', description: 'Esqueleto lamacento venenoso', colors: { head: '#4caf50', body: '#795548', armR: '#66bb6a', armL: '#66bb6a', legR: '#5d4037', legL: '#5d4037' }, tags: ['veneno', 'caverna'] },
    { id: 'mob_breeze', name: 'Breeze', emoji: '💨', category: 'hostile', description: 'Vendaval das camaras de prova', colors: { head: '#e3f2fd', body: '#90caf9', armR: '#bbdefb', armL: '#bbdefb', legR: '#42a5f5', legL: '#42a5f5' }, tags: ['ar', 'prova'] },
    { id: 'mob_creaking', name: 'Creaking', emoji: '🪵', category: 'hostile', description: 'O Crepitar das arvores', colors: { head: '#5d4037', body: '#4e342e', armR: '#6d4c41', armL: '#6d4c41', legR: '#3e2723', legL: '#3e2723' }, tags: ['madeira', 'floresta'] },
    { id: 'mob_creeper', name: 'Creeper', emoji: '💣', category: 'hostile', description: 'Inimigo icônico que explode', colors: { head: '#4caf50', body: '#388e3c', armR: '#66bb6a', armL: '#66bb6a', legR: '#2e7d32', legL: '#2e7d32' }, tags: ['explosao', 'icone'] },
    { id: 'mob_elderguardian', name: 'Elder Guardian', emoji: '🐡', category: 'hostile', description: 'Guardiao anciao dos monumentos', colors: { head: '#90a4ae', body: '#78909c', armR: '#b0bec5', armL: '#b0bec5', legR: '#607d8b', legL: '#607d8b' }, tags: ['oceano', 'boss'] },
    { id: 'mob_endermite', name: 'Endermite', emoji: '🐛', category: 'hostile', description: 'Pequeno parasita do Ender', colors: { head: '#212121', body: '#1a1a1a', armR: '#424242', armL: '#424242', legR: '#0d0d0d', legL: '#0d0d0d' }, tags: ['ender', 'pequeno'] },
    { id: 'mob_evoker', name: 'Evoker', emoji: '🧙', category: 'hostile', description: 'Evocador de feiticos das mansoes', colors: { head: '#9e9e9e', body: '#424242', armR: '#bdbdbd', armL: '#bdbdbd', legR: '#212121', legL: '#212121' }, tags: ['illager', 'magico'] },
    { id: 'mob_ghast', name: 'Ghast', emoji: '👻', category: 'hostile', description: 'Fantasma que chora e atira fogo', colors: { head: '#ffffff', body: '#f5f5f5', armR: '#e0e0e0', armL: '#e0e0e0', legR: '#bdbdbd', legL: '#bdbdbd' }, tags: ['nether', 'voador'] },
    { id: 'mob_guardian', name: 'Guardian', emoji: '👁️', category: 'hostile', description: 'Guardiao dos monumentos oceânicos', colors: { head: '#00897b', body: '#00695c', armR: '#26a69a', armL: '#26a69a', legR: '#004d40', legL: '#004d40' }, tags: ['oceano', 'laser'] },
    { id: 'mob_hoglin', name: 'Hoglin', emoji: '🐗', category: 'hostile', description: 'Porco brutal do Nether', colors: { head: '#795548', body: '#5d4037', armR: '#8d6e63', armL: '#8d6e63', legR: '#4e342e', legL: '#4e342e' }, tags: ['nether', 'brutal'] },
    { id: 'mob_husk', name: 'Husk', emoji: '💀', category: 'hostile', description: 'Zumbi do deserto com fome', colors: { head: '#a1887f', body: '#8d6e63', armR: '#bcaaa4', armL: '#bcaaa4', legR: '#6d4c41', legL: '#6d4c41' }, tags: ['deserto', 'undead'] },
    { id: 'mob_magmacube', name: 'Magma Cube', emoji: '🟧', category: 'hostile', description: 'Cubo de magma que pula', colors: { head: '#e53935', body: '#c62828', armR: '#ef5350', armL: '#ef5350', legR: '#b71c1c', legL: '#b71c1c' }, tags: ['nether', 'pulador'] },
    { id: 'mob_phantom', name: 'Phantom', emoji: '🦇', category: 'hostile', description: 'Fantasma voador dos que nao dormem', colors: { head: '#37474f', body: '#263238', armR: '#455a64', armL: '#455a64', legR: '#1c2f38', legL: '#1c2f38' }, tags: ['noturno', 'voador'] },
    { id: 'mob_piglinbrute', name: 'Piglin Brute', emoji: '🐗', category: 'hostile', description: 'Piglin guarda do baú do tesouro', colors: { head: '#ff6f00', body: '#e65100', armR: '#ff8f00', armL: '#ff8f00', legR: '#bf360c', legL: '#bf360c' }, tags: ['nether', 'forte'] },
    { id: 'mob_pillager', name: 'Pillager', emoji: '🏹', category: 'hostile', description: 'Saqueador que ataca aldeias', colors: { head: '#9e9e9e', body: '#616161', armR: '#bdbdbd', armL: '#bdbdbd', legR: '#424242', legL: '#424242' }, tags: ['illager', 'arqueiro'] },
    { id: 'mob_ravager', name: 'Ravager', emoji: '🐂', category: 'hostile', description: 'Devastador que destrói blocos', colors: { head: '#795548', body: '#5d4037', armR: '#8d6e63', armL: '#8d6e63', legR: '#4e342e', legL: '#4e342e' }, tags: ['illager', 'destruidor'] },
    { id: 'mob_shulker', name: 'Shulker', emoji: '📦', category: 'hostile', description: 'Caixa que atira e levita jogadores', colors: { head: '#7b1fa2', body: '#6a1b9a', armR: '#9c27b0', armL: '#9c27b0', legR: '#4a148c', legL: '#4a148c' }, tags: ['ender', 'levitacao'] },
    { id: 'mob_silverfish', name: 'Silverfish', emoji: '🐛', category: 'hostile', description: 'Peixe prata que quebra pedras', colors: { head: '#9e9e9e', body: '#757575', armR: '#bdbdbd', armL: '#bdbdbd', legR: '#616161', legL: '#616161' }, tags: ['caverna', 'pequeno'] },
    { id: 'mob_skeleton', name: 'Skeleton', emoji: '💀', category: 'hostile', description: 'Esqueleto que atira flechas', colors: { head: '#bdbdbd', body: '#9e9e9e', armR: '#d4d4d4', armL: '#d4d4d4', legR: '#757575', legL: '#757575' }, tags: ['noturno', 'arqueiro'] },
    { id: 'mob_slime', name: 'Slime', emoji: '🟢', category: 'hostile', description: 'Gelatina que pula e divide', colors: { head: '#4caf50', body: '#388e3c', armR: '#66bb6a', armL: '#66bb6a', legR: '#2e7d32', legL: '#2e7d32' }, tags: ['gelatina', 'pulador'] },
    { id: 'mob_stray', name: 'Stray', emoji: '❄️', category: 'hostile', description: 'Esqueleto errante das nevascas', colors: { head: '#90a4ae', body: '#78909c', armR: '#b0bec5', armL: '#b0bec5', legR: '#607d8b', legL: '#607d8b' }, tags: ['gelo', 'undead'] },
    { id: 'mob_vex', name: 'Vex', emoji: '⚔️', category: 'hostile', description: 'Espirito que voa e ataca com espada', colors: { head: '#90caf9', body: '#64b5f6', armR: '#bbdefb', armL: '#bbdefb', legR: '#42a5f5', legL: '#42a5f5' }, tags: ['illager', 'voador'] },
    { id: 'mob_vindicator', name: 'Vindicator', emoji: '🪓', category: 'hostile', description: 'Vingador que ataca com machado', colors: { head: '#9e9e9e', body: '#424242', armR: '#bdbdbd', armL: '#bdbdbd', legR: '#212121', legL: '#212121' }, tags: ['illager', 'machado'] },
    { id: 'mob_warden', name: 'Warden', emoji: '👁️', category: 'hostile', description: 'Guardiao cego das profundezas', colors: { head: '#1a237e', body: '#0d47a1', armR: '#283593', armL: '#283593', legR: '#0a1f5e', legL: '#0a1f5e' }, tags: ['cego', 'perigoso'] },
    { id: 'mob_witch', name: 'Witch', emoji: '🧹', category: 'hostile', description: 'Bruxa que joga pocoes', colors: { head: '#4a148c', body: '#311b92', armR: '#6a1b9a', armL: '#6a1b9a', legR: '#1a0a5e', legL: '#1a0a5e' }, tags: ['magico', 'pocoes'] },
    { id: 'mob_witherskeleton', name: 'Wither Skeleton', emoji: '💀', category: 'hostile', description: 'Esqueleto negro das fornalhas', colors: { head: '#212121', body: '#1a1a1a', armR: '#424242', armL: '#424242', legR: '#0d0d0d', legL: '#0d0d0d' }, tags: ['nether', 'undead'] },
    { id: 'mob_zoglin', name: 'Zoglin', emoji: '🐷', category: 'hostile', description: 'Hoglin zumbificado que ataca tudo', colors: { head: '#f44336', body: '#d32f2f', armR: '#ef5350', armL: '#ef5350', legR: '#b71c1c', legL: '#b71c1c' }, tags: ['nether', 'undead'] },
    { id: 'mob_zombie', name: 'Zombie', emoji: '🧟', category: 'hostile', description: 'Zumbi classico que ataca jogadores', colors: { head: '#4caf50', body: '#388e3c', armR: '#66bb6a', armL: '#66bb6a', legR: '#2e7d32', legL: '#2e7d32' }, tags: ['noturno', 'classico'] },
    { id: 'mob_zombievillager', name: 'Zombie Villager', emoji: '🧟', category: 'hostile', description: 'Aldeao zumbificado que pode ser curado', colors: { head: '#4caf50', body: '#795548', armR: '#66bb6a', armL: '#66bb6a', legR: '#5d4037', legL: '#5d4037' }, tags: ['undead', 'curavel'] },

    // === BOSSES ===
    { id: 'mob_enderdragon', name: 'Ender Dragon', emoji: '🐉', category: 'boss', description: 'Dragao final do End', colors: { head: '#212121', body: '#1a1a1a', armR: '#9c27b0', armL: '#9c27b0', legR: '#0d0d0d', legL: '#0d0d0d' }, tags: ['boss', 'final'] },
    { id: 'mob_wither', name: 'Wither', emoji: '💀', category: 'boss', description: 'Boss invocado que destrói tudo', colors: { head: '#212121', body: '#1a1a1a', armR: '#424242', armL: '#424242', legR: '#0d0d0d', legL: '#0d0d0d' }, tags: ['boss', 'destruicao'] }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SKIN_PARTS, MINECRAFT_COLORS, SKIN_TEMPLATES, MOB_CARDS };
}
