scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.setPosition(30, 200)
    music.bigCrash.play()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -180
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (info.score() == 0) {
        info.changeScoreBy(1)
    } else {
        if (info.score() >= 1) {
            info.changeScoreBy(1)
        }
    }
    if (info.score() == 5) {
        tiles.setTileAt(tiles.getTileLocation(58, 15), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(58, 15), false)
    }
    music.magicWand.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    game.over(true)
    music.stopAllSounds()
    music.playMelody("E C5 B A F B C5 C ", 120)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.setPosition(30, 200)
    music.bigCrash.play()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e f f e e 3 3 . . . . . 
        . . . . e d d d d d 3 . . . . . 
        . . . . e 1 1 d 1 1 3 . . . . . 
        . . . . e f 1 d f 1 3 . . . . . 
        . . . . e 1 1 d 1 1 f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f 4 4 4 4 4 f . . . . . 
        . . f f f 4 4 4 4 4 f f f . . . 
        . . f d d 4 4 4 4 4 d d f . . . 
        . . f d f 4 4 4 4 4 f d f . . . 
        . . f f f 9 f . f 9 f f f . . . 
        . . . . f 9 f . f 9 f . . . . . 
        . . . . f 9 f . f 9 f . . . . . 
        . . . . f f f . f f f . . . . . 
        `)
    music.footstep.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.setPosition(30, 200)
    music.bigCrash.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.setPosition(30, 200)
    music.bigCrash.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral4, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.setPosition(30, 200)
    music.bigCrash.play()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 e e f f e . . . . 
        . . . . . 3 d d d d d e . . . . 
        . . . . . 3 1 1 d 1 1 e . . . . 
        . . . . . 3 1 f d 1 f e . . . . 
        . . . . . f 1 1 d 1 1 e . . . . 
        . . . . . f d d d d d f . . . . 
        . . . . . f 4 4 4 4 4 f . . . . 
        . . . f f f 4 4 4 4 4 f f f . . 
        . . . f d d 4 4 4 4 4 d d f . . 
        . . . f d f 4 4 4 4 4 f d f . . 
        . . . f f f 9 f . f 9 f f f . . 
        . . . . . f 9 f . f 9 f . . . . 
        . . . . . f 9 f . f 9 f . . . . 
        . . . . . f f f . f f f . . . . 
        `)
    music.footstep.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrangeDepressed, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(43, 12), assets.tile`transparency16`)
    tiles.setWallAt(tiles.getTileLocation(43, 12), false)
    tiles.setTileAt(tiles.getTileLocation(43, 13), assets.tile`transparency16`)
    tiles.setWallAt(tiles.getTileLocation(43, 13), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.setPosition(30, 200)
    music.bigCrash.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.setPosition(30, 200)
    music.bigCrash.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.setPosition(30, 200)
    music.bigCrash.play()
})
info.onLifeZero(function () {
    game.over(false)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
effects.bubbles.startScreenEffect(500)
music.playMelody("E C5 B A F G E C ", 120)
game.splash("Collect 5 Gems to open up the gate, but beware the timer!")
effects.bubbles.endScreenEffect()
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    9111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111119111111111111111111111111111111111111111111111111111111
    9911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111119999991111111111111111111111111111111111111111111111111111
    9999111111111111111111111111111111111111999991111111111111111111111111111111111111111111111111111111999999999991111111111111111111111111111111111111111111111111
    9999911111111111111111111111111111111999999999999111111111111111111119991111111111111111111111199999999999999999911111111111111119111111111111111111111111111111
    9999991111111111111111111111111111119999999999999999999999999999999999999911111111111111111199999999999999999999999111111111199999911111111111111911111111111111
    9999999991111111111111111111111119999999999999999999999999999999999999999999991111111119999999999999999999999999999999999999999999999111111111199999911111111111
    9999999999999111111111111111999999999999111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999911111119999999999999999999
    9999999999999999999999999999999999999111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999911111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999911111111111111111111111111111111111199999999999999999999999999999999999999999111111111119999999999999999999999999999999999999999
    9999999991111111119999999999999111111111111111111111111111111111111119999999999999999999999999999999999999991111111111111111111111111111111111111199999999999999
    9999999111111111119999999999991111111111111111111111111111111111111119999999999999999999999999999991111199911111111111111111111111111111111111111111999999999999
    9999911111111111119999999999911111111111111111111111111111111111111119999999999999999999999999999111111111111111111111111111111111111111111111111111119999999999
    9999911111111111119999999999111111111111111111111111111111111111111199999999999999999999999999911111111111111111111111111111111111111111111111111111111199999999
    9999911111111111119999999991111111111111111111111111111111111111111199999999999999999999999999111111111111111111111111111111111111111111111111111111111119999999
    9999911111111111119999999991111111111111111111111111111111111111119999999999999999999999999999111111111111111111111111111111111111111111111111111111111119999999
    9999911111111111119999999991111111111111111111111111111111111111999999999999999999999999999999111111111111111111111111111111111111111111111111111111111119999999
    9999911111111111119999999991111111111111111111111111111111111999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111119999999
    9999911111111111119999999991111111111111111111111111111111111999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111119999999
    9999911111111111199999999991111111111111111111111111111111111999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111119999999
    9999991111119999999999999991111111111111111111111111111111111999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111119999999
    9999999999999999999999999991111111111111111111111111111111111999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111999999999
    9999999999999999999999999999111111111111111111111111111111199999999999999999999999999999999999911111111111111111111111111111111111111111111111111111119999999999
    9999999999999999999999999999911111111111111111111111111119999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111999999999999
    9999999999999999999999999999991111111111111111111111119999999999999999999999999999999999999999999111111111111111111111111111111111111111111111119999999999999999
    9999999999999999999999999999999911111111111111111999999999999999999999999999999999999999999999999111111111119991111111111111111111111111111119999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111119999111111111111111111111111199999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999ddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999ddddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999ddddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999dddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dcccccccccccccccccc9
    999999999999999999999999999999999999dddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddc99
    999999999999999999999999999999999999ddddb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddccc99
    99999999999999999999999999999999999dddddb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddcc999
    9999999999999999999999999999999999ddddddb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddcc9999
    9999999999999999999999999999999999ddddddbb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddbbbbbbbbbbcccc9999
    9999999999999999999999999999999999ddddddbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddbbbbbbbbbbbbccccc99
    999999999999999999999999999999999dddddddbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddbbbbbbbbbbbbbbbdcccc99
    99999999999999999999999999999999ddddddddbb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddbbbbbbbbbbbbbbbbcccd99
    99999999999999999999999999999999ddddddddbb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddbbbbbbbbbbbbbbbbbcccc99
    99999999999999999999999999999999ddddddddbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddbbbbbbbbbbbbbbbbbbcccd9
    99999999999999999999999999999999ddddddddbbb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddbbbbbbbbbbbbbbbbbbbccccd
    9999999999999999999999999999999dddddddddbbb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddbbbbbbbbbbbbbbbbbbbbbcccc
    9999999999999999999999999999999ddddddddbbbb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddbbbbbbbbbbbbbbbbbbbbbcccc
    9999999999999999999999999999999ddddddddbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddbbbbbbbbbbdbbbbbbbbbbbbccd
    999999999999999999999999999999dddddddddbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999dddd99999dddddbbbbbbbbbbdbbbbbbbbbbbbbbcd
    999999999999999999999999999999ddddddddbbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999ddddd999dddddbbbbbbbbbbbdbbbbbbbbbbbbbbbb
    999999999999999999999999999999ddddddddbbbbb999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9dddddbbbbbbbbbbdbbbbbbbbbbbbbbbbb
    999999999999999999999999999999ddddddddbbbbbb9999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddbbbbbbbbbbdbbbbbbbbbbbbbbbbbb
    99999999999999999999999999999dddddddddbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddbbbbbbbbbbbdbbbbbbbbbbbbbbbbbb
    99999999999999999999999999999ddddddddbbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999dddddbbddddddbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb
    99999999999999999999999999999ddddddddbbbdbbb999999999999999999999999999999999999999999999999999999999999999999999999dddddbbbddddbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbb
    9999999999999999999999999999dddddddddbbbdbbb99999999999999999999999999999999999999999999999999999999999999999999999dddddbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbb
    999999999999999999999ddd9999dddddddddbbbdbbb99999999999999999999999999999999999999999999999999999999999999999999999ddddbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbb
    999999999999999999999dddd999dddddddddbbbdbbbb999999999999999999999999999999999999999999999999999999999999999999999dddddbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbdbbbb
    99999999999999999999ddddd99dddddddddbbbbdbbbb99999999999999999999999999999999999999999999999999999999999999999999dddddbbbbbdbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbdbbbb
    99999999999999999999ddddd99dddddddddbbbbdbbbb9999999999999999999999999999999999999999999999999999999999999999999ddddddbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbdbbbb
    9999999999999999999ddddd999dddddddddbbbbdbbbb9999999999999999999999999999999999999999999999999999999999999999999dddddbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbdbbbbb
    999999999999999999dddddd99ddddddddbbbbbbdbbbb999999999999999999999999999999999999999999999999999999999999999999dddddbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbdbbbbb
    999999999999999999dddddd99ddddddddbbbbbbdbbbb99999999999999999999999999999999999999999999999999999999999999999dddddbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbdbbbbb
    99999999999999999ddddddd9dddddddddbbbbbbdbbbb9999999999999999999999999999999999999999999999999999999999999999ddddddbbbbbdbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbdbbbbb
    9999999999999999dddddddd9ddddbddddbbbbbbdbbbb9999999999999999999999999999999999999999999999999999999999999999dddddbbbbbddbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbdbbbbb
    9999999999999999dddddddddddddbdddbbbbbbbdbbbb999999999999999999999999999999999999999999999999999999999999999dddddbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbdbbbbbb
    9999999999999999ddddddddddddbbbbbbbbbbbbdbbbb99999999999999999999999999999999999999999999999999999999999999dddddbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbdbbbbbbb
    999999999999999dddddddddddddbbbbbbbbbbbbdbbbbb9999999999999999999999999999999999999999999999999999999999999dddddbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbb
    999999999999999ddddddddddddbbbbbbbbbbbbbdbbbbb999999999999999999999999999999999999999999999999999999999999dddddbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbb
    999999999999999dddddddbbbbbbbbbbbbbbbbbdbbbbbb99999999999999999999999999999999999999999999999999999999999dddddbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbb
    99999999999999ddddddddbbbbbbbbbbbbbbbbbdbbbbbb99999999999999999999999999999999999999999999999999999999999dddddbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbdbbbbbbbb
    99999999999999ddddddddbbbbbbbbbbbbbbbbbdbbbbbb9999999999999999999999999999999999999999999999999999999999dddddbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbb
    9999999999999ddddddddbbbbbbbbbbdbbbbbbbdbbbbbb999999bbb99999999999999999999999999999999999999999ddddd99dddddbbbbbbbbdbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbb
    9999999999999ddddddddbbbbbbbbbdbbbbbbbbbbbbbbbb99999bbb99999999999999999999999999999999999999ddddddddddddddbbbbbbbbddbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbb
    999999999999dddddddddbbbbbbbbdbbbbbbbbbbbbbbbbb9999bbbbb99999999999999999999999999999999999ddddddddddddddddbbbbbbbddbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbdbbbbbbbbbb
    999999999999ddddddddbbbbbbbbbdbbbbbbbbbbbbbbbbb9999bbbbb99999999999999999999999999999999999ddddddddddddddbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbb
    99999999999ddddddddbbbbbbbbbdbbbbbbbbbbbbbbbbbb9999bbbbb9999999999999999999999999999999999dddddddddddddbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbb
    9999999999ddddddddbbbbbbbbbdbbbbbbbbbbbbbbbbbbb999bbbbbbb999999999999999999999999999999999dddddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbb
    9999999999ddddddddbbbbbbbbdbbbbbbbbbbbbbbbbbbbb99bbbbbbbb99999999999999999999999999999999dddddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbb
    999999999dddddddddbbbbbbbdbbbbbbbbbbbbbbbbbbbbb99bbbbbbbb9999999999999999999999999999999dddddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbb
    999999999ddddddddbbbbbbbbdbbbbbbbdbbbbbbbbbbbbb9bbbbbbbbb999999999999999999999999999999ddddddbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    999999999ddddddddbbbbbbbbdbbbbbbbdbbbbbbbbbbbbb9bbbbbbbbbb9999999999999999999999999999ddddddbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    99999999ddddddddbbbbbbbbdbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999dddddddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbb
    99999999dddddddbbbbbbbbbdbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999ddddddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbb
    9999999ddddddddbbbbbbbbdbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999dddddbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbb
    999999ddddddddbbbbbbbbbdbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999dddddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbbbbbbb
    999999ddddddddbbbbbbbbbdbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999ddddbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbbbb
    99999ddddbddddbbbbbbbbdbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999ddddbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbbbb
    99999ddddbdddbbbbbbbbdbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999ddddbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    9999ddddbbdddbbbbbbbbdbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999ddddbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    999dddddbbbbbbbbbbbbbdbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999dddddbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    999ddddbbbbbbbbbbbbbdbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999ddddddbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    99dddddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999dddddbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    99ddddbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999ddddddbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    9dddddbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999ddddddbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999ddddddbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999ddddddbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999dddddbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999dddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999ddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 e e f f e . . . . 
    . . . . . 3 d d d d d e . . . . 
    . . . . . 3 1 1 d 1 1 e . . . . 
    . . . . . 3 1 f d 1 f e . . . . 
    . . . . . f 1 1 d 1 1 e . . . . 
    . . . . . f d d d d d f . . . . 
    . . . . . f 4 4 4 4 4 f . . . . 
    . . . f f f 4 4 4 4 4 f f f . . 
    . . . f d d 4 4 4 4 4 d d f . . 
    . . . f d f 4 4 4 4 4 f d f . . 
    . . . f f f 9 f . f 9 f f f . . 
    . . . . . f 9 f . f 9 f . . . . 
    . . . . . f 9 f . f 9 f . . . . 
    . . . . . f f f . f f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(30, 200)
mySprite.ay = 400
controller.moveSprite(mySprite, 100, 0)
info.setLife(3)
scene.cameraFollowSprite(mySprite)
info.startCountdown(90)
forever(function () {
    music.playMelody("C - - C D - E D ", 120)
})
