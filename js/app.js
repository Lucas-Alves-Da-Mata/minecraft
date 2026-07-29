document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('skinCanvas');
    skinComposer.init(canvas);

    let currentCategory = 'heads';
    const categoryMap = { heads: 'head', bodies: 'body', arms: 'armR', legs: 'legR' };

    initTemplateCards();
    initColorPalette();
    initMobCards();
    loadParts('heads');
    skinComposer.loadFromStorage();

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById(btn.dataset.section).classList.add('active');
        });
    });

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            loadParts(currentCategory);
            updateColorSelection();
        });
    });

    document.querySelectorAll('.model-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            skinComposer.setModel(btn.dataset.model);
            skinComposer.saveToStorage();
        });
    });

    document.querySelectorAll('.bg-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.bg-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            skinComposer.setBackground(btn.dataset.bg);
        });
    });

    document.querySelectorAll('.anim-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.anim-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            skinComposer.setAnimation(btn.dataset.anim);
        });
    });

    document.getElementById('rotateBtn').addEventListener('click', () => {
        const isRotating = skinComposer.toggleAutoRotate();
        document.getElementById('rotateBtn').classList.toggle('active', isRotating);
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        skinComposer.resetCamera();
    });

    document.getElementById('undoBtn').addEventListener('click', () => {
        if (skinComposer.undo()) showToast('Desfeito');
    });

    document.getElementById('redoBtn').addEventListener('click', () => {
        if (skinComposer.redo()) showToast('Refeito');
    });

    document.getElementById('randomBtn').addEventListener('click', () => {
        const template = SKIN_TEMPLATES[Math.floor(Math.random() * SKIN_TEMPLATES.length)];
        skinComposer.loadTemplate(template);
        updateUIFromState();
        showToast(`Skin "${template.name}" carregada!`);
    });

    document.getElementById('clearBtn').addEventListener('click', () => {
        skinComposer.clearAll();
        updateUIFromState();
        showToast('Tudo limpo!');
    });

    document.getElementById('exportPng').addEventListener('click', async () => {
        const blob = await skinComposer.exportPNG();
        downloadBlob(blob, 'minecraft-skin.png');
        showToast('PNG baixado!');
    });

    document.getElementById('exportWithBg').addEventListener('click', async () => {
        const exportCanvas = document.createElement('canvas');
        exportCanvas.width = 600;
        exportCanvas.height = 500;
        const exportCtx = exportCanvas.getContext('2d');
        exportCtx.drawImage(canvas, 0, 0);
        exportCanvas.toBlob((blob) => {
            downloadBlob(blob, 'minecraft-skin-preview.png');
            showToast('Preview baixado!');
        });
    });

    document.getElementById('copySkin').addEventListener('click', async () => {
        try {
            const dataURL = skinComposer.exportDataURL();
            const response = await fetch(dataURL);
            const blob = await response.blob();
            await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
            showToast('Copiado para area de transferencia!');
        } catch (error) {
            const blob = await skinComposer.exportPNG();
            downloadBlob(blob, 'minecraft-skin-texture.png');
            showToast('Textura baixada!');
        }
    });

    document.getElementById('loadSkinBtn').addEventListener('click', async () => {
        const playerName = document.getElementById('playerName').value.trim();
        if (!playerName) { showToast('Digite um nome!'); return; }
        showToast('Carregando...');
        const result = await skinComposer.loadFromPlayerName(playerName);
        if (result.success) showToast('Skin carregada!');
        else showToast(`Erro: ${result.error}`);
    });

    document.getElementById('playerName').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') document.getElementById('loadSkinBtn').click();
    });

    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');

    uploadArea.addEventListener('click', () => fileInput.click());
    uploadArea.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.classList.add('dragover'); });
    uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file) handleFileUpload(file);
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files[0]) handleFileUpload(e.target.files[0]);
    });

    async function handleFileUpload(file) {
        if (!file.type.startsWith('image/')) { showToast('Arquivo invalido!'); return; }
        showToast('Carregando imagem...');
        const result = await skinComposer.loadFromFile(file);
        if (result.success) showToast('Skin carregada!');
        else showToast(`Erro: ${result.error}`);
    }

    window.addEventListener('resize', () => {
        const previewArea = document.querySelector('.preview-area');
        if (previewArea) skinComposer.resize(previewArea.clientWidth, previewArea.clientHeight);
    });

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'z') { e.preventDefault(); document.getElementById('undoBtn').click(); }
        if (e.ctrlKey && e.key === 'y') { e.preventDefault(); document.getElementById('redoBtn').click(); }
        if (e.ctrlKey && e.key === 's') { e.preventDefault(); skinComposer.saveToStorage(); showToast('Salvo!'); }
    });

    function initTemplateCards() {
        const grid = document.getElementById('templateGrid');
        SKIN_TEMPLATES.forEach(template => {
            const card = document.createElement('div');
            card.className = 'template-card';
            card.innerHTML = `
                <div class="template-preview" style="background: linear-gradient(135deg, ${template.colors.body}, ${template.colors.head})">
                    <div class="template-figure">
                        <div class="figure-head" style="background:${template.colors.head}"></div>
                        <div class="figure-body" style="background:${template.colors.body}"></div>
                        <div class="figure-arms">
                            <div class="figure-arm" style="background:${template.colors.armR}"></div>
                            <div class="figure-arm" style="background:${template.colors.armR}"></div>
                        </div>
                        <div class="figure-legs">
                            <div class="figure-leg" style="background:${template.colors.legR}"></div>
                            <div class="figure-leg" style="background:${template.colors.legL}"></div>
                        </div>
                    </div>
                </div>
                <div class="template-info">
                    <h3>${template.name}</h3>
                    <p>${template.description}</p>
                    <div class="template-tags">${template.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                </div>
            `;
            card.addEventListener('click', () => {
                skinComposer.loadTemplate(template);
                updateUIFromState();
                document.querySelectorAll('.template-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                showToast(`"${template.name}" carregado!`);
            });
            grid.appendChild(card);
        });
    }

    function initColorPalette() {
        const colorOptions = document.getElementById('colorOptions');
        MINECRAFT_COLORS.forEach((color, index) => {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            swatch.style.backgroundColor = color;
            swatch.dataset.color = color;
            if (index === 0) swatch.classList.add('selected');
            swatch.addEventListener('click', () => {
                document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
                swatch.classList.add('selected');
                applyColor(color);
            });
            colorOptions.appendChild(swatch);
        });
        document.getElementById('customColor').addEventListener('input', (e) => applyColor(e.target.value));
    }

    function applyColor(color) {
        const section = categoryMap[currentCategory];
        if (section) {
            skinComposer.setColorAndSave(section, color);
            if (section === 'armR') skinComposer.setColor('armL', color);
            if (section === 'legR') skinComposer.setColor('legL', color);
            updatePartPreviews();
            skinComposer.saveToStorage();
        }
    }

    function updateColorSelection() {
        const section = categoryMap[currentCategory];
        if (!section) return;
        const currentColor = skinComposer.currentSkin.colors[section];
        if (currentColor) {
            document.querySelectorAll('.color-swatch').forEach(s => {
                s.classList.toggle('selected', s.dataset.color.toLowerCase() === currentColor.toLowerCase());
            });
            document.getElementById('customColor').value = currentColor;
        }
    }

    function loadParts(category) {
        const partsGrid = document.getElementById('partsGrid');
        partsGrid.innerHTML = '';
        const parts = SKIN_PARTS[category] || [];
        const section = categoryMap[category];
        const currentColor = skinComposer.currentSkin.colors[section] || '#c68e5b';

        parts.forEach(part => {
            const partItem = document.createElement('div');
            partItem.className = 'part-item';
            partItem.dataset.partId = part.id;

            const previewImg = document.createElement('img');
            const partType = category === 'heads' ? 'head' : category === 'bodies' ? 'body' : category === 'arms' ? 'arm' : 'leg';
            previewImg.src = skinComposer.generatePreview(partType, currentColor);
            previewImg.alt = part.name;
            previewImg.className = 'part-preview';

            const label = document.createElement('div');
            label.className = 'part-label';
            label.textContent = part.name;

            partItem.appendChild(previewImg);
            partItem.appendChild(label);

            const currentPart = skinComposer.currentSkin.parts[section];
            if (currentPart === part.id) partItem.classList.add('selected');

            partItem.addEventListener('click', () => {
                document.querySelectorAll('.part-item').forEach(p => p.classList.remove('selected'));
                partItem.classList.add('selected');
                skinComposer.setPart(section, part.id);
                if (section === 'armR') skinComposer.setPart('armL', part.id);
                if (section === 'legR') skinComposer.setPart('legL', part.id);
                skinComposer.saveToStorage();
            });

            partsGrid.appendChild(partItem);
        });
    }

    function updatePartPreviews() {
        const section = categoryMap[currentCategory];
        if (!section) return;
        const currentColor = skinComposer.currentSkin.colors[section] || '#c68e5b';
        const partType = currentCategory === 'heads' ? 'head' : currentCategory === 'bodies' ? 'body' : currentCategory === 'arms' ? 'arm' : 'leg';
        document.querySelectorAll('.part-item .part-preview').forEach(img => {
            img.src = skinComposer.generatePreview(partType, currentColor);
        });
    }

    function updateUIFromState() {
        document.querySelectorAll('.part-item').forEach(p => p.classList.remove('selected'));
        const section = categoryMap[currentCategory];
        if (section) {
            const currentPart = skinComposer.currentSkin.parts[section];
            if (currentPart) {
                document.querySelectorAll('.part-item').forEach(p => {
                    if (p.dataset.partId === currentPart) p.classList.add('selected');
                });
            }
        }
        updateColorSelection();
        updatePartPreviews();
    }

    function downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function showToast(message) {
        const existingToast = document.querySelector('.toast');
        if (existingToast) existingToast.remove();
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    function initMobCards() {
        const grid = document.getElementById('mobGrid');
        renderMobs(MOB_CARDS);

        document.querySelectorAll('.mob-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.mob-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterMobs();
            });
        });

        document.getElementById('mobSearch').addEventListener('input', () => filterMobs());
    }

    function filterMobs() {
        const search = document.getElementById('mobSearch').value.toLowerCase();
        const category = document.querySelector('.mob-filter-btn.active').dataset.filter;
        let filtered = MOB_CARDS;

        if (category !== 'all') {
            filtered = filtered.filter(mob => mob.category === category);
        }

        if (search) {
            filtered = filtered.filter(mob =>
                mob.name.toLowerCase().includes(search) ||
                mob.description.toLowerCase().includes(search) ||
                mob.tags.some(t => t.toLowerCase().includes(search))
            );
        }

        renderMobs(filtered);
    }

    function renderMobs(mobs) {
        const grid = document.getElementById('mobGrid');
        grid.innerHTML = '';

        if (mobs.length === 0) {
            grid.innerHTML = `
                <div class="mob-empty">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                    <p>Nenhum mob encontrado</p>
                </div>
            `;
            return;
        }

        mobs.forEach(mob => {
            const card = document.createElement('div');
            card.className = 'mob-card';
            card.innerHTML = `
                <div class="mob-card-preview" style="background: linear-gradient(135deg, ${mob.colors.body}, ${mob.colors.head})">
                    <span class="mob-category-badge ${mob.category}">${mob.category}</span>
                    <span class="mob-emoji">${mob.emoji}</span>
                </div>
                <div class="mob-card-info">
                    <h3>${mob.name}</h3>
                    <p>${mob.description}</p>
                    <div class="mob-card-tags">${mob.tags.map(t => `<span class="mob-tag">${t}</span>`).join('')}</div>
                </div>
            `;
            card.addEventListener('click', () => {
                const template = {
                    id: mob.id,
                    name: mob.name,
                    description: mob.description,
                    colors: { ...mob.colors }
                };
                skinComposer.loadTemplate(template);
                updateUIFromState();
                document.querySelector('.nav-btn[data-section="creator"]').click();
                showToast(`${mob.emoji} ${mob.name} carregado!`);
            });
            grid.appendChild(card);
        });
    }
});
