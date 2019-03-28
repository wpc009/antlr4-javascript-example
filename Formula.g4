grammar Formula;

// @header{
// package com.maxtropy.formula.core.base;
// }

// 计算式
formula             :expr
                    ;

expr                :infixExpr
                    ;

infixExpr           :prefixExpr
                    |infixExpr scaling infixExpr
                    |infixExpr addition infixExpr
                    |infixExpr bitwiseShift infixExpr
                    |infixExpr relational infixExpr
                    |infixExpr equality infixExpr
                    |infixExpr and infixExpr
                    |infixExpr exclusiveOr infixExpr
                    |infixExpr inclusiveOr infixExpr
                    |infixExpr conjunction infixExpr
                    |infixExpr disjunction infixExpr
                    ;

prefixExpr          :parenthesesExpr
                    |not parenthesesExpr
                    |addition parenthesesExpr
                    ;

parenthesesExpr     :simpleExpr
                    |'('expr')';

simpleExpr          :constNumber
                    |pointCode
                    |func
                    ;


// 函数。
func                :ID '(' argumentList? ')'
                    ;

argumentList        : infixExpr (',' infixExpr)*
                    ;
// 常数。
constNumber         :(TRUE|FALSE) #bool
                    |NUMBER_CONST #number
                    ;
// 数据点。
pointCode           :POINT
                    ;




// 二元运算符
// 命名与优先级参考：
// http://www.cplusplus.com/doc/tutorial/operators/

BITWISE_NOT         :'~';
LOGICAL_NOT         :'!';
not                 :BITWISE_NOT|LOGICAL_NOT;
MULTIPLY            :'*';
DIVIDE              :'/';
MODULO              :'%';
scaling             :MULTIPLY|DIVIDE|MODULO;
ADDITION            :'+';
SUBTRACTION         :'-';
addition            :ADDITION|SUBTRACTION;
SHIFT_LEFT          :'<<';
SHIFT_RIGHT         :'>>';
bitwiseShift        :SHIFT_LEFT|SHIFT_RIGHT;
LT                  :'<';
LTE                 :'<=';
GT                  :'>';
GTE                 :'>=';
relational          :LT|LTE|GT|GTE;
EQUALITY            :'==';
INEQUALITY          :'!=';
equality            :EQUALITY|INEQUALITY;
BITWISE_AND         :'&';
and                 :BITWISE_AND;
BITWISE_XOR         :'^';
exclusiveOr         :BITWISE_XOR;
BITWISE_OR          :'|';
inclusiveOr         :BITWISE_OR;
LOGICAL_AND         :'&&';
conjunction         :LOGICAL_AND;
LOGICAL_OR          :'||';
disjunction         :LOGICAL_OR;


// 关键字定义

TRUE                :'true'|'TRUE';
FALSE               :'false'|'FALSE';

// 其他元素定义

POINT               :[xyz]?'_'[0-9]+;
ID                  :[a-zA-Z][a-zA-Z0-9]*;
NUMBER_CONST        :[0-9]+'.'?[0-9]*;

WS                  :[ \t\r\n\u000C]+ -> skip;