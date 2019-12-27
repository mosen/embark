// Generated from src/ksql/SqlBase.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { TableNameContext } from "./SqlBaseParser";
import { JoinRelationContext } from "./SqlBaseParser";
import { RelationDefaultContext } from "./SqlBaseParser";
import { ComparisonContext } from "./SqlBaseParser";
import { BetweenContext } from "./SqlBaseParser";
import { InListContext } from "./SqlBaseParser";
import { LikeContext } from "./SqlBaseParser";
import { NullPredicateContext } from "./SqlBaseParser";
import { DistinctFromContext } from "./SqlBaseParser";
import { DecimalLiteralContext } from "./SqlBaseParser";
import { IntegerLiteralContext } from "./SqlBaseParser";
import { JoinWindowWithBeforeAndAfterContext } from "./SqlBaseParser";
import { SingleJoinWindowContext } from "./SqlBaseParser";
import { UnquotedIdentifierContext } from "./SqlBaseParser";
import { QuotedIdentifierAlternativeContext } from "./SqlBaseParser";
import { BackQuotedIdentifierContext } from "./SqlBaseParser";
import { DigitIdentifierContext } from "./SqlBaseParser";
import { SingleGroupingSetContext } from "./SqlBaseParser";
import { ValueExpressionDefaultContext } from "./SqlBaseParser";
import { AtTimeZoneContext } from "./SqlBaseParser";
import { ArithmeticUnaryContext } from "./SqlBaseParser";
import { ArithmeticBinaryContext } from "./SqlBaseParser";
import { ConcatenationContext } from "./SqlBaseParser";
import { NullLiteralContext } from "./SqlBaseParser";
import { NumericLiteralContext } from "./SqlBaseParser";
import { BooleanLiteralContext } from "./SqlBaseParser";
import { StringLiteralContext } from "./SqlBaseParser";
import { QueryStatementContext } from "./SqlBaseParser";
import { ListPropertiesContext } from "./SqlBaseParser";
import { ListTopicsContext } from "./SqlBaseParser";
import { ListStreamsContext } from "./SqlBaseParser";
import { ListTablesContext } from "./SqlBaseParser";
import { ListFunctionsContext } from "./SqlBaseParser";
import { ListConnectorsContext } from "./SqlBaseParser";
import { ListTypesContext } from "./SqlBaseParser";
import { ShowColumnsContext } from "./SqlBaseParser";
import { DescribeFunctionContext } from "./SqlBaseParser";
import { DescribeConnectorContext } from "./SqlBaseParser";
import { PrintTopicContext } from "./SqlBaseParser";
import { ListQueriesContext } from "./SqlBaseParser";
import { TerminateQueryContext } from "./SqlBaseParser";
import { SetPropertyContext } from "./SqlBaseParser";
import { UnsetPropertyContext } from "./SqlBaseParser";
import { CreateStreamContext } from "./SqlBaseParser";
import { CreateStreamAsContext } from "./SqlBaseParser";
import { CreateTableContext } from "./SqlBaseParser";
import { CreateTableAsContext } from "./SqlBaseParser";
import { CreateConnectorContext } from "./SqlBaseParser";
import { InsertIntoContext } from "./SqlBaseParser";
import { InsertValuesContext } from "./SqlBaseParser";
import { DropStreamContext } from "./SqlBaseParser";
import { DropTableContext } from "./SqlBaseParser";
import { DropConnectorContext } from "./SqlBaseParser";
import { ExplainContext } from "./SqlBaseParser";
import { RunScriptContext } from "./SqlBaseParser";
import { RegisterTypeContext } from "./SqlBaseParser";
import { DropTypeContext } from "./SqlBaseParser";
import { TimeZoneStringContext } from "./SqlBaseParser";
import { LiteralExpressionContext } from "./SqlBaseParser";
import { TypeConstructorContext } from "./SqlBaseParser";
import { FunctionCallContext } from "./SqlBaseParser";
import { SimpleCaseContext } from "./SqlBaseParser";
import { SearchedCaseContext } from "./SqlBaseParser";
import { CastContext } from "./SqlBaseParser";
import { ArrayConstructorContext } from "./SqlBaseParser";
import { SubscriptContext } from "./SqlBaseParser";
import { ColumnReferenceContext } from "./SqlBaseParser";
import { DereferenceContext } from "./SqlBaseParser";
import { ParenthesizedExpressionContext } from "./SqlBaseParser";
import { SelectSingleContext } from "./SqlBaseParser";
import { SelectAllContext } from "./SqlBaseParser";
import { BooleanDefaultContext } from "./SqlBaseParser";
import { LogicalNotContext } from "./SqlBaseParser";
import { LogicalBinaryContext } from "./SqlBaseParser";
import { InnerJoinContext } from "./SqlBaseParser";
import { OuterJoinContext } from "./SqlBaseParser";
import { LeftJoinContext } from "./SqlBaseParser";
import { StatementsContext } from "./SqlBaseParser";
import { SingleStatementContext } from "./SqlBaseParser";
import { SingleExpressionContext } from "./SqlBaseParser";
import { StatementContext } from "./SqlBaseParser";
import { QueryContext } from "./SqlBaseParser";
import { TableElementsContext } from "./SqlBaseParser";
import { TableElementContext } from "./SqlBaseParser";
import { TablePropertiesContext } from "./SqlBaseParser";
import { TablePropertyContext } from "./SqlBaseParser";
import { PrintClauseContext } from "./SqlBaseParser";
import { IntervalClauseContext } from "./SqlBaseParser";
import { LimitClauseContext } from "./SqlBaseParser";
import { WindowExpressionContext } from "./SqlBaseParser";
import { TumblingWindowExpressionContext } from "./SqlBaseParser";
import { HoppingWindowExpressionContext } from "./SqlBaseParser";
import { SessionWindowExpressionContext } from "./SqlBaseParser";
import { WindowUnitContext } from "./SqlBaseParser";
import { GroupByContext } from "./SqlBaseParser";
import { GroupingElementContext } from "./SqlBaseParser";
import { GroupingExpressionsContext } from "./SqlBaseParser";
import { ValuesContext } from "./SqlBaseParser";
import { SelectItemContext } from "./SqlBaseParser";
import { RelationContext } from "./SqlBaseParser";
import { JoinTypeContext } from "./SqlBaseParser";
import { JoinWindowContext } from "./SqlBaseParser";
import { WithinExpressionContext } from "./SqlBaseParser";
import { JoinWindowSizeContext } from "./SqlBaseParser";
import { JoinCriteriaContext } from "./SqlBaseParser";
import { AliasedRelationContext } from "./SqlBaseParser";
import { ColumnsContext } from "./SqlBaseParser";
import { RelationPrimaryContext } from "./SqlBaseParser";
import { ExpressionContext } from "./SqlBaseParser";
import { BooleanExpressionContext } from "./SqlBaseParser";
import { PredicatedContext } from "./SqlBaseParser";
import { PredicateContext } from "./SqlBaseParser";
import { ValueExpressionContext } from "./SqlBaseParser";
import { PrimaryExpressionContext } from "./SqlBaseParser";
import { TimeZoneSpecifierContext } from "./SqlBaseParser";
import { ComparisonOperatorContext } from "./SqlBaseParser";
import { BooleanValueContext } from "./SqlBaseParser";
import { TypeContext } from "./SqlBaseParser";
import { TypeParameterContext } from "./SqlBaseParser";
import { BaseTypeContext } from "./SqlBaseParser";
import { WhenClauseContext } from "./SqlBaseParser";
import { QualifiedNameContext } from "./SqlBaseParser";
import { IdentifierContext } from "./SqlBaseParser";
import { NumberContext } from "./SqlBaseParser";
import { LiteralContext } from "./SqlBaseParser";
import { NonReservedContext } from "./SqlBaseParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SqlBaseParser`.
 */
