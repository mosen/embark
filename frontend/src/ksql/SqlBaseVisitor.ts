// Generated from src/ksql/SqlBase.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SqlBaseParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SqlBaseVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `tableName`
	 * labeled alternative in `SqlBaseParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;

	/**
	 * Visit a parse tree produced by the `joinRelation`
	 * labeled alternative in `SqlBaseParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinRelation?: (ctx: JoinRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `relationDefault`
	 * labeled alternative in `SqlBaseParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationDefault?: (ctx: RelationDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `between`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetween?: (ctx: BetweenContext) => Result;

	/**
	 * Visit a parse tree produced by the `inList`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInList?: (ctx: InListContext) => Result;

	/**
	 * Visit a parse tree produced by the `like`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLike?: (ctx: LikeContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullPredicate`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullPredicate?: (ctx: NullPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `distinctFrom`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistinctFrom?: (ctx: DistinctFromContext) => Result;

	/**
	 * Visit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `SqlBaseParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `SqlBaseParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `joinWindowWithBeforeAndAfter`
	 * labeled alternative in `SqlBaseParser.withinExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinWindowWithBeforeAndAfter?: (ctx: JoinWindowWithBeforeAndAfterContext) => Result;

	/**
	 * Visit a parse tree produced by the `singleJoinWindow`
	 * labeled alternative in `SqlBaseParser.withinExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleJoinWindow?: (ctx: SingleJoinWindowContext) => Result;

	/**
	 * Visit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigitIdentifier?: (ctx: DigitIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `SqlBaseParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `atTimeZone`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtTimeZone?: (ctx: AtTimeZoneContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `concatenation`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatenation?: (ctx: ConcatenationContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryStatement`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryStatement?: (ctx: QueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `listProperties`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListProperties?: (ctx: ListPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by the `listTopics`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListTopics?: (ctx: ListTopicsContext) => Result;

	/**
	 * Visit a parse tree produced by the `listStreams`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListStreams?: (ctx: ListStreamsContext) => Result;

	/**
	 * Visit a parse tree produced by the `listTables`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListTables?: (ctx: ListTablesContext) => Result;

	/**
	 * Visit a parse tree produced by the `listFunctions`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListFunctions?: (ctx: ListFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `listConnectors`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListConnectors?: (ctx: ListConnectorsContext) => Result;

	/**
	 * Visit a parse tree produced by the `listTypes`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListTypes?: (ctx: ListTypesContext) => Result;

	/**
	 * Visit a parse tree produced by the `showColumns`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowColumns?: (ctx: ShowColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by the `describeFunction`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeFunction?: (ctx: DescribeFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `describeConnector`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeConnector?: (ctx: DescribeConnectorContext) => Result;

	/**
	 * Visit a parse tree produced by the `printTopic`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintTopic?: (ctx: PrintTopicContext) => Result;

	/**
	 * Visit a parse tree produced by the `listQueries`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListQueries?: (ctx: ListQueriesContext) => Result;

	/**
	 * Visit a parse tree produced by the `terminateQuery`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerminateQuery?: (ctx: TerminateQueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `setProperty`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetProperty?: (ctx: SetPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by the `unsetProperty`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsetProperty?: (ctx: UnsetPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by the `createStream`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateStream?: (ctx: CreateStreamContext) => Result;

	/**
	 * Visit a parse tree produced by the `createStreamAs`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateStreamAs?: (ctx: CreateStreamAsContext) => Result;

	/**
	 * Visit a parse tree produced by the `createTable`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTable?: (ctx: CreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `createTableAs`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableAs?: (ctx: CreateTableAsContext) => Result;

	/**
	 * Visit a parse tree produced by the `createConnector`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateConnector?: (ctx: CreateConnectorContext) => Result;

	/**
	 * Visit a parse tree produced by the `insertInto`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertInto?: (ctx: InsertIntoContext) => Result;

	/**
	 * Visit a parse tree produced by the `insertValues`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertValues?: (ctx: InsertValuesContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropStream`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropStream?: (ctx: DropStreamContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropTable`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTable?: (ctx: DropTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropConnector`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropConnector?: (ctx: DropConnectorContext) => Result;

	/**
	 * Visit a parse tree produced by the `explain`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplain?: (ctx: ExplainContext) => Result;

	/**
	 * Visit a parse tree produced by the `runScript`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRunScript?: (ctx: RunScriptContext) => Result;

	/**
	 * Visit a parse tree produced by the `registerType`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegisterType?: (ctx: RegisterTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropType`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropType?: (ctx: DropTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeZoneString`
	 * labeled alternative in `SqlBaseParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneString?: (ctx: TimeZoneStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalExpression`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleCase`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCase?: (ctx: SimpleCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `searchedCase`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCase?: (ctx: SearchedCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `cast`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayConstructor?: (ctx: ArrayConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `subscript`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `dereference`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereference?: (ctx: DereferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectSingle`
	 * labeled alternative in `SqlBaseParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectSingle?: (ctx: SelectSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectAll`
	 * labeled alternative in `SqlBaseParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectAll?: (ctx: SelectAllContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanDefault`
	 * labeled alternative in `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanDefault?: (ctx: BooleanDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `innerJoin`
	 * labeled alternative in `SqlBaseParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerJoin?: (ctx: InnerJoinContext) => Result;

	/**
	 * Visit a parse tree produced by the `outerJoin`
	 * labeled alternative in `SqlBaseParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOuterJoin?: (ctx: OuterJoinContext) => Result;

	/**
	 * Visit a parse tree produced by the `leftJoin`
	 * labeled alternative in `SqlBaseParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftJoin?: (ctx: LeftJoinContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.singleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleStatement?: (ctx: SingleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleExpression?: (ctx: SingleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.tableElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableElements?: (ctx: TableElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.tableElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableElement?: (ctx: TableElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.tableProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProperties?: (ctx: TablePropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.tableProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProperty?: (ctx: TablePropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.printClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintClause?: (ctx: PrintClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.intervalClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalClause?: (ctx: IntervalClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.limitClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClause?: (ctx: LimitClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.windowExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowExpression?: (ctx: WindowExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.tumblingWindowExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTumblingWindowExpression?: (ctx: TumblingWindowExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.hoppingWindowExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHoppingWindowExpression?: (ctx: HoppingWindowExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.sessionWindowExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSessionWindowExpression?: (ctx: SessionWindowExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.windowUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowUnit?: (ctx: WindowUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.groupBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupBy?: (ctx: GroupByContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingElement?: (ctx: GroupingElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.groupingExpressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingExpressions?: (ctx: GroupingExpressionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `values`
	 * labeled alternative in `SqlBaseParser.statementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementstatementgroupingElementselectItemselectItemrelationrelationjoinTypejoinTypejoinTypewithinExpressionwithinExpressionrelationPrimarybooleanExpressionbooleanExpressionbooleanExpressionpredicatepredicatepredicatepredicatepredicatepredicatevalueExpressionvalueExpressionvalueExpressionvalueExpressionvalueExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressionprimaryExpressiontimeZoneSpecifieridentifieridentifieridentifieridentifiernumbernumberliteralliteralliteralliteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValues?: (ctx: ValuesContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectItem?: (ctx: SelectItemContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelation?: (ctx: RelationContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinType?: (ctx: JoinTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.joinWindow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinWindow?: (ctx: JoinWindowContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.withinExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithinExpression?: (ctx: WithinExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.joinWindowSize`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinWindowSize?: (ctx: JoinWindowSizeContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.joinCriteria`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.aliasedRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasedRelation?: (ctx: AliasedRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.columns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumns?: (ctx: ColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationPrimary?: (ctx: RelationPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.predicated`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpression?: (ctx: ValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneSpecifier?: (ctx: TimeZoneSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.baseType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseType?: (ctx: BaseTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.whenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClause?: (ctx: WhenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.nonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReserved?: (ctx: NonReservedContext) => Result;
}

