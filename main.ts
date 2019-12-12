sprites.onDestroyed(SpriteKind.Player, function (sprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Cherrybombcake.destroy()
    game.over(false, effects.splatter)
})
let Cherrybombcake: Sprite = null
let Ball = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 . . . . . . 
. . . . 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 2 2 2 3 3 2 2 2 3 3 . . 
. . . 3 2 2 2 2 2 2 2 2 2 3 . . 
. . . 3 2 2 2 2 2 2 2 2 2 3 . . 
. . . 3 2 2 2 2 2 2 2 2 2 3 . . 
. . . 3 2 2 2 2 2 2 2 3 . . . . 
. . . 3 2 2 2 2 2 2 2 3 . . . . 
. . . 3 2 2 2 2 2 3 3 . . . . . 
. . . . 3 3 3 3 3 3 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
Cherrybombcake = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . 
. . . f f f 5 5 f f f . . . . . . . . . . . . . 
. . f f f 5 5 5 5 f f f . . . . . . . . . . . . 
. f f f e e e e e e f f f . . . . . . . . . . . 
. f f e 5 5 5 5 5 5 e e f . . . . . . . . . . . 
. f e 5 f f f f f f 5 e f . . . . . . . . . . . 
. f f f f e e e e f f f f . . . . . . . . . . . 
f f e f b f 2 2 f b f e f f . . . . . . . . . . 
f e e 2 1 f d d f 1 2 e e f . . . . . . . . . . 
. f f f f d d d d d e e f . . . . . . . . . . . 
f d d d d f 2 2 2 e e f . . . . . . . . . . . . 
f b b b b f 5 5 5 5 f 2 e . . . . . . . . . . . 
f b b b b f 5 5 5 5 f d 2 . . . . . . . . . . . 
. f c c f 2 5 5 2 2 f 2 2 . . . . . . . . . . . 
. . f f f f f f f f . . . . . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Cherrybombcake.setPosition(88, 88)
Ball.setPosition(11, 28)
controller.moveSprite(Cherrybombcake)
let Mom = sprites.create(img`
. . . . . f f 2 2 f f . . . . . 
. . . . f 5 2 5 5 2 5 f . . . . 
. . . f e 2 5 5 5 5 2 e f . . . 
. . f b 3 2 2 2 2 2 e 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 2 2 f 1 e b b f . 
f f b b f 2 2 2 2 2 2 f b b f f 
f b b f f f e e e e f f f b b f 
. f e e f b d d d d b f e e f . 
. . e 2 c d d d d d d c 2 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`, SpriteKind.Food)
let MessageDad = "hi"
Cherrybombcake.say(MessageDad)
scene.setBackgroundColor(6)
game.onUpdate(function () {
    Ball.follow(Cherrybombcake, 50)
})
