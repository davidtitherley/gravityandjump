
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace gravity {
/**
    * TODO: gravity on player sprite
    * @param value describe value here, eg: 5
    */
    //% block
    export function gravity(sprite: Sprite){
        mySprite.ay = 300
    }
/**
    * TODO: jump
    * @param value describe value here, eg: 5
    */
    //% block
    export function jump(sprite: Sprite){
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -100}

    }
}