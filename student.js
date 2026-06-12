// ============================================================
//  LESSON 6 — Boss Battle & Victory Report
//  ✏️  Write your Lesson 6 code in the marked section below.
//  Do NOT modify engine.js or App.jsx
//
//  Lessons 4 & 5 code is pre-filled and working — do not change it.
//  Your Lesson 6 code goes at the bottom.
// ============================================================

import { BOSS_HP, ENEMY_TYPES } from './engine.js'

// ════════════════════════════════════════════════════════════
//  ✅ LESSON 4 — Complete (do not change)
// ════════════════════════════════════════════════════════════

export function createPlayer(startX = 0, startY = 0) {
  return {
    x: startX,
    y: startY,
    hp: 120,
    maxHp: 120,
    stamina: 100,
    maxStamina: 100,
    xp: 0,
    level: 1,
    gold: 0,
    potions: 3,
    kills: 0,
    state: 'idle',
    dir: 'down',
    facingDir: 'right',
    comboCount: 0,
    invincible: 0,
    attackCd: 0,
    dodgeCd: 0,
    score: 0,
  }
}

export function movePlayer(player, direction, tiles) {
  return player // not used in lesson 6 engine
}

export function getSpeedMultiplier(player, tiles) {
  return 1.0 // not used in lesson 6 engine
}

export function collectItem(player, item) {
  if (item.type === 'coin') return { player: { ...player, gold: player.gold + 10 }, message: '💰 +10 gold' }
  if (item.type === 'potion') return { player: { ...player, potions: player.potions + 1 }, message: '🧪 +1 potion' }
  return { player, message: '' }
}

export function checkLevelUp(player) {
  const threshold = player.level * 150
  if (player.xp >= threshold) {
    return {
      player: {
        ...player,
        level: player.level + 1,
        xp: player.xp - threshold,
        maxHp: player.maxHp + 12,
        hp: player.maxHp + 12,
        maxStamina: player.maxStamina + 5,
        stamina: player.maxStamina + 5,
      },
      leveledUp: true,
    }
  }
  return { player, leveledUp: false }
}

// ════════════════════════════════════════════════════════════
//  ✅ LESSON 5 — Complete (do not change)
// ════════════════════════════════════════════════════════════

export function spawnEnemy(type) {
  return null // not used in lesson 6 engine directly
}

export function attackEnemy(player, enemy) {
  const newCombo = (player.comboCount + 1) % 4
  const isBig = newCombo === 3
  const damage = 12 + player.level * 3 + (isBig ? 22 : 0) + Math.floor(Math.random() * 8)
  const newHp = Math.max(0, enemy.hp - damage)
  const killed = newHp <= 0
  let p = { ...player, comboCount: newCombo }
  if (killed) {
    p.xp    += ENEMY_TYPES[enemy.type].xp
    p.gold  += Math.floor(ENEMY_TYPES[enemy.type].xp * 0.5)
    p.kills += 1
    p.score += ENEMY_TYPES[enemy.type].xp * 10
  }
  return { player: p, enemy: { ...enemy, hp: newHp, alive: !killed }, damage, killed, isBig }
}

export function enemyAttack(enemy, player) {
  const damage = ENEMY_TYPES[enemy.type].atk + Math.floor(Math.random() * 7)
  return {
    player: { ...player, hp: Math.max(0, player.hp - damage), invincible: 0.42 },
    damage,
  }
}

export function usePotion(player) {
  if (player.potions <= 0) return { player, healed: 0 }
  const heal = Math.min(55, player.maxHp - player.hp)
  return {
    player: { ...player, hp: player.hp + heal, potions: player.potions - 1 },
    healed: heal,
  }
}

export function updateQuestProgress(quests, type, amount) {
  return quests.map(q => {
    if (q.completed || q.type !== type) return q
    const progress = (q.progress ?? 0) + amount
    return { ...q, progress, completed: progress >= (q.count ?? 1) }
  })
}

// ════════════════════════════════════════════════════════════
//  ✏️ LESSON 6 — Write your code below
// ════════════════════════════════════════════════════════════

// ── TASK 1 ───────────────────────────────────────────────────
// createBossFight()
// Returns:
// {
//   entity: { name: 'Demon Overlord', x: 0, y: 0, hp: BOSS_HP, maxHp: BOSS_HP, alive: true },
//   phase: 1,
//   phaseTimer: 0,
// }
// Use BOSS_HP from engine.js.

export function createBossFight() {
  // ✏️ YOUR CODE HERE

}

// ── TASK 2 ───────────────────────────────────────────────────
// checkPhaseTransition(bossFight)
// Phase 1 → 2 when entity.hp < entity.maxHp * 0.66
// Phase 2 → 3 when entity.hp < entity.maxHp * 0.33
// On transition: update bossFight.phase, reset phaseTimer = 0
// Returns: { bossFight, transitioned, newPhase }

export function checkPhaseTransition(bossFight) {
  // ✏️ YOUR CODE HERE

}

// ── TASK 3 ───────────────────────────────────────────────────
// attackBoss(player, bossFight)
// Damage formula:
//   newCombo = (player.comboCount + 1) % 4
//   isBig    = (newCombo === 3)
//   damage   = 14 + player.level * 4 + (isBig ? 30 : 0) + Math.floor(Math.random() * 10)
//
// Apply to bossFight.entity.hp (min 0).
// If killed:
//   entity.alive = false
//   player.xp   += 300
//   player.gold += 150
//   player.score += 5000
//
// Returns: { player, bossFight, damage, killed, isBig }

export function attackBoss(player, bossFight) {
  // ✏️ YOUR CODE HERE

}

// ── TASK 4 ───────────────────────────────────────────────────
// generateVictoryReport(player, bossFight, turns)
// Rank: turns <= 5 → 'S', <= 10 → 'A', <= 20 → 'B', else → 'C'
//
// Returns:
// {
//   winner:     'Hero',
//   bossName:   bossFight.entity.name,
//   turnsToWin: turns,
//   goldEarned: player.gold,
//   xpEarned:   300,
//   rank:       (computed),
//   score:      5000,
// }

export function generateVictoryReport(player, bossFight, turns) {
  // ✏️ YOUR CODE HERE

}
