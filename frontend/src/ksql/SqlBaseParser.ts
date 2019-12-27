// Generated from src/ksql/SqlBase.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SqlBaseListener } from "./SqlBaseListener";
import { SqlBaseVisitor } from "./SqlBaseVisitor";


export class SqlBaseParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly SELECT = 8;
	public static readonly FROM = 9;
	public static readonly AS = 10;
	public static readonly DISTINCT = 11;
	public static readonly WHERE = 12;
	public static readonly WITHIN = 13;
	public static readonly WINDOW = 14;
	public static readonly GROUP = 15;
	public static readonly BY = 16;
	public static readonly HAVING = 17;
	public static readonly LIMIT = 18;
	public static readonly AT = 19;
	public static readonly OR = 20;
	public static readonly AND = 21;
	public static readonly IN = 22;
	public static readonly NOT = 23;
	public static readonly EXISTS = 24;
	public static readonly BETWEEN = 25;
	public static readonly LIKE = 26;
	public static readonly IS = 27;
	public static readonly NULL = 28;
	public static readonly TRUE = 29;
	public static readonly FALSE = 30;
	public static readonly INTEGER = 31;
	public static readonly DATE = 32;
	public static readonly TIME = 33;
	public static readonly TIMESTAMP = 34;
	public static readonly INTERVAL = 35;
	public static readonly YEAR = 36;
	public static readonly MONTH = 37;
	public static readonly DAY = 38;
	public static readonly HOUR = 39;
	public static readonly MINUTE = 40;
	public static readonly SECOND = 41;
	public static readonly MILLISECOND = 42;
	public static readonly YEARS = 43;
	public static readonly MONTHS = 44;
	public static readonly DAYS = 45;
	public static readonly HOURS = 46;
	public static readonly MINUTES = 47;
	public static readonly SECONDS = 48;
	public static readonly MILLISECONDS = 49;
	public static readonly ZONE = 50;
	public static readonly TUMBLING = 51;
	public static readonly HOPPING = 52;
	public static readonly SIZE = 53;
	public static readonly ADVANCE = 54;
	public static readonly CASE = 55;
	public static readonly WHEN = 56;
	public static readonly THEN = 57;
	public static readonly ELSE = 58;
	public static readonly END = 59;
	public static readonly JOIN = 60;
	public static readonly FULL = 61;
	public static readonly OUTER = 62;
	public static readonly INNER = 63;
	public static readonly LEFT = 64;
	public static readonly RIGHT = 65;
	public static readonly ON = 66;
	public static readonly PARTITION = 67;
	public static readonly STRUCT = 68;
	public static readonly WITH = 69;
	public static readonly VALUES = 70;
	public static readonly CREATE = 71;
	public static readonly TABLE = 72;
	public static readonly TOPIC = 73;
	public static readonly STREAM = 74;
	public static readonly STREAMS = 75;
	public static readonly INSERT = 76;
	public static readonly DELETE = 77;
	public static readonly INTO = 78;
	public static readonly DESCRIBE = 79;
	public static readonly EXTENDED = 80;
	public static readonly PRINT = 81;
	public static readonly EXPLAIN = 82;
	public static readonly ANALYZE = 83;
	public static readonly TYPE = 84;
	public static readonly TYPES = 85;
	public static readonly CAST = 86;
	public static readonly SHOW = 87;
	public static readonly LIST = 88;
	public static readonly TABLES = 89;
	public static readonly TOPICS = 90;
	public static readonly QUERY = 91;
	public static readonly QUERIES = 92;
	public static readonly TERMINATE = 93;
	public static readonly LOAD = 94;
	public static readonly COLUMNS = 95;
	public static readonly COLUMN = 96;
	public static readonly PARTITIONS = 97;
	public static readonly FUNCTIONS = 98;
	public static readonly FUNCTION = 99;
	public static readonly DROP = 100;
	public static readonly TO = 101;
	public static readonly RENAME = 102;
	public static readonly ARRAY = 103;
	public static readonly MAP = 104;
	public static readonly SET = 105;
	public static readonly RESET = 106;
	public static readonly SESSION = 107;
	public static readonly SAMPLE = 108;
	public static readonly EXPORT = 109;
	public static readonly CATALOG = 110;
	public static readonly PROPERTIES = 111;
	public static readonly BEGINNING = 112;
	public static readonly UNSET = 113;
	public static readonly RUN = 114;
	public static readonly SCRIPT = 115;
	public static readonly DECIMAL = 116;
	public static readonly KEY = 117;
	public static readonly CONNECTOR = 118;
	public static readonly CONNECTORS = 119;
	public static readonly SINK = 120;
	public static readonly SOURCE = 121;
	public static readonly IF = 122;
	public static readonly EQ = 123;
	public static readonly NEQ = 124;
	public static readonly LT = 125;
	public static readonly LTE = 126;
	public static readonly GT = 127;
	public static readonly GTE = 128;
	public static readonly PLUS = 129;
	public static readonly MINUS = 130;
	public static readonly ASTERISK = 131;
	public static readonly SLASH = 132;
	public static readonly PERCENT = 133;
	public static readonly CONCAT = 134;
	public static readonly STRUCT_FIELD_REF = 135;
	public static readonly STRING = 136;
	public static readonly INTEGER_VALUE = 137;
	public static readonly DECIMAL_VALUE = 138;
	public static readonly IDENTIFIER = 139;
	public static readonly DIGIT_IDENTIFIER = 140;
	public static readonly QUOTED_IDENTIFIER = 141;
	public static readonly BACKQUOTED_IDENTIFIER = 142;
	public static readonly TIME_WITH_TIME_ZONE = 143;
	public static readonly TIMESTAMP_WITH_TIME_ZONE = 144;
	public static readonly SIMPLE_COMMENT = 145;
	public static readonly BRACKETED_COMMENT = 146;
	public static readonly WS = 147;
	public static readonly UNRECOGNIZED = 148;
	public static readonly DELIMITER = 149;
	public static readonly RULE_statements = 0;
	public static readonly RULE_singleStatement = 1;
	public static readonly RULE_singleExpression = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_query = 4;
	public static readonly RULE_tableElements = 5;
	public static readonly RULE_tableElement = 6;
	public static readonly RULE_tableProperties = 7;
	public static readonly RULE_tableProperty = 8;
	public static readonly RULE_printClause = 9;
	public static readonly RULE_intervalClause = 10;
	public static readonly RULE_limitClause = 11;
	public static readonly RULE_windowExpression = 12;
	public static readonly RULE_tumblingWindowExpression = 13;
	public static readonly RULE_hoppingWindowExpression = 14;
	public static readonly RULE_sessionWindowExpression = 15;
	public static readonly RULE_windowUnit = 16;
	public static readonly RULE_groupBy = 17;
	public static readonly RULE_groupingElement = 18;
	public static readonly RULE_groupingExpressions = 19;
	public static readonly RULE_values = 20;
	public static readonly RULE_selectItem = 21;
	public static readonly RULE_relation = 22;
	public static readonly RULE_joinType = 23;
	public static readonly RULE_joinWindow = 24;
	public static readonly RULE_withinExpression = 25;
	public static readonly RULE_joinWindowSize = 26;
	public static readonly RULE_joinCriteria = 27;
	public static readonly RULE_aliasedRelation = 28;
	public static readonly RULE_columns = 29;
	public static readonly RULE_relationPrimary = 30;
	public static readonly RULE_expression = 31;
	public static readonly RULE_booleanExpression = 32;
	public static readonly RULE_predicated = 33;
	public static readonly RULE_predicate = 34;
	public static readonly RULE_valueExpression = 35;
	public static readonly RULE_primaryExpression = 36;
	public static readonly RULE_timeZoneSpecifier = 37;
	public static readonly RULE_comparisonOperator = 38;
	public static readonly RULE_booleanValue = 39;
	public static readonly RULE_type = 40;
	public static readonly RULE_typeParameter = 41;
	public static readonly RULE_baseType = 42;
	public static readonly RULE_whenClause = 43;
	public static readonly RULE_qualifiedName = 44;
	public static readonly RULE_identifier = 45;
	public static readonly RULE_number = 46;
	public static readonly RULE_literal = 47;
	public static readonly RULE_nonReserved = 48;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"statements", "singleStatement", "singleExpression", "statement", "query", 
		"tableElements", "tableElement", "tableProperties", "tableProperty", "printClause", 
		"intervalClause", "limitClause", "windowExpression", "tumblingWindowExpression", 
		"hoppingWindowExpression", "sessionWindowExpression", "windowUnit", "groupBy", 
		"groupingElement", "groupingExpressions", "values", "selectItem", "relation", 
		"joinType", "joinWindow", "withinExpression", "joinWindowSize", "joinCriteria", 
		"aliasedRelation", "columns", "relationPrimary", "expression", "booleanExpression", 
		"predicated", "predicate", "valueExpression", "primaryExpression", "timeZoneSpecifier", 
		"comparisonOperator", "booleanValue", "type", "typeParameter", "baseType", 
		"whenClause", "qualifiedName", "identifier", "number", "literal", "nonReserved",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "','", "'('", "')'", "'.'", "'['", "']'", "'SELECT'", 
		"'FROM'", "'AS'", "'DISTINCT'", "'WHERE'", "'WITHIN'", "'WINDOW'", "'GROUP'", 
		"'BY'", "'HAVING'", "'LIMIT'", "'AT'", "'OR'", "'AND'", "'IN'", "'NOT'", 
		"'EXISTS'", "'BETWEEN'", "'LIKE'", "'IS'", "'NULL'", "'TRUE'", "'FALSE'", 
		"'INTEGER'", "'DATE'", "'TIME'", "'TIMESTAMP'", "'INTERVAL'", "'YEAR'", 
		"'MONTH'", "'DAY'", "'HOUR'", "'MINUTE'", "'SECOND'", "'MILLISECOND'", 
		"'YEARS'", "'MONTHS'", "'DAYS'", "'HOURS'", "'MINUTES'", "'SECONDS'", 
		"'MILLISECONDS'", "'ZONE'", "'TUMBLING'", "'HOPPING'", "'SIZE'", "'ADVANCE'", 
		"'CASE'", "'WHEN'", "'THEN'", "'ELSE'", "'END'", "'JOIN'", "'FULL'", "'OUTER'", 
		"'INNER'", "'LEFT'", "'RIGHT'", "'ON'", "'PARTITION'", "'STRUCT'", "'WITH'", 
		"'VALUES'", "'CREATE'", "'TABLE'", "'TOPIC'", "'STREAM'", "'STREAMS'", 
		"'INSERT'", "'DELETE'", "'INTO'", "'DESCRIBE'", "'EXTENDED'", "'PRINT'", 
		"'EXPLAIN'", "'ANALYZE'", "'TYPE'", "'TYPES'", "'CAST'", "'SHOW'", "'LIST'", 
		"'TABLES'", "'TOPICS'", "'QUERY'", "'QUERIES'", "'TERMINATE'", "'LOAD'", 
		"'COLUMNS'", "'COLUMN'", "'PARTITIONS'", "'FUNCTIONS'", "'FUNCTION'", 
		"'DROP'", "'TO'", "'RENAME'", "'ARRAY'", "'MAP'", "'SET'", "'RESET'", 
		"'SESSION'", "'SAMPLE'", "'EXPORT'", "'CATALOG'", "'PROPERTIES'", "'BEGINNING'", 
		"'UNSET'", "'RUN'", "'SCRIPT'", "'DECIMAL'", "'KEY'", "'CONNECTOR'", "'CONNECTORS'", 
		"'SINK'", "'SOURCE'", "'IF'", "'='", undefined, "'<'", "'<='", "'>'", 
		"'>='", "'+'", "'-'", "'*'", "'/'", "'%'", "'||'", "'->'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "SELECT", "FROM", "AS", "DISTINCT", "WHERE", "WITHIN", "WINDOW", 
		"GROUP", "BY", "HAVING", "LIMIT", "AT", "OR", "AND", "IN", "NOT", "EXISTS", 
		"BETWEEN", "LIKE", "IS", "NULL", "TRUE", "FALSE", "INTEGER", "DATE", "TIME", 
		"TIMESTAMP", "INTERVAL", "YEAR", "MONTH", "DAY", "HOUR", "MINUTE", "SECOND", 
		"MILLISECOND", "YEARS", "MONTHS", "DAYS", "HOURS", "MINUTES", "SECONDS", 
		"MILLISECONDS", "ZONE", "TUMBLING", "HOPPING", "SIZE", "ADVANCE", "CASE", 
		"WHEN", "THEN", "ELSE", "END", "JOIN", "FULL", "OUTER", "INNER", "LEFT", 
		"RIGHT", "ON", "PARTITION", "STRUCT", "WITH", "VALUES", "CREATE", "TABLE", 
		"TOPIC", "STREAM", "STREAMS", "INSERT", "DELETE", "INTO", "DESCRIBE", 
		"EXTENDED", "PRINT", "EXPLAIN", "ANALYZE", "TYPE", "TYPES", "CAST", "SHOW", 
		"LIST", "TABLES", "TOPICS", "QUERY", "QUERIES", "TERMINATE", "LOAD", "COLUMNS", 
		"COLUMN", "PARTITIONS", "FUNCTIONS", "FUNCTION", "DROP", "TO", "RENAME", 
		"ARRAY", "MAP", "SET", "RESET", "SESSION", "SAMPLE", "EXPORT", "CATALOG", 
		"PROPERTIES", "BEGINNING", "UNSET", "RUN", "SCRIPT", "DECIMAL", "KEY", 
		"CONNECTOR", "CONNECTORS", "SINK", "SOURCE", "IF", "EQ", "NEQ", "LT", 
		"LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK", "SLASH", "PERCENT", "CONCAT", 
		"STRUCT_FIELD_REF", "STRING", "INTEGER_VALUE", "DECIMAL_VALUE", "IDENTIFIER", 
		"DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER", "TIME_WITH_TIME_ZONE", 
		"TIMESTAMP_WITH_TIME_ZONE", "SIMPLE_COMMENT", "BRACKETED_COMMENT", "WS", 
		"UNRECOGNIZED", "DELIMITER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SqlBaseParser._LITERAL_NAMES, SqlBaseParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SqlBaseParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SqlBase.g4"; }

	// @Override
	public get ruleNames(): string[] { return SqlBaseParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SqlBaseParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SqlBaseParser._ATN, this);
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SqlBaseParser.RULE_statements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SqlBaseParser.SELECT || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SqlBaseParser.CREATE - 71)) | (1 << (SqlBaseParser.INSERT - 71)) | (1 << (SqlBaseParser.DESCRIBE - 71)) | (1 << (SqlBaseParser.PRINT - 71)) | (1 << (SqlBaseParser.EXPLAIN - 71)) | (1 << (SqlBaseParser.SHOW - 71)) | (1 << (SqlBaseParser.LIST - 71)) | (1 << (SqlBaseParser.TERMINATE - 71)) | (1 << (SqlBaseParser.DROP - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (SqlBaseParser.SET - 105)) | (1 << (SqlBaseParser.UNSET - 105)) | (1 << (SqlBaseParser.RUN - 105)))) !== 0)) {
				{
				{
				this.state = 98;
				this.singleStatement();
				}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 104;
			this.match(SqlBaseParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleStatement(): SingleStatementContext {
		let _localctx: SingleStatementContext = new SingleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SqlBaseParser.RULE_singleStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.statement();
			this.state = 107;
			this.match(SqlBaseParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleExpression(): SingleExpressionContext {
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SqlBaseParser.RULE_singleExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.expression();
			this.state = 110;
			this.match(SqlBaseParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SqlBaseParser.RULE_statement);
		let _la: number;
		try {
			this.state = 303;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				_localctx = new QueryStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 112;
				this.query();
				}
				break;

			case 2:
				_localctx = new ListPropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.SHOW || _la === SqlBaseParser.LIST)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 114;
				this.match(SqlBaseParser.PROPERTIES);
				}
				break;

			case 3:
				_localctx = new ListTopicsContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 115;
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.SHOW || _la === SqlBaseParser.LIST)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 116;
				this.match(SqlBaseParser.TOPICS);
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.EXTENDED) {
					{
					this.state = 117;
					this.match(SqlBaseParser.EXTENDED);
					}
				}

				}
				break;

			case 4:
				_localctx = new ListStreamsContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 120;
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.SHOW || _la === SqlBaseParser.LIST)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 121;
				this.match(SqlBaseParser.STREAMS);
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.EXTENDED) {
					{
					this.state = 122;
					this.match(SqlBaseParser.EXTENDED);
					}
				}

				}
				break;

			case 5:
				_localctx = new ListTablesContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 125;
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.SHOW || _la === SqlBaseParser.LIST)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 126;
				this.match(SqlBaseParser.TABLES);
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.EXTENDED) {
					{
					this.state = 127;
					this.match(SqlBaseParser.EXTENDED);
					}
				}

				}
				break;

			case 6:
				_localctx = new ListFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 130;
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.SHOW || _la === SqlBaseParser.LIST)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 131;
				this.match(SqlBaseParser.FUNCTIONS);
				}
				break;

			case 7:
				_localctx = new ListConnectorsContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 132;
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.SHOW || _la === SqlBaseParser.LIST)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.SINK || _la === SqlBaseParser.SOURCE) {
					{
					this.state = 133;
					_la = this._input.LA(1);
					if (!(_la === SqlBaseParser.SINK || _la === SqlBaseParser.SOURCE)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 136;
				this.match(SqlBaseParser.CONNECTORS);
				}
				break;

			case 8:
				_localctx = new ListTypesContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 137;
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.SHOW || _la === SqlBaseParser.LIST)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 138;
				this.match(SqlBaseParser.TYPES);
				}
				break;

			case 9:
				_localctx = new ShowColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 139;
				this.match(SqlBaseParser.DESCRIBE);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.EXTENDED) {
					{
					this.state = 140;
					this.match(SqlBaseParser.EXTENDED);
					}
				}

				this.state = 143;
				this.qualifiedName();
				}
				break;

			case 10:
				_localctx = new DescribeFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 144;
				this.match(SqlBaseParser.DESCRIBE);
				this.state = 145;
				this.match(SqlBaseParser.FUNCTION);
				this.state = 146;
				this.qualifiedName();
				}
				break;

			case 11:
				_localctx = new DescribeConnectorContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 147;
				this.match(SqlBaseParser.DESCRIBE);
				this.state = 148;
				this.match(SqlBaseParser.CONNECTOR);
				this.state = 149;
				this.identifier();
				}
				break;

			case 12:
				_localctx = new PrintTopicContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 150;
				this.match(SqlBaseParser.PRINT);
				this.state = 153;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SqlBaseParser.INTEGER:
				case SqlBaseParser.DATE:
				case SqlBaseParser.TIME:
				case SqlBaseParser.TIMESTAMP:
				case SqlBaseParser.INTERVAL:
				case SqlBaseParser.YEAR:
				case SqlBaseParser.MONTH:
				case SqlBaseParser.DAY:
				case SqlBaseParser.HOUR:
				case SqlBaseParser.MINUTE:
				case SqlBaseParser.SECOND:
				case SqlBaseParser.ZONE:
				case SqlBaseParser.PARTITION:
				case SqlBaseParser.STRUCT:
				case SqlBaseParser.EXPLAIN:
				case SqlBaseParser.ANALYZE:
				case SqlBaseParser.TYPE:
				case SqlBaseParser.TYPES:
				case SqlBaseParser.SHOW:
				case SqlBaseParser.TABLES:
				case SqlBaseParser.COLUMNS:
				case SqlBaseParser.COLUMN:
				case SqlBaseParser.PARTITIONS:
				case SqlBaseParser.FUNCTIONS:
				case SqlBaseParser.FUNCTION:
				case SqlBaseParser.ARRAY:
				case SqlBaseParser.MAP:
				case SqlBaseParser.SET:
				case SqlBaseParser.RESET:
				case SqlBaseParser.SESSION:
				case SqlBaseParser.KEY:
				case SqlBaseParser.SINK:
				case SqlBaseParser.SOURCE:
				case SqlBaseParser.IF:
				case SqlBaseParser.IDENTIFIER:
				case SqlBaseParser.DIGIT_IDENTIFIER:
				case SqlBaseParser.QUOTED_IDENTIFIER:
				case SqlBaseParser.BACKQUOTED_IDENTIFIER:
					{
					this.state = 151;
					this.qualifiedName();
					}
					break;
				case SqlBaseParser.STRING:
					{
					this.state = 152;
					this.match(SqlBaseParser.STRING);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 155;
				this.printClause();
				}
				break;

			case 13:
				_localctx = new ListQueriesContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 156;
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.SHOW || _la === SqlBaseParser.LIST)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 157;
				this.match(SqlBaseParser.QUERIES);
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.EXTENDED) {
					{
					this.state = 158;
					this.match(SqlBaseParser.EXTENDED);
					}
				}

				}
				break;

			case 14:
				_localctx = new TerminateQueryContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 161;
				this.match(SqlBaseParser.TERMINATE);
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.QUERY) {
					{
					this.state = 162;
					this.match(SqlBaseParser.QUERY);
					}
				}

				this.state = 165;
				this.qualifiedName();
				}
				break;

			case 15:
				_localctx = new SetPropertyContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 166;
				this.match(SqlBaseParser.SET);
				this.state = 167;
				this.match(SqlBaseParser.STRING);
				this.state = 168;
				this.match(SqlBaseParser.EQ);
				this.state = 169;
				this.match(SqlBaseParser.STRING);
				}
				break;

			case 16:
				_localctx = new UnsetPropertyContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 170;
				this.match(SqlBaseParser.UNSET);
				this.state = 171;
				this.match(SqlBaseParser.STRING);
				}
				break;

			case 17:
				_localctx = new CreateStreamContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 172;
				this.match(SqlBaseParser.CREATE);
				this.state = 173;
				this.match(SqlBaseParser.STREAM);
				this.state = 177;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 174;
					this.match(SqlBaseParser.IF);
					this.state = 175;
					this.match(SqlBaseParser.NOT);
					this.state = 176;
					this.match(SqlBaseParser.EXISTS);
					}
					break;
				}
				this.state = 179;
				this.qualifiedName();
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.T__2) {
					{
					this.state = 180;
					this.tableElements();
					}
				}

				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.WITH) {
					{
					this.state = 183;
					this.match(SqlBaseParser.WITH);
					this.state = 184;
					this.tableProperties();
					}
				}

				}
				break;

			case 18:
				_localctx = new CreateStreamAsContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 187;
				this.match(SqlBaseParser.CREATE);
				this.state = 188;
				this.match(SqlBaseParser.STREAM);
				this.state = 192;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 189;
					this.match(SqlBaseParser.IF);
					this.state = 190;
					this.match(SqlBaseParser.NOT);
					this.state = 191;
					this.match(SqlBaseParser.EXISTS);
					}
					break;
				}
				this.state = 194;
				this.qualifiedName();
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.WITH) {
					{
					this.state = 195;
					this.match(SqlBaseParser.WITH);
					this.state = 196;
					this.tableProperties();
					}
				}

				this.state = 199;
				this.match(SqlBaseParser.AS);
				this.state = 200;
				this.query();
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.PARTITION) {
					{
					this.state = 201;
					this.match(SqlBaseParser.PARTITION);
					this.state = 202;
					this.match(SqlBaseParser.BY);
					this.state = 203;
					this.identifier();
					}
				}

				}
				break;

			case 19:
				_localctx = new CreateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 206;
				this.match(SqlBaseParser.CREATE);
				this.state = 207;
				this.match(SqlBaseParser.TABLE);
				this.state = 211;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 208;
					this.match(SqlBaseParser.IF);
					this.state = 209;
					this.match(SqlBaseParser.NOT);
					this.state = 210;
					this.match(SqlBaseParser.EXISTS);
					}
					break;
				}
				this.state = 213;
				this.qualifiedName();
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.T__2) {
					{
					this.state = 214;
					this.tableElements();
					}
				}

				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.WITH) {
					{
					this.state = 217;
					this.match(SqlBaseParser.WITH);
					this.state = 218;
					this.tableProperties();
					}
				}

				}
				break;

			case 20:
				_localctx = new CreateTableAsContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 221;
				this.match(SqlBaseParser.CREATE);
				this.state = 222;
				this.match(SqlBaseParser.TABLE);
				this.state = 226;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 223;
					this.match(SqlBaseParser.IF);
					this.state = 224;
					this.match(SqlBaseParser.NOT);
					this.state = 225;
					this.match(SqlBaseParser.EXISTS);
					}
					break;
				}
				this.state = 228;
				this.qualifiedName();
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.WITH) {
					{
					this.state = 229;
					this.match(SqlBaseParser.WITH);
					this.state = 230;
					this.tableProperties();
					}
				}

				this.state = 233;
				this.match(SqlBaseParser.AS);
				this.state = 234;
				this.query();
				}
				break;

			case 21:
				_localctx = new CreateConnectorContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 236;
				this.match(SqlBaseParser.CREATE);
				this.state = 237;
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.SINK || _la === SqlBaseParser.SOURCE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 238;
				this.match(SqlBaseParser.CONNECTOR);
				this.state = 239;
				this.identifier();
				this.state = 240;
				this.match(SqlBaseParser.WITH);
				this.state = 241;
				this.tableProperties();
				}
				break;

			case 22:
				_localctx = new InsertIntoContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 243;
				this.match(SqlBaseParser.INSERT);
				this.state = 244;
				this.match(SqlBaseParser.INTO);
				this.state = 245;
				this.qualifiedName();
				this.state = 246;
				this.query();
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.PARTITION) {
					{
					this.state = 247;
					this.match(SqlBaseParser.PARTITION);
					this.state = 248;
					this.match(SqlBaseParser.BY);
					this.state = 249;
					this.identifier();
					}
				}

				}
				break;

			case 23:
				_localctx = new InsertValuesContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 252;
				this.match(SqlBaseParser.INSERT);
				this.state = 253;
				this.match(SqlBaseParser.INTO);
				this.state = 254;
				this.qualifiedName();
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.T__2) {
					{
					this.state = 255;
					this.columns();
					}
				}

				this.state = 258;
				this.match(SqlBaseParser.VALUES);
				this.state = 259;
				this.values();
				}
				break;

			case 24:
				_localctx = new DropStreamContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 261;
				this.match(SqlBaseParser.DROP);
				this.state = 262;
				this.match(SqlBaseParser.STREAM);
				this.state = 265;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 263;
					this.match(SqlBaseParser.IF);
					this.state = 264;
					this.match(SqlBaseParser.EXISTS);
					}
					break;
				}
				this.state = 267;
				this.qualifiedName();
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.DELETE) {
					{
					this.state = 268;
					this.match(SqlBaseParser.DELETE);
					this.state = 269;
					this.match(SqlBaseParser.TOPIC);
					}
				}

				}
				break;

			case 25:
				_localctx = new DropTableContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 272;
				this.match(SqlBaseParser.DROP);
				this.state = 273;
				this.match(SqlBaseParser.TABLE);
				this.state = 276;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 274;
					this.match(SqlBaseParser.IF);
					this.state = 275;
					this.match(SqlBaseParser.EXISTS);
					}
					break;
				}
				this.state = 278;
				this.qualifiedName();
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.DELETE) {
					{
					this.state = 279;
					this.match(SqlBaseParser.DELETE);
					this.state = 280;
					this.match(SqlBaseParser.TOPIC);
					}
				}

				}
				break;

			case 26:
				_localctx = new DropConnectorContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 283;
				this.match(SqlBaseParser.DROP);
				this.state = 284;
				this.match(SqlBaseParser.CONNECTOR);
				this.state = 285;
				this.identifier();
				}
				break;

			case 27:
				_localctx = new ExplainContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 286;
				this.match(SqlBaseParser.EXPLAIN);
				this.state = 289;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 287;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 288;
					this.qualifiedName();
					}
					break;
				}
				}
				break;

			case 28:
				_localctx = new RunScriptContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 291;
				this.match(SqlBaseParser.RUN);
				this.state = 292;
				this.match(SqlBaseParser.SCRIPT);
				this.state = 293;
				this.match(SqlBaseParser.STRING);
				}
				break;

			case 29:
				_localctx = new RegisterTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 294;
				this.match(SqlBaseParser.CREATE);
				this.state = 295;
				this.match(SqlBaseParser.TYPE);
				this.state = 296;
				this.identifier();
				this.state = 297;
				this.match(SqlBaseParser.AS);
				this.state = 298;
				this.type(0);
				}
				break;

			case 30:
				_localctx = new DropTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 300;
				this.match(SqlBaseParser.DROP);
				this.state = 301;
				this.match(SqlBaseParser.TYPE);
				this.state = 302;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SqlBaseParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(SqlBaseParser.SELECT);
			this.state = 306;
			this.selectItem();
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SqlBaseParser.T__1) {
				{
				{
				this.state = 307;
				this.match(SqlBaseParser.T__1);
				this.state = 308;
				this.selectItem();
				}
				}
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 314;
			this.match(SqlBaseParser.FROM);
			this.state = 315;
			_localctx._from = this.relation();
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.WINDOW) {
				{
				this.state = 316;
				this.match(SqlBaseParser.WINDOW);
				this.state = 317;
				this.windowExpression();
				}
			}

			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.WHERE) {
				{
				this.state = 320;
				this.match(SqlBaseParser.WHERE);
				this.state = 321;
				_localctx._where = this.booleanExpression(0);
				}
			}

			this.state = 327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.GROUP) {
				{
				this.state = 324;
				this.match(SqlBaseParser.GROUP);
				this.state = 325;
				this.match(SqlBaseParser.BY);
				this.state = 326;
				this.groupBy();
				}
			}

			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.HAVING) {
				{
				this.state = 329;
				this.match(SqlBaseParser.HAVING);
				this.state = 330;
				_localctx._having = this.booleanExpression(0);
				}
			}

			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.LIMIT) {
				{
				this.state = 333;
				this.limitClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableElements(): TableElementsContext {
		let _localctx: TableElementsContext = new TableElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SqlBaseParser.RULE_tableElements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.match(SqlBaseParser.T__2);
			this.state = 337;
			this.tableElement();
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SqlBaseParser.T__1) {
				{
				{
				this.state = 338;
				this.match(SqlBaseParser.T__1);
				this.state = 339;
				this.tableElement();
				}
				}
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 345;
			this.match(SqlBaseParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableElement(): TableElementContext {
		let _localctx: TableElementContext = new TableElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SqlBaseParser.RULE_tableElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.identifier();
			this.state = 348;
			this.type(0);
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.KEY) {
				{
				this.state = 349;
				this.match(SqlBaseParser.KEY);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableProperties(): TablePropertiesContext {
		let _localctx: TablePropertiesContext = new TablePropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SqlBaseParser.RULE_tableProperties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.match(SqlBaseParser.T__2);
			this.state = 353;
			this.tableProperty();
			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SqlBaseParser.T__1) {
				{
				{
				this.state = 354;
				this.match(SqlBaseParser.T__1);
				this.state = 355;
				this.tableProperty();
				}
				}
				this.state = 360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 361;
			this.match(SqlBaseParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableProperty(): TablePropertyContext {
		let _localctx: TablePropertyContext = new TablePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SqlBaseParser.RULE_tableProperty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.INTEGER:
			case SqlBaseParser.DATE:
			case SqlBaseParser.TIME:
			case SqlBaseParser.TIMESTAMP:
			case SqlBaseParser.INTERVAL:
			case SqlBaseParser.YEAR:
			case SqlBaseParser.MONTH:
			case SqlBaseParser.DAY:
			case SqlBaseParser.HOUR:
			case SqlBaseParser.MINUTE:
			case SqlBaseParser.SECOND:
			case SqlBaseParser.ZONE:
			case SqlBaseParser.PARTITION:
			case SqlBaseParser.STRUCT:
			case SqlBaseParser.EXPLAIN:
			case SqlBaseParser.ANALYZE:
			case SqlBaseParser.TYPE:
			case SqlBaseParser.TYPES:
			case SqlBaseParser.SHOW:
			case SqlBaseParser.TABLES:
			case SqlBaseParser.COLUMNS:
			case SqlBaseParser.COLUMN:
			case SqlBaseParser.PARTITIONS:
			case SqlBaseParser.FUNCTIONS:
			case SqlBaseParser.FUNCTION:
			case SqlBaseParser.ARRAY:
			case SqlBaseParser.MAP:
			case SqlBaseParser.SET:
			case SqlBaseParser.RESET:
			case SqlBaseParser.SESSION:
			case SqlBaseParser.KEY:
			case SqlBaseParser.SINK:
			case SqlBaseParser.SOURCE:
			case SqlBaseParser.IF:
			case SqlBaseParser.IDENTIFIER:
			case SqlBaseParser.DIGIT_IDENTIFIER:
			case SqlBaseParser.QUOTED_IDENTIFIER:
			case SqlBaseParser.BACKQUOTED_IDENTIFIER:
				{
				this.state = 363;
				this.identifier();
				}
				break;
			case SqlBaseParser.STRING:
				{
				this.state = 364;
				this.match(SqlBaseParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 367;
			this.match(SqlBaseParser.EQ);
			this.state = 368;
			this.literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public printClause(): PrintClauseContext {
		let _localctx: PrintClauseContext = new PrintClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SqlBaseParser.RULE_printClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.FROM) {
				{
				this.state = 370;
				this.match(SqlBaseParser.FROM);
				this.state = 371;
				this.match(SqlBaseParser.BEGINNING);
				}
			}

			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.INTERVAL || _la === SqlBaseParser.SAMPLE) {
				{
				this.state = 374;
				this.intervalClause();
				}
			}

			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.LIMIT) {
				{
				this.state = 377;
				this.limitClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalClause(): IntervalClauseContext {
		let _localctx: IntervalClauseContext = new IntervalClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SqlBaseParser.RULE_intervalClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			_la = this._input.LA(1);
			if (!(_la === SqlBaseParser.INTERVAL || _la === SqlBaseParser.SAMPLE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 381;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limitClause(): LimitClauseContext {
		let _localctx: LimitClauseContext = new LimitClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SqlBaseParser.RULE_limitClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(SqlBaseParser.LIMIT);
			this.state = 384;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowExpression(): WindowExpressionContext {
		let _localctx: WindowExpressionContext = new WindowExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SqlBaseParser.RULE_windowExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.IDENTIFIER) {
				{
				this.state = 386;
				this.match(SqlBaseParser.IDENTIFIER);
				}
			}

			this.state = 392;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.TUMBLING:
				{
				this.state = 389;
				this.tumblingWindowExpression();
				}
				break;
			case SqlBaseParser.HOPPING:
				{
				this.state = 390;
				this.hoppingWindowExpression();
				}
				break;
			case SqlBaseParser.SESSION:
				{
				this.state = 391;
				this.sessionWindowExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tumblingWindowExpression(): TumblingWindowExpressionContext {
		let _localctx: TumblingWindowExpressionContext = new TumblingWindowExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SqlBaseParser.RULE_tumblingWindowExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.match(SqlBaseParser.TUMBLING);
			this.state = 395;
			this.match(SqlBaseParser.T__2);
			this.state = 396;
			this.match(SqlBaseParser.SIZE);
			this.state = 397;
			this.number();
			this.state = 398;
			this.windowUnit();
			this.state = 399;
			this.match(SqlBaseParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hoppingWindowExpression(): HoppingWindowExpressionContext {
		let _localctx: HoppingWindowExpressionContext = new HoppingWindowExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SqlBaseParser.RULE_hoppingWindowExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.match(SqlBaseParser.HOPPING);
			this.state = 402;
			this.match(SqlBaseParser.T__2);
			this.state = 403;
			this.match(SqlBaseParser.SIZE);
			this.state = 404;
			this.number();
			this.state = 405;
			this.windowUnit();
			this.state = 406;
			this.match(SqlBaseParser.T__1);
			this.state = 407;
			this.match(SqlBaseParser.ADVANCE);
			this.state = 408;
			this.match(SqlBaseParser.BY);
			this.state = 409;
			this.number();
			this.state = 410;
			this.windowUnit();
			this.state = 411;
			this.match(SqlBaseParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sessionWindowExpression(): SessionWindowExpressionContext {
		let _localctx: SessionWindowExpressionContext = new SessionWindowExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SqlBaseParser.RULE_sessionWindowExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(SqlBaseParser.SESSION);
			this.state = 414;
			this.match(SqlBaseParser.T__2);
			this.state = 415;
			this.number();
			this.state = 416;
			this.windowUnit();
			this.state = 417;
			this.match(SqlBaseParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowUnit(): WindowUnitContext {
		let _localctx: WindowUnitContext = new WindowUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SqlBaseParser.RULE_windowUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			_la = this._input.LA(1);
			if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SqlBaseParser.DAY - 38)) | (1 << (SqlBaseParser.HOUR - 38)) | (1 << (SqlBaseParser.MINUTE - 38)) | (1 << (SqlBaseParser.SECOND - 38)) | (1 << (SqlBaseParser.MILLISECOND - 38)) | (1 << (SqlBaseParser.DAYS - 38)) | (1 << (SqlBaseParser.HOURS - 38)) | (1 << (SqlBaseParser.MINUTES - 38)) | (1 << (SqlBaseParser.SECONDS - 38)) | (1 << (SqlBaseParser.MILLISECONDS - 38)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupBy(): GroupByContext {
		let _localctx: GroupByContext = new GroupByContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SqlBaseParser.RULE_groupBy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.groupingElement();
			this.state = 426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SqlBaseParser.T__1) {
				{
				{
				this.state = 422;
				this.match(SqlBaseParser.T__1);
				this.state = 423;
				this.groupingElement();
				}
				}
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingElement(): GroupingElementContext {
		let _localctx: GroupingElementContext = new GroupingElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SqlBaseParser.RULE_groupingElement);
		try {
			_localctx = new SingleGroupingSetContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.groupingExpressions();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingExpressions(): GroupingExpressionsContext {
		let _localctx: GroupingExpressionsContext = new GroupingExpressionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SqlBaseParser.RULE_groupingExpressions);
		let _la: number;
		try {
			this.state = 444;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 431;
				this.match(SqlBaseParser.T__2);
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SqlBaseParser.T__2) | (1 << SqlBaseParser.NOT) | (1 << SqlBaseParser.NULL) | (1 << SqlBaseParser.TRUE) | (1 << SqlBaseParser.FALSE) | (1 << SqlBaseParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SqlBaseParser.DATE - 32)) | (1 << (SqlBaseParser.TIME - 32)) | (1 << (SqlBaseParser.TIMESTAMP - 32)) | (1 << (SqlBaseParser.INTERVAL - 32)) | (1 << (SqlBaseParser.YEAR - 32)) | (1 << (SqlBaseParser.MONTH - 32)) | (1 << (SqlBaseParser.DAY - 32)) | (1 << (SqlBaseParser.HOUR - 32)) | (1 << (SqlBaseParser.MINUTE - 32)) | (1 << (SqlBaseParser.SECOND - 32)) | (1 << (SqlBaseParser.ZONE - 32)) | (1 << (SqlBaseParser.CASE - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (SqlBaseParser.PARTITION - 67)) | (1 << (SqlBaseParser.STRUCT - 67)) | (1 << (SqlBaseParser.EXPLAIN - 67)) | (1 << (SqlBaseParser.ANALYZE - 67)) | (1 << (SqlBaseParser.TYPE - 67)) | (1 << (SqlBaseParser.TYPES - 67)) | (1 << (SqlBaseParser.CAST - 67)) | (1 << (SqlBaseParser.SHOW - 67)) | (1 << (SqlBaseParser.TABLES - 67)) | (1 << (SqlBaseParser.COLUMNS - 67)) | (1 << (SqlBaseParser.COLUMN - 67)) | (1 << (SqlBaseParser.PARTITIONS - 67)) | (1 << (SqlBaseParser.FUNCTIONS - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (SqlBaseParser.FUNCTION - 99)) | (1 << (SqlBaseParser.ARRAY - 99)) | (1 << (SqlBaseParser.MAP - 99)) | (1 << (SqlBaseParser.SET - 99)) | (1 << (SqlBaseParser.RESET - 99)) | (1 << (SqlBaseParser.SESSION - 99)) | (1 << (SqlBaseParser.KEY - 99)) | (1 << (SqlBaseParser.SINK - 99)) | (1 << (SqlBaseParser.SOURCE - 99)) | (1 << (SqlBaseParser.IF - 99)) | (1 << (SqlBaseParser.PLUS - 99)) | (1 << (SqlBaseParser.MINUS - 99)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (SqlBaseParser.STRING - 136)) | (1 << (SqlBaseParser.INTEGER_VALUE - 136)) | (1 << (SqlBaseParser.DECIMAL_VALUE - 136)) | (1 << (SqlBaseParser.IDENTIFIER - 136)) | (1 << (SqlBaseParser.DIGIT_IDENTIFIER - 136)) | (1 << (SqlBaseParser.QUOTED_IDENTIFIER - 136)) | (1 << (SqlBaseParser.BACKQUOTED_IDENTIFIER - 136)))) !== 0)) {
					{
					this.state = 432;
					this.expression();
					this.state = 437;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__1) {
						{
						{
						this.state = 433;
						this.match(SqlBaseParser.T__1);
						this.state = 434;
						this.expression();
						}
						}
						this.state = 439;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 442;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 443;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public values(): ValuesContext {
		let _localctx: ValuesContext = new ValuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SqlBaseParser.RULE_values);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.match(SqlBaseParser.T__2);
			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SqlBaseParser.NULL) | (1 << SqlBaseParser.TRUE) | (1 << SqlBaseParser.FALSE))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (SqlBaseParser.STRING - 136)) | (1 << (SqlBaseParser.INTEGER_VALUE - 136)) | (1 << (SqlBaseParser.DECIMAL_VALUE - 136)))) !== 0)) {
				{
				this.state = 447;
				this.literal();
				this.state = 452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__1) {
					{
					{
					this.state = 448;
					this.match(SqlBaseParser.T__1);
					this.state = 449;
					this.literal();
					}
					}
					this.state = 454;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 457;
			this.match(SqlBaseParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectItem(): SelectItemContext {
		let _localctx: SelectItemContext = new SelectItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SqlBaseParser.RULE_selectItem);
		let _la: number;
		try {
			this.state = 471;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				_localctx = new SelectSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 459;
				this.expression();
				this.state = 464;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (SqlBaseParser.AS - 10)) | (1 << (SqlBaseParser.INTEGER - 10)) | (1 << (SqlBaseParser.DATE - 10)) | (1 << (SqlBaseParser.TIME - 10)) | (1 << (SqlBaseParser.TIMESTAMP - 10)) | (1 << (SqlBaseParser.INTERVAL - 10)) | (1 << (SqlBaseParser.YEAR - 10)) | (1 << (SqlBaseParser.MONTH - 10)) | (1 << (SqlBaseParser.DAY - 10)) | (1 << (SqlBaseParser.HOUR - 10)) | (1 << (SqlBaseParser.MINUTE - 10)) | (1 << (SqlBaseParser.SECOND - 10)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (SqlBaseParser.ZONE - 50)) | (1 << (SqlBaseParser.PARTITION - 50)) | (1 << (SqlBaseParser.STRUCT - 50)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (SqlBaseParser.EXPLAIN - 82)) | (1 << (SqlBaseParser.ANALYZE - 82)) | (1 << (SqlBaseParser.TYPE - 82)) | (1 << (SqlBaseParser.TYPES - 82)) | (1 << (SqlBaseParser.SHOW - 82)) | (1 << (SqlBaseParser.TABLES - 82)) | (1 << (SqlBaseParser.COLUMNS - 82)) | (1 << (SqlBaseParser.COLUMN - 82)) | (1 << (SqlBaseParser.PARTITIONS - 82)) | (1 << (SqlBaseParser.FUNCTIONS - 82)) | (1 << (SqlBaseParser.FUNCTION - 82)) | (1 << (SqlBaseParser.ARRAY - 82)) | (1 << (SqlBaseParser.MAP - 82)) | (1 << (SqlBaseParser.SET - 82)) | (1 << (SqlBaseParser.RESET - 82)) | (1 << (SqlBaseParser.SESSION - 82)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (SqlBaseParser.KEY - 117)) | (1 << (SqlBaseParser.SINK - 117)) | (1 << (SqlBaseParser.SOURCE - 117)) | (1 << (SqlBaseParser.IF - 117)) | (1 << (SqlBaseParser.IDENTIFIER - 117)) | (1 << (SqlBaseParser.DIGIT_IDENTIFIER - 117)) | (1 << (SqlBaseParser.QUOTED_IDENTIFIER - 117)) | (1 << (SqlBaseParser.BACKQUOTED_IDENTIFIER - 117)))) !== 0)) {
					{
					this.state = 461;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SqlBaseParser.AS) {
						{
						this.state = 460;
						this.match(SqlBaseParser.AS);
						}
					}

					this.state = 463;
					this.identifier();
					}
				}

				}
				break;

			case 2:
				_localctx = new SelectAllContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 466;
				this.qualifiedName();
				this.state = 467;
				this.match(SqlBaseParser.T__4);
				this.state = 468;
				this.match(SqlBaseParser.ASTERISK);
				}
				break;

			case 3:
				_localctx = new SelectAllContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 470;
				this.match(SqlBaseParser.ASTERISK);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relation(): RelationContext {
		let _localctx: RelationContext = new RelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SqlBaseParser.RULE_relation);
		let _la: number;
		try {
			this.state = 483;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				_localctx = new JoinRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 473;
				(_localctx as JoinRelationContext)._left = this.aliasedRelation();
				this.state = 474;
				this.joinType();
				this.state = 475;
				this.match(SqlBaseParser.JOIN);
				this.state = 476;
				(_localctx as JoinRelationContext)._right = this.aliasedRelation();
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.WITHIN) {
					{
					this.state = 477;
					this.joinWindow();
					}
				}

				this.state = 480;
				this.joinCriteria();
				}
				break;

			case 2:
				_localctx = new RelationDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 482;
				this.aliasedRelation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinType(): JoinTypeContext {
		let _localctx: JoinTypeContext = new JoinTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SqlBaseParser.RULE_joinType);
		let _la: number;
		try {
			this.state = 496;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.JOIN:
			case SqlBaseParser.INNER:
				_localctx = new InnerJoinContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.INNER) {
					{
					this.state = 485;
					this.match(SqlBaseParser.INNER);
					}
				}

				}
				break;
			case SqlBaseParser.FULL:
				_localctx = new OuterJoinContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 488;
				this.match(SqlBaseParser.FULL);
				this.state = 490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.OUTER) {
					{
					this.state = 489;
					this.match(SqlBaseParser.OUTER);
					}
				}

				}
				break;
			case SqlBaseParser.LEFT:
				_localctx = new LeftJoinContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 492;
				this.match(SqlBaseParser.LEFT);
				this.state = 494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.OUTER) {
					{
					this.state = 493;
					this.match(SqlBaseParser.OUTER);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinWindow(): JoinWindowContext {
		let _localctx: JoinWindowContext = new JoinWindowContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SqlBaseParser.RULE_joinWindow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			this.match(SqlBaseParser.WITHIN);
			this.state = 499;
			this.withinExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withinExpression(): WithinExpressionContext {
		let _localctx: WithinExpressionContext = new WithinExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SqlBaseParser.RULE_withinExpression);
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.T__2:
				_localctx = new JoinWindowWithBeforeAndAfterContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 501;
				this.match(SqlBaseParser.T__2);
				this.state = 502;
				this.joinWindowSize();
				this.state = 503;
				this.match(SqlBaseParser.T__1);
				this.state = 504;
				this.joinWindowSize();
				this.state = 505;
				this.match(SqlBaseParser.T__3);
				}
				break;
			case SqlBaseParser.INTEGER_VALUE:
			case SqlBaseParser.DECIMAL_VALUE:
				_localctx = new SingleJoinWindowContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 507;
				this.joinWindowSize();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinWindowSize(): JoinWindowSizeContext {
		let _localctx: JoinWindowSizeContext = new JoinWindowSizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SqlBaseParser.RULE_joinWindowSize);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this.number();
			this.state = 511;
			this.windowUnit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinCriteria(): JoinCriteriaContext {
		let _localctx: JoinCriteriaContext = new JoinCriteriaContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SqlBaseParser.RULE_joinCriteria);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.match(SqlBaseParser.ON);
			this.state = 514;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasedRelation(): AliasedRelationContext {
		let _localctx: AliasedRelationContext = new AliasedRelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SqlBaseParser.RULE_aliasedRelation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this.relationPrimary();
			this.state = 521;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.AS) {
					{
					this.state = 517;
					this.match(SqlBaseParser.AS);
					}
				}

				this.state = 520;
				this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columns(): ColumnsContext {
		let _localctx: ColumnsContext = new ColumnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SqlBaseParser.RULE_columns);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.match(SqlBaseParser.T__2);
			this.state = 524;
			this.identifier();
			this.state = 529;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SqlBaseParser.T__1) {
				{
				{
				this.state = 525;
				this.match(SqlBaseParser.T__1);
				this.state = 526;
				this.identifier();
				}
				}
				this.state = 531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 532;
			this.match(SqlBaseParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationPrimary(): RelationPrimaryContext {
		let _localctx: RelationPrimaryContext = new RelationPrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SqlBaseParser.RULE_relationPrimary);
		try {
			_localctx = new TableNameContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SqlBaseParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public booleanExpression(): BooleanExpressionContext;
	public booleanExpression(_p: number): BooleanExpressionContext;
	// @RuleVersion(0)
	public booleanExpression(_p?: number): BooleanExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, _parentState);
		let _prevctx: BooleanExpressionContext = _localctx;
		let _startState: number = 64;
		this.enterRecursionRule(_localctx, 64, SqlBaseParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.T__2:
			case SqlBaseParser.NULL:
			case SqlBaseParser.TRUE:
			case SqlBaseParser.FALSE:
			case SqlBaseParser.INTEGER:
			case SqlBaseParser.DATE:
			case SqlBaseParser.TIME:
			case SqlBaseParser.TIMESTAMP:
			case SqlBaseParser.INTERVAL:
			case SqlBaseParser.YEAR:
			case SqlBaseParser.MONTH:
			case SqlBaseParser.DAY:
			case SqlBaseParser.HOUR:
			case SqlBaseParser.MINUTE:
			case SqlBaseParser.SECOND:
			case SqlBaseParser.ZONE:
			case SqlBaseParser.CASE:
			case SqlBaseParser.PARTITION:
			case SqlBaseParser.STRUCT:
			case SqlBaseParser.EXPLAIN:
			case SqlBaseParser.ANALYZE:
			case SqlBaseParser.TYPE:
			case SqlBaseParser.TYPES:
			case SqlBaseParser.CAST:
			case SqlBaseParser.SHOW:
			case SqlBaseParser.TABLES:
			case SqlBaseParser.COLUMNS:
			case SqlBaseParser.COLUMN:
			case SqlBaseParser.PARTITIONS:
			case SqlBaseParser.FUNCTIONS:
			case SqlBaseParser.FUNCTION:
			case SqlBaseParser.ARRAY:
			case SqlBaseParser.MAP:
			case SqlBaseParser.SET:
			case SqlBaseParser.RESET:
			case SqlBaseParser.SESSION:
			case SqlBaseParser.KEY:
			case SqlBaseParser.SINK:
			case SqlBaseParser.SOURCE:
			case SqlBaseParser.IF:
			case SqlBaseParser.PLUS:
			case SqlBaseParser.MINUS:
			case SqlBaseParser.STRING:
			case SqlBaseParser.INTEGER_VALUE:
			case SqlBaseParser.DECIMAL_VALUE:
			case SqlBaseParser.IDENTIFIER:
			case SqlBaseParser.DIGIT_IDENTIFIER:
			case SqlBaseParser.QUOTED_IDENTIFIER:
			case SqlBaseParser.BACKQUOTED_IDENTIFIER:
				{
				_localctx = new BooleanDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 539;
				this.predicated();
				}
				break;
			case SqlBaseParser.NOT:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 540;
				this.match(SqlBaseParser.NOT);
				this.state = 541;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 552;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 550;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_booleanExpression);
						this.state = 544;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 545;
						(_localctx as LogicalBinaryContext)._operator = this.match(SqlBaseParser.AND);
						this.state = 546;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_booleanExpression);
						this.state = 547;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 548;
						(_localctx as LogicalBinaryContext)._operator = this.match(SqlBaseParser.OR);
						this.state = 549;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 554;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicated(): PredicatedContext {
		let _localctx: PredicatedContext = new PredicatedContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SqlBaseParser.RULE_predicated);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			_localctx._valueExpression = this.valueExpression(0);
			this.state = 557;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 556;
				this.predicate(_localctx._valueExpression);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicate(value: ParserRuleContext): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state, value);
		this.enterRule(_localctx, 68, SqlBaseParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				_localctx = new ComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 559;
				this.comparisonOperator();
				this.state = 560;
				(_localctx as ComparisonContext)._right = this.valueExpression(0);
				}
				break;

			case 2:
				_localctx = new BetweenContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.NOT) {
					{
					this.state = 562;
					this.match(SqlBaseParser.NOT);
					}
				}

				this.state = 565;
				this.match(SqlBaseParser.BETWEEN);
				this.state = 566;
				(_localctx as BetweenContext)._lower = this.valueExpression(0);
				this.state = 567;
				this.match(SqlBaseParser.AND);
				this.state = 568;
				(_localctx as BetweenContext)._upper = this.valueExpression(0);
				}
				break;

			case 3:
				_localctx = new InListContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.NOT) {
					{
					this.state = 570;
					this.match(SqlBaseParser.NOT);
					}
				}

				this.state = 573;
				this.match(SqlBaseParser.IN);
				this.state = 574;
				this.match(SqlBaseParser.T__2);
				this.state = 575;
				this.expression();
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__1) {
					{
					{
					this.state = 576;
					this.match(SqlBaseParser.T__1);
					this.state = 577;
					this.expression();
					}
					}
					this.state = 582;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 583;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 4:
				_localctx = new LikeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.NOT) {
					{
					this.state = 585;
					this.match(SqlBaseParser.NOT);
					}
				}

				this.state = 588;
				this.match(SqlBaseParser.LIKE);
				this.state = 589;
				(_localctx as LikeContext)._pattern = this.valueExpression(0);
				}
				break;

			case 5:
				_localctx = new NullPredicateContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 590;
				this.match(SqlBaseParser.IS);
				this.state = 592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.NOT) {
					{
					this.state = 591;
					this.match(SqlBaseParser.NOT);
					}
				}

				this.state = 594;
				this.match(SqlBaseParser.NULL);
				}
				break;

			case 6:
				_localctx = new DistinctFromContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 595;
				this.match(SqlBaseParser.IS);
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.NOT) {
					{
					this.state = 596;
					this.match(SqlBaseParser.NOT);
					}
				}

				this.state = 599;
				this.match(SqlBaseParser.DISTINCT);
				this.state = 600;
				this.match(SqlBaseParser.FROM);
				this.state = 601;
				(_localctx as DistinctFromContext)._right = this.valueExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public valueExpression(): ValueExpressionContext;
	public valueExpression(_p: number): ValueExpressionContext;
	// @RuleVersion(0)
	public valueExpression(_p?: number): ValueExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ValueExpressionContext = new ValueExpressionContext(this._ctx, _parentState);
		let _prevctx: ValueExpressionContext = _localctx;
		let _startState: number = 70;
		this.enterRecursionRule(_localctx, 70, SqlBaseParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 608;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.T__2:
			case SqlBaseParser.NULL:
			case SqlBaseParser.TRUE:
			case SqlBaseParser.FALSE:
			case SqlBaseParser.INTEGER:
			case SqlBaseParser.DATE:
			case SqlBaseParser.TIME:
			case SqlBaseParser.TIMESTAMP:
			case SqlBaseParser.INTERVAL:
			case SqlBaseParser.YEAR:
			case SqlBaseParser.MONTH:
			case SqlBaseParser.DAY:
			case SqlBaseParser.HOUR:
			case SqlBaseParser.MINUTE:
			case SqlBaseParser.SECOND:
			case SqlBaseParser.ZONE:
			case SqlBaseParser.CASE:
			case SqlBaseParser.PARTITION:
			case SqlBaseParser.STRUCT:
			case SqlBaseParser.EXPLAIN:
			case SqlBaseParser.ANALYZE:
			case SqlBaseParser.TYPE:
			case SqlBaseParser.TYPES:
			case SqlBaseParser.CAST:
			case SqlBaseParser.SHOW:
			case SqlBaseParser.TABLES:
			case SqlBaseParser.COLUMNS:
			case SqlBaseParser.COLUMN:
			case SqlBaseParser.PARTITIONS:
			case SqlBaseParser.FUNCTIONS:
			case SqlBaseParser.FUNCTION:
			case SqlBaseParser.ARRAY:
			case SqlBaseParser.MAP:
			case SqlBaseParser.SET:
			case SqlBaseParser.RESET:
			case SqlBaseParser.SESSION:
			case SqlBaseParser.KEY:
			case SqlBaseParser.SINK:
			case SqlBaseParser.SOURCE:
			case SqlBaseParser.IF:
			case SqlBaseParser.STRING:
			case SqlBaseParser.INTEGER_VALUE:
			case SqlBaseParser.DECIMAL_VALUE:
			case SqlBaseParser.IDENTIFIER:
			case SqlBaseParser.DIGIT_IDENTIFIER:
			case SqlBaseParser.QUOTED_IDENTIFIER:
			case SqlBaseParser.BACKQUOTED_IDENTIFIER:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 605;
				this.primaryExpression(0);
				}
				break;
			case SqlBaseParser.PLUS:
			case SqlBaseParser.MINUS:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 606;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.PLUS || _la === SqlBaseParser.MINUS)) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 607;
				this.valueExpression(4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 624;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 622;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_valueExpression);
						this.state = 610;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 611;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (SqlBaseParser.ASTERISK - 131)) | (1 << (SqlBaseParser.SLASH - 131)) | (1 << (SqlBaseParser.PERCENT - 131)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 612;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_valueExpression);
						this.state = 613;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 614;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SqlBaseParser.PLUS || _la === SqlBaseParser.MINUS)) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 615;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;

					case 3:
						{
						_localctx = new ConcatenationContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ConcatenationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_valueExpression);
						this.state = 616;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 617;
						this.match(SqlBaseParser.CONCAT);
						this.state = 618;
						(_localctx as ConcatenationContext)._right = this.valueExpression(2);
						}
						break;

					case 4:
						{
						_localctx = new AtTimeZoneContext(new ValueExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_valueExpression);
						this.state = 619;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 620;
						this.match(SqlBaseParser.AT);
						this.state = 621;
						this.timeZoneSpecifier();
						}
						break;
					}
					}
				}
				this.state = 626;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public primaryExpression(): PrimaryExpressionContext;
	public primaryExpression(_p: number): PrimaryExpressionContext;
	// @RuleVersion(0)
	public primaryExpression(_p?: number): PrimaryExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, _parentState);
		let _prevctx: PrimaryExpressionContext = _localctx;
		let _startState: number = 72;
		this.enterRecursionRule(_localctx, 72, SqlBaseParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 705;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 628;
				this.literal();
				}
				break;

			case 2:
				{
				_localctx = new TypeConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 629;
				this.identifier();
				this.state = 630;
				this.match(SqlBaseParser.STRING);
				}
				break;

			case 3:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 632;
				this.qualifiedName();
				this.state = 633;
				this.match(SqlBaseParser.T__2);
				this.state = 634;
				this.match(SqlBaseParser.ASTERISK);
				this.state = 635;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 4:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 637;
				this.qualifiedName();
				this.state = 638;
				this.match(SqlBaseParser.T__2);
				this.state = 647;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SqlBaseParser.T__2) | (1 << SqlBaseParser.NOT) | (1 << SqlBaseParser.NULL) | (1 << SqlBaseParser.TRUE) | (1 << SqlBaseParser.FALSE) | (1 << SqlBaseParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SqlBaseParser.DATE - 32)) | (1 << (SqlBaseParser.TIME - 32)) | (1 << (SqlBaseParser.TIMESTAMP - 32)) | (1 << (SqlBaseParser.INTERVAL - 32)) | (1 << (SqlBaseParser.YEAR - 32)) | (1 << (SqlBaseParser.MONTH - 32)) | (1 << (SqlBaseParser.DAY - 32)) | (1 << (SqlBaseParser.HOUR - 32)) | (1 << (SqlBaseParser.MINUTE - 32)) | (1 << (SqlBaseParser.SECOND - 32)) | (1 << (SqlBaseParser.ZONE - 32)) | (1 << (SqlBaseParser.CASE - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (SqlBaseParser.PARTITION - 67)) | (1 << (SqlBaseParser.STRUCT - 67)) | (1 << (SqlBaseParser.EXPLAIN - 67)) | (1 << (SqlBaseParser.ANALYZE - 67)) | (1 << (SqlBaseParser.TYPE - 67)) | (1 << (SqlBaseParser.TYPES - 67)) | (1 << (SqlBaseParser.CAST - 67)) | (1 << (SqlBaseParser.SHOW - 67)) | (1 << (SqlBaseParser.TABLES - 67)) | (1 << (SqlBaseParser.COLUMNS - 67)) | (1 << (SqlBaseParser.COLUMN - 67)) | (1 << (SqlBaseParser.PARTITIONS - 67)) | (1 << (SqlBaseParser.FUNCTIONS - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (SqlBaseParser.FUNCTION - 99)) | (1 << (SqlBaseParser.ARRAY - 99)) | (1 << (SqlBaseParser.MAP - 99)) | (1 << (SqlBaseParser.SET - 99)) | (1 << (SqlBaseParser.RESET - 99)) | (1 << (SqlBaseParser.SESSION - 99)) | (1 << (SqlBaseParser.KEY - 99)) | (1 << (SqlBaseParser.SINK - 99)) | (1 << (SqlBaseParser.SOURCE - 99)) | (1 << (SqlBaseParser.IF - 99)) | (1 << (SqlBaseParser.PLUS - 99)) | (1 << (SqlBaseParser.MINUS - 99)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (SqlBaseParser.STRING - 136)) | (1 << (SqlBaseParser.INTEGER_VALUE - 136)) | (1 << (SqlBaseParser.DECIMAL_VALUE - 136)) | (1 << (SqlBaseParser.IDENTIFIER - 136)) | (1 << (SqlBaseParser.DIGIT_IDENTIFIER - 136)) | (1 << (SqlBaseParser.QUOTED_IDENTIFIER - 136)) | (1 << (SqlBaseParser.BACKQUOTED_IDENTIFIER - 136)))) !== 0)) {
					{
					this.state = 639;
					this.expression();
					this.state = 644;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__1) {
						{
						{
						this.state = 640;
						this.match(SqlBaseParser.T__1);
						this.state = 641;
						this.expression();
						}
						}
						this.state = 646;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 649;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 5:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 651;
				this.match(SqlBaseParser.CASE);
				this.state = 652;
				this.valueExpression(0);
				this.state = 654;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 653;
					this.whenClause();
					}
					}
					this.state = 656;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SqlBaseParser.WHEN);
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.ELSE) {
					{
					this.state = 658;
					this.match(SqlBaseParser.ELSE);
					this.state = 659;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 662;
				this.match(SqlBaseParser.END);
				}
				break;

			case 6:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 664;
				this.match(SqlBaseParser.CASE);
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 665;
					this.whenClause();
					}
					}
					this.state = 668;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SqlBaseParser.WHEN);
				this.state = 672;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.ELSE) {
					{
					this.state = 670;
					this.match(SqlBaseParser.ELSE);
					this.state = 671;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 674;
				this.match(SqlBaseParser.END);
				}
				break;

			case 7:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 676;
				this.match(SqlBaseParser.CAST);
				this.state = 677;
				this.match(SqlBaseParser.T__2);
				this.state = 678;
				this.expression();
				this.state = 679;
				this.match(SqlBaseParser.AS);
				this.state = 680;
				this.type(0);
				this.state = 681;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 8:
				{
				_localctx = new ArrayConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 683;
				this.match(SqlBaseParser.ARRAY);
				this.state = 684;
				this.match(SqlBaseParser.T__5);
				this.state = 693;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SqlBaseParser.T__2) | (1 << SqlBaseParser.NOT) | (1 << SqlBaseParser.NULL) | (1 << SqlBaseParser.TRUE) | (1 << SqlBaseParser.FALSE) | (1 << SqlBaseParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SqlBaseParser.DATE - 32)) | (1 << (SqlBaseParser.TIME - 32)) | (1 << (SqlBaseParser.TIMESTAMP - 32)) | (1 << (SqlBaseParser.INTERVAL - 32)) | (1 << (SqlBaseParser.YEAR - 32)) | (1 << (SqlBaseParser.MONTH - 32)) | (1 << (SqlBaseParser.DAY - 32)) | (1 << (SqlBaseParser.HOUR - 32)) | (1 << (SqlBaseParser.MINUTE - 32)) | (1 << (SqlBaseParser.SECOND - 32)) | (1 << (SqlBaseParser.ZONE - 32)) | (1 << (SqlBaseParser.CASE - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (SqlBaseParser.PARTITION - 67)) | (1 << (SqlBaseParser.STRUCT - 67)) | (1 << (SqlBaseParser.EXPLAIN - 67)) | (1 << (SqlBaseParser.ANALYZE - 67)) | (1 << (SqlBaseParser.TYPE - 67)) | (1 << (SqlBaseParser.TYPES - 67)) | (1 << (SqlBaseParser.CAST - 67)) | (1 << (SqlBaseParser.SHOW - 67)) | (1 << (SqlBaseParser.TABLES - 67)) | (1 << (SqlBaseParser.COLUMNS - 67)) | (1 << (SqlBaseParser.COLUMN - 67)) | (1 << (SqlBaseParser.PARTITIONS - 67)) | (1 << (SqlBaseParser.FUNCTIONS - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (SqlBaseParser.FUNCTION - 99)) | (1 << (SqlBaseParser.ARRAY - 99)) | (1 << (SqlBaseParser.MAP - 99)) | (1 << (SqlBaseParser.SET - 99)) | (1 << (SqlBaseParser.RESET - 99)) | (1 << (SqlBaseParser.SESSION - 99)) | (1 << (SqlBaseParser.KEY - 99)) | (1 << (SqlBaseParser.SINK - 99)) | (1 << (SqlBaseParser.SOURCE - 99)) | (1 << (SqlBaseParser.IF - 99)) | (1 << (SqlBaseParser.PLUS - 99)) | (1 << (SqlBaseParser.MINUS - 99)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (SqlBaseParser.STRING - 136)) | (1 << (SqlBaseParser.INTEGER_VALUE - 136)) | (1 << (SqlBaseParser.DECIMAL_VALUE - 136)) | (1 << (SqlBaseParser.IDENTIFIER - 136)) | (1 << (SqlBaseParser.DIGIT_IDENTIFIER - 136)) | (1 << (SqlBaseParser.QUOTED_IDENTIFIER - 136)) | (1 << (SqlBaseParser.BACKQUOTED_IDENTIFIER - 136)))) !== 0)) {
					{
					this.state = 685;
					this.expression();
					this.state = 690;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__1) {
						{
						{
						this.state = 686;
						this.match(SqlBaseParser.T__1);
						this.state = 687;
						this.expression();
						}
						}
						this.state = 692;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 695;
				this.match(SqlBaseParser.T__6);
				}
				break;

			case 9:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 696;
				this.identifier();
				}
				break;

			case 10:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 697;
				this.identifier();
				this.state = 698;
				this.match(SqlBaseParser.T__4);
				this.state = 699;
				this.identifier();
				}
				break;

			case 11:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 701;
				this.match(SqlBaseParser.T__2);
				this.state = 702;
				this.expression();
				this.state = 703;
				this.match(SqlBaseParser.T__3);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 717;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 715;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
					case 1:
						{
						_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_primaryExpression);
						this.state = 707;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 708;
						this.match(SqlBaseParser.T__5);
						this.state = 709;
						(_localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 710;
						this.match(SqlBaseParser.T__6);
						}
						break;

					case 2:
						{
						_localctx = new DereferenceContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as DereferenceContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_primaryExpression);
						this.state = 712;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 713;
						this.match(SqlBaseParser.STRUCT_FIELD_REF);
						this.state = 714;
						(_localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 719;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeZoneSpecifier(): TimeZoneSpecifierContext {
		let _localctx: TimeZoneSpecifierContext = new TimeZoneSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SqlBaseParser.RULE_timeZoneSpecifier);
		try {
			_localctx = new TimeZoneStringContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
			this.match(SqlBaseParser.TIME);
			this.state = 721;
			this.match(SqlBaseParser.ZONE);
			this.state = 722;
			this.match(SqlBaseParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SqlBaseParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			_la = this._input.LA(1);
			if (!(((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (SqlBaseParser.EQ - 123)) | (1 << (SqlBaseParser.NEQ - 123)) | (1 << (SqlBaseParser.LT - 123)) | (1 << (SqlBaseParser.LTE - 123)) | (1 << (SqlBaseParser.GT - 123)) | (1 << (SqlBaseParser.GTE - 123)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanValue(): BooleanValueContext {
		let _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SqlBaseParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			_la = this._input.LA(1);
			if (!(_la === SqlBaseParser.TRUE || _la === SqlBaseParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 80;
		this.enterRecursionRule(_localctx, 80, SqlBaseParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 729;
				this.match(SqlBaseParser.ARRAY);
				this.state = 730;
				this.match(SqlBaseParser.LT);
				this.state = 731;
				this.type(0);
				this.state = 732;
				this.match(SqlBaseParser.GT);
				}
				break;

			case 2:
				{
				this.state = 734;
				this.match(SqlBaseParser.MAP);
				this.state = 735;
				this.match(SqlBaseParser.LT);
				this.state = 736;
				this.type(0);
				this.state = 737;
				this.match(SqlBaseParser.T__1);
				this.state = 738;
				this.type(0);
				this.state = 739;
				this.match(SqlBaseParser.GT);
				}
				break;

			case 3:
				{
				this.state = 741;
				this.match(SqlBaseParser.STRUCT);
				this.state = 742;
				this.match(SqlBaseParser.LT);
				this.state = 743;
				this.identifier();
				this.state = 744;
				this.type(0);
				this.state = 751;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__1) {
					{
					{
					this.state = 745;
					this.match(SqlBaseParser.T__1);
					this.state = 746;
					this.identifier();
					this.state = 747;
					this.type(0);
					}
					}
					this.state = 753;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 754;
				this.match(SqlBaseParser.GT);
				}
				break;

			case 4:
				{
				this.state = 756;
				this.match(SqlBaseParser.DECIMAL);
				this.state = 757;
				this.match(SqlBaseParser.T__2);
				this.state = 758;
				this.number();
				this.state = 759;
				this.match(SqlBaseParser.T__1);
				this.state = 760;
				this.number();
				this.state = 761;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 5:
				{
				this.state = 763;
				this.baseType();
				this.state = 775;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 764;
					this.match(SqlBaseParser.T__2);
					this.state = 765;
					this.typeParameter();
					this.state = 770;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__1) {
						{
						{
						this.state = 766;
						this.match(SqlBaseParser.T__1);
						this.state = 767;
						this.typeParameter();
						}
						}
						this.state = 772;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 773;
					this.match(SqlBaseParser.T__3);
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 783;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_type);
					this.state = 779;
					if (!(this.precpred(this._ctx, 6))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
					}
					this.state = 780;
					this.match(SqlBaseParser.ARRAY);
					}
					}
				}
				this.state = 785;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SqlBaseParser.RULE_typeParameter);
		try {
			this.state = 788;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.INTEGER_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 786;
				this.match(SqlBaseParser.INTEGER_VALUE);
				}
				break;
			case SqlBaseParser.INTEGER:
			case SqlBaseParser.DATE:
			case SqlBaseParser.TIME:
			case SqlBaseParser.TIMESTAMP:
			case SqlBaseParser.INTERVAL:
			case SqlBaseParser.YEAR:
			case SqlBaseParser.MONTH:
			case SqlBaseParser.DAY:
			case SqlBaseParser.HOUR:
			case SqlBaseParser.MINUTE:
			case SqlBaseParser.SECOND:
			case SqlBaseParser.ZONE:
			case SqlBaseParser.PARTITION:
			case SqlBaseParser.STRUCT:
			case SqlBaseParser.EXPLAIN:
			case SqlBaseParser.ANALYZE:
			case SqlBaseParser.TYPE:
			case SqlBaseParser.TYPES:
			case SqlBaseParser.SHOW:
			case SqlBaseParser.TABLES:
			case SqlBaseParser.COLUMNS:
			case SqlBaseParser.COLUMN:
			case SqlBaseParser.PARTITIONS:
			case SqlBaseParser.FUNCTIONS:
			case SqlBaseParser.FUNCTION:
			case SqlBaseParser.ARRAY:
			case SqlBaseParser.MAP:
			case SqlBaseParser.SET:
			case SqlBaseParser.RESET:
			case SqlBaseParser.SESSION:
			case SqlBaseParser.DECIMAL:
			case SqlBaseParser.KEY:
			case SqlBaseParser.SINK:
			case SqlBaseParser.SOURCE:
			case SqlBaseParser.IF:
			case SqlBaseParser.IDENTIFIER:
			case SqlBaseParser.DIGIT_IDENTIFIER:
			case SqlBaseParser.QUOTED_IDENTIFIER:
			case SqlBaseParser.BACKQUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 787;
				this.type(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseType(): BaseTypeContext {
		let _localctx: BaseTypeContext = new BaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SqlBaseParser.RULE_baseType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenClause(): WhenClauseContext {
		let _localctx: WhenClauseContext = new WhenClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SqlBaseParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 792;
			this.match(SqlBaseParser.WHEN);
			this.state = 793;
			_localctx._condition = this.expression();
			this.state = 794;
			this.match(SqlBaseParser.THEN);
			this.state = 795;
			_localctx._result = this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SqlBaseParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this.identifier();
			this.state = 802;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 798;
					this.match(SqlBaseParser.T__4);
					this.state = 799;
					this.identifier();
					}
					}
				}
				this.state = 804;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SqlBaseParser.RULE_identifier);
		try {
			this.state = 810;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.IDENTIFIER:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 805;
				this.match(SqlBaseParser.IDENTIFIER);
				}
				break;
			case SqlBaseParser.QUOTED_IDENTIFIER:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 806;
				this.match(SqlBaseParser.QUOTED_IDENTIFIER);
				}
				break;
			case SqlBaseParser.INTEGER:
			case SqlBaseParser.DATE:
			case SqlBaseParser.TIME:
			case SqlBaseParser.TIMESTAMP:
			case SqlBaseParser.INTERVAL:
			case SqlBaseParser.YEAR:
			case SqlBaseParser.MONTH:
			case SqlBaseParser.DAY:
			case SqlBaseParser.HOUR:
			case SqlBaseParser.MINUTE:
			case SqlBaseParser.SECOND:
			case SqlBaseParser.ZONE:
			case SqlBaseParser.PARTITION:
			case SqlBaseParser.STRUCT:
			case SqlBaseParser.EXPLAIN:
			case SqlBaseParser.ANALYZE:
			case SqlBaseParser.TYPE:
			case SqlBaseParser.TYPES:
			case SqlBaseParser.SHOW:
			case SqlBaseParser.TABLES:
			case SqlBaseParser.COLUMNS:
			case SqlBaseParser.COLUMN:
			case SqlBaseParser.PARTITIONS:
			case SqlBaseParser.FUNCTIONS:
			case SqlBaseParser.FUNCTION:
			case SqlBaseParser.ARRAY:
			case SqlBaseParser.MAP:
			case SqlBaseParser.SET:
			case SqlBaseParser.RESET:
			case SqlBaseParser.SESSION:
			case SqlBaseParser.KEY:
			case SqlBaseParser.SINK:
			case SqlBaseParser.SOURCE:
			case SqlBaseParser.IF:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 807;
				this.nonReserved();
				}
				break;
			case SqlBaseParser.BACKQUOTED_IDENTIFIER:
				_localctx = new BackQuotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 808;
				this.match(SqlBaseParser.BACKQUOTED_IDENTIFIER);
				}
				break;
			case SqlBaseParser.DIGIT_IDENTIFIER:
				_localctx = new DigitIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 809;
				this.match(SqlBaseParser.DIGIT_IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SqlBaseParser.RULE_number);
		try {
			this.state = 814;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.DECIMAL_VALUE:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 812;
				this.match(SqlBaseParser.DECIMAL_VALUE);
				}
				break;
			case SqlBaseParser.INTEGER_VALUE:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 813;
				this.match(SqlBaseParser.INTEGER_VALUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SqlBaseParser.RULE_literal);
		try {
			this.state = 820;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.NULL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 816;
				this.match(SqlBaseParser.NULL);
				}
				break;
			case SqlBaseParser.INTEGER_VALUE:
			case SqlBaseParser.DECIMAL_VALUE:
				_localctx = new NumericLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 817;
				this.number();
				}
				break;
			case SqlBaseParser.TRUE:
			case SqlBaseParser.FALSE:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 818;
				this.booleanValue();
				}
				break;
			case SqlBaseParser.STRING:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 819;
				this.match(SqlBaseParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonReserved(): NonReservedContext {
		let _localctx: NonReservedContext = new NonReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SqlBaseParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
			_la = this._input.LA(1);
			if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (SqlBaseParser.INTEGER - 31)) | (1 << (SqlBaseParser.DATE - 31)) | (1 << (SqlBaseParser.TIME - 31)) | (1 << (SqlBaseParser.TIMESTAMP - 31)) | (1 << (SqlBaseParser.INTERVAL - 31)) | (1 << (SqlBaseParser.YEAR - 31)) | (1 << (SqlBaseParser.MONTH - 31)) | (1 << (SqlBaseParser.DAY - 31)) | (1 << (SqlBaseParser.HOUR - 31)) | (1 << (SqlBaseParser.MINUTE - 31)) | (1 << (SqlBaseParser.SECOND - 31)) | (1 << (SqlBaseParser.ZONE - 31)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (SqlBaseParser.PARTITION - 67)) | (1 << (SqlBaseParser.STRUCT - 67)) | (1 << (SqlBaseParser.EXPLAIN - 67)) | (1 << (SqlBaseParser.ANALYZE - 67)) | (1 << (SqlBaseParser.TYPE - 67)) | (1 << (SqlBaseParser.TYPES - 67)) | (1 << (SqlBaseParser.SHOW - 67)) | (1 << (SqlBaseParser.TABLES - 67)) | (1 << (SqlBaseParser.COLUMNS - 67)) | (1 << (SqlBaseParser.COLUMN - 67)) | (1 << (SqlBaseParser.PARTITIONS - 67)) | (1 << (SqlBaseParser.FUNCTIONS - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (SqlBaseParser.FUNCTION - 99)) | (1 << (SqlBaseParser.ARRAY - 99)) | (1 << (SqlBaseParser.MAP - 99)) | (1 << (SqlBaseParser.SET - 99)) | (1 << (SqlBaseParser.RESET - 99)) | (1 << (SqlBaseParser.SESSION - 99)) | (1 << (SqlBaseParser.KEY - 99)) | (1 << (SqlBaseParser.SINK - 99)) | (1 << (SqlBaseParser.SOURCE - 99)) | (1 << (SqlBaseParser.IF - 99)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 32:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 35:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 36:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);

		case 40:
			return this.type_sempred(_localctx as TypeContext, predIndex);
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private valueExpression_sempred(_localctx: ValueExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 3);

		case 3:
			return this.precpred(this._ctx, 2);

		case 4:
			return this.precpred(this._ctx, 1);

		case 5:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private primaryExpression_sempred(_localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 5);

		case 7:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x97\u033B\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x03\x02\x07" +
		"\x02f\n\x02\f\x02\x0E\x02i\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x05\x05y\n\x05\x03\x05\x03\x05\x03\x05\x05\x05~\n\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05\x83\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x89" +
		"\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x90\n\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x05\x05\x9C\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xA2\n\x05\x03" +
		"\x05\x03\x05\x05\x05\xA6\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xB4\n" +
		"\x05\x03\x05\x03\x05\x05\x05\xB8\n\x05\x03\x05\x03\x05\x05\x05\xBC\n\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xC3\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05\xC8\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x05\x05\xCF\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xD6" +
		"\n\x05\x03\x05\x03\x05\x05\x05\xDA\n\x05\x03\x05\x03\x05\x05\x05\xDE\n" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xE5\n\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\xEA\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05\xFD\n\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05\u0103\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05\u010C\n\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0111" +
		"\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0117\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05\u011C\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05\u0124\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0132\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0138\n\x06\f\x06\x0E\x06\u013B" +
		"\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0141\n\x06\x03\x06\x03" +
		"\x06\x05\x06\u0145\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\u014A\n\x06\x03" +
		"\x06\x03\x06\x05\x06\u014E\n\x06\x03\x06\x05\x06\u0151\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x07\x07\u0157\n\x07\f\x07\x0E\x07\u015A\v\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x05\b\u0161\n\b\x03\t\x03\t\x03\t\x03\t" +
		"\x07\t\u0167\n\t\f\t\x0E\t\u016A\v\t\x03\t\x03\t\x03\n\x03\n\x05\n\u0170" +
		"\n\n\x03\n\x03\n\x03\n\x03\v\x03\v\x05\v\u0177\n\v\x03\v\x05\v\u017A\n" +
		"\v\x03\v\x05\v\u017D\n\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x05" +
		"\x0E\u0186\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u018B\n\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x03\x13\x07\x13\u01AB\n\x13\f\x13\x0E\x13\u01AE\v\x13\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u01B6\n\x15\f\x15\x0E\x15" +
		"\u01B9\v\x15\x05\x15\u01BB\n\x15\x03\x15\x03\x15\x05\x15\u01BF\n\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x07\x16\u01C5\n\x16\f\x16\x0E\x16\u01C8\v" +
		"\x16\x05\x16\u01CA\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17\u01D0" +
		"\n\x17\x03\x17\x05\x17\u01D3\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x05\x17\u01DA\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18" +
		"\u01E1\n\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01E6\n\x18\x03\x19\x05\x19" +
		"\u01E9\n\x19\x03\x19\x03\x19\x05\x19\u01ED\n\x19\x03\x19\x03\x19\x05\x19" +
		"\u01F1\n\x19\x05\x19\u01F3\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01FF\n\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x05\x1E\u0209\n\x1E" +
		"\x03\x1E\x05\x1E\u020C\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0212" +
		"\n\x1F\f\x1F\x0E\x1F\u0215\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03" +
		"\"\x03\"\x03\"\x03\"\x05\"\u0221\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x07\"\u0229\n\"\f\"\x0E\"\u022C\v\"\x03#\x03#\x05#\u0230\n#\x03$\x03" +
		"$\x03$\x03$\x05$\u0236\n$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u023E\n$" +
		"\x03$\x03$\x03$\x03$\x03$\x07$\u0245\n$\f$\x0E$\u0248\v$\x03$\x03$\x03" +
		"$\x05$\u024D\n$\x03$\x03$\x03$\x03$\x05$\u0253\n$\x03$\x03$\x03$\x05$" +
		"\u0258\n$\x03$\x03$\x03$\x05$\u025D\n$\x03%\x03%\x03%\x03%\x05%\u0263" +
		"\n%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x07%\u0271" +
		"\n%\f%\x0E%\u0274\v%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x07&\u0285\n&\f&\x0E&\u0288\v&\x05&\u028A\n" +
		"&\x03&\x03&\x03&\x03&\x03&\x06&\u0291\n&\r&\x0E&\u0292\x03&\x03&\x05&" +
		"\u0297\n&\x03&\x03&\x03&\x03&\x06&\u029D\n&\r&\x0E&\u029E\x03&\x03&\x05" +
		"&\u02A3\n&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x07&\u02B3\n&\f&\x0E&\u02B6\v&\x05&\u02B8\n&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u02C4\n&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x07&\u02CE\n&\f&\x0E&\u02D1\v&\x03\'\x03\'\x03\'" +
		"\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x07*\u02F0" +
		"\n*\f*\x0E*\u02F3\v*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x07*\u0303\n*\f*\x0E*\u0306\v*\x03*\x03*\x05*\u030A" +
		"\n*\x05*\u030C\n*\x03*\x03*\x07*\u0310\n*\f*\x0E*\u0313\v*\x03+\x03+\x05" +
		"+\u0317\n+\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x07.\u0323" +
		"\n.\f.\x0E.\u0326\v.\x03/\x03/\x03/\x03/\x03/\x05/\u032D\n/\x030\x030" +
		"\x050\u0331\n0\x031\x031\x031\x031\x051\u0337\n1\x032\x032\x032\x02\x02" +
		"\x06BHJR3\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02\x02\v\x03\x02YZ\x03\x02z{\x04\x02%%nn\x04\x02(,/3\x03" +
		"\x02\x83\x84\x03\x02\x85\x87\x03\x02}\x82\x03\x02\x1F \f\x02!+44EFTWY" +
		"Y[[aeimwwz|\x02\u03A0\x02g\x03\x02\x02\x02\x04l\x03\x02\x02\x02\x06o\x03" +
		"\x02\x02\x02\b\u0131\x03\x02\x02\x02\n\u0133\x03\x02\x02\x02\f\u0152\x03" +
		"\x02\x02\x02\x0E\u015D\x03\x02\x02\x02\x10\u0162\x03\x02\x02\x02\x12\u016F" +
		"\x03\x02\x02\x02\x14\u0176\x03\x02\x02\x02\x16\u017E\x03\x02\x02\x02\x18" +
		"\u0181\x03\x02\x02\x02\x1A\u0185\x03\x02\x02\x02\x1C\u018C\x03\x02\x02" +
		"\x02\x1E\u0193\x03\x02\x02\x02 \u019F\x03\x02\x02\x02\"\u01A5\x03\x02" +
		"\x02\x02$\u01A7\x03\x02\x02\x02&\u01AF\x03\x02\x02\x02(\u01BE\x03\x02" +
		"\x02\x02*\u01C0\x03\x02\x02\x02,\u01D9\x03\x02\x02\x02.\u01E5\x03\x02" +
		"\x02\x020\u01F2\x03\x02\x02\x022\u01F4\x03\x02\x02\x024\u01FE\x03\x02" +
		"\x02\x026\u0200\x03\x02\x02\x028\u0203\x03\x02\x02\x02:\u0206\x03\x02" +
		"\x02\x02<\u020D\x03\x02\x02\x02>\u0218\x03\x02\x02\x02@\u021A\x03\x02" +
		"\x02\x02B\u0220\x03\x02\x02\x02D\u022D\x03\x02\x02\x02F\u025C\x03\x02" +
		"\x02\x02H\u0262\x03\x02\x02\x02J\u02C3\x03\x02\x02\x02L\u02D2\x03\x02" +
		"\x02\x02N\u02D6\x03\x02\x02\x02P\u02D8\x03\x02\x02\x02R\u030B\x03\x02" +
		"\x02\x02T\u0316\x03\x02\x02\x02V\u0318\x03\x02\x02\x02X\u031A\x03\x02" +
		"\x02\x02Z\u031F\x03\x02\x02\x02\\\u032C\x03\x02\x02\x02^\u0330\x03\x02" +
		"\x02\x02`\u0336\x03\x02\x02\x02b\u0338\x03\x02\x02\x02df\x05\x04\x03\x02" +
		"ed\x03\x02\x02\x02fi\x03\x02\x02\x02ge\x03\x02\x02\x02gh\x03\x02\x02\x02" +
		"hj\x03\x02\x02\x02ig\x03\x02\x02\x02jk\x07\x02\x02\x03k\x03\x03\x02\x02" +
		"\x02lm\x05\b\x05\x02mn\x07\x03\x02\x02n\x05\x03\x02\x02\x02op\x05@!\x02" +
		"pq\x07\x02\x02\x03q\x07\x03\x02\x02\x02r\u0132\x05\n\x06\x02st\t\x02\x02" +
		"\x02t\u0132\x07q\x02\x02uv\t\x02\x02\x02vx\x07\\\x02\x02wy\x07R\x02\x02" +
		"xw\x03\x02\x02\x02xy\x03\x02\x02\x02y\u0132\x03\x02\x02\x02z{\t\x02\x02" +
		"\x02{}\x07M\x02\x02|~\x07R\x02\x02}|\x03\x02\x02\x02}~\x03\x02\x02\x02" +
		"~\u0132\x03\x02\x02\x02\x7F\x80\t\x02\x02\x02\x80\x82\x07[\x02\x02\x81" +
		"\x83\x07R\x02\x02\x82\x81\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83" +
		"\u0132\x03\x02\x02\x02\x84\x85\t\x02\x02\x02\x85\u0132\x07d\x02\x02\x86" +
		"\x88\t\x02\x02\x02\x87\x89\t\x03\x02\x02\x88\x87\x03\x02\x02\x02\x88\x89" +
		"\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\u0132\x07y\x02\x02\x8B\x8C" +
		"\t\x02\x02\x02\x8C\u0132\x07W\x02\x02\x8D\x8F\x07Q\x02\x02\x8E\x90\x07" +
		"R\x02\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x03" +
		"\x02\x02\x02\x91\u0132\x05Z.\x02\x92\x93\x07Q\x02\x02\x93\x94\x07e\x02" +
		"\x02\x94\u0132\x05Z.\x02\x95\x96\x07Q\x02\x02\x96\x97\x07x\x02\x02\x97" +
		"\u0132\x05\\/\x02\x98\x9B\x07S\x02\x02\x99\x9C\x05Z.\x02\x9A\x9C\x07\x8A" +
		"\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02" +
		"\x02\x02\x9D\u0132\x05\x14\v\x02\x9E\x9F\t\x02\x02\x02\x9F\xA1\x07^\x02" +
		"\x02\xA0\xA2\x07R\x02\x02\xA1\xA0\x03\x02\x02\x02\xA1\xA2\x03\x02\x02" +
		"\x02\xA2\u0132\x03\x02\x02\x02\xA3\xA5\x07_\x02\x02\xA4\xA6\x07]\x02\x02" +
		"\xA5\xA4\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02" +
		"\xA7\u0132\x05Z.\x02\xA8\xA9\x07k\x02\x02\xA9\xAA\x07\x8A\x02\x02\xAA" +
		"\xAB\x07}\x02\x02\xAB\u0132\x07\x8A\x02\x02\xAC\xAD\x07s\x02\x02\xAD\u0132" +
		"\x07\x8A\x02\x02\xAE\xAF\x07I\x02\x02\xAF\xB3\x07L\x02\x02\xB0\xB1\x07" +
		"|\x02\x02\xB1\xB2\x07\x19\x02\x02\xB2\xB4\x07\x1A\x02\x02\xB3\xB0\x03" +
		"\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x05" +
		"Z.\x02\xB6\xB8\x05\f\x07\x02\xB7\xB6\x03\x02\x02\x02\xB7\xB8\x03\x02\x02" +
		"\x02\xB8\xBB\x03\x02\x02\x02\xB9\xBA\x07G\x02\x02\xBA\xBC\x05\x10\t\x02" +
		"\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\u0132\x03\x02\x02" +
		"\x02\xBD\xBE\x07I\x02\x02\xBE\xC2\x07L\x02\x02\xBF\xC0\x07|\x02\x02\xC0" +
		"\xC1\x07\x19\x02\x02\xC1\xC3\x07\x1A\x02\x02\xC2\xBF\x03\x02\x02\x02\xC2" +
		"\xC3\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC7\x05Z.\x02\xC5\xC6" +
		"\x07G\x02\x02\xC6\xC8\x05\x10\t\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03" +
		"\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x07\f\x02\x02\xCA\xCE\x05" +
		"\n\x06\x02\xCB\xCC\x07E\x02\x02\xCC\xCD\x07\x12\x02\x02\xCD\xCF\x05\\" +
		"/\x02\xCE\xCB\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\u0132\x03\x02" +
		"\x02\x02\xD0\xD1\x07I\x02\x02\xD1\xD5\x07J\x02\x02\xD2\xD3\x07|\x02\x02" +
		"\xD3\xD4\x07\x19\x02\x02\xD4\xD6\x07\x1A\x02\x02\xD5\xD2\x03\x02\x02\x02" +
		"\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD9\x05Z.\x02\xD8" +
		"\xDA\x05\f\x07\x02\xD9\xD8\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA" +
		"\xDD\x03\x02\x02\x02\xDB\xDC\x07G\x02\x02\xDC\xDE\x05\x10\t\x02\xDD\xDB" +
		"\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\u0132\x03\x02\x02\x02\xDF" +
		"\xE0\x07I\x02\x02\xE0\xE4\x07J\x02\x02\xE1\xE2\x07|\x02\x02\xE2\xE3\x07" +
		"\x19\x02\x02\xE3\xE5\x07\x1A\x02\x02\xE4\xE1\x03\x02\x02\x02\xE4\xE5\x03" +
		"\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE9\x05Z.\x02\xE7\xE8\x07G\x02" +
		"\x02\xE8\xEA\x05\x10\t\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02" +
		"\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEC\x07\f\x02\x02\xEC\xED\x05\n\x06\x02" +
		"\xED\u0132\x03\x02\x02\x02\xEE\xEF\x07I\x02\x02\xEF\xF0\t\x03\x02\x02" +
		"\xF0\xF1\x07x\x02\x02\xF1\xF2\x05\\/\x02\xF2\xF3\x07G\x02\x02\xF3\xF4" +
		"\x05\x10\t\x02\xF4\u0132\x03\x02\x02\x02\xF5\xF6\x07N\x02\x02\xF6\xF7" +
		"\x07P\x02\x02\xF7\xF8\x05Z.\x02\xF8\xFC\x05\n\x06\x02\xF9\xFA\x07E\x02" +
		"\x02\xFA\xFB\x07\x12\x02\x02\xFB\xFD\x05\\/\x02\xFC\xF9\x03\x02\x02\x02" +
		"\xFC\xFD\x03\x02\x02\x02\xFD\u0132\x03\x02\x02\x02\xFE\xFF\x07N\x02\x02" +
		"\xFF\u0100\x07P\x02\x02\u0100\u0102\x05Z.\x02\u0101\u0103\x05<\x1F\x02" +
		"\u0102\u0101\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x03" +
		"\x02\x02\x02\u0104\u0105\x07H\x02\x02\u0105\u0106\x05*\x16\x02\u0106\u0132" +
		"\x03\x02\x02\x02\u0107\u0108\x07f\x02\x02\u0108\u010B\x07L\x02\x02\u0109" +
		"\u010A\x07|\x02\x02\u010A\u010C\x07\x1A\x02\x02\u010B\u0109\x03\x02\x02" +
		"\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u0110" +
		"\x05Z.\x02\u010E\u010F\x07O\x02\x02\u010F\u0111\x07K\x02\x02\u0110\u010E" +
		"\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0132\x03\x02\x02\x02" +
		"\u0112\u0113\x07f\x02\x02\u0113\u0116\x07J\x02\x02\u0114\u0115\x07|\x02" +
		"\x02\u0115\u0117\x07\x1A\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117" +
		"\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u011B\x05Z.\x02\u0119" +
		"\u011A\x07O\x02\x02\u011A\u011C\x07K\x02\x02\u011B\u0119\x03\x02\x02\x02" +
		"\u011B\u011C\x03\x02\x02\x02\u011C\u0132\x03\x02\x02\x02\u011D\u011E\x07" +
		"f\x02\x02\u011E\u011F\x07x\x02\x02\u011F\u0132\x05\\/\x02\u0120\u0123" +
		"\x07T\x02\x02\u0121\u0124\x05\b\x05\x02\u0122\u0124\x05Z.\x02\u0123\u0121" +
		"\x03\x02\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124\u0132\x03\x02\x02\x02" +
		"\u0125\u0126\x07t\x02\x02\u0126\u0127\x07u\x02\x02\u0127\u0132\x07\x8A" +
		"\x02\x02\u0128\u0129\x07I\x02\x02\u0129\u012A\x07V\x02\x02\u012A\u012B" +
		"\x05\\/\x02\u012B\u012C\x07\f\x02\x02\u012C\u012D\x05R*\x02\u012D\u0132" +
		"\x03\x02\x02\x02\u012E\u012F\x07f\x02\x02\u012F\u0130\x07V\x02\x02\u0130" +
		"\u0132\x05\\/\x02\u0131r\x03\x02\x02\x02\u0131s\x03\x02\x02\x02\u0131" +
		"u\x03\x02\x02\x02\u0131z\x03\x02\x02\x02\u0131\x7F\x03\x02\x02\x02\u0131" +
		"\x84\x03\x02\x02\x02\u0131\x86\x03\x02\x02\x02\u0131\x8B\x03\x02\x02\x02" +
		"\u0131\x8D\x03\x02\x02\x02\u0131\x92\x03\x02\x02\x02\u0131\x95\x03\x02" +
		"\x02\x02\u0131\x98\x03\x02\x02\x02\u0131\x9E\x03\x02\x02\x02\u0131\xA3" +
		"\x03\x02\x02\x02\u0131\xA8\x03\x02\x02\x02\u0131\xAC\x03\x02\x02\x02\u0131" +
		"\xAE\x03\x02\x02\x02\u0131\xBD\x03\x02\x02\x02\u0131\xD0\x03\x02\x02\x02" +
		"\u0131\xDF\x03\x02\x02\x02\u0131\xEE\x03\x02\x02\x02\u0131\xF5\x03\x02" +
		"\x02\x02\u0131\xFE\x03\x02\x02\x02\u0131\u0107\x03\x02\x02\x02\u0131\u0112" +
		"\x03\x02\x02\x02\u0131\u011D\x03\x02\x02\x02\u0131\u0120\x03\x02\x02\x02" +
		"\u0131\u0125\x03\x02\x02\x02\u0131\u0128\x03\x02\x02\x02\u0131\u012E\x03" +
		"\x02\x02\x02\u0132\t\x03\x02\x02\x02\u0133\u0134\x07\n\x02\x02\u0134\u0139" +
		"\x05,\x17\x02\u0135\u0136\x07\x04\x02\x02\u0136\u0138\x05,\x17\x02\u0137" +
		"\u0135\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02" +
		"\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013C\x03\x02\x02\x02\u013B" +
		"\u0139\x03\x02\x02\x02\u013C\u013D\x07\v\x02\x02\u013D\u0140\x05.\x18" +
		"\x02\u013E\u013F\x07\x10\x02\x02\u013F\u0141\x05\x1A\x0E\x02\u0140\u013E" +
		"\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02" +
		"\u0142\u0143\x07\x0E\x02\x02\u0143\u0145\x05B\"\x02\u0144\u0142\x03\x02" +
		"\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0149\x03\x02\x02\x02\u0146" +
		"\u0147\x07\x11\x02\x02\u0147\u0148\x07\x12\x02\x02\u0148\u014A\x05$\x13" +
		"\x02\u0149\u0146\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014D" +
		"\x03\x02\x02\x02\u014B\u014C\x07\x13\x02\x02\u014C\u014E\x05B\"\x02\u014D" +
		"\u014B\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u0150\x03\x02" +
		"\x02\x02\u014F\u0151\x05\x18\r\x02\u0150\u014F\x03\x02\x02\x02\u0150\u0151" +
		"\x03\x02\x02\x02\u0151\v\x03\x02\x02\x02\u0152\u0153\x07\x05\x02\x02\u0153" +
		"\u0158\x05\x0E\b\x02\u0154\u0155\x07\x04\x02\x02\u0155\u0157\x05\x0E\b" +
		"\x02\u0156\u0154\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158\u0156" +
		"\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015B\x03\x02\x02\x02" +
		"\u015A\u0158\x03\x02\x02\x02\u015B\u015C\x07\x06\x02\x02\u015C\r\x03\x02" +
		"\x02\x02\u015D\u015E\x05\\/\x02\u015E\u0160\x05R*\x02\u015F\u0161\x07" +
		"w\x02\x02\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161" +
		"\x0F\x03\x02\x02\x02\u0162\u0163\x07\x05\x02\x02\u0163\u0168\x05\x12\n" +
		"\x02\u0164\u0165\x07\x04\x02\x02\u0165\u0167\x05\x12\n\x02\u0166\u0164" +
		"\x03\x02\x02\x02\u0167\u016A\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02" +
		"\u0168\u0169\x03\x02\x02\x02\u0169\u016B\x03\x02\x02\x02\u016A\u0168\x03" +
		"\x02\x02\x02\u016B\u016C\x07\x06\x02\x02\u016C\x11\x03\x02\x02\x02\u016D" +
		"\u0170\x05\\/\x02\u016E\u0170\x07\x8A\x02\x02\u016F\u016D\x03\x02\x02" +
		"\x02\u016F\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172" +
		"\x07}\x02\x02\u0172\u0173\x05`1\x02\u0173\x13\x03\x02\x02\x02\u0174\u0175" +
		"\x07\v\x02\x02\u0175\u0177\x07r\x02\x02\u0176\u0174\x03\x02\x02\x02\u0176" +
		"\u0177\x03\x02\x02\x02\u0177\u0179\x03\x02\x02\x02\u0178\u017A\x05\x16" +
		"\f\x02\u0179\u0178\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017C" +
		"\x03\x02\x02\x02\u017B\u017D\x05\x18\r\x02\u017C\u017B\x03\x02\x02\x02" +
		"\u017C\u017D\x03\x02\x02\x02\u017D\x15\x03\x02\x02\x02\u017E\u017F\t\x04" +
		"\x02\x02\u017F\u0180\x05^0\x02\u0180\x17\x03\x02\x02\x02\u0181\u0182\x07" +
		"\x14\x02\x02\u0182\u0183\x05^0\x02\u0183\x19\x03\x02\x02\x02\u0184\u0186" +
		"\x07\x8D\x02\x02\u0185\u0184\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02" +
		"\u0186\u018A\x03\x02\x02\x02\u0187\u018B\x05\x1C\x0F\x02\u0188\u018B\x05" +
		"\x1E\x10\x02\u0189\u018B\x05 \x11\x02\u018A\u0187\x03\x02\x02\x02\u018A" +
		"\u0188\x03\x02\x02\x02\u018A\u0189\x03\x02\x02\x02\u018B\x1B\x03\x02\x02" +
		"\x02\u018C\u018D\x075\x02\x02\u018D\u018E\x07\x05\x02\x02\u018E\u018F" +
		"\x077\x02\x02\u018F\u0190\x05^0\x02\u0190\u0191\x05\"\x12\x02\u0191\u0192" +
		"\x07\x06\x02\x02\u0192\x1D\x03\x02\x02\x02\u0193\u0194\x076\x02\x02\u0194" +
		"\u0195\x07\x05\x02\x02\u0195\u0196\x077\x02\x02\u0196\u0197\x05^0\x02" +
		"\u0197\u0198\x05\"\x12\x02\u0198\u0199\x07\x04\x02\x02\u0199\u019A\x07" +
		"8\x02\x02\u019A\u019B\x07\x12\x02\x02\u019B\u019C\x05^0\x02\u019C\u019D" +
		"\x05\"\x12\x02\u019D\u019E\x07\x06\x02\x02\u019E\x1F\x03\x02\x02\x02\u019F" +
		"\u01A0\x07m\x02\x02\u01A0\u01A1\x07\x05\x02\x02\u01A1\u01A2\x05^0\x02" +
		"\u01A2\u01A3\x05\"\x12\x02\u01A3\u01A4\x07\x06\x02\x02\u01A4!\x03\x02" +
		"\x02\x02\u01A5\u01A6\t\x05\x02\x02\u01A6#\x03\x02\x02\x02\u01A7\u01AC" +
		"\x05&\x14\x02\u01A8\u01A9\x07\x04\x02\x02\u01A9\u01AB\x05&\x14\x02\u01AA" +
		"\u01A8\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03\x02" +
		"\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD%\x03\x02\x02\x02\u01AE\u01AC" +
		"\x03\x02\x02\x02\u01AF\u01B0\x05(\x15\x02\u01B0\'\x03\x02\x02\x02\u01B1" +
		"\u01BA\x07\x05\x02\x02\u01B2\u01B7\x05@!\x02\u01B3\u01B4\x07\x04\x02\x02" +
		"\u01B4\u01B6\x05@!\x02\u01B5\u01B3\x03\x02\x02\x02\u01B6\u01B9\x03\x02" +
		"\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8" +
		"\u01BB\x03\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01BA\u01B2\x03\x02" +
		"\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC" +
		"\u01BF\x07\x06\x02\x02\u01BD\u01BF\x05@!\x02\u01BE\u01B1\x03\x02\x02\x02" +
		"\u01BE\u01BD\x03\x02\x02\x02\u01BF)\x03\x02\x02\x02\u01C0\u01C9\x07\x05" +
		"\x02\x02\u01C1\u01C6\x05`1\x02\u01C2\u01C3\x07\x04\x02\x02\u01C3\u01C5" +
		"\x05`1\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01C8\x03\x02\x02\x02\u01C6" +
		"\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01CA\x03\x02" +
		"\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C9\u01C1\x03\x02\x02\x02\u01C9" +
		"\u01CA\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CC\x07\x06" +
		"\x02\x02\u01CC+\x03\x02\x02\x02\u01CD\u01D2\x05@!\x02\u01CE\u01D0\x07" +
		"\f\x02\x02\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0" +
		"\u01D1\x03\x02\x02\x02\u01D1\u01D3\x05\\/\x02\u01D2\u01CF\x03\x02\x02" +
		"\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01DA\x03\x02\x02\x02\u01D4\u01D5" +
		"\x05Z.\x02\u01D5\u01D6\x07\x07\x02\x02\u01D6\u01D7\x07\x85\x02\x02\u01D7" +
		"\u01DA\x03\x02\x02\x02\u01D8\u01DA\x07\x85\x02\x02\u01D9\u01CD\x03\x02" +
		"\x02\x02\u01D9\u01D4\x03\x02\x02\x02\u01D9\u01D8\x03\x02\x02\x02\u01DA" +
		"-\x03\x02\x02\x02\u01DB\u01DC\x05:\x1E\x02\u01DC\u01DD\x050\x19\x02\u01DD" +
		"\u01DE\x07>\x02\x02\u01DE\u01E0";
	private static readonly _serializedATNSegment1: string =
		"\x05:\x1E\x02\u01DF\u01E1\x052\x1A\x02\u01E0\u01DF\x03\x02\x02\x02\u01E0" +
		"\u01E1\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x058\x1D" +
		"\x02\u01E3\u01E6\x03\x02\x02\x02\u01E4\u01E6\x05:\x1E\x02\u01E5\u01DB" +
		"\x03\x02\x02\x02\u01E5\u01E4\x03\x02\x02\x02\u01E6/\x03\x02\x02\x02\u01E7" +
		"\u01E9\x07A\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02" +
		"\x02\u01E9\u01F3\x03\x02\x02\x02\u01EA\u01EC\x07?\x02\x02\u01EB\u01ED" +
		"\x07@\x02\x02\u01EC\u01EB\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02" +
		"\u01ED\u01F3\x03\x02\x02\x02\u01EE\u01F0\x07B\x02\x02\u01EF\u01F1\x07" +
		"@\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1" +
		"\u01F3\x03\x02\x02\x02\u01F2\u01E8\x03\x02\x02\x02\u01F2\u01EA\x03\x02" +
		"\x02\x02\u01F2\u01EE\x03\x02\x02\x02\u01F31\x03\x02\x02\x02\u01F4\u01F5" +
		"\x07\x0F\x02\x02\u01F5\u01F6\x054\x1B\x02\u01F63\x03\x02\x02\x02\u01F7" +
		"\u01F8\x07\x05\x02\x02\u01F8\u01F9\x056\x1C\x02\u01F9\u01FA\x07\x04\x02" +
		"\x02\u01FA\u01FB\x056\x1C\x02\u01FB\u01FC\x07\x06\x02\x02\u01FC\u01FF" +
		"\x03\x02\x02\x02\u01FD\u01FF\x056\x1C\x02\u01FE\u01F7\x03\x02\x02\x02" +
		"\u01FE\u01FD\x03\x02\x02\x02\u01FF5\x03\x02\x02\x02\u0200\u0201\x05^0" +
		"\x02\u0201\u0202\x05\"\x12\x02\u02027\x03\x02\x02\x02\u0203\u0204\x07" +
		"D\x02\x02\u0204\u0205\x05B\"\x02\u02059\x03\x02\x02\x02\u0206\u020B\x05" +
		"> \x02\u0207\u0209\x07\f\x02\x02\u0208\u0207\x03\x02\x02\x02\u0208\u0209" +
		"\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020C\x05\\/\x02\u020B" +
		"\u0208\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C;\x03\x02\x02" +
		"\x02\u020D\u020E\x07\x05\x02\x02\u020E\u0213\x05\\/\x02\u020F\u0210\x07" +
		"\x04\x02\x02\u0210\u0212\x05\\/\x02\u0211\u020F\x03\x02\x02\x02\u0212" +
		"\u0215\x03\x02\x02\x02\u0213\u0211\x03\x02\x02\x02\u0213\u0214\x03\x02" +
		"\x02\x02\u0214\u0216\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02\u0216" +
		"\u0217\x07\x06\x02\x02\u0217=\x03\x02\x02\x02\u0218\u0219\x05Z.\x02\u0219" +
		"?\x03\x02\x02\x02\u021A\u021B\x05B\"\x02\u021BA\x03\x02\x02\x02\u021C" +
		"\u021D\b\"\x01\x02\u021D\u0221\x05D#\x02\u021E\u021F\x07\x19\x02\x02\u021F" +
		"\u0221\x05B\"\x05\u0220\u021C\x03\x02\x02\x02\u0220\u021E\x03\x02\x02" +
		"\x02\u0221\u022A\x03\x02\x02\x02\u0222\u0223\f\x04\x02\x02\u0223\u0224" +
		"\x07\x17\x02\x02\u0224\u0229\x05B\"\x05\u0225\u0226\f\x03\x02\x02\u0226" +
		"\u0227\x07\x16\x02\x02\u0227\u0229\x05B\"\x04\u0228\u0222\x03\x02\x02" +
		"\x02\u0228\u0225\x03\x02\x02\x02\u0229\u022C\x03\x02\x02\x02\u022A\u0228" +
		"\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022BC\x03\x02\x02\x02\u022C" +
		"\u022A\x03\x02\x02\x02\u022D\u022F\x05H%\x02\u022E\u0230\x05F$\x02\u022F" +
		"\u022E\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230E\x03\x02\x02" +
		"\x02\u0231\u0232\x05N(\x02\u0232\u0233\x05H%\x02\u0233\u025D\x03\x02\x02" +
		"\x02\u0234\u0236\x07\x19\x02\x02\u0235\u0234\x03\x02\x02\x02\u0235\u0236" +
		"\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0238\x07\x1B\x02\x02" +
		"\u0238\u0239\x05H%\x02\u0239\u023A\x07\x17\x02\x02\u023A\u023B\x05H%\x02" +
		"\u023B\u025D\x03\x02\x02\x02\u023C\u023E\x07\x19\x02\x02\u023D\u023C\x03" +
		"\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F" +
		"\u0240\x07\x18\x02\x02\u0240\u0241\x07\x05\x02\x02\u0241\u0246\x05@!\x02" +
		"\u0242\u0243\x07\x04\x02\x02\u0243\u0245\x05@!\x02\u0244\u0242\x03\x02" +
		"\x02\x02\u0245\u0248\x03\x02\x02\x02\u0246\u0244\x03\x02\x02\x02\u0246" +
		"\u0247\x03\x02\x02\x02\u0247\u0249\x03\x02\x02\x02\u0248\u0246\x03\x02" +
		"\x02\x02\u0249\u024A\x07\x06\x02\x02\u024A\u025D\x03\x02\x02\x02\u024B" +
		"\u024D\x07\x19\x02\x02\u024C\u024B\x03\x02\x02\x02\u024C\u024D\x03\x02" +
		"\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E\u024F\x07\x1C\x02\x02\u024F" +
		"\u025D\x05H%\x02\u0250\u0252\x07\x1D\x02\x02\u0251\u0253\x07\x19\x02\x02" +
		"\u0252\u0251\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0254\x03" +
		"\x02\x02\x02\u0254\u025D\x07\x1E\x02\x02\u0255\u0257\x07\x1D\x02\x02\u0256" +
		"\u0258\x07\x19\x02\x02\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03\x02" +
		"\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025A\x07\r\x02\x02\u025A\u025B" +
		"\x07\v\x02\x02\u025B\u025D\x05H%\x02\u025C\u0231\x03\x02\x02\x02\u025C" +
		"\u0235\x03\x02\x02\x02\u025C\u023D\x03\x02\x02\x02\u025C\u024C\x03\x02" +
		"\x02\x02\u025C\u0250\x03\x02\x02\x02\u025C\u0255\x03\x02\x02\x02\u025D" +
		"G\x03\x02\x02\x02\u025E\u025F\b%\x01\x02\u025F\u0263\x05J&\x02\u0260\u0261" +
		"\t\x06\x02\x02\u0261\u0263\x05H%\x06\u0262\u025E\x03\x02\x02\x02\u0262" +
		"\u0260\x03\x02\x02\x02\u0263\u0272\x03\x02\x02\x02\u0264\u0265\f\x05\x02" +
		"\x02\u0265\u0266\t\x07\x02\x02\u0266\u0271\x05H%\x06\u0267\u0268\f\x04" +
		"\x02\x02\u0268\u0269\t\x06\x02\x02\u0269\u0271\x05H%\x05\u026A\u026B\f" +
		"\x03\x02\x02\u026B\u026C\x07\x88\x02\x02\u026C\u0271\x05H%\x04\u026D\u026E" +
		"\f\x07\x02\x02\u026E\u026F\x07\x15\x02\x02\u026F\u0271\x05L\'\x02\u0270" +
		"\u0264\x03\x02\x02\x02\u0270\u0267\x03\x02\x02\x02\u0270\u026A\x03\x02" +
		"\x02\x02\u0270\u026D\x03\x02\x02\x02\u0271\u0274\x03\x02\x02\x02\u0272" +
		"\u0270\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273I\x03\x02\x02" +
		"\x02\u0274\u0272\x03\x02\x02\x02\u0275\u0276\b&\x01\x02\u0276\u02C4\x05" +
		"`1\x02\u0277\u0278\x05\\/\x02\u0278\u0279\x07\x8A\x02\x02\u0279\u02C4" +
		"\x03\x02\x02\x02\u027A\u027B\x05Z.\x02\u027B\u027C\x07\x05\x02\x02\u027C" +
		"\u027D\x07\x85\x02\x02\u027D\u027E\x07\x06\x02\x02\u027E\u02C4\x03\x02" +
		"\x02\x02\u027F\u0280\x05Z.\x02\u0280\u0289\x07\x05\x02\x02\u0281\u0286" +
		"\x05@!\x02\u0282\u0283\x07\x04\x02\x02\u0283\u0285\x05@!\x02\u0284\u0282" +
		"\x03\x02\x02\x02\u0285\u0288\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02" +
		"\u0286\u0287\x03\x02\x02\x02\u0287\u028A\x03\x02\x02\x02\u0288\u0286\x03" +
		"\x02\x02\x02\u0289\u0281\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A" +
		"\u028B\x03\x02\x02\x02\u028B\u028C\x07\x06\x02\x02\u028C\u02C4\x03\x02" +
		"\x02\x02\u028D\u028E\x079\x02\x02\u028E\u0290\x05H%\x02\u028F\u0291\x05" +
		"X-\x02\u0290\u028F\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0290" +
		"\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0296\x03\x02\x02\x02" +
		"\u0294\u0295\x07<\x02\x02\u0295\u0297\x05@!\x02\u0296\u0294\x03\x02\x02" +
		"\x02\u0296\u0297\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u0299" +
		"\x07=\x02\x02\u0299\u02C4\x03\x02\x02\x02\u029A\u029C\x079\x02\x02\u029B" +
		"\u029D\x05X-\x02\u029C\u029B\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02" +
		"\u029E\u029C\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A2\x03" +
		"\x02\x02\x02\u02A0\u02A1\x07<\x02\x02\u02A1\u02A3\x05@!\x02\u02A2\u02A0" +
		"\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02" +
		"\u02A4\u02A5\x07=\x02\x02\u02A5\u02C4\x03\x02\x02\x02\u02A6\u02A7\x07" +
		"X\x02\x02\u02A7\u02A8\x07\x05\x02\x02\u02A8\u02A9\x05@!\x02\u02A9\u02AA" +
		"\x07\f\x02\x02\u02AA\u02AB\x05R*\x02\u02AB\u02AC\x07\x06\x02\x02\u02AC" +
		"\u02C4\x03\x02\x02\x02\u02AD\u02AE\x07i\x02\x02\u02AE\u02B7\x07\b\x02" +
		"\x02\u02AF\u02B4\x05@!\x02\u02B0\u02B1\x07\x04\x02\x02\u02B1\u02B3\x05" +
		"@!\x02\u02B2\u02B0\x03\x02\x02\x02\u02B3\u02B6\x03\x02\x02\x02\u02B4\u02B2" +
		"\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B8\x03\x02\x02\x02" +
		"\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02AF\x03\x02\x02\x02\u02B7\u02B8\x03" +
		"\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02C4\x07\t\x02\x02\u02BA" +
		"\u02C4\x05\\/\x02\u02BB\u02BC\x05\\/\x02\u02BC\u02BD\x07\x07\x02\x02\u02BD" +
		"\u02BE\x05\\/\x02\u02BE\u02C4\x03\x02\x02\x02\u02BF\u02C0\x07\x05\x02" +
		"\x02\u02C0\u02C1\x05@!\x02\u02C1\u02C2\x07\x06\x02\x02\u02C2\u02C4\x03" +
		"\x02\x02\x02\u02C3\u0275\x03\x02\x02\x02\u02C3\u0277\x03\x02\x02\x02\u02C3" +
		"\u027A\x03\x02\x02\x02\u02C3\u027F\x03\x02\x02\x02\u02C3\u028D\x03\x02" +
		"\x02\x02\u02C3\u029A\x03\x02\x02\x02\u02C3\u02A6\x03\x02\x02\x02\u02C3" +
		"\u02AD\x03\x02\x02\x02\u02C3\u02BA\x03\x02\x02\x02\u02C3\u02BB\x03\x02" +
		"\x02\x02\u02C3\u02BF\x03\x02\x02\x02\u02C4\u02CF\x03\x02\x02\x02\u02C5" +
		"\u02C6\f\x07\x02\x02\u02C6\u02C7\x07\b\x02\x02\u02C7\u02C8\x05H%\x02\u02C8" +
		"\u02C9\x07\t\x02\x02\u02C9\u02CE\x03\x02\x02\x02\u02CA\u02CB\f\x04\x02" +
		"\x02\u02CB\u02CC\x07\x89\x02\x02\u02CC\u02CE\x05\\/\x02\u02CD\u02C5\x03" +
		"\x02\x02\x02\u02CD\u02CA\x03\x02\x02\x02\u02CE\u02D1\x03\x02\x02\x02\u02CF" +
		"\u02CD\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0K\x03\x02\x02" +
		"\x02\u02D1\u02CF\x03\x02\x02\x02\u02D2\u02D3\x07#\x02\x02\u02D3\u02D4" +
		"\x074\x02\x02\u02D4\u02D5\x07\x8A\x02\x02\u02D5M\x03\x02\x02\x02\u02D6" +
		"\u02D7\t\b\x02\x02\u02D7O\x03\x02\x02\x02\u02D8\u02D9\t\t\x02\x02\u02D9" +
		"Q\x03\x02\x02\x02\u02DA\u02DB\b*\x01\x02\u02DB\u02DC\x07i\x02\x02\u02DC" +
		"\u02DD\x07\x7F\x02\x02\u02DD\u02DE\x05R*\x02\u02DE\u02DF\x07\x81\x02\x02" +
		"\u02DF\u030C\x03\x02\x02\x02\u02E0\u02E1\x07j\x02\x02\u02E1\u02E2\x07" +
		"\x7F\x02\x02\u02E2\u02E3\x05R*\x02\u02E3\u02E4\x07\x04\x02\x02\u02E4\u02E5" +
		"\x05R*\x02\u02E5\u02E6\x07\x81\x02\x02\u02E6\u030C\x03\x02\x02\x02\u02E7" +
		"\u02E8\x07F\x02\x02\u02E8\u02E9\x07\x7F\x02\x02\u02E9\u02EA\x05\\/\x02" +
		"\u02EA\u02F1\x05R*\x02\u02EB\u02EC\x07\x04\x02\x02\u02EC\u02ED\x05\\/" +
		"\x02\u02ED\u02EE\x05R*\x02\u02EE\u02F0\x03\x02\x02\x02\u02EF\u02EB\x03" +
		"\x02\x02\x02\u02F0\u02F3\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02\u02F1" +
		"\u02F2\x03\x02\x02\x02\u02F2\u02F4\x03\x02\x02\x02\u02F3\u02F1\x03\x02" +
		"\x02\x02\u02F4\u02F5\x07\x81\x02\x02\u02F5\u030C\x03\x02\x02\x02\u02F6" +
		"\u02F7\x07v\x02\x02\u02F7\u02F8\x07\x05\x02\x02\u02F8\u02F9\x05^0\x02" +
		"\u02F9\u02FA\x07\x04\x02\x02\u02FA\u02FB\x05^0\x02\u02FB\u02FC\x07\x06" +
		"\x02\x02\u02FC\u030C\x03\x02\x02\x02\u02FD\u0309\x05V,\x02\u02FE\u02FF" +
		"\x07\x05\x02\x02\u02FF\u0304\x05T+\x02\u0300\u0301\x07\x04\x02\x02\u0301" +
		"\u0303\x05T+\x02\u0302\u0300\x03\x02\x02\x02\u0303\u0306\x03\x02\x02\x02" +
		"\u0304\u0302\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0307\x03" +
		"\x02\x02\x02\u0306\u0304\x03\x02\x02\x02\u0307\u0308\x07\x06\x02\x02\u0308" +
		"\u030A\x03\x02\x02\x02\u0309\u02FE\x03\x02\x02\x02\u0309\u030A\x03\x02" +
		"\x02\x02\u030A\u030C\x03\x02\x02\x02\u030B\u02DA\x03\x02\x02\x02\u030B" +
		"\u02E0\x03\x02\x02\x02\u030B\u02E7\x03\x02\x02\x02\u030B\u02F6\x03\x02" +
		"\x02\x02\u030B\u02FD\x03\x02\x02\x02\u030C\u0311\x03\x02\x02\x02\u030D" +
		"\u030E\f\b\x02\x02\u030E\u0310\x07i\x02\x02\u030F\u030D\x03\x02\x02\x02" +
		"\u0310\u0313\x03\x02\x02\x02\u0311\u030F\x03\x02\x02\x02\u0311\u0312\x03" +
		"\x02\x02\x02\u0312S\x03\x02\x02\x02\u0313\u0311\x03\x02\x02\x02\u0314" +
		"\u0317\x07\x8B\x02\x02\u0315\u0317\x05R*\x02\u0316\u0314\x03\x02\x02\x02" +
		"\u0316\u0315\x03\x02\x02\x02\u0317U\x03\x02\x02\x02\u0318\u0319\x05\\" +
		"/\x02\u0319W\x03\x02\x02\x02\u031A\u031B\x07:\x02\x02\u031B\u031C\x05" +
		"@!\x02\u031C\u031D\x07;\x02\x02\u031D\u031E\x05@!\x02\u031EY\x03\x02\x02" +
		"\x02\u031F\u0324\x05\\/\x02\u0320\u0321\x07\x07\x02\x02\u0321\u0323\x05" +
		"\\/\x02\u0322\u0320\x03\x02\x02\x02\u0323\u0326\x03\x02\x02\x02\u0324" +
		"\u0322\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325[\x03\x02\x02" +
		"\x02\u0326\u0324\x03\x02\x02\x02\u0327\u032D\x07\x8D\x02\x02\u0328\u032D" +
		"\x07\x8F\x02\x02\u0329\u032D\x05b2\x02\u032A\u032D\x07\x90\x02\x02\u032B" +
		"\u032D\x07\x8E\x02\x02\u032C\u0327\x03\x02\x02\x02\u032C\u0328\x03\x02" +
		"\x02\x02\u032C\u0329\x03\x02\x02\x02\u032C\u032A\x03\x02\x02\x02\u032C" +
		"\u032B\x03\x02\x02\x02\u032D]\x03\x02\x02\x02\u032E\u0331\x07\x8C\x02" +
		"\x02\u032F\u0331\x07\x8B\x02\x02\u0330\u032E\x03\x02\x02\x02\u0330\u032F" +
		"\x03\x02\x02\x02\u0331_\x03\x02\x02\x02\u0332\u0337\x07\x1E\x02\x02\u0333" +
		"\u0337\x05^0\x02\u0334\u0337\x05P)\x02\u0335\u0337\x07\x8A\x02\x02\u0336" +
		"\u0332\x03\x02\x02\x02\u0336\u0333\x03\x02\x02\x02\u0336\u0334\x03\x02" +
		"\x02\x02\u0336\u0335\x03\x02\x02\x02\u0337a\x03\x02\x02\x02\u0338\u0339" +
		"\t\n\x02\x02\u0339c\x03\x02\x02\x02cgx}\x82\x88\x8F\x9B\xA1\xA5\xB3\xB7" +
		"\xBB\xC2\xC7\xCE\xD5\xD9\xDD\xE4\xE9\xFC\u0102\u010B\u0110\u0116\u011B" +
		"\u0123\u0131\u0139\u0140\u0144\u0149\u014D\u0150\u0158\u0160\u0168\u016F" +
		"\u0176\u0179\u017C\u0185\u018A\u01AC\u01B7\u01BA\u01BE\u01C6\u01C9\u01CF" +
		"\u01D2\u01D9\u01E0\u01E5\u01E8\u01EC\u01F0\u01F2\u01FE\u0208\u020B\u0213" +
		"\u0220\u0228\u022A\u022F\u0235\u023D\u0246\u024C\u0252\u0257\u025C\u0262" +
		"\u0270\u0272\u0286\u0289\u0292\u0296\u029E\u02A2\u02B4\u02B7\u02C3\u02CD" +
		"\u02CF\u02F1\u0304\u0309\u030B\u0311\u0316\u0324\u032C\u0330\u0336";
	public static readonly _serializedATN: string = Utils.join(
		[
			SqlBaseParser._serializedATNSegment0,
			SqlBaseParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SqlBaseParser.__ATN) {
			SqlBaseParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SqlBaseParser._serializedATN));
		}

		return SqlBaseParser.__ATN;
	}

}

