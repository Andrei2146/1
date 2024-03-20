var game = new Phaser.Game(1600, 800, Phaser.AUTO, 'gameDiv', { preload: preload, create: create, update: update });

function preload() {
  
    game.load.image('Tree', 'assets/Tree.jpg');
    game.load.image('Leaf', 'assets/leaf.jpg');

    
    game.load.audio('scream', 'assets/scream.mp3');
}

function create() {
    
    var treeSprite = game.add.sprite(game.world.centerX, 100, 'Tree');
    treeSprite.anchor.setTo(0.5);

    
    game.physics.enable(treeSprite, Phaser.Physics.ARCADE);

   
    game.time.events.loop(Phaser.Timer.SECOND * 3, spawnLeaf, this);
}

function update() {
    
}

function spawnLeaf() {
   
    var leafSprite = game.add.sprite(game.rnd.between(100, game.width - 100), 0, 'Leaf');
    leafSprite.anchor.setTo(0.5);

    
    game.physics.enable(leafSprite, Phaser.Physics.ARCADE);

   
    leafSprite.scale.setTo(0.1); 

    
    leafSprite.body.gravity.y = 200; 

    
    var screamSound = game.add.audio('scream');
    screamSound.play();
}
