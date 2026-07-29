class SkinComposer {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = 64;
        this.canvas.height = 64;
        this.ctx = this.canvas.getContext('2d');
        this.currentSkin = {
            model: 'default',
            parts: {},
            colors: {}
        };
        this.skinViewer = null;
        this.history = [];
        this.historyIndex = -1;
        this.maxHistory = 30;
    }

    init(canvasElement) {
        this.previewCanvas = canvasElement;
        this.skinViewer = new skinview3d.SkinViewer({
            canvas: canvasElement,
            width: canvasElement.clientWidth || 600,
            height: canvasElement.clientHeight || 500,
            background: 0x1a1a2e
        });
        this.skinViewer.autoRotate = true;
        this.skinViewer.autoRotateSpeed = 5;
        this.skinViewer.animation = new skinview3d.IdleAnimation();
        this.saveState();
        this.generateSkin();
        return this;
    }

    saveState() {
        const state = JSON.stringify({ parts: this.currentSkin.parts, colors: this.currentSkin.colors, model: this.currentSkin.model });
        if (this.historyIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.historyIndex + 1);
        }
        this.history.push(state);
        if (this.history.length > this.maxHistory) {
            this.history.shift();
        }
        this.historyIndex = this.history.length - 1;
    }

    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            const state = JSON.parse(this.history[this.historyIndex]);
            this.currentSkin.parts = state.parts;
            this.currentSkin.colors = state.colors;
            this.currentSkin.model = state.model;
            this.generateSkin();
            return true;
        }
        return false;
    }

    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            const state = JSON.parse(this.history[this.historyIndex]);
            this.currentSkin.parts = state.parts;
            this.currentSkin.colors = state.colors;
            this.currentSkin.model = state.model;
            this.generateSkin();
            return true;
        }
        return false;
    }

    setModel(model) {
        if (model !== 'default' && model !== 'slim') return;
        this.currentSkin.model = model;
        this.saveState();
        this.generateSkin();
    }

    setPart(section, partId) {
        this.currentSkin.parts[section] = partId;
        this.saveState();
        this.generateSkin();
    }

    setColor(section, color) {
        this.currentSkin.colors[section] = color;
        this.generateSkin();
    }

    setColorAndSave(section, color) {
        this.currentSkin.colors[section] = color;
        this.saveState();
        this.generateSkin();
    }

    clearAll() {
        this.currentSkin.parts = {};
        this.currentSkin.colors = {};
        this.currentSkin.model = 'default';
        this.saveState();
        this.generateSkin();
    }

    loadTemplate(template) {
        this.currentSkin.parts = JSON.parse(JSON.stringify(template.parts));
        this.currentSkin.colors = JSON.parse(JSON.stringify(template.colors));
        this.currentSkin.model = template.model || 'default';
        this.saveState();
        this.generateSkin();
    }

    generateSkin() {
        this.ctx.clearRect(0, 0, 64, 64);
        this.ctx.imageSmoothingEnabled = false;
        this.drawHead();
        this.drawBody();
        this.drawArms();
        this.drawLegs();
        this.updateViewer();
    }

    drawHead() {
        const color = this.currentSkin.colors.head || '#c68e5b';
        const c = this.hexToRgb(color);
        this.fillRect(8, 8, 8, 8, c.r, c.g, c.b);
        this.fillRect(24, 8, 8, 8, c.r * 0.8, c.g * 0.8, c.b * 0.8);
        this.fillRect(16, 8, 8, 8, c.r * 0.9, c.g * 0.9, c.b * 0.9);
        this.fillRect(0, 8, 8, 8, c.r * 1.1, c.g * 1.1, c.b * 1.1);
        this.fillRect(8, 0, 8, 8, c.r * 1.2, c.g * 1.2, c.b * 1.2);
        this.fillRect(16, 0, 8, 8, c.r * 0.7, c.g * 0.7, c.b * 0.7);
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(10, 10, 2, 2);
        this.ctx.fillRect(14, 10, 2, 2);
        this.ctx.fillStyle = '#222';
        this.ctx.fillRect(11, 10, 1, 2);
        this.ctx.fillRect(15, 10, 1, 2);
        this.ctx.fillStyle = '#966';
        this.ctx.fillRect(11, 13, 4, 1);
        this.ctx.fillRect(12, 14, 2, 1);
    }

    drawBody() {
        const color = this.currentSkin.colors.body || '#4a9bd9';
        const c = this.hexToRgb(color);
        this.fillRect(20, 20, 8, 12, c.r, c.g, c.b);
        this.fillRect(32, 20, 8, 12, c.r * 0.8, c.g * 0.8, c.b * 0.8);
        this.fillRect(28, 20, 4, 12, c.r * 0.9, c.g * 0.9, c.b * 0.9);
        this.fillRect(16, 20, 4, 12, c.r * 1.1, c.g * 1.1, c.b * 1.1);
        this.fillRect(20, 16, 8, 4, c.r * 1.2, c.g * 1.2, c.b * 1.2);
        this.fillRect(28, 16, 8, 4, c.r * 0.7, c.g * 0.7, c.b * 0.7);
    }

    drawArms() {
        const colorR = this.currentSkin.colors.armR || this.currentSkin.colors.head || '#c68e5b';
        const colorL = this.currentSkin.colors.armL || colorR;
        const cR = this.hexToRgb(colorR);
        const cL = this.hexToRgb(colorL);
        this.fillRect(44, 20, 4, 12, cR.r, cR.g, cR.b);
        this.fillRect(52, 20, 4, 12, cR.r * 0.8, cR.g * 0.8, cR.b * 0.8);
        this.fillRect(48, 20, 4, 12, cR.r * 0.9, cR.g * 0.9, cR.b * 0.9);
        this.fillRect(40, 20, 4, 12, cR.r * 1.1, cR.g * 1.1, cR.b * 1.1);
        this.fillRect(44, 16, 4, 4, cR.r * 1.2, cR.g * 1.2, cR.b * 1.2);
        this.fillRect(48, 16, 4, 4, cR.r * 0.7, cR.g * 0.7, cR.b * 0.7);
        this.fillRect(44, 32, 4, 12, cR.r, cR.g, cR.b);
        this.fillRect(52, 32, 4, 12, cR.r * 0.8, cR.g * 0.8, cR.b * 0.8);
        this.fillRect(48, 32, 4, 12, cR.r * 0.9, cR.g * 0.9, cR.b * 0.9);
        this.fillRect(40, 32, 4, 12, cR.r * 1.1, cR.g * 1.1, cR.b * 1.1);
        this.fillRect(44, 32, 4, 4, cR.r * 1.2, cR.g * 1.2, cR.b * 1.2);
        this.fillRect(48, 32, 4, 4, cR.r * 0.7, cR.g * 0.7, cR.b * 0.7);
    }

    drawLegs() {
        const colorR = this.currentSkin.colors.legR || this.currentSkin.colors.body || '#3d3d8f';
        const colorL = this.currentSkin.colors.legL || colorR;
        const cR = this.hexToRgb(colorR);
        const cL = this.hexToRgb(colorL);
        this.fillRect(4, 20, 4, 12, cR.r, cR.g, cR.b);
        this.fillRect(12, 20, 4, 12, cR.r * 0.8, cR.g * 0.8, cR.b * 0.8);
        this.fillRect(8, 20, 4, 12, cR.r * 0.9, cR.g * 0.9, cR.b * 0.9);
        this.fillRect(0, 20, 4, 12, cR.r * 1.1, cR.g * 1.1, cR.b * 1.1);
        this.fillRect(4, 16, 4, 4, cR.r * 1.2, cR.g * 1.2, cR.b * 1.2);
        this.fillRect(8, 16, 4, 4, cR.r * 0.7, cR.g * 0.7, cR.b * 0.7);
        this.fillRect(20, 52, 4, 12, cL.r, cL.g, cL.b);
        this.fillRect(28, 52, 4, 12, cL.r * 0.8, cL.g * 0.8, cL.b * 0.8);
        this.fillRect(24, 52, 4, 12, cL.r * 0.9, cL.g * 0.9, cL.b * 0.9);
        this.fillRect(16, 52, 4, 12, cL.r * 1.1, cL.g * 1.1, cL.b * 1.1);
        this.fillRect(20, 48, 4, 4, cL.r * 1.2, cL.g * 1.2, cL.b * 1.2);
        this.fillRect(24, 48, 4, 4, cL.r * 0.7, cL.g * 0.7, cL.b * 0.7);
    }

    fillRect(x, y, w, h, r, g, b) {
        r = Math.min(255, Math.max(0, Math.round(r)));
        g = Math.min(255, Math.max(0, Math.round(g)));
        b = Math.min(255, Math.max(0, Math.round(b)));
        this.ctx.fillStyle = `rgb(${r},${g},${b})`;
        this.ctx.fillRect(x, y, w, h);
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : { r: 200, g: 200, b: 200 };
    }

    rgbToHex(r, g, b) {
        return '#' + [r, g, b].map(x => { const hex = Math.min(255, Math.max(0, Math.round(x))).toString(16); return hex.length === 1 ? '0' + hex : hex; }).join('');
    }

    darkenColor(color, amount) {
        const c = this.hexToRgb(color);
        return this.rgbToHex(c.r * (1 - amount), c.g * (1 - amount), c.b * (1 - amount));
    }

    lightenColor(color, amount) {
        const c = this.hexToRgb(color);
        return this.rgbToHex(c.r + (255 - c.r) * amount, c.g + (255 - c.g) * amount, c.b + (255 - c.b) * amount);
    }

    updateViewer() {
        if (!this.skinViewer) return;
        this.canvas.toBlob((blob) => {
            if (blob) {
                const url = URL.createObjectURL(blob);
                this.skinViewer.loadSkin(url, this.currentSkin.model);
            }
        });
    }

    exportPNG() {
        return new Promise((resolve) => {
            this.canvas.toBlob((blob) => resolve(blob), 'image/png');
        });
    }

    exportDataURL() {
        return this.canvas.toDataURL('image/png');
    }

    async loadFromPlayerName(username) {
        try {
            const profileResponse = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
            if (!profileResponse.ok) throw new Error('Jogador nao encontrado');
            const profileData = await profileResponse.json();
            const uuid = profileData.id;
            const sessionResponse = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`);
            if (!sessionResponse.ok) throw new Error('Nao foi possivel buscar os dados da skin');
            const sessionData = await sessionResponse.json();
            const textureProperty = sessionData.properties.find(p => p.name === 'textures');
            if (!textureProperty) throw new Error('Dados de textura nao encontrados');
            const textureData = JSON.parse(atob(textureProperty.value));
            const skinUrl = textureData.textures.SKIN.url;
            this.skinViewer.loadSkin(skinUrl);
            return { success: true, skinUrl, uuid };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async loadFromFile(file) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    if (img.width === 64 && img.height === 64) {
                        this.skinViewer.loadSkin(e.target.result);
                        resolve({ success: true });
                    } else {
                        resolve({ success: false, error: 'A imagem deve ser 64x64 pixels' });
                    }
                };
                img.onerror = () => resolve({ success: false, error: 'Erro ao carregar imagem' });
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    }

    resize(width, height) {
        if (this.skinViewer) this.skinViewer.setSize(width, height);
    }

    setBackground(color) {
        if (this.skinViewer) this.skinViewer.background = parseInt(color.replace('#', ''), 16);
    }

    toggleAutoRotate() {
        if (this.skinViewer) {
            this.skinViewer.autoRotate = !this.skinViewer.autoRotate;
            return this.skinViewer.autoRotate;
        }
        return false;
    }

    setAnimation(type) {
        if (!this.skinViewer) return;
        switch (type) {
            case 'idle': this.skinViewer.animation = new skinview3d.IdleAnimation(); break;
            case 'walk': this.skinViewer.animation = new skinview3d.WalkingAnimation(); break;
            case 'run': this.skinViewer.animation = new skinview3d.RunningAnimation(); break;
            case 'fly': this.skinViewer.animation = new skinview3d.FlyingAnimation(); break;
            case 'none': this.skinViewer.animation = null; break;
        }
    }

    resetCamera() {
        if (this.skinViewer) this.skinViewer.resetCameraPose();
    }

    generatePreview(partType, color) {
        const previewCanvas = document.createElement('canvas');
        previewCanvas.width = 64;
        previewCanvas.height = 64;
        const pCtx = previewCanvas.getContext('2d');
        pCtx.imageSmoothingEnabled = false;
        const c = this.hexToRgb(color);
        const drawFace = (x, y, w, h, shade) => {
            pCtx.fillStyle = `rgb(${Math.min(255, Math.max(0, Math.round(c.r * shade)))},${Math.min(255, Math.max(0, Math.round(c.g * shade)))},${Math.min(255, Math.max(0, Math.round(c.b * shade)))})`;
            pCtx.fillRect(x, y, w, h);
        };
        if (partType === 'head') {
            drawFace(8, 8, 8, 8, 1);
            drawFace(24, 8, 8, 8, 0.8);
            drawFace(16, 8, 8, 8, 0.9);
            drawFace(0, 8, 8, 8, 1.1);
            drawFace(8, 0, 8, 8, 1.2);
            drawFace(16, 0, 8, 8, 0.7);
            pCtx.fillStyle = '#fff';
            pCtx.fillRect(10, 10, 2, 2);
            pCtx.fillRect(14, 10, 2, 2);
            pCtx.fillStyle = '#222';
            pCtx.fillRect(11, 10, 1, 2);
            pCtx.fillRect(15, 10, 1, 2);
        } else if (partType === 'body') {
            drawFace(20, 20, 8, 12, 1);
            drawFace(32, 20, 8, 12, 0.8);
            drawFace(28, 20, 4, 12, 0.9);
            drawFace(16, 20, 4, 12, 1.1);
            drawFace(20, 16, 8, 4, 1.2);
            drawFace(28, 16, 8, 4, 0.7);
        } else if (partType === 'arm') {
            drawFace(44, 20, 4, 12, 1);
            drawFace(52, 20, 4, 12, 0.8);
            drawFace(48, 20, 4, 12, 0.9);
            drawFace(40, 20, 4, 12, 1.1);
            drawFace(44, 16, 4, 4, 1.2);
            drawFace(48, 16, 4, 4, 0.7);
        } else if (partType === 'leg') {
            drawFace(4, 20, 4, 12, 1);
            drawFace(12, 20, 4, 12, 0.8);
            drawFace(8, 20, 4, 12, 0.9);
            drawFace(0, 20, 4, 12, 1.1);
            drawFace(4, 16, 4, 4, 1.2);
            drawFace(8, 16, 4, 4, 0.7);
        }
        return previewCanvas.toDataURL();
    }

    saveToStorage() {
        try {
            localStorage.setItem('mc_skin_creator', JSON.stringify({
                parts: this.currentSkin.parts,
                colors: this.currentSkin.colors,
                model: this.currentSkin.model
            }));
        } catch (e) { }
    }

    loadFromStorage() {
        try {
            const data = localStorage.getItem('mc_skin_creator');
            if (data) {
                const parsed = JSON.parse(data);
                this.currentSkin.parts = parsed.parts || {};
                this.currentSkin.colors = parsed.colors || {};
                this.currentSkin.model = parsed.model || 'default';
                this.saveState();
                this.generateSkin();
                return true;
            }
        } catch (e) { }
        return false;
    }
}

const skinComposer = new SkinComposer();
