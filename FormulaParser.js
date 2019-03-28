// Generated from Formula.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FormulaListener = require('./FormulaListener').FormulaListener;
var FormulaVisitor = require('./FormulaVisitor').FormulaVisitor;

var grammarFileName = "Formula.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001f\u00a1\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004\\\n\u0004\f\u0004\u000e",
    "\u0004_\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005h\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006o\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007t\n\u0007\u0003\b\u0003",
    "\b\u0003\b\u0005\by\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007",
    "\t\u0080\n\t\f\t\u000e\t\u0083\u000b\t\u0003\n\u0003\n\u0005\n\u0087",
    "\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0002\u0003\u0006\u0017\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*\u0002\t\u0003\u0002\u001a\u001b",
    "\u0003\u0002\u0006\u0007\u0003\u0002\b\n\u0003\u0002\u000b\f\u0003\u0002",
    "\r\u000e\u0003\u0002\u000f\u0012\u0003\u0002\u0013\u0014\u0002\u009d",
    "\u0002,\u0003\u0002\u0002\u0002\u0004.\u0003\u0002\u0002\u0002\u0006",
    "0\u0003\u0002\u0002\u0002\bg\u0003\u0002\u0002\u0002\nn\u0003\u0002",
    "\u0002\u0002\fs\u0003\u0002\u0002\u0002\u000eu\u0003\u0002\u0002\u0002",
    "\u0010|\u0003\u0002\u0002\u0002\u0012\u0086\u0003\u0002\u0002\u0002",
    "\u0014\u0088\u0003\u0002\u0002\u0002\u0016\u008a\u0003\u0002\u0002\u0002",
    "\u0018\u008c\u0003\u0002\u0002\u0002\u001a\u008e\u0003\u0002\u0002\u0002",
    "\u001c\u0090\u0003\u0002\u0002\u0002\u001e\u0092\u0003\u0002\u0002\u0002",
    " \u0094\u0003\u0002\u0002\u0002\"\u0096\u0003\u0002\u0002\u0002$\u0098",
    "\u0003\u0002\u0002\u0002&\u009a\u0003\u0002\u0002\u0002(\u009c\u0003",
    "\u0002\u0002\u0002*\u009e\u0003\u0002\u0002\u0002,-\u0005\u0004\u0003",
    "\u0002-\u0003\u0003\u0002\u0002\u0002./\u0005\u0006\u0004\u0002/\u0005",
    "\u0003\u0002\u0002\u000201\b\u0004\u0001\u000212\u0005\b\u0005\u0002",
    "2]\u0003\u0002\u0002\u000234\f\f\u0002\u000245\u0005\u0018\r\u00025",
    "6\u0005\u0006\u0004\r6\\\u0003\u0002\u0002\u000278\f\u000b\u0002\u0002",
    "89\u0005\u001a\u000e\u00029:\u0005\u0006\u0004\f:\\\u0003\u0002\u0002",
    "\u0002;<\f\n\u0002\u0002<=\u0005\u001c\u000f\u0002=>\u0005\u0006\u0004",
    "\u000b>\\\u0003\u0002\u0002\u0002?@\f\t\u0002\u0002@A\u0005\u001e\u0010",
    "\u0002AB\u0005\u0006\u0004\nB\\\u0003\u0002\u0002\u0002CD\f\b\u0002",
    "\u0002DE\u0005 \u0011\u0002EF\u0005\u0006\u0004\tF\\\u0003\u0002\u0002",
    "\u0002GH\f\u0007\u0002\u0002HI\u0005\"\u0012\u0002IJ\u0005\u0006\u0004",
    "\bJ\\\u0003\u0002\u0002\u0002KL\f\u0006\u0002\u0002LM\u0005$\u0013\u0002",
    "MN\u0005\u0006\u0004\u0007N\\\u0003\u0002\u0002\u0002OP\f\u0005\u0002",
    "\u0002PQ\u0005&\u0014\u0002QR\u0005\u0006\u0004\u0006R\\\u0003\u0002",
    "\u0002\u0002ST\f\u0004\u0002\u0002TU\u0005(\u0015\u0002UV\u0005\u0006",
    "\u0004\u0005V\\\u0003\u0002\u0002\u0002WX\f\u0003\u0002\u0002XY\u0005",
    "*\u0016\u0002YZ\u0005\u0006\u0004\u0004Z\\\u0003\u0002\u0002\u0002[",
    "3\u0003\u0002\u0002\u0002[7\u0003\u0002\u0002\u0002[;\u0003\u0002\u0002",
    "\u0002[?\u0003\u0002\u0002\u0002[C\u0003\u0002\u0002\u0002[G\u0003\u0002",
    "\u0002\u0002[K\u0003\u0002\u0002\u0002[O\u0003\u0002\u0002\u0002[S\u0003",
    "\u0002\u0002\u0002[W\u0003\u0002\u0002\u0002\\_\u0003\u0002\u0002\u0002",
    "][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^\u0007\u0003\u0002",
    "\u0002\u0002_]\u0003\u0002\u0002\u0002`h\u0005\n\u0006\u0002ab\u0005",
    "\u0016\f\u0002bc\u0005\n\u0006\u0002ch\u0003\u0002\u0002\u0002de\u0005",
    "\u001a\u000e\u0002ef\u0005\n\u0006\u0002fh\u0003\u0002\u0002\u0002g",
    "`\u0003\u0002\u0002\u0002ga\u0003\u0002\u0002\u0002gd\u0003\u0002\u0002",
    "\u0002h\t\u0003\u0002\u0002\u0002io\u0005\f\u0007\u0002jk\u0007\u0003",
    "\u0002\u0002kl\u0005\u0004\u0003\u0002lm\u0007\u0004\u0002\u0002mo\u0003",
    "\u0002\u0002\u0002ni\u0003\u0002\u0002\u0002nj\u0003\u0002\u0002\u0002",
    "o\u000b\u0003\u0002\u0002\u0002pt\u0005\u0012\n\u0002qt\u0005\u0014",
    "\u000b\u0002rt\u0005\u000e\b\u0002sp\u0003\u0002\u0002\u0002sq\u0003",
    "\u0002\u0002\u0002sr\u0003\u0002\u0002\u0002t\r\u0003\u0002\u0002\u0002",
    "uv\u0007\u001d\u0002\u0002vx\u0007\u0003\u0002\u0002wy\u0005\u0010\t",
    "\u0002xw\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002yz\u0003\u0002",
    "\u0002\u0002z{\u0007\u0004\u0002\u0002{\u000f\u0003\u0002\u0002\u0002",
    "|\u0081\u0005\u0006\u0004\u0002}~\u0007\u0005\u0002\u0002~\u0080\u0005",
    "\u0006\u0004\u0002\u007f}\u0003\u0002\u0002\u0002\u0080\u0083\u0003",
    "\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0081\u0082\u0003",
    "\u0002\u0002\u0002\u0082\u0011\u0003\u0002\u0002\u0002\u0083\u0081\u0003",
    "\u0002\u0002\u0002\u0084\u0087\t\u0002\u0002\u0002\u0085\u0087\u0007",
    "\u001e\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0085\u0003",
    "\u0002\u0002\u0002\u0087\u0013\u0003\u0002\u0002\u0002\u0088\u0089\u0007",
    "\u001c\u0002\u0002\u0089\u0015\u0003\u0002\u0002\u0002\u008a\u008b\t",
    "\u0003\u0002\u0002\u008b\u0017\u0003\u0002\u0002\u0002\u008c\u008d\t",
    "\u0004\u0002\u0002\u008d\u0019\u0003\u0002\u0002\u0002\u008e\u008f\t",
    "\u0005\u0002\u0002\u008f\u001b\u0003\u0002\u0002\u0002\u0090\u0091\t",
    "\u0006\u0002\u0002\u0091\u001d\u0003\u0002\u0002\u0002\u0092\u0093\t",
    "\u0007\u0002\u0002\u0093\u001f\u0003\u0002\u0002\u0002\u0094\u0095\t",
    "\b\u0002\u0002\u0095!\u0003\u0002\u0002\u0002\u0096\u0097\u0007\u0015",
    "\u0002\u0002\u0097#\u0003\u0002\u0002\u0002\u0098\u0099\u0007\u0016",
    "\u0002\u0002\u0099%\u0003\u0002\u0002\u0002\u009a\u009b\u0007\u0017",
    "\u0002\u0002\u009b\'\u0003\u0002\u0002\u0002\u009c\u009d\u0007\u0018",
    "\u0002\u0002\u009d)\u0003\u0002\u0002\u0002\u009e\u009f\u0007\u0019",
    "\u0002\u0002\u009f+\u0003\u0002\u0002\u0002\n[]gnsx\u0081\u0086"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "','", "'~'", "'!'", "'*'", "'/'", 
                     "'%'", "'+'", "'-'", "'<<'", "'>>'", "'<'", "'<='", 
                     "'>'", "'>='", "'=='", "'!='", "'&'", "'^'", "'|'", 
                     "'&&'", "'||'" ];

