-- ============================================
-- Minecraft Hub - Database Schema (PostgreSQL)
-- ============================================

-- Tabela de Usuários
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(32) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Skins
CREATE TABLE skins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(64) NOT NULL,
    texture_url TEXT NOT NULL,
    model_type VARCHAR(10) CHECK (model_type IN ('steve', 'alex')),
    downloads_count INT DEFAULT 0,
    rating_score DECIMAL(2,1) DEFAULT 5.0,
    author_id UUID REFERENCES users(id)
);

-- Tabela de Mobs
CREATE TABLE mobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(64) NOT NULL,
    category VARCHAR(16) CHECK (category IN ('passive', 'neutral', 'hostile')),
    threat_level INT CHECK (threat_level BETWEEN 1 AND 10),
    description TEXT,
    loot_table JSONB
);

-- Tabela de Mods
CREATE TABLE mods (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(128) NOT NULL,
    description TEXT NOT NULL,
    mc_version VARCHAR(16) NOT NULL,
    mod_loader VARCHAR(16) CHECK (mod_loader IN ('Forge', 'Fabric', 'Quilt')),
    download_url TEXT NOT NULL,
    downloads_count INT DEFAULT 0
);

-- Índices
CREATE INDEX idx_skins_author ON skins(author_id);
CREATE INDEX idx_skins_rating ON skins(rating_score DESC);
CREATE INDEX idx_mobs_category ON mobs(category);
CREATE INDEX idx_mods_version ON mods(mc_version);
CREATE INDEX idx_mods_loader ON mods(mod_loader);
