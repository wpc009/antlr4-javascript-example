
const http = require('http');
const antlr4 = require('antlr4/index');
const FormulaLexer = require('./FormulaLexer').FormulaLexer;
const FormulaParser = require('./FormulaParser').FormulaParser;
const HtmlChatListener = require('./HtmlChatListener').HtmlChatListener;
const PrintVisitor = require('./PrintVisitor');

    const input = 'somefunc(_489, _591)';

    const chars = new antlr4.InputStream(input);
    const lexer = new FormulaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new FormulaParser(tokens);
    parser.buildParseTrees = true;

    /**
     * We set the root node of the tree as a chat rule. 
     * You want to invoke the parser specifying a rule which typically is the first rule. 
     * However you can actually invoke any rule directly.
     */
    const tree = parser.formula();
    
    
tree.accept(new PrintVisitor())
