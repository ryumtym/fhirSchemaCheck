class FHIRErrorChecker{
  /**
  * validate.errors使用時に返ってくる配列からinstancePathが同一のオブジェクトを全て弾く(ajvのエラー出力問題を修正)
  * @constructor creates instance of errorFilter
  * @param {array} ajvArrayofErrors validate.errors使用時にajvから返ってくるエラー配列
  */

  constructor(ajvArrayofErrors){
    this.ajvArrayofErrors = ajvArrayofErrors;
  }

  optimize(ajvArrayofErrors){
    if(Array.isArray(ajvArrayofErrors)) {
      const newArr = Array.from(
        this.ajvArrayofErrors.reduce((map, e) => 
          map.set(e.instancePath, e),
                new Map()
          ).values()
      );
      return newArr
    }
  }
}
module.exports = FHIRErrorChecker


