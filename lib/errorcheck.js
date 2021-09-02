class FHIRErrorChecker{
  /**
  * validate.errors使用時に返ってくる配列からinstancePathが同じ値をすべて取り除く(ajvのエラー出力問題を修正)
  * @constructor creates instance of errorFilter
  * @param {array} ajvArrayofErrors validate.errors使用時にajvから返ってくるエラー配列
  */

  constructor(ajvArrayofErrors){
    this.ajvArrayofErrors = ajvArrayofErrors;
  }
    /**
     * ajvが返してきたエラー一覧からinstancePathが同一のものを弾いた新たな配列を作成
     */
  optimize(){
    if(Array.isArray(this.ajvArrayofErrors)) {
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


