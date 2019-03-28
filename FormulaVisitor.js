// Generated from Formula.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by FormulaParser.

function FormulaVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

FormulaVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FormulaVisitor.prototype.constructor = FormulaVisitor;

// Visit a parse tree produced by FormulaParser#formula.
FormulaVisitor.prototype.visitFormula = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#expr.
FormulaVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#infixExpr.
FormulaVisitor.prototype.visitInfixExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#prefixExpr.
FormulaVisitor.prototype.visitPrefixExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#parenthesesExpr.
FormulaVisitor.prototype.visitParenthesesExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#simpleExpr.
FormulaVisitor.prototype.visitSimpleExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#func.
FormulaVisitor.prototype.visitFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#argumentList.
FormulaVisitor.prototype.visitArgumentList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#bool.
FormulaVisitor.prototype.visitBool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#number.
FormulaVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#pointCode.
FormulaVisitor.prototype.visitPointCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#not.
FormulaVisitor.prototype.visitNot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#scaling.
FormulaVisitor.prototype.visitScaling = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#addition.
FormulaVisitor.prototype.visitAddition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#bitwiseShift.
FormulaVisitor.prototype.visitBitwiseShift = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#relational.
FormulaVisitor.prototype.visitRelational = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#equality.
FormulaVisitor.prototype.visitEquality = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#and.
FormulaVisitor.prototype.visitAnd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#exclusiveOr.
FormulaVisitor.prototype.visitExclusiveOr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#inclusiveOr.
FormulaVisitor.prototype.visitInclusiveOr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#conjunction.
FormulaVisitor.prototype.visitConjunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#disjunction.
FormulaVisitor.prototype.visitDisjunction = function(ctx) {
  return this.visitChildren(ctx);
};



exports.FormulaVisitor = FormulaVisitor;