let FormulaVisitor = require('./FormulaVisitor').FormulaVisitor

class PrintVisitor extends FormulaVisitor{
  constructor(){
    super();
  }

  visitFunc(ctx){
    console.log(`[func] ${ctx.ID().getText()} arguments: ${ctx.argumentList().getChildCount()}`)
    this.visitChildren(ctx);
  }

  visitPointCode(ctx){
    console.log(`[Point] ${ctx.POINT().getText()}`);
    this.visitChildren(ctx);
  }
}

module.exports = PrintVisitor