export interface SqlBaseListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `tableName`
	 * labeled alternative in `SqlBaseParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterTableName?: (ctx: TableNameContext) => void;
	/**
	 * Exit a parse tree produced by the `tableName`
	 * labeled alternative in `SqlBaseParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitTableName?: (ctx: TableNameContext) => void;

	/**
	 * Enter a parse tree produced by the `joinRelation`
	 * labeled alternative in `SqlBaseParser.relation`.
	 * @param ctx the parse tree
	 */
	enterJoinRelation?: (ctx: JoinRelationContext) => void;
	/**
	 * Exit a parse tree produced by the `joinRelation`
	 * labeled alternative in `SqlBaseParser.relation`.
	 * @param ctx the parse tree
	 */
	exitJoinRelation?: (ctx: JoinRelationContext) => void;

	/**
	 * Enter a parse tree produced by the `relationDefault`
	 * labeled alternative in `SqlBaseParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelationDefault?: (ctx: RelationDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `relationDefault`
	 * labeled alternative in `SqlBaseParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelationDefault?: (ctx: RelationDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `comparison`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `comparison`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `between`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterBetween?: (ctx: BetweenContext) => void;
	/**
	 * Exit a parse tree produced by the `between`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitBetween?: (ctx: BetweenContext) => void;

	/**
	 * Enter a parse tree produced by the `inList`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterInList?: (ctx: InListContext) => void;
	/**
	 * Exit a parse tree produced by the `inList`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitInList?: (ctx: InListContext) => void;

	/**
	 * Enter a parse tree produced by the `like`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterLike?: (ctx: LikeContext) => void;
	/**
	 * Exit a parse tree produced by the `like`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitLike?: (ctx: LikeContext) => void;

	/**
	 * Enter a parse tree produced by the `nullPredicate`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterNullPredicate?: (ctx: NullPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `nullPredicate`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitNullPredicate?: (ctx: NullPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `distinctFrom`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterDistinctFrom?: (ctx: DistinctFromContext) => void;
	/**
	 * Exit a parse tree produced by the `distinctFrom`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitDistinctFrom?: (ctx: DistinctFromContext) => void;

	/**
	 * Enter a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `SqlBaseParser.number`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `SqlBaseParser.number`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `integerLiteral`
	 * labeled alternative in `SqlBaseParser.number`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `SqlBaseParser.number`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `joinWindowWithBeforeAndAfter`
	 * labeled alternative in `SqlBaseParser.withinExpression`.
	 * @param ctx the parse tree
	 */
	enterJoinWindowWithBeforeAndAfter?: (ctx: JoinWindowWithBeforeAndAfterContext) => void;
	/**
	 * Exit a parse tree produced by the `joinWindowWithBeforeAndAfter`
	 * labeled alternative in `SqlBaseParser.withinExpression`.
	 * @param ctx the parse tree
	 */
	exitJoinWindowWithBeforeAndAfter?: (ctx: JoinWindowWithBeforeAndAfterContext) => void;

	/**
	 * Enter a parse tree produced by the `singleJoinWindow`
	 * labeled alternative in `SqlBaseParser.withinExpression`.
	 * @param ctx the parse tree
	 */
	enterSingleJoinWindow?: (ctx: SingleJoinWindowContext) => void;
	/**
	 * Exit a parse tree produced by the `singleJoinWindow`
	 * labeled alternative in `SqlBaseParser.withinExpression`.
	 * @param ctx the parse tree
	 */
	exitSingleJoinWindow?: (ctx: SingleJoinWindowContext) => void;

	/**
	 * Enter a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;

	/**
	 * Enter a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterDigitIdentifier?: (ctx: DigitIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitDigitIdentifier?: (ctx: DigitIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `SqlBaseParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;
	/**
	 * Exit a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `SqlBaseParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;

	/**
	 * Enter a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `atTimeZone`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterAtTimeZone?: (ctx: AtTimeZoneContext) => void;
	/**
	 * Exit a parse tree produced by the `atTimeZone`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitAtTimeZone?: (ctx: AtTimeZoneContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `concatenation`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterConcatenation?: (ctx: ConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by the `concatenation`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitConcatenation?: (ctx: ConcatenationContext) => void;

	/**
	 * Enter a parse tree produced by the `nullLiteral`
	 * labeled alternative in `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `numericLiteral`
	 * labeled alternative in `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `stringLiteral`
	 * labeled alternative in `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `queryStatement`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterQueryStatement?: (ctx: QueryStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `queryStatement`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitQueryStatement?: (ctx: QueryStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `listProperties`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterListProperties?: (ctx: ListPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by the `listProperties`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitListProperties?: (ctx: ListPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by the `listTopics`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterListTopics?: (ctx: ListTopicsContext) => void;
	/**
	 * Exit a parse tree produced by the `listTopics`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitListTopics?: (ctx: ListTopicsContext) => void;

	/**
	 * Enter a parse tree produced by the `listStreams`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterListStreams?: (ctx: ListStreamsContext) => void;
	/**
	 * Exit a parse tree produced by the `listStreams`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitListStreams?: (ctx: ListStreamsContext) => void;

	/**
	 * Enter a parse tree produced by the `listTables`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterListTables?: (ctx: ListTablesContext) => void;
	/**
	 * Exit a parse tree produced by the `listTables`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitListTables?: (ctx: ListTablesContext) => void;

	/**
	 * Enter a parse tree produced by the `listFunctions`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterListFunctions?: (ctx: ListFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `listFunctions`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitListFunctions?: (ctx: ListFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `listConnectors`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterListConnectors?: (ctx: ListConnectorsContext) => void;
	/**
	 * Exit a parse tree produced by the `listConnectors`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitListConnectors?: (ctx: ListConnectorsContext) => void;

	/**
	 * Enter a parse tree produced by the `listTypes`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterListTypes?: (ctx: ListTypesContext) => void;
	/**
	 * Exit a parse tree produced by the `listTypes`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitListTypes?: (ctx: ListTypesContext) => void;

	/**
	 * Enter a parse tree produced by the `showColumns`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowColumns?: (ctx: ShowColumnsContext) => void;
	/**
	 * Exit a parse tree produced by the `showColumns`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowColumns?: (ctx: ShowColumnsContext) => void;

	/**
	 * Enter a parse tree produced by the `describeFunction`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDescribeFunction?: (ctx: DescribeFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `describeFunction`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDescribeFunction?: (ctx: DescribeFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `describeConnector`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDescribeConnector?: (ctx: DescribeConnectorContext) => void;
	/**
	 * Exit a parse tree produced by the `describeConnector`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDescribeConnector?: (ctx: DescribeConnectorContext) => void;

	/**
	 * Enter a parse tree produced by the `printTopic`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterPrintTopic?: (ctx: PrintTopicContext) => void;
	/**
	 * Exit a parse tree produced by the `printTopic`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitPrintTopic?: (ctx: PrintTopicContext) => void;

	/**
	 * Enter a parse tree produced by the `listQueries`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterListQueries?: (ctx: ListQueriesContext) => void;
	/**
	 * Exit a parse tree produced by the `listQueries`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitListQueries?: (ctx: ListQueriesContext) => void;

	/**
	 * Enter a parse tree produced by the `terminateQuery`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterTerminateQuery?: (ctx: TerminateQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `terminateQuery`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitTerminateQuery?: (ctx: TerminateQueryContext) => void;

	/**
	 * Enter a parse tree produced by the `setProperty`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetProperty?: (ctx: SetPropertyContext) => void;
	/**
	 * Exit a parse tree produced by the `setProperty`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetProperty?: (ctx: SetPropertyContext) => void;

	/**
	 * Enter a parse tree produced by the `unsetProperty`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUnsetProperty?: (ctx: UnsetPropertyContext) => void;
	/**
	 * Exit a parse tree produced by the `unsetProperty`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUnsetProperty?: (ctx: UnsetPropertyContext) => void;

	/**
	 * Enter a parse tree produced by the `createStream`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateStream?: (ctx: CreateStreamContext) => void;
	/**
	 * Exit a parse tree produced by the `createStream`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateStream?: (ctx: CreateStreamContext) => void;

	/**
	 * Enter a parse tree produced by the `createStreamAs`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateStreamAs?: (ctx: CreateStreamAsContext) => void;
	/**
	 * Exit a parse tree produced by the `createStreamAs`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateStreamAs?: (ctx: CreateStreamAsContext) => void;

	/**
	 * Enter a parse tree produced by the `createTable`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateTable?: (ctx: CreateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `createTable`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateTable?: (ctx: CreateTableContext) => void;

	/**
	 * Enter a parse tree produced by the `createTableAs`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateTableAs?: (ctx: CreateTableAsContext) => void;
	/**
	 * Exit a parse tree produced by the `createTableAs`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateTableAs?: (ctx: CreateTableAsContext) => void;

	/**
	 * Enter a parse tree produced by the `createConnector`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateConnector?: (ctx: CreateConnectorContext) => void;
	/**
	 * Exit a parse tree produced by the `createConnector`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateConnector?: (ctx: CreateConnectorContext) => void;

	/**
	 * Enter a parse tree produced by the `insertInto`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterInsertInto?: (ctx: InsertIntoContext) => void;
	/**
	 * Exit a parse tree produced by the `insertInto`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitInsertInto?: (ctx: InsertIntoContext) => void;

	/**
	 * Enter a parse tree produced by the `insertValues`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterInsertValues?: (ctx: InsertValuesContext) => void;
	/**
	 * Exit a parse tree produced by the `insertValues`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitInsertValues?: (ctx: InsertValuesContext) => void;

	/**
	 * Enter a parse tree produced by the `dropStream`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropStream?: (ctx: DropStreamContext) => void;
	/**
	 * Exit a parse tree produced by the `dropStream`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropStream?: (ctx: DropStreamContext) => void;

	/**
	 * Enter a parse tree produced by the `dropTable`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropTable?: (ctx: DropTableContext) => void;
	/**
	 * Exit a parse tree produced by the `dropTable`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropTable?: (ctx: DropTableContext) => void;

	/**
	 * Enter a parse tree produced by the `dropConnector`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropConnector?: (ctx: DropConnectorContext) => void;
	/**
	 * Exit a parse tree produced by the `dropConnector`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropConnector?: (ctx: DropConnectorContext) => void;

	/**
	 * Enter a parse tree produced by the `explain`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExplain?: (ctx: ExplainContext) => void;
	/**
	 * Exit a parse tree produced by the `explain`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExplain?: (ctx: ExplainContext) => void;

	/**
	 * Enter a parse tree produced by the `runScript`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRunScript?: (ctx: RunScriptContext) => void;
	/**
	 * Exit a parse tree produced by the `runScript`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRunScript?: (ctx: RunScriptContext) => void;

	/**
	 * Enter a parse tree produced by the `registerType`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRegisterType?: (ctx: RegisterTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `registerType`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRegisterType?: (ctx: RegisterTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `dropType`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropType?: (ctx: DropTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `dropType`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropType?: (ctx: DropTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `timeZoneString`
	 * labeled alternative in `SqlBaseParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTimeZoneString?: (ctx: TimeZoneStringContext) => void;
	/**
	 * Exit a parse tree produced by the `timeZoneString`
	 * labeled alternative in `SqlBaseParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTimeZoneString?: (ctx: TimeZoneStringContext) => void;

	/**
	 * Enter a parse tree produced by the `literalExpression`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `literalExpression`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `typeConstructor`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeConstructor?: (ctx: TypeConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeConstructor?: (ctx: TypeConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCall`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCall`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleCase`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleCase?: (ctx: SimpleCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleCase`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleCase?: (ctx: SimpleCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `searchedCase`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSearchedCase?: (ctx: SearchedCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `searchedCase`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSearchedCase?: (ctx: SearchedCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `cast`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCast?: (ctx: CastContext) => void;
	/**
	 * Exit a parse tree produced by the `cast`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCast?: (ctx: CastContext) => void;

	/**
	 * Enter a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayConstructor?: (ctx: ArrayConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayConstructor?: (ctx: ArrayConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `subscript`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by the `subscript`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by the `columnReference`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterColumnReference?: (ctx: ColumnReferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `columnReference`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitColumnReference?: (ctx: ColumnReferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `dereference`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDereference?: (ctx: DereferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `dereference`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDereference?: (ctx: DereferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `selectSingle`
	 * labeled alternative in `SqlBaseParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectSingle?: (ctx: SelectSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `selectSingle`
	 * labeled alternative in `SqlBaseParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectSingle?: (ctx: SelectSingleContext) => void;

	/**
	 * Enter a parse tree produced by the `selectAll`
	 * labeled alternative in `SqlBaseParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectAll?: (ctx: SelectAllContext) => void;
	/**
	 * Exit a parse tree produced by the `selectAll`
	 * labeled alternative in `SqlBaseParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectAll?: (ctx: SelectAllContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanDefault`
	 * labeled alternative in `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanDefault?: (ctx: BooleanDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanDefault`
	 * labeled alternative in `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanDefault?: (ctx: BooleanDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalNot`
	 * labeled alternative in `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNot`
	 * labeled alternative in `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNot?: (ctx: LogicalNotContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalBinary`
	 * labeled alternative in `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `innerJoin`
	 * labeled alternative in `SqlBaseParser.joinType`.
	 * @param ctx the parse tree
	 */
	enterInnerJoin?: (ctx: InnerJoinContext) => void;
	/**
	 * Exit a parse tree produced by the `innerJoin`
	 * labeled alternative in `SqlBaseParser.joinType`.
	 * @param ctx the parse tree
	 */
	exitInnerJoin?: (ctx: InnerJoinContext) => void;

	/**
	 * Enter a parse tree produced by the `outerJoin`
	 * labeled alternative in `SqlBaseParser.joinType`.
	 * @param ctx the parse tree
	 */
	enterOuterJoin?: (ctx: OuterJoinContext) => void;
	/**
	 * Exit a parse tree produced by the `outerJoin`
	 * labeled alternative in `SqlBaseParser.joinType`.
	 * @param ctx the parse tree
	 */
	exitOuterJoin?: (ctx: OuterJoinContext) => void;

	/**
	 * Enter a parse tree produced by the `leftJoin`
	 * labeled alternative in `SqlBaseParser.joinType`.
	 * @param ctx the parse tree
	 */
	enterLeftJoin?: (ctx: LeftJoinContext) => void;
	/**
	 * Exit a parse tree produced by the `leftJoin`
	 * labeled alternative in `SqlBaseParser.joinType`.
	 * @param ctx the parse tree
	 */
	exitLeftJoin?: (ctx: LeftJoinContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.singleStatement`.
	 * @param ctx the parse tree
	 */
	enterSingleStatement?: (ctx: SingleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.singleStatement`.
	 * @param ctx the parse tree
	 */
	exitSingleStatement?: (ctx: SingleStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterSingleExpression?: (ctx: SingleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitSingleExpression?: (ctx: SingleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.tableElements`.
	 * @param ctx the parse tree
	 */
	enterTableElements?: (ctx: TableElementsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.tableElements`.
	 * @param ctx the parse tree
	 */
	exitTableElements?: (ctx: TableElementsContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.tableElement`.
	 * @param ctx the parse tree
	 */
	enterTableElement?: (ctx: TableElementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.tableElement`.
	 * @param ctx the parse tree
	 */
	exitTableElement?: (ctx: TableElementContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.tableProperties`.
	 * @param ctx the parse tree
	 */
	enterTableProperties?: (ctx: TablePropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.tableProperties`.
	 * @param ctx the parse tree
	 */
	exitTableProperties?: (ctx: TablePropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.tableProperty`.
	 * @param ctx the parse tree
	 */
	enterTableProperty?: (ctx: TablePropertyContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.tableProperty`.
	 * @param ctx the parse tree
	 */
	exitTableProperty?: (ctx: TablePropertyContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.printClause`.
	 * @param ctx the parse tree
	 */
	enterPrintClause?: (ctx: PrintClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.printClause`.
	 * @param ctx the parse tree
	 */
	exitPrintClause?: (ctx: PrintClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.intervalClause`.
	 * @param ctx the parse tree
	 */
	enterIntervalClause?: (ctx: IntervalClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.intervalClause`.
	 * @param ctx the parse tree
	 */
	exitIntervalClause?: (ctx: IntervalClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.limitClause`.
	 * @param ctx the parse tree
	 */
	enterLimitClause?: (ctx: LimitClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.limitClause`.
	 * @param ctx the parse tree
	 */
	exitLimitClause?: (ctx: LimitClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.windowExpression`.
	 * @param ctx the parse tree
	 */
	enterWindowExpression?: (ctx: WindowExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.windowExpression`.
	 * @param ctx the parse tree
	 */
	exitWindowExpression?: (ctx: WindowExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.tumblingWindowExpression`.
	 * @param ctx the parse tree
	 */
	enterTumblingWindowExpression?: (ctx: TumblingWindowExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.tumblingWindowExpression`.
	 * @param ctx the parse tree
	 */
	exitTumblingWindowExpression?: (ctx: TumblingWindowExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.hoppingWindowExpression`.
	 * @param ctx the parse tree
	 */
	enterHoppingWindowExpression?: (ctx: HoppingWindowExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.hoppingWindowExpression`.
	 * @param ctx the parse tree
	 */
	exitHoppingWindowExpression?: (ctx: HoppingWindowExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.sessionWindowExpression`.
	 * @param ctx the parse tree
	 */
	enterSessionWindowExpression?: (ctx: SessionWindowExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.sessionWindowExpression`.
	 * @param ctx the parse tree
	 */
	exitSessionWindowExpression?: (ctx: SessionWindowExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.windowUnit`.
	 * @param ctx the parse tree
	 */
	enterWindowUnit?: (ctx: WindowUnitContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.windowUnit`.
	 * @param ctx the parse tree
	 */
	exitWindowUnit?: (ctx: WindowUnitContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.groupBy`.
	 * @param ctx the parse tree
	 */
	enterGroupBy?: (ctx: GroupByContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.groupBy`.
	 * @param ctx the parse tree
	 */
	exitGroupBy?: (ctx: GroupByContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterGroupingElement?: (ctx: GroupingElementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitGroupingElement?: (ctx: GroupingElementContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.groupingExpressions`.
	 * @param ctx the parse tree
	 */
	enterGroupingExpressions?: (ctx: GroupingExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.groupingExpressions`.
	 * @param ctx the parse tree
	 */
	exitGroupingExpressions?: (ctx: GroupingExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by the `values`
	 * labeled alternative in `SqlBaseParser.statementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementgroupingElementselectItemselectItemrelationrelationjoinTypejoinTypejoinTypewithinExpressionwithinExpressionrelationPrimarybooleanExpressionbooleanExpressionbooleanExpressionpredicatepredicatepredicatepredicatepredicatepredicatevalueExpressionvalueExpressionvalueExpressionvalueExpressionvalueExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressiontimeZoneSpecifieridentifieridentifieridentifieridentifiernumbernumberliteralliteralliteralliteral`.
	 * @param ctx the parse tree
	 */
	enterValues?: (ctx: ValuesContext) => void;
	/**
	 * Exit a parse tree produced by the `values`
	 * labeled alternative in `SqlBaseParser.statementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementgroupingElementselectItemselectItemrelationrelationjoinTypejoinTypejoinTypewithinExpressionwithinExpressionrelationPrimarybooleanExpressionbooleanExpressionbooleanExpressionpredicatepredicatepredicatepredicatepredicatepredicatevalueExpressionvalueExpressionvalueExpressionvalueExpressionvalueExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressiontimeZoneSpecifieridentifieridentifieridentifieridentifiernumbernumberliteralliteralliteralliteral`.
	 * @param ctx the parse tree
	 */
	exitValues?: (ctx: ValuesContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectItem?: (ctx: SelectItemContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectItem?: (ctx: SelectItemContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelation?: (ctx: RelationContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelation?: (ctx: RelationContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.joinType`.
	 * @param ctx the parse tree
	 */
	enterJoinType?: (ctx: JoinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.joinType`.
	 * @param ctx the parse tree
	 */
	exitJoinType?: (ctx: JoinTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.joinWindow`.
	 * @param ctx the parse tree
	 */
	enterJoinWindow?: (ctx: JoinWindowContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.joinWindow`.
	 * @param ctx the parse tree
	 */
	exitJoinWindow?: (ctx: JoinWindowContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.withinExpression`.
	 * @param ctx the parse tree
	 */
	enterWithinExpression?: (ctx: WithinExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.withinExpression`.
	 * @param ctx the parse tree
	 */
	exitWithinExpression?: (ctx: WithinExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.joinWindowSize`.
	 * @param ctx the parse tree
	 */
	enterJoinWindowSize?: (ctx: JoinWindowSizeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.joinWindowSize`.
	 * @param ctx the parse tree
	 */
	exitJoinWindowSize?: (ctx: JoinWindowSizeContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.aliasedRelation`.
	 * @param ctx the parse tree
	 */
	enterAliasedRelation?: (ctx: AliasedRelationContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.aliasedRelation`.
	 * @param ctx the parse tree
	 */
	exitAliasedRelation?: (ctx: AliasedRelationContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.columns`.
	 * @param ctx the parse tree
	 */
	enterColumns?: (ctx: ColumnsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.columns`.
	 * @param ctx the parse tree
	 */
	exitColumns?: (ctx: ColumnsContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterRelationPrimary?: (ctx: RelationPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitRelationPrimary?: (ctx: RelationPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.predicated`.
	 * @param ctx the parse tree
	 */
	enterPredicated?: (ctx: PredicatedContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.predicated`.
	 * @param ctx the parse tree
	 */
	exitPredicated?: (ctx: PredicatedContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpression?: (ctx: ValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpression?: (ctx: ValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTimeZoneSpecifier?: (ctx: TimeZoneSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTimeZoneSpecifier?: (ctx: TimeZoneSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.baseType`.
	 * @param ctx the parse tree
	 */
	enterBaseType?: (ctx: BaseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.baseType`.
	 * @param ctx the parse tree
	 */
	exitBaseType?: (ctx: BaseTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.whenClause`.
	 * @param ctx the parse tree
	 */
	enterWhenClause?: (ctx: WhenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.whenClause`.
	 * @param ctx the parse tree
	 */
	exitWhenClause?: (ctx: WhenClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SqlBaseParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	enterNonReserved?: (ctx: NonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `SqlBaseParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	exitNonReserved?: (ctx: NonReservedContext) => void;
}

