// Generated from Formula.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FormulaParser.
function FormulaListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FormulaListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FormulaListener.prototype.constructor = FormulaListener;

// Enter a parse tree produced by FormulaParser#formula.
FormulaListener.prototype.enterFormula = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#formula.
FormulaListener.prototype.exitFormula = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#expr.
FormulaListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#expr.
FormulaListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#infixExpr.
FormulaListener.prototype.enterInfixExpr = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#infixExpr.
FormulaListener.prototype.exitInfixExpr = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#prefixExpr.
FormulaListener.prototype.enterPrefixExpr = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#prefixExpr.
FormulaListener.prototype.exitPrefixExpr = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#parenthesesExpr.
FormulaListener.prototype.enterParenthesesExpr = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#parenthesesExpr.
FormulaListener.prototype.exitParenthesesExpr = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#simpleExpr.
FormulaListener.prototype.enterSimpleExpr = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#simpleExpr.
FormulaListener.prototype.exitSimpleExpr = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#func.
FormulaListener.prototype.enterFunc = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#func.
FormulaListener.prototype.exitFunc = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#argumentList.
FormulaListener.prototype.enterArgumentList = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#argumentList.
FormulaListener.prototype.exitArgumentList = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#bool.
FormulaListener.prototype.enterBool = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#bool.
FormulaListener.prototype.exitBool = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#number.
FormulaListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#number.
FormulaListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#pointCode.
FormulaListener.prototype.enterPointCode = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#pointCode.
FormulaListener.prototype.exitPointCode = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#not.
FormulaListener.prototype.enterNot = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#not.
FormulaListener.prototype.exitNot = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#scaling.
FormulaListener.prototype.enterScaling = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#scaling.
FormulaListener.prototype.exitScaling = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#addition.
FormulaListener.prototype.enterAddition = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#addition.
FormulaListener.prototype.exitAddition = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#bitwiseShift.
FormulaListener.prototype.enterBitwiseShift = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#bitwiseShift.
FormulaListener.prototype.exitBitwiseShift = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#relational.
FormulaListener.prototype.enterRelational = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#relational.
FormulaListener.prototype.exitRelational = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#equality.
FormulaListener.prototype.enterEquality = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#equality.
FormulaListener.prototype.exitEquality = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#and.
FormulaListener.prototype.enterAnd = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#and.
FormulaListener.prototype.exitAnd = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#exclusiveOr.
FormulaListener.prototype.enterExclusiveOr = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#exclusiveOr.
FormulaListener.prototype.exitExclusiveOr = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#inclusiveOr.
FormulaListener.prototype.enterInclusiveOr = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#inclusiveOr.
FormulaListener.prototype.exitInclusiveOr = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#conjunction.
FormulaListener.prototype.enterConjunction = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#conjunction.
FormulaListener.prototype.exitConjunction = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#disjunction.
FormulaListener.prototype.enterDisjunction = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#disjunction.
FormulaListener.prototype.exitDisjunction = function(ctx) {
};



exports.FormulaListener = FormulaListener;