var symbolicNames = [ null, null, null, null, "BITWISE_NOT", "LOGICAL_NOT", 
                      "MULTIPLY", "DIVIDE", "MODULO", "ADDITION", "SUBTRACTION", 
                      "SHIFT_LEFT", "SHIFT_RIGHT", "LT", "LTE", "GT", "GTE", 
                      "EQUALITY", "INEQUALITY", "BITWISE_AND", "BITWISE_XOR", 
                      "BITWISE_OR", "LOGICAL_AND", "LOGICAL_OR", "TRUE", 
                      "FALSE", "POINT", "ID", "NUMBER_CONST", "WS" ];

var ruleNames =  [ "formula", "expr", "infixExpr", "prefixExpr", "parenthesesExpr", 
                   "simpleExpr", "func", "argumentList", "constNumber", 
                   "pointCode", "not", "scaling", "addition", "bitwiseShift", 
                   "relational", "equality", "and", "exclusiveOr", "inclusiveOr", 
                   "conjunction", "disjunction" ];

function FormulaParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FormulaParser.prototype = Object.create(antlr4.Parser.prototype);
FormulaParser.prototype.constructor = FormulaParser;

Object.defineProperty(FormulaParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FormulaParser.EOF = antlr4.Token.EOF;
FormulaParser.T__0 = 1;
FormulaParser.T__1 = 2;
FormulaParser.T__2 = 3;
FormulaParser.BITWISE_NOT = 4;
FormulaParser.LOGICAL_NOT = 5;
FormulaParser.MULTIPLY = 6;
FormulaParser.DIVIDE = 7;
FormulaParser.MODULO = 8;
FormulaParser.ADDITION = 9;
FormulaParser.SUBTRACTION = 10;
FormulaParser.SHIFT_LEFT = 11;
FormulaParser.SHIFT_RIGHT = 12;
FormulaParser.LT = 13;
FormulaParser.LTE = 14;
FormulaParser.GT = 15;
FormulaParser.GTE = 16;
FormulaParser.EQUALITY = 17;
FormulaParser.INEQUALITY = 18;
FormulaParser.BITWISE_AND = 19;
FormulaParser.BITWISE_XOR = 20;
FormulaParser.BITWISE_OR = 21;
FormulaParser.LOGICAL_AND = 22;
FormulaParser.LOGICAL_OR = 23;
FormulaParser.TRUE = 24;
FormulaParser.FALSE = 25;
FormulaParser.POINT = 26;
FormulaParser.ID = 27;
FormulaParser.NUMBER_CONST = 28;
FormulaParser.WS = 29;

FormulaParser.RULE_formula = 0;
FormulaParser.RULE_expr = 1;
FormulaParser.RULE_infixExpr = 2;
FormulaParser.RULE_prefixExpr = 3;
FormulaParser.RULE_parenthesesExpr = 4;
FormulaParser.RULE_simpleExpr = 5;
FormulaParser.RULE_func = 6;
FormulaParser.RULE_argumentList = 7;
FormulaParser.RULE_constNumber = 8;
FormulaParser.RULE_pointCode = 9;
FormulaParser.RULE_not = 10;
FormulaParser.RULE_scaling = 11;
FormulaParser.RULE_addition = 12;
FormulaParser.RULE_bitwiseShift = 13;
FormulaParser.RULE_relational = 14;
FormulaParser.RULE_equality = 15;
FormulaParser.RULE_and = 16;
FormulaParser.RULE_exclusiveOr = 17;
FormulaParser.RULE_inclusiveOr = 18;
FormulaParser.RULE_conjunction = 19;
FormulaParser.RULE_disjunction = 20;


function FormulaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_formula;
    return this;
}

FormulaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaContext.prototype.constructor = FormulaContext;

FormulaContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FormulaContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterFormula(this);
	}
};

FormulaContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitFormula(this);
	}
};

FormulaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitFormula(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.FormulaContext = FormulaContext;

FormulaParser.prototype.formula = function() {

    var localctx = new FormulaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FormulaParser.RULE_formula);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.infixExpr = function() {
    return this.getTypedRuleContext(InfixExprContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.ExprContext = ExprContext;

FormulaParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FormulaParser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.infixExpr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InfixExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_infixExpr;
    return this;
}

InfixExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InfixExprContext.prototype.constructor = InfixExprContext;

InfixExprContext.prototype.prefixExpr = function() {
    return this.getTypedRuleContext(PrefixExprContext,0);
};

InfixExprContext.prototype.infixExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InfixExprContext);
    } else {
        return this.getTypedRuleContext(InfixExprContext,i);
    }
};

InfixExprContext.prototype.scaling = function() {
    return this.getTypedRuleContext(ScalingContext,0);
};

InfixExprContext.prototype.addition = function() {
    return this.getTypedRuleContext(AdditionContext,0);
};

InfixExprContext.prototype.bitwiseShift = function() {
    return this.getTypedRuleContext(BitwiseShiftContext,0);
};