export class StatementsContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(SqlBaseParser.EOF, 0); }
	public singleStatement(): SingleStatementContext[];
	public singleStatement(i: number): SingleStatementContext;
	public singleStatement(i?: number): SingleStatementContext | SingleStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleStatementContext);
		} else {
			return this.getRuleContext(i, SingleStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_statements; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterStatements) {
			listener.enterStatements(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitStatements) {
			listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_singleStatement; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSingleStatement) {
			listener.enterSingleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSingleStatement) {
			listener.exitSingleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSingleStatement) {
			return visitor.visitSingleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(SqlBaseParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_singleExpression; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSingleExpression) {
			listener.enterSingleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSingleExpression) {
			listener.exitSingleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSingleExpression) {
			return visitor.visitSingleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class QueryStatementContext extends StatementContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterQueryStatement) {
			listener.enterQueryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitQueryStatement) {
			listener.exitQueryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitQueryStatement) {
			return visitor.visitQueryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListPropertiesContext extends StatementContext {
	public PROPERTIES(): TerminalNode { return this.getToken(SqlBaseParser.PROPERTIES, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LIST, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SHOW, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterListProperties) {
			listener.enterListProperties(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitListProperties) {
			listener.exitListProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitListProperties) {
			return visitor.visitListProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListTopicsContext extends StatementContext {
	public TOPICS(): TerminalNode { return this.getToken(SqlBaseParser.TOPICS, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LIST, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SHOW, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXTENDED, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterListTopics) {
			listener.enterListTopics(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitListTopics) {
			listener.exitListTopics(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitListTopics) {
			return visitor.visitListTopics(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListStreamsContext extends StatementContext {
	public STREAMS(): TerminalNode { return this.getToken(SqlBaseParser.STREAMS, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LIST, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SHOW, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXTENDED, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterListStreams) {
			listener.enterListStreams(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitListStreams) {
			listener.exitListStreams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitListStreams) {
			return visitor.visitListStreams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListTablesContext extends StatementContext {
	public TABLES(): TerminalNode { return this.getToken(SqlBaseParser.TABLES, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LIST, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SHOW, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXTENDED, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterListTables) {
			listener.enterListTables(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitListTables) {
			listener.exitListTables(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitListTables) {
			return visitor.visitListTables(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListFunctionsContext extends StatementContext {
	public FUNCTIONS(): TerminalNode { return this.getToken(SqlBaseParser.FUNCTIONS, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LIST, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SHOW, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterListFunctions) {
			listener.enterListFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitListFunctions) {
			listener.exitListFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitListFunctions) {
			return visitor.visitListFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListConnectorsContext extends StatementContext {
	public CONNECTORS(): TerminalNode { return this.getToken(SqlBaseParser.CONNECTORS, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LIST, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SHOW, 0); }
	public SOURCE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SOURCE, 0); }
	public SINK(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SINK, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterListConnectors) {
			listener.enterListConnectors(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitListConnectors) {
			listener.exitListConnectors(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitListConnectors) {
			return visitor.visitListConnectors(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListTypesContext extends StatementContext {
	public TYPES(): TerminalNode { return this.getToken(SqlBaseParser.TYPES, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LIST, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SHOW, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterListTypes) {
			listener.enterListTypes(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitListTypes) {
			listener.exitListTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitListTypes) {
			return visitor.visitListTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowColumnsContext extends StatementContext {
	public DESCRIBE(): TerminalNode { return this.getToken(SqlBaseParser.DESCRIBE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXTENDED, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterShowColumns) {
			listener.enterShowColumns(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitShowColumns) {
			listener.exitShowColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitShowColumns) {
			return visitor.visitShowColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeFunctionContext extends StatementContext {
	public DESCRIBE(): TerminalNode { return this.getToken(SqlBaseParser.DESCRIBE, 0); }
	public FUNCTION(): TerminalNode { return this.getToken(SqlBaseParser.FUNCTION, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDescribeFunction) {
			listener.enterDescribeFunction(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDescribeFunction) {
			listener.exitDescribeFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDescribeFunction) {
			return visitor.visitDescribeFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeConnectorContext extends StatementContext {
	public DESCRIBE(): TerminalNode { return this.getToken(SqlBaseParser.DESCRIBE, 0); }
	public CONNECTOR(): TerminalNode { return this.getToken(SqlBaseParser.CONNECTOR, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDescribeConnector) {
			listener.enterDescribeConnector(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDescribeConnector) {
			listener.exitDescribeConnector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDescribeConnector) {
			return visitor.visitDescribeConnector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrintTopicContext extends StatementContext {
	public PRINT(): TerminalNode { return this.getToken(SqlBaseParser.PRINT, 0); }
	public printClause(): PrintClauseContext {
		return this.getRuleContext(0, PrintClauseContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.STRING, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterPrintTopic) {
			listener.enterPrintTopic(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitPrintTopic) {
			listener.exitPrintTopic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitPrintTopic) {
			return visitor.visitPrintTopic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListQueriesContext extends StatementContext {
	public QUERIES(): TerminalNode { return this.getToken(SqlBaseParser.QUERIES, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LIST, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SHOW, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXTENDED, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterListQueries) {
			listener.enterListQueries(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitListQueries) {
			listener.exitListQueries(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitListQueries) {
			return visitor.visitListQueries(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TerminateQueryContext extends StatementContext {
	public TERMINATE(): TerminalNode { return this.getToken(SqlBaseParser.TERMINATE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public QUERY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.QUERY, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTerminateQuery) {
			listener.enterTerminateQuery(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTerminateQuery) {
			listener.exitTerminateQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTerminateQuery) {
			return visitor.visitTerminateQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetPropertyContext extends StatementContext {
	public SET(): TerminalNode { return this.getToken(SqlBaseParser.SET, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SqlBaseParser.STRING);
		} else {
			return this.getToken(SqlBaseParser.STRING, i);
		}
	}
	public EQ(): TerminalNode { return this.getToken(SqlBaseParser.EQ, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSetProperty) {
			listener.enterSetProperty(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSetProperty) {
			listener.exitSetProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSetProperty) {
			return visitor.visitSetProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnsetPropertyContext extends StatementContext {
	public UNSET(): TerminalNode { return this.getToken(SqlBaseParser.UNSET, 0); }
	public STRING(): TerminalNode { return this.getToken(SqlBaseParser.STRING, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterUnsetProperty) {
			listener.enterUnsetProperty(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitUnsetProperty) {
			listener.exitUnsetProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitUnsetProperty) {
			return visitor.visitUnsetProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateStreamContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(SqlBaseParser.CREATE, 0); }
	public STREAM(): TerminalNode { return this.getToken(SqlBaseParser.STREAM, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXISTS, 0); }
	public tableElements(): TableElementsContext | undefined {
		return this.tryGetRuleContext(0, TableElementsContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WITH, 0); }
	public tableProperties(): TablePropertiesContext | undefined {
		return this.tryGetRuleContext(0, TablePropertiesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCreateStream) {
			listener.enterCreateStream(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCreateStream) {
			listener.exitCreateStream(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCreateStream) {
			return visitor.visitCreateStream(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateStreamAsContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(SqlBaseParser.CREATE, 0); }
	public STREAM(): TerminalNode { return this.getToken(SqlBaseParser.STREAM, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public AS(): TerminalNode { return this.getToken(SqlBaseParser.AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXISTS, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WITH, 0); }
	public tableProperties(): TablePropertiesContext | undefined {
		return this.tryGetRuleContext(0, TablePropertiesContext);
	}
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PARTITION, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.BY, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCreateStreamAs) {
			listener.enterCreateStreamAs(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCreateStreamAs) {
			listener.exitCreateStreamAs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCreateStreamAs) {
			return visitor.visitCreateStreamAs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(SqlBaseParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(SqlBaseParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXISTS, 0); }
	public tableElements(): TableElementsContext | undefined {
		return this.tryGetRuleContext(0, TableElementsContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WITH, 0); }
	public tableProperties(): TablePropertiesContext | undefined {
		return this.tryGetRuleContext(0, TablePropertiesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCreateTable) {
			listener.enterCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCreateTable) {
			listener.exitCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCreateTable) {
			return visitor.visitCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableAsContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(SqlBaseParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(SqlBaseParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public AS(): TerminalNode { return this.getToken(SqlBaseParser.AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXISTS, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WITH, 0); }
	public tableProperties(): TablePropertiesContext | undefined {
		return this.tryGetRuleContext(0, TablePropertiesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCreateTableAs) {
			listener.enterCreateTableAs(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCreateTableAs) {
			listener.exitCreateTableAs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCreateTableAs) {
			return visitor.visitCreateTableAs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateConnectorContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(SqlBaseParser.CREATE, 0); }
	public CONNECTOR(): TerminalNode { return this.getToken(SqlBaseParser.CONNECTOR, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public WITH(): TerminalNode { return this.getToken(SqlBaseParser.WITH, 0); }
	public tableProperties(): TablePropertiesContext {
		return this.getRuleContext(0, TablePropertiesContext);
	}
	public SINK(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SINK, 0); }
	public SOURCE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SOURCE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCreateConnector) {
			listener.enterCreateConnector(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCreateConnector) {
			listener.exitCreateConnector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCreateConnector) {
			return visitor.visitCreateConnector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InsertIntoContext extends StatementContext {
	public INSERT(): TerminalNode { return this.getToken(SqlBaseParser.INSERT, 0); }
	public INTO(): TerminalNode { return this.getToken(SqlBaseParser.INTO, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PARTITION, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.BY, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterInsertInto) {
			listener.enterInsertInto(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitInsertInto) {
			listener.exitInsertInto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitInsertInto) {
			return visitor.visitInsertInto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InsertValuesContext extends StatementContext {
	public INSERT(): TerminalNode { return this.getToken(SqlBaseParser.INSERT, 0); }
	public INTO(): TerminalNode { return this.getToken(SqlBaseParser.INTO, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public VALUES(): TerminalNode { return this.getToken(SqlBaseParser.VALUES, 0); }
	public values(): ValuesContext {
		return this.getRuleContext(0, ValuesContext);
	}
	public columns(): ColumnsContext | undefined {
		return this.tryGetRuleContext(0, ColumnsContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterInsertValues) {
			listener.enterInsertValues(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitInsertValues) {
			listener.exitInsertValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitInsertValues) {
			return visitor.visitInsertValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropStreamContext extends StatementContext {
	public DROP(): TerminalNode { return this.getToken(SqlBaseParser.DROP, 0); }
	public STREAM(): TerminalNode { return this.getToken(SqlBaseParser.STREAM, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXISTS, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DELETE, 0); }
	public TOPIC(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TOPIC, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDropStream) {
			listener.enterDropStream(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDropStream) {
			listener.exitDropStream(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDropStream) {
			return visitor.visitDropStream(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropTableContext extends StatementContext {
	public DROP(): TerminalNode { return this.getToken(SqlBaseParser.DROP, 0); }
	public TABLE(): TerminalNode { return this.getToken(SqlBaseParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXISTS, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DELETE, 0); }
	public TOPIC(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TOPIC, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDropTable) {
			listener.enterDropTable(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDropTable) {
			listener.exitDropTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDropTable) {
			return visitor.visitDropTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropConnectorContext extends StatementContext {
	public DROP(): TerminalNode { return this.getToken(SqlBaseParser.DROP, 0); }
	public CONNECTOR(): TerminalNode { return this.getToken(SqlBaseParser.CONNECTOR, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDropConnector) {
			listener.enterDropConnector(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDropConnector) {
			listener.exitDropConnector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDropConnector) {
			return visitor.visitDropConnector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExplainContext extends StatementContext {
	public EXPLAIN(): TerminalNode { return this.getToken(SqlBaseParser.EXPLAIN, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterExplain) {
			listener.enterExplain(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitExplain) {
			listener.exitExplain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitExplain) {
			return visitor.visitExplain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RunScriptContext extends StatementContext {
	public RUN(): TerminalNode { return this.getToken(SqlBaseParser.RUN, 0); }
	public SCRIPT(): TerminalNode { return this.getToken(SqlBaseParser.SCRIPT, 0); }
	public STRING(): TerminalNode { return this.getToken(SqlBaseParser.STRING, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterRunScript) {
			listener.enterRunScript(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitRunScript) {
			listener.exitRunScript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitRunScript) {
			return visitor.visitRunScript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RegisterTypeContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(SqlBaseParser.CREATE, 0); }
	public TYPE(): TerminalNode { return this.getToken(SqlBaseParser.TYPE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public AS(): TerminalNode { return this.getToken(SqlBaseParser.AS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterRegisterType) {
			listener.enterRegisterType(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitRegisterType) {
			listener.exitRegisterType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitRegisterType) {
			return visitor.visitRegisterType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropTypeContext extends StatementContext {
	public DROP(): TerminalNode { return this.getToken(SqlBaseParser.DROP, 0); }
	public TYPE(): TerminalNode { return this.getToken(SqlBaseParser.TYPE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDropType) {
			listener.enterDropType(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDropType) {
			listener.exitDropType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDropType) {
			return visitor.visitDropType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public _from: RelationContext;
	public _where: BooleanExpressionContext;
	public _having: BooleanExpressionContext;
	public SELECT(): TerminalNode { return this.getToken(SqlBaseParser.SELECT, 0); }
	public selectItem(): SelectItemContext[];
	public selectItem(i: number): SelectItemContext;
	public selectItem(i?: number): SelectItemContext | SelectItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectItemContext);
		} else {
			return this.getRuleContext(i, SelectItemContext);
		}
	}
	public FROM(): TerminalNode { return this.getToken(SqlBaseParser.FROM, 0); }
	public relation(): RelationContext {
		return this.getRuleContext(0, RelationContext);
	}
	public WINDOW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WINDOW, 0); }
	public windowExpression(): WindowExpressionContext | undefined {
		return this.tryGetRuleContext(0, WindowExpressionContext);
	}
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WHERE, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.GROUP, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.BY, 0); }
	public groupBy(): GroupByContext | undefined {
		return this.tryGetRuleContext(0, GroupByContext);
	}
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.HAVING, 0); }
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_query; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableElementsContext extends ParserRuleContext {
	public tableElement(): TableElementContext[];
	public tableElement(i: number): TableElementContext;
	public tableElement(i?: number): TableElementContext | TableElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableElementContext);
		} else {
			return this.getRuleContext(i, TableElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_tableElements; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTableElements) {
			listener.enterTableElements(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTableElements) {
			listener.exitTableElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTableElements) {
			return visitor.visitTableElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableElementContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public KEY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.KEY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_tableElement; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTableElement) {
			listener.enterTableElement(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTableElement) {
			listener.exitTableElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTableElement) {
			return visitor.visitTableElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertiesContext extends ParserRuleContext {
	public tableProperty(): TablePropertyContext[];
	public tableProperty(i: number): TablePropertyContext;
	public tableProperty(i?: number): TablePropertyContext | TablePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyContext);
		} else {
			return this.getRuleContext(i, TablePropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_tableProperties; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTableProperties) {
			listener.enterTableProperties(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTableProperties) {
			listener.exitTableProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTableProperties) {
			return visitor.visitTableProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(SqlBaseParser.EQ, 0); }
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_tableProperty; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTableProperty) {
			listener.enterTableProperty(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTableProperty) {
			listener.exitTableProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTableProperty) {
			return visitor.visitTableProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintClauseContext extends ParserRuleContext {
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FROM, 0); }
	public BEGINNING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.BEGINNING, 0); }
	public intervalClause(): IntervalClauseContext | undefined {
		return this.tryGetRuleContext(0, IntervalClauseContext);
	}
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_printClause; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterPrintClause) {
			listener.enterPrintClause(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitPrintClause) {
			listener.exitPrintClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitPrintClause) {
			return visitor.visitPrintClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalClauseContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public INTERVAL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INTERVAL, 0); }
	public SAMPLE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SAMPLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_intervalClause; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterIntervalClause) {
			listener.enterIntervalClause(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitIntervalClause) {
			listener.exitIntervalClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitIntervalClause) {
			return visitor.visitIntervalClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitClauseContext extends ParserRuleContext {
	public LIMIT(): TerminalNode { return this.getToken(SqlBaseParser.LIMIT, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_limitClause; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterLimitClause) {
			listener.enterLimitClause(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitLimitClause) {
			listener.exitLimitClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitLimitClause) {
			return visitor.visitLimitClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowExpressionContext extends ParserRuleContext {
	public tumblingWindowExpression(): TumblingWindowExpressionContext | undefined {
		return this.tryGetRuleContext(0, TumblingWindowExpressionContext);
	}
	public hoppingWindowExpression(): HoppingWindowExpressionContext | undefined {
		return this.tryGetRuleContext(0, HoppingWindowExpressionContext);
	}
	public sessionWindowExpression(): SessionWindowExpressionContext | undefined {
		return this.tryGetRuleContext(0, SessionWindowExpressionContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_windowExpression; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterWindowExpression) {
			listener.enterWindowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitWindowExpression) {
			listener.exitWindowExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitWindowExpression) {
			return visitor.visitWindowExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TumblingWindowExpressionContext extends ParserRuleContext {
	public TUMBLING(): TerminalNode { return this.getToken(SqlBaseParser.TUMBLING, 0); }
	public SIZE(): TerminalNode { return this.getToken(SqlBaseParser.SIZE, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public windowUnit(): WindowUnitContext {
		return this.getRuleContext(0, WindowUnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_tumblingWindowExpression; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTumblingWindowExpression) {
			listener.enterTumblingWindowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTumblingWindowExpression) {
			listener.exitTumblingWindowExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTumblingWindowExpression) {
			return visitor.visitTumblingWindowExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HoppingWindowExpressionContext extends ParserRuleContext {
	public HOPPING(): TerminalNode { return this.getToken(SqlBaseParser.HOPPING, 0); }
	public SIZE(): TerminalNode { return this.getToken(SqlBaseParser.SIZE, 0); }
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public windowUnit(): WindowUnitContext[];
	public windowUnit(i: number): WindowUnitContext;
	public windowUnit(i?: number): WindowUnitContext | WindowUnitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WindowUnitContext);
		} else {
			return this.getRuleContext(i, WindowUnitContext);
		}
	}
	public ADVANCE(): TerminalNode { return this.getToken(SqlBaseParser.ADVANCE, 0); }
	public BY(): TerminalNode { return this.getToken(SqlBaseParser.BY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_hoppingWindowExpression; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterHoppingWindowExpression) {
			listener.enterHoppingWindowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitHoppingWindowExpression) {
			listener.exitHoppingWindowExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitHoppingWindowExpression) {
			return visitor.visitHoppingWindowExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SessionWindowExpressionContext extends ParserRuleContext {
	public SESSION(): TerminalNode { return this.getToken(SqlBaseParser.SESSION, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public windowUnit(): WindowUnitContext {
		return this.getRuleContext(0, WindowUnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_sessionWindowExpression; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSessionWindowExpression) {
			listener.enterSessionWindowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSessionWindowExpression) {
			listener.exitSessionWindowExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSessionWindowExpression) {
			return visitor.visitSessionWindowExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowUnitContext extends ParserRuleContext {
	public DAY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DAY, 0); }
	public HOUR(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.HOUR, 0); }
	public MINUTE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MINUTE, 0); }
	public SECOND(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SECOND, 0); }
	public MILLISECOND(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MILLISECOND, 0); }
	public DAYS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DAYS, 0); }
	public HOURS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.HOURS, 0); }
	public MINUTES(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MINUTES, 0); }
	public SECONDS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SECONDS, 0); }
	public MILLISECONDS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MILLISECONDS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_windowUnit; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterWindowUnit) {
			listener.enterWindowUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitWindowUnit) {
			listener.exitWindowUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitWindowUnit) {
			return visitor.visitWindowUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByContext extends ParserRuleContext {
	public groupingElement(): GroupingElementContext[];
	public groupingElement(i: number): GroupingElementContext;
	public groupingElement(i?: number): GroupingElementContext | GroupingElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupingElementContext);
		} else {
			return this.getRuleContext(i, GroupingElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_groupBy; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterGroupBy) {
			listener.enterGroupBy(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitGroupBy) {
			listener.exitGroupBy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitGroupBy) {
			return visitor.visitGroupBy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingElementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_groupingElement; }
	public copyFrom(ctx: GroupingElementContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleGroupingSetContext extends GroupingElementContext {
	public groupingExpressions(): GroupingExpressionsContext {
		return this.getRuleContext(0, GroupingExpressionsContext);
	}
	constructor(ctx: GroupingElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSingleGroupingSet) {
			listener.enterSingleGroupingSet(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSingleGroupingSet) {
			listener.exitSingleGroupingSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSingleGroupingSet) {
			return visitor.visitSingleGroupingSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingExpressionsContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_groupingExpressions; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterGroupingExpressions) {
			listener.enterGroupingExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitGroupingExpressions) {
			listener.exitGroupingExpressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitGroupingExpressions) {
			return visitor.visitGroupingExpressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesContext extends ParserRuleContext {
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_values; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterValues) {
			listener.enterValues(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitValues) {
			listener.exitValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitValues) {
			return visitor.visitValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectItemContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_selectItem; }
	public copyFrom(ctx: SelectItemContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectSingleContext extends SelectItemContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.AS, 0); }
	constructor(ctx: SelectItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSelectSingle) {
			listener.enterSelectSingle(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSelectSingle) {
			listener.exitSelectSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSelectSingle) {
			return visitor.visitSelectSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectAllContext extends SelectItemContext {
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public ASTERISK(): TerminalNode { return this.getToken(SqlBaseParser.ASTERISK, 0); }
	constructor(ctx: SelectItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSelectAll) {
			listener.enterSelectAll(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSelectAll) {
			listener.exitSelectAll(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSelectAll) {
			return visitor.visitSelectAll(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_relation; }
	public copyFrom(ctx: RelationContext): void {
		super.copyFrom(ctx);
	}
}
export class JoinRelationContext extends RelationContext {
	public _left: AliasedRelationContext;
	public _right: AliasedRelationContext;
	public joinType(): JoinTypeContext {
		return this.getRuleContext(0, JoinTypeContext);
	}
	public JOIN(): TerminalNode { return this.getToken(SqlBaseParser.JOIN, 0); }
	public joinCriteria(): JoinCriteriaContext {
		return this.getRuleContext(0, JoinCriteriaContext);
	}
	public aliasedRelation(): AliasedRelationContext[];
	public aliasedRelation(i: number): AliasedRelationContext;
	public aliasedRelation(i?: number): AliasedRelationContext | AliasedRelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AliasedRelationContext);
		} else {
			return this.getRuleContext(i, AliasedRelationContext);
		}
	}
	public joinWindow(): JoinWindowContext | undefined {
		return this.tryGetRuleContext(0, JoinWindowContext);
	}
	constructor(ctx: RelationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterJoinRelation) {
			listener.enterJoinRelation(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitJoinRelation) {
			listener.exitJoinRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitJoinRelation) {
			return visitor.visitJoinRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationDefaultContext extends RelationContext {
	public aliasedRelation(): AliasedRelationContext {
		return this.getRuleContext(0, AliasedRelationContext);
	}
	constructor(ctx: RelationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterRelationDefault) {
			listener.enterRelationDefault(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitRelationDefault) {
			listener.exitRelationDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitRelationDefault) {
			return visitor.visitRelationDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_joinType; }
	public copyFrom(ctx: JoinTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class InnerJoinContext extends JoinTypeContext {
	public INNER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INNER, 0); }
	constructor(ctx: JoinTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterInnerJoin) {
			listener.enterInnerJoin(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitInnerJoin) {
			listener.exitInnerJoin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitInnerJoin) {
			return visitor.visitInnerJoin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OuterJoinContext extends JoinTypeContext {
	public FULL(): TerminalNode { return this.getToken(SqlBaseParser.FULL, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.OUTER, 0); }
	constructor(ctx: JoinTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterOuterJoin) {
			listener.enterOuterJoin(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitOuterJoin) {
			listener.exitOuterJoin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitOuterJoin) {
			return visitor.visitOuterJoin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LeftJoinContext extends JoinTypeContext {
	public LEFT(): TerminalNode { return this.getToken(SqlBaseParser.LEFT, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.OUTER, 0); }
	constructor(ctx: JoinTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterLeftJoin) {
			listener.enterLeftJoin(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitLeftJoin) {
			listener.exitLeftJoin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitLeftJoin) {
			return visitor.visitLeftJoin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinWindowContext extends ParserRuleContext {
	public WITHIN(): TerminalNode { return this.getToken(SqlBaseParser.WITHIN, 0); }
	public withinExpression(): WithinExpressionContext {
		return this.getRuleContext(0, WithinExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_joinWindow; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterJoinWindow) {
			listener.enterJoinWindow(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitJoinWindow) {
			listener.exitJoinWindow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitJoinWindow) {
			return visitor.visitJoinWindow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithinExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_withinExpression; }
	public copyFrom(ctx: WithinExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JoinWindowWithBeforeAndAfterContext extends WithinExpressionContext {
	public joinWindowSize(): JoinWindowSizeContext[];
	public joinWindowSize(i: number): JoinWindowSizeContext;
	public joinWindowSize(i?: number): JoinWindowSizeContext | JoinWindowSizeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JoinWindowSizeContext);
		} else {
			return this.getRuleContext(i, JoinWindowSizeContext);
		}
	}
	constructor(ctx: WithinExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterJoinWindowWithBeforeAndAfter) {
			listener.enterJoinWindowWithBeforeAndAfter(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitJoinWindowWithBeforeAndAfter) {
			listener.exitJoinWindowWithBeforeAndAfter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitJoinWindowWithBeforeAndAfter) {
			return visitor.visitJoinWindowWithBeforeAndAfter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SingleJoinWindowContext extends WithinExpressionContext {
	public joinWindowSize(): JoinWindowSizeContext {
		return this.getRuleContext(0, JoinWindowSizeContext);
	}
	constructor(ctx: WithinExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSingleJoinWindow) {
			listener.enterSingleJoinWindow(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSingleJoinWindow) {
			listener.exitSingleJoinWindow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSingleJoinWindow) {
			return visitor.visitSingleJoinWindow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinWindowSizeContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public windowUnit(): WindowUnitContext {
		return this.getRuleContext(0, WindowUnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_joinWindowSize; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterJoinWindowSize) {
			listener.enterJoinWindowSize(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitJoinWindowSize) {
			listener.exitJoinWindowSize(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitJoinWindowSize) {
			return visitor.visitJoinWindowSize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinCriteriaContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(SqlBaseParser.ON, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_joinCriteria; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterJoinCriteria) {
			listener.enterJoinCriteria(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitJoinCriteria) {
			listener.exitJoinCriteria(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitJoinCriteria) {
			return visitor.visitJoinCriteria(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasedRelationContext extends ParserRuleContext {
	public relationPrimary(): RelationPrimaryContext {
		return this.getRuleContext(0, RelationPrimaryContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_aliasedRelation; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterAliasedRelation) {
			listener.enterAliasedRelation(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitAliasedRelation) {
			listener.exitAliasedRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitAliasedRelation) {
			return visitor.visitAliasedRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnsContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_columns; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterColumns) {
			listener.enterColumns(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitColumns) {
			listener.exitColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitColumns) {
			return visitor.visitColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationPrimaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_relationPrimary; }
	public copyFrom(ctx: RelationPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class TableNameContext extends RelationPrimaryContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTableName) {
			listener.enterTableName(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTableName) {
			listener.exitTableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTableName) {
			return visitor.visitTableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_expression; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_booleanExpression; }
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class BooleanDefaultContext extends BooleanExpressionContext {
	public predicated(): PredicatedContext {
		return this.getRuleContext(0, PredicatedContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterBooleanDefault) {
			listener.enterBooleanDefault(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitBooleanDefault) {
			listener.exitBooleanDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitBooleanDefault) {
			return visitor.visitBooleanDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	public NOT(): TerminalNode { return this.getToken(SqlBaseParser.NOT, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterLogicalNot) {
			listener.enterLogicalNot(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitLogicalNot) {
			listener.exitLogicalNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalBinaryContext extends BooleanExpressionContext {
	public _left: BooleanExpressionContext;
	public _operator: Token;
	public _right: BooleanExpressionContext;
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.OR, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterLogicalBinary) {
			listener.enterLogicalBinary(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitLogicalBinary) {
			listener.exitLogicalBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitLogicalBinary) {
			return visitor.visitLogicalBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicatedContext extends ParserRuleContext {
	public _valueExpression: ValueExpressionContext;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_predicated; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterPredicated) {
			listener.enterPredicated(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitPredicated) {
			listener.exitPredicated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitPredicated) {
			return visitor.visitPredicated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public value: ParserRuleContext;
	constructor(parent: ParserRuleContext | undefined, invokingState: number, value: ParserRuleContext) {
		super(parent, invokingState);
		this.value = value;
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_predicate; }
	public copyFrom(ctx: PredicateContext): void {
		super.copyFrom(ctx);
		this.value = ctx.value;
	}
}
export class ComparisonContext extends PredicateContext {
	public _right: ValueExpressionContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BetweenContext extends PredicateContext {
	public _lower: ValueExpressionContext;
	public _upper: ValueExpressionContext;
	public BETWEEN(): TerminalNode { return this.getToken(SqlBaseParser.BETWEEN, 0); }
	public AND(): TerminalNode { return this.getToken(SqlBaseParser.AND, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterBetween) {
			listener.enterBetween(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitBetween) {
			listener.exitBetween(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitBetween) {
			return visitor.visitBetween(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InListContext extends PredicateContext {
	public IN(): TerminalNode { return this.getToken(SqlBaseParser.IN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterInList) {
			listener.enterInList(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitInList) {
			listener.exitInList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitInList) {
			return visitor.visitInList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LikeContext extends PredicateContext {
	public _pattern: ValueExpressionContext;
	public LIKE(): TerminalNode { return this.getToken(SqlBaseParser.LIKE, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterLike) {
			listener.enterLike(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitLike) {
			listener.exitLike(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitLike) {
			return visitor.visitLike(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullPredicateContext extends PredicateContext {
	public IS(): TerminalNode { return this.getToken(SqlBaseParser.IS, 0); }
	public NULL(): TerminalNode { return this.getToken(SqlBaseParser.NULL, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterNullPredicate) {
			listener.enterNullPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitNullPredicate) {
			listener.exitNullPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitNullPredicate) {
			return visitor.visitNullPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DistinctFromContext extends PredicateContext {
	public _right: ValueExpressionContext;
	public IS(): TerminalNode { return this.getToken(SqlBaseParser.IS, 0); }
	public DISTINCT(): TerminalNode { return this.getToken(SqlBaseParser.DISTINCT, 0); }
	public FROM(): TerminalNode { return this.getToken(SqlBaseParser.FROM, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDistinctFrom) {
			listener.enterDistinctFrom(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDistinctFrom) {
			listener.exitDistinctFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDistinctFrom) {
			return visitor.visitDistinctFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_valueExpression; }
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterValueExpressionDefault) {
			listener.enterValueExpressionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitValueExpressionDefault) {
			listener.exitValueExpressionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitValueExpressionDefault) {
			return visitor.visitValueExpressionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AtTimeZoneContext extends ValueExpressionContext {
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public AT(): TerminalNode { return this.getToken(SqlBaseParser.AT, 0); }
	public timeZoneSpecifier(): TimeZoneSpecifierContext {
		return this.getRuleContext(0, TimeZoneSpecifierContext);
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterAtTimeZone) {
			listener.enterAtTimeZone(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitAtTimeZone) {
			listener.exitAtTimeZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitAtTimeZone) {
			return visitor.visitAtTimeZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator: Token;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PLUS, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterArithmeticUnary) {
			listener.enterArithmeticUnary(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitArithmeticUnary) {
			listener.exitArithmeticUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitArithmeticUnary) {
			return visitor.visitArithmeticUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
	public _left: ValueExpressionContext;
	public _operator: Token;
	public _right: ValueExpressionContext;
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PERCENT, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MINUS, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterArithmeticBinary) {
			listener.enterArithmeticBinary(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitArithmeticBinary) {
			listener.exitArithmeticBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitArithmeticBinary) {
			return visitor.visitArithmeticBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConcatenationContext extends ValueExpressionContext {
	public _left: ValueExpressionContext;
	public _right: ValueExpressionContext;
	public CONCAT(): TerminalNode { return this.getToken(SqlBaseParser.CONCAT, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterConcatenation) {
			listener.enterConcatenation(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitConcatenation) {
			listener.exitConcatenation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitConcatenation) {
			return visitor.visitConcatenation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralExpressionContext extends PrimaryExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeConstructorContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public STRING(): TerminalNode { return this.getToken(SqlBaseParser.STRING, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTypeConstructor) {
			listener.enterTypeConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTypeConstructor) {
			listener.exitTypeConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTypeConstructor) {
			return visitor.visitTypeConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends PrimaryExpressionContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ASTERISK, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleCaseContext extends PrimaryExpressionContext {
	public _elseExpression: ExpressionContext;
	public CASE(): TerminalNode { return this.getToken(SqlBaseParser.CASE, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public END(): TerminalNode { return this.getToken(SqlBaseParser.END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ELSE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSimpleCase) {
			listener.enterSimpleCase(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSimpleCase) {
			listener.exitSimpleCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSimpleCase) {
			return visitor.visitSimpleCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression: ExpressionContext;
	public CASE(): TerminalNode { return this.getToken(SqlBaseParser.CASE, 0); }
	public END(): TerminalNode { return this.getToken(SqlBaseParser.END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ELSE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSearchedCase) {
			listener.enterSearchedCase(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSearchedCase) {
			listener.exitSearchedCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSearchedCase) {
			return visitor.visitSearchedCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastContext extends PrimaryExpressionContext {
	public CAST(): TerminalNode { return this.getToken(SqlBaseParser.CAST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public AS(): TerminalNode { return this.getToken(SqlBaseParser.AS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCast) {
			listener.enterCast(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCast) {
			listener.exitCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayConstructorContext extends PrimaryExpressionContext {
	public ARRAY(): TerminalNode { return this.getToken(SqlBaseParser.ARRAY, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterArrayConstructor) {
			listener.enterArrayConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitArrayConstructor) {
			listener.exitArrayConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitArrayConstructor) {
			return visitor.visitArrayConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubscriptContext extends PrimaryExpressionContext {
	public _value: PrimaryExpressionContext;
	public _index: ValueExpressionContext;
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterColumnReference) {
			listener.enterColumnReference(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitColumnReference) {
			listener.exitColumnReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitColumnReference) {
			return visitor.visitColumnReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	public _base: PrimaryExpressionContext;
	public _fieldName: IdentifierContext;
	public STRUCT_FIELD_REF(): TerminalNode { return this.getToken(SqlBaseParser.STRUCT_FIELD_REF, 0); }
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDereference) {
			listener.enterDereference(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDereference) {
			listener.exitDereference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDereference) {
			return visitor.visitDereference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeZoneSpecifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_timeZoneSpecifier; }
	public copyFrom(ctx: TimeZoneSpecifierContext): void {
		super.copyFrom(ctx);
	}
}
export class TimeZoneStringContext extends TimeZoneSpecifierContext {
	public TIME(): TerminalNode { return this.getToken(SqlBaseParser.TIME, 0); }
	public ZONE(): TerminalNode { return this.getToken(SqlBaseParser.ZONE, 0); }
	public STRING(): TerminalNode { return this.getToken(SqlBaseParser.STRING, 0); }
	constructor(ctx: TimeZoneSpecifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTimeZoneString) {
			listener.enterTimeZoneString(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTimeZoneString) {
			listener.exitTimeZoneString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTimeZoneString) {
			return visitor.visitTimeZoneString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NEQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.GTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_booleanValue; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitBooleanValue) {
			return visitor.visitBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ARRAY, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.GT, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MAP, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.STRUCT, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DECIMAL, 0); }
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public baseType(): BaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeContext);
	}
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_type; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INTEGER_VALUE, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_baseType; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterBaseType) {
			listener.enterBaseType(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitBaseType) {
			listener.exitBaseType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitBaseType) {
			return visitor.visitBaseType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenClauseContext extends ParserRuleContext {
	public _condition: ExpressionContext;
	public _result: ExpressionContext;
	public WHEN(): TerminalNode { return this.getToken(SqlBaseParser.WHEN, 0); }
	public THEN(): TerminalNode { return this.getToken(SqlBaseParser.THEN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_whenClause; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterWhenClause) {
			listener.enterWhenClause(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitWhenClause) {
			listener.exitWhenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_identifier; }
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class UnquotedIdentifierContext extends IdentifierContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IDENTIFIER, 0); }
	public nonReserved(): NonReservedContext | undefined {
		return this.tryGetRuleContext(0, NonReservedContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterUnquotedIdentifier) {
			listener.enterUnquotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitUnquotedIdentifier) {
			listener.exitUnquotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifier) {
			return visitor.visitUnquotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuotedIdentifierAlternativeContext extends IdentifierContext {
	public QUOTED_IDENTIFIER(): TerminalNode { return this.getToken(SqlBaseParser.QUOTED_IDENTIFIER, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterQuotedIdentifierAlternative) {
			listener.enterQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitQuotedIdentifierAlternative) {
			listener.exitQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifierAlternative) {
			return visitor.visitQuotedIdentifierAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BackQuotedIdentifierContext extends IdentifierContext {
	public BACKQUOTED_IDENTIFIER(): TerminalNode { return this.getToken(SqlBaseParser.BACKQUOTED_IDENTIFIER, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterBackQuotedIdentifier) {
			listener.enterBackQuotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitBackQuotedIdentifier) {
			listener.exitBackQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitBackQuotedIdentifier) {
			return visitor.visitBackQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DigitIdentifierContext extends IdentifierContext {
	public DIGIT_IDENTIFIER(): TerminalNode { return this.getToken(SqlBaseParser.DIGIT_IDENTIFIER, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDigitIdentifier) {
			listener.enterDigitIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDigitIdentifier) {
			listener.exitDigitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDigitIdentifier) {
			return visitor.visitDigitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_number; }
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	public DECIMAL_VALUE(): TerminalNode { return this.getToken(SqlBaseParser.DECIMAL_VALUE, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDecimalLiteral) {
			listener.exitDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegerLiteralContext extends NumberContext {
	public INTEGER_VALUE(): TerminalNode { return this.getToken(SqlBaseParser.INTEGER_VALUE, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends LiteralContext {
	public NULL(): TerminalNode { return this.getToken(SqlBaseParser.NULL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitNullLiteral) {
			listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLiteralContext extends LiteralContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends LiteralContext {
	public booleanValue(): BooleanValueContext {
		return this.getRuleContext(0, BooleanValueContext);
	}
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends LiteralContext {
	public STRING(): TerminalNode { return this.getToken(SqlBaseParser.STRING, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonReservedContext extends ParserRuleContext {
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SHOW, 0); }
	public TABLES(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TABLES, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.COLUMNS, 0); }
	public COLUMN(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.COLUMN, 0); }
	public PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PARTITIONS, 0); }
	public FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FUNCTIONS, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FUNCTION, 0); }
	public SESSION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SESSION, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.STRUCT, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MAP, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ARRAY, 0); }
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PARTITION, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INTEGER, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DATE, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TIME, 0); }
	public TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TIMESTAMP, 0); }
	public INTERVAL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INTERVAL, 0); }
	public ZONE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ZONE, 0); }
	public YEAR(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.YEAR, 0); }
	public MONTH(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MONTH, 0); }
	public DAY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DAY, 0); }
	public HOUR(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.HOUR, 0); }
	public MINUTE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MINUTE, 0); }
	public SECOND(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SECOND, 0); }
	public EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXPLAIN, 0); }
	public ANALYZE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ANALYZE, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TYPE, 0); }
	public TYPES(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TYPES, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SET, 0); }
	public RESET(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.RESET, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IF, 0); }
	public SOURCE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SOURCE, 0); }
	public SINK(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SINK, 0); }
	public KEY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.KEY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_nonReserved; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterNonReserved) {
			listener.enterNonReserved(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitNonReserved) {
			listener.exitNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitNonReserved) {
			return visitor.visitNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


