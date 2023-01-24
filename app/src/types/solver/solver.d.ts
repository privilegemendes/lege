import Board from "../board";

export = Solver;
/**
 * This class contains the logic for a nonogram solver.
 *
 * @class Solver
 * @constructor
 * @param {Board} board - The game board with unknowns the solver should solve.
 */
declare class Solver extends Board {
    constructor(board: Board);
    board: Board;

    static findPossibleSolutions(board: Board): Board[];
    /**
     * Makes a copy of a Board that deep-copies board data and shallow-copies everything else.
     *
     * @method partialCopyBoard
     * @static
     * @param {Board} board
     * @return {Board}
     */
    static partialCopyBoard(board: Board): Board;
    /**
     * Performs any simple solution steps possible given a single row or column.
     *
     * The return value is either `null` (indicating there are no valid line solutions), or
     * an array in the form [ numNewlySolvedCells, numRemainingUnknownCells ]
     * This function may transform some `null` elements into arrays of possible values.
     *
     * @method simpleSolveLine
     * @param {number[]} line - The row or column value array.  This is updated in-place with discovered values.
     * @param {object[]} clues - Array of clue objects for the row/col, each containing { value: X, run: Y }
     * @param {number} boardMaxValue - The maximum value that can be used in the board.
     * @param {boolean} [simpleSolveCrossLines=true] - Whether to take into account partially know cells; increases difficulty
     * @return {number[]|Null}
     */
    static simpleSolveLine(line: number[], clues: object[], boardMaxValue: number, simpleSolveCrossLines?: boolean | undefined): number[] | null;

    /**
     * Duplicates this Solver with a partially copied Board.
     *
     * @method partialDup
     * @return {Solver}
     */
    partialDup(): Solver;
    /**
     * Repeatedly makes passes on the board and simple-solves all rows and columns
     * until no more can be simple-solved.
     *
     * The returned object contains:
     * - steps - number of simple solve "steps" where each step involves inferring values for one row/col
     * - remainingUnknowns - number of remaining unknown cells after simple solve batch
     * - contradiction - true if simple-solving lead to a logical contradiction, meaning the board is unsolveable
     *
     * @method simpleSolveBatch
     * @return {object}
     */
    simpleSolveBatch(simpleSolveCrossLines?: boolean): object;
}
//# sourceMappingURL=solver.d.ts.map