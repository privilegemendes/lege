import Board from "../board/board";

export = Builder;
/**
 * This class contains the logic for building a puzzle, given a desired set of data.
 *
 * This builder does more than just computing clues.  It repeatedly attempts to solve
 * puzzles using methods similar to what a human might use, and attempts to construct
 * a puzzle to given difficulty parameters.  It uses these parameters to determine
 * which cells should be prefilled for an optimal difficulty.  It also ensures
 * solution uniqueness.
 *
 * Because of the method used, the builder can sometimes take time to run.  Limits
 * can be put on the builder's runtime using some of the parameters (those beginning with "max").
 *
 * Available parameters are:
 * - maxSolverBranches - Max number of allowed branches for the recursive solver.  If this is set
 *     to 0, only puzzles that can be solved analytically row-by-row are generated.  Nonzero values
 *     indicate the total number of logical "branches" that must be taken when experimenting/brute
 *     forcing values, including dead ends.  This corresponds to an effective worst-case number
 *     of branches a human might have to take when solving.
 * - maxDeadEndDepth - For non-solution branches (ie, dead-ends), the maximum number of branches that
 *     might have to be followed inside of that dead end.  Set to 0 to enforce dead ends to be
 *     determinable using row-by-row logic.
 * - maxDeadEndSteps - The maximum number of row-by-row logical steps required to discover that a
 *     branch is a dead-end.
 * - maxTotalSteps - Worst case total number of row-by-row logical steps required to solve the
 *     puzzle, including following every dead end path.
 * - maxSolutionDepth - The number of forks along the solution path, excepting row-by-row logic.
 *     This is 0 for purely row-by-row puzzles.
 * - targetDeadEnds - Desired number of dead ends in the puzzle
 * - targetTotalSteps - Target number of total steps followed
 * - targetSolutionDepth - Target depth of solution
 * - numPuzzleIterations - The builder will try this number of random puzzle configurations, and
 *     pick the one that most optimally fits the targets.  This can be set to 1 to use the first
 *     random puzzle selected.
 * - simpleSolveCrossLines - Whether to allow the simple solver to take into account partially
 *     known cells.
 *
 * @class Builder
 * @constructor
 * @param {Board} board - Board containing data (no unknowns).
 * @param {object} [params]
 */
declare class Builder extends Board {

    constructor(board: Board, params?: {});
    filledBoard: Board;
    setBuilderParams(params?: {}): void;
    params: {} | undefined;

    /**
     * This is the main accessor method of the class.  Given a board with filled-in data, and
     * a difficulty level 1-10, it generates and returns a puzzle board with unknown cells.
     *
     * The returned object contains:
     * - board - The puzzle board
     * - stats - An object containing various statistics on solution difficulty
     * - score - A score of how closely the board fits the parameters; lower is better
     *
     * @method buildPuzzleFromData
     * @param {Board} board - The board containing data to generate a puzzle from
     * @param {number} level - The difficulty level from 1 to 10
     * @return {object}
     */
    static buildPuzzleFromData(board: Board, level?: number): object;
    /**
     * Returns the params object associated with a given difficulty level from 1-10.
     *
     * @method makeParamsFromDifficulty
     * @param {number} level
     * @return {object}
     */
    static makeParamsFromDifficulty(level: number): object;


    /**
     * Checks to see if this board is solveable, and returns stats on the solution.
     * Returns object with solver stats if can be solved, or null if can't be solved within parameters to a unique solution.
     * Bails out early if the maximums specified in the parameters are hit.
     *
     * @method _trySolve
     * @private
     * @param {Board}
     * @return {object}
     */
    private _trySolve;
    /**
     * Starts filling in random cells of the puzzle, trying to solve it, and calling
     * a callback for each.
     *
     * @method _tryRandomPuzzle
     * @private
     * @param {Function} puzzleCb
     */
    private _tryRandomPuzzle;
    /**
     * Generate a score for how close a puzzle solution is to the target stats.
     *
     * @method _scoreStats
     * @private
     * @param {object} stats
     * @param {Board} board
     * @return {number}
     */
    private _scoreStats;
    /**
     * Builds a puzzle using the builder parameters.
     *
     * @method buildPuzzle
     * @return {object}
     */
    buildPuzzle(): object;
}
//# sourceMappingURL=builder.d.ts.map