InfixExprContext.prototype.relational = function() {
    return this.getTypedRuleContext(RelationalContext,0);
};

InfixExprContext.prototype.equality = function() {
    return this.getTypedRuleContext(EqualityContext,0);
};

InfixExprContext.prototype.and = function() {
    return this.getTypedRuleContext(AndContext,0);
};

InfixExprContext.prototype.exclusiveOr = function() {
    return this.getTypedRuleContext(ExclusiveOrContext,0);
};

InfixExprContext.prototype.inclusiveOr = function() {
    return this.getTypedRuleContext(InclusiveOrContext,0);
};

InfixExprContext.prototype.conjunction = function() {
    return this.getTypedRuleContext(ConjunctionContext,0);
};

InfixExprContext.prototype.disjunction = function() {
    return this.getTypedRuleContext(DisjunctionContext,0);
};

InfixExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterInfixExpr(this);
	}
};

InfixExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitInfixExpr(this);
	}
};

InfixExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitInfixExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FormulaParser.prototype.infixExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new InfixExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, FormulaParser.RULE_infixExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.prefixExpr();
        this._ctx.stop = this._input.LT(-1);
        this.state = 91;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 89;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new InfixExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_infixExpr);
                    this.state = 49;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 50;
                    this.scaling();
                    this.state = 51;
                    this.infixExpr(11);
                    break;

                case 2:
                    localctx = new InfixExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_infixExpr);
                    this.state = 53;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 54;
                    this.addition();
                    this.state = 55;
                    this.infixExpr(10);
                    break;

                case 3:
                    localctx = new InfixExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_infixExpr);
                    this.state = 57;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 58;
                    this.bitwiseShift();
                    this.state = 59;
                    this.infixExpr(9);
                    break;

                case 4:
                    localctx = new InfixExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_infixExpr);
                    this.state = 61;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 62;
                    this.relational();
                    this.state = 63;
                    this.infixExpr(8);
                    break;

                case 5:
                    localctx = new InfixExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_infixExpr);
                    this.state = 65;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 66;
                    this.equality();
                    this.state = 67;
                    this.infixExpr(7);
                    break;

                case 6:
                    localctx = new InfixExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_infixExpr);
                    this.state = 69;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 70;
                    this.and();
                    this.state = 71;
                    this.infixExpr(6);
                    break;

                case 7:
                    localctx = new InfixExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_infixExpr);
                    this.state = 73;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 74;
                    this.exclusiveOr();
                    this.state = 75;
                    this.infixExpr(5);
                    break;

                case 8:
                    localctx = new InfixExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_infixExpr);
                    this.state = 77;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 78;
                    this.inclusiveOr();
                    this.state = 79;
                    this.infixExpr(4);
                    break;

                case 9:
                    localctx = new InfixExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_infixExpr);
                    this.state = 81;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 82;
                    this.conjunction();
                    this.state = 83;
                    this.infixExpr(3);
                    break;

                case 10:
                    localctx = new InfixExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_infixExpr);
                    this.state = 85;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 86;
                    this.disjunction();
                    this.state = 87;
                    this.infixExpr(2);
                    break;

                } 
            }
            this.state = 93;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function PrefixExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_prefixExpr;
    return this;
}

PrefixExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixExprContext.prototype.constructor = PrefixExprContext;

PrefixExprContext.prototype.parenthesesExpr = function() {
    return this.getTypedRuleContext(ParenthesesExprContext,0);
};

PrefixExprContext.prototype.not = function() {
    return this.getTypedRuleContext(NotContext,0);
};

PrefixExprContext.prototype.addition = function() {
    return this.getTypedRuleContext(AdditionContext,0);
};

PrefixExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterPrefixExpr(this);
	}
};

PrefixExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitPrefixExpr(this);
	}
};

PrefixExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitPrefixExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.PrefixExprContext = PrefixExprContext;

FormulaParser.prototype.prefixExpr = function() {

    var localctx = new PrefixExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FormulaParser.RULE_prefixExpr);
    try {
        this.state = 101;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FormulaParser.T__0:
        case FormulaParser.TRUE:
        case FormulaParser.FALSE:
        case FormulaParser.POINT:
        case FormulaParser.ID:
        case FormulaParser.NUMBER_CONST:
            this.enterOuterAlt(localctx, 1);
            this.state = 94;
            this.parenthesesExpr();
            break;
        case FormulaParser.BITWISE_NOT:
        case FormulaParser.LOGICAL_NOT:
            this.enterOuterAlt(localctx, 2);
            this.state = 95;
            this.not();
            this.state = 96;
            this.parenthesesExpr();
            break;
        case FormulaParser.ADDITION:
        case FormulaParser.SUBTRACTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 98;
            this.addition();
            this.state = 99;
            this.parenthesesExpr();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParenthesesExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_parenthesesExpr;
    return this;
}

ParenthesesExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParenthesesExprContext.prototype.constructor = ParenthesesExprContext;

ParenthesesExprContext.prototype.simpleExpr = function() {
    return this.getTypedRuleContext(SimpleExprContext,0);
};

ParenthesesExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ParenthesesExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterParenthesesExpr(this);
	}
};

ParenthesesExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitParenthesesExpr(this);
	}
};

ParenthesesExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitParenthesesExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.ParenthesesExprContext = ParenthesesExprContext;

FormulaParser.prototype.parenthesesExpr = function() {

    var localctx = new ParenthesesExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FormulaParser.RULE_parenthesesExpr);
    try {
        this.state = 108;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FormulaParser.TRUE:
        case FormulaParser.FALSE:
        case FormulaParser.POINT:
        case FormulaParser.ID:
        case FormulaParser.NUMBER_CONST:
            this.enterOuterAlt(localctx, 1);
            this.state = 103;
            this.simpleExpr();
            break;
        case FormulaParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 104;
            this.match(FormulaParser.T__0);
            this.state = 105;
            this.expr();
            this.state = 106;
            this.match(FormulaParser.T__1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SimpleExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_simpleExpr;
    return this;
}

SimpleExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleExprContext.prototype.constructor = SimpleExprContext;

SimpleExprContext.prototype.constNumber = function() {
    return this.getTypedRuleContext(ConstNumberContext,0);
};

SimpleExprContext.prototype.pointCode = function() {
    return this.getTypedRuleContext(PointCodeContext,0);
};

SimpleExprContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

SimpleExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterSimpleExpr(this);
	}
};

SimpleExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitSimpleExpr(this);
	}
};

SimpleExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitSimpleExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.SimpleExprContext = SimpleExprContext;

FormulaParser.prototype.simpleExpr = function() {

    var localctx = new SimpleExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FormulaParser.RULE_simpleExpr);
    try {
        this.state = 113;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FormulaParser.TRUE:
        case FormulaParser.FALSE:
        case FormulaParser.NUMBER_CONST:
            this.enterOuterAlt(localctx, 1);
            this.state = 110;
            this.constNumber();
            break;
        case FormulaParser.POINT:
            this.enterOuterAlt(localctx, 2);
            this.state = 111;
            this.pointCode();
            break;
        case FormulaParser.ID:
            this.enterOuterAlt(localctx, 3);
            this.state = 112;
            this.func();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.ID = function() {
    return this.getToken(FormulaParser.ID, 0);
};

FuncContext.prototype.argumentList = function() {
    return this.getTypedRuleContext(ArgumentListContext,0);
};

FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitFunc(this);
	}
};

FuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.FuncContext = FuncContext;

FormulaParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FormulaParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.match(FormulaParser.ID);
        this.state = 116;
        this.match(FormulaParser.T__0);
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FormulaParser.T__0) | (1 << FormulaParser.BITWISE_NOT) | (1 << FormulaParser.LOGICAL_NOT) | (1 << FormulaParser.ADDITION) | (1 << FormulaParser.SUBTRACTION) | (1 << FormulaParser.TRUE) | (1 << FormulaParser.FALSE) | (1 << FormulaParser.POINT) | (1 << FormulaParser.ID) | (1 << FormulaParser.NUMBER_CONST))) !== 0)) {
            this.state = 117;
            this.argumentList();
        }

        this.state = 120;
        this.match(FormulaParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArgumentListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_argumentList;
    return this;
}

ArgumentListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentListContext.prototype.constructor = ArgumentListContext;

ArgumentListContext.prototype.infixExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InfixExprContext);
    } else {
        return this.getTypedRuleContext(InfixExprContext,i);
    }
};

ArgumentListContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterArgumentList(this);
	}
};

ArgumentListContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitArgumentList(this);
	}
};

ArgumentListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitArgumentList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.ArgumentListContext = ArgumentListContext;

FormulaParser.prototype.argumentList = function() {

    var localctx = new ArgumentListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FormulaParser.RULE_argumentList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.infixExpr(0);
        this.state = 127;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FormulaParser.T__2) {
            this.state = 123;
            this.match(FormulaParser.T__2);
            this.state = 124;
            this.infixExpr(0);
            this.state = 129;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstNumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_constNumber;
    return this;
}

ConstNumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstNumberContext.prototype.constructor = ConstNumberContext;


 
ConstNumberContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NumberContext(parser, ctx) {
	ConstNumberContext.call(this, parser);
    ConstNumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberContext.prototype = Object.create(ConstNumberContext.prototype);
NumberContext.prototype.constructor = NumberContext;

FormulaParser.NumberContext = NumberContext;

NumberContext.prototype.NUMBER_CONST = function() {
    return this.getToken(FormulaParser.NUMBER_CONST, 0);
};
NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolContext(parser, ctx) {
	ConstNumberContext.call(this, parser);
    ConstNumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolContext.prototype = Object.create(ConstNumberContext.prototype);
BoolContext.prototype.constructor = BoolContext;

FormulaParser.BoolContext = BoolContext;

BoolContext.prototype.TRUE = function() {
    return this.getToken(FormulaParser.TRUE, 0);
};

BoolContext.prototype.FALSE = function() {
    return this.getToken(FormulaParser.FALSE, 0);
};
BoolContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterBool(this);
	}
};

BoolContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitBool(this);
	}
};

BoolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitBool(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FormulaParser.ConstNumberContext = ConstNumberContext;

FormulaParser.prototype.constNumber = function() {

    var localctx = new ConstNumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FormulaParser.RULE_constNumber);
    var _la = 0; // Token type
    try {
        this.state = 132;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FormulaParser.TRUE:
        case FormulaParser.FALSE:
            localctx = new BoolContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 130;
            _la = this._input.LA(1);
            if(!(_la===FormulaParser.TRUE || _la===FormulaParser.FALSE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case FormulaParser.NUMBER_CONST:
            localctx = new NumberContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 131;
            this.match(FormulaParser.NUMBER_CONST);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PointCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_pointCode;
    return this;
}

PointCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PointCodeContext.prototype.constructor = PointCodeContext;

PointCodeContext.prototype.POINT = function() {
    return this.getToken(FormulaParser.POINT, 0);
};

PointCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterPointCode(this);
	}
};

PointCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitPointCode(this);
	}
};

PointCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitPointCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.PointCodeContext = PointCodeContext;

FormulaParser.prototype.pointCode = function() {

    var localctx = new PointCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FormulaParser.RULE_pointCode);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(FormulaParser.POINT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NotContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_not;
    return this;
}

NotContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotContext.prototype.constructor = NotContext;

NotContext.prototype.BITWISE_NOT = function() {
    return this.getToken(FormulaParser.BITWISE_NOT, 0);
};

NotContext.prototype.LOGICAL_NOT = function() {
    return this.getToken(FormulaParser.LOGICAL_NOT, 0);
};

NotContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterNot(this);
	}
};

NotContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitNot(this);
	}
};

NotContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitNot(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.NotContext = NotContext;

FormulaParser.prototype.not = function() {

    var localctx = new NotContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FormulaParser.RULE_not);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        _la = this._input.LA(1);
        if(!(_la===FormulaParser.BITWISE_NOT || _la===FormulaParser.LOGICAL_NOT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ScalingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_scaling;
    return this;
}

ScalingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScalingContext.prototype.constructor = ScalingContext;

ScalingContext.prototype.MULTIPLY = function() {
    return this.getToken(FormulaParser.MULTIPLY, 0);
};

ScalingContext.prototype.DIVIDE = function() {
    return this.getToken(FormulaParser.DIVIDE, 0);
};

ScalingContext.prototype.MODULO = function() {
    return this.getToken(FormulaParser.MODULO, 0);
};

ScalingContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterScaling(this);
	}
};

ScalingContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitScaling(this);
	}
};

ScalingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitScaling(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.ScalingContext = ScalingContext;

FormulaParser.prototype.scaling = function() {

    var localctx = new ScalingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, FormulaParser.RULE_scaling);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FormulaParser.MULTIPLY) | (1 << FormulaParser.DIVIDE) | (1 << FormulaParser.MODULO))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AdditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_addition;
    return this;
}

AdditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditionContext.prototype.constructor = AdditionContext;

AdditionContext.prototype.ADDITION = function() {
    return this.getToken(FormulaParser.ADDITION, 0);
};

AdditionContext.prototype.SUBTRACTION = function() {
    return this.getToken(FormulaParser.SUBTRACTION, 0);
};

AdditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterAddition(this);
	}
};

AdditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitAddition(this);
	}
};

AdditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitAddition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.AdditionContext = AdditionContext;

FormulaParser.prototype.addition = function() {

    var localctx = new AdditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, FormulaParser.RULE_addition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        _la = this._input.LA(1);
        if(!(_la===FormulaParser.ADDITION || _la===FormulaParser.SUBTRACTION)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BitwiseShiftContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_bitwiseShift;
    return this;
}

BitwiseShiftContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BitwiseShiftContext.prototype.constructor = BitwiseShiftContext;

BitwiseShiftContext.prototype.SHIFT_LEFT = function() {
    return this.getToken(FormulaParser.SHIFT_LEFT, 0);
};

BitwiseShiftContext.prototype.SHIFT_RIGHT = function() {
    return this.getToken(FormulaParser.SHIFT_RIGHT, 0);
};

BitwiseShiftContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterBitwiseShift(this);
	}
};

BitwiseShiftContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitBitwiseShift(this);
	}
};

BitwiseShiftContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitBitwiseShift(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.BitwiseShiftContext = BitwiseShiftContext;

FormulaParser.prototype.bitwiseShift = function() {

    var localctx = new BitwiseShiftContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, FormulaParser.RULE_bitwiseShift);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        _la = this._input.LA(1);
        if(!(_la===FormulaParser.SHIFT_LEFT || _la===FormulaParser.SHIFT_RIGHT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RelationalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_relational;
    return this;
}

RelationalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelationalContext.prototype.constructor = RelationalContext;

RelationalContext.prototype.LT = function() {
    return this.getToken(FormulaParser.LT, 0);
};

RelationalContext.prototype.LTE = function() {
    return this.getToken(FormulaParser.LTE, 0);
};

RelationalContext.prototype.GT = function() {
    return this.getToken(FormulaParser.GT, 0);
};

RelationalContext.prototype.GTE = function() {
    return this.getToken(FormulaParser.GTE, 0);
};

RelationalContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterRelational(this);
	}
};

RelationalContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitRelational(this);
	}
};

RelationalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitRelational(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.RelationalContext = RelationalContext;

FormulaParser.prototype.relational = function() {

    var localctx = new RelationalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, FormulaParser.RULE_relational);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FormulaParser.LT) | (1 << FormulaParser.LTE) | (1 << FormulaParser.GT) | (1 << FormulaParser.GTE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EqualityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_equality;
    return this;
}

EqualityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EqualityContext.prototype.constructor = EqualityContext;

EqualityContext.prototype.EQUALITY = function() {
    return this.getToken(FormulaParser.EQUALITY, 0);
};

EqualityContext.prototype.INEQUALITY = function() {
    return this.getToken(FormulaParser.INEQUALITY, 0);
};

EqualityContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterEquality(this);
	}
};

EqualityContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitEquality(this);
	}
};

EqualityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitEquality(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.EqualityContext = EqualityContext;

FormulaParser.prototype.equality = function() {

    var localctx = new EqualityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, FormulaParser.RULE_equality);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        _la = this._input.LA(1);
        if(!(_la===FormulaParser.EQUALITY || _la===FormulaParser.INEQUALITY)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_and;
    return this;
}

AndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndContext.prototype.constructor = AndContext;

AndContext.prototype.BITWISE_AND = function() {
    return this.getToken(FormulaParser.BITWISE_AND, 0);
};

AndContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterAnd(this);
	}
};

AndContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitAnd(this);
	}
};

AndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitAnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.AndContext = AndContext;

FormulaParser.prototype.and = function() {

    var localctx = new AndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, FormulaParser.RULE_and);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.match(FormulaParser.BITWISE_AND);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExclusiveOrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_exclusiveOr;
    return this;
}

ExclusiveOrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExclusiveOrContext.prototype.constructor = ExclusiveOrContext;

ExclusiveOrContext.prototype.BITWISE_XOR = function() {
    return this.getToken(FormulaParser.BITWISE_XOR, 0);
};

ExclusiveOrContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterExclusiveOr(this);
	}
};

ExclusiveOrContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitExclusiveOr(this);
	}
};

ExclusiveOrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitExclusiveOr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.ExclusiveOrContext = ExclusiveOrContext;

FormulaParser.prototype.exclusiveOr = function() {

    var localctx = new ExclusiveOrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, FormulaParser.RULE_exclusiveOr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this.match(FormulaParser.BITWISE_XOR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InclusiveOrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_inclusiveOr;
    return this;
}

InclusiveOrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InclusiveOrContext.prototype.constructor = InclusiveOrContext;

InclusiveOrContext.prototype.BITWISE_OR = function() {
    return this.getToken(FormulaParser.BITWISE_OR, 0);
};

InclusiveOrContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterInclusiveOr(this);
	}
};

InclusiveOrContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitInclusiveOr(this);
	}
};

InclusiveOrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitInclusiveOr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.InclusiveOrContext = InclusiveOrContext;

FormulaParser.prototype.inclusiveOr = function() {

    var localctx = new InclusiveOrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, FormulaParser.RULE_inclusiveOr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.match(FormulaParser.BITWISE_OR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConjunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_conjunction;
    return this;
}

ConjunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConjunctionContext.prototype.constructor = ConjunctionContext;

ConjunctionContext.prototype.LOGICAL_AND = function() {
    return this.getToken(FormulaParser.LOGICAL_AND, 0);
};

ConjunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterConjunction(this);
	}
};

ConjunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitConjunction(this);
	}
};

ConjunctionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitConjunction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.ConjunctionContext = ConjunctionContext;

FormulaParser.prototype.conjunction = function() {

    var localctx = new ConjunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, FormulaParser.RULE_conjunction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(FormulaParser.LOGICAL_AND);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DisjunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_disjunction;
    return this;
}

DisjunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DisjunctionContext.prototype.constructor = DisjunctionContext;

DisjunctionContext.prototype.LOGICAL_OR = function() {
    return this.getToken(FormulaParser.LOGICAL_OR, 0);
};

DisjunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterDisjunction(this);
	}
};

DisjunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitDisjunction(this);
	}
};

DisjunctionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitDisjunction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.DisjunctionContext = DisjunctionContext;

FormulaParser.prototype.disjunction = function() {

    var localctx = new DisjunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, FormulaParser.RULE_disjunction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        this.match(FormulaParser.LOGICAL_OR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


FormulaParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.infixExpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

FormulaParser.prototype.infixExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);
		case 1:
			return this.precpred(this._ctx, 9);
		case 2:
			return this.precpred(this._ctx, 8);
		case 3:
			return this.precpred(this._ctx, 7);
		case 4:
			return this.precpred(this._ctx, 6);
		case 5:
			return this.precpred(this._ctx, 5);
		case 6:
			return this.precpred(this._ctx, 4);
		case 7:
			return this.precpred(this._ctx, 3);
		case 8:
			return this.precpred(this._ctx, 2);
		case 9:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FormulaParser = FormulaParser;
