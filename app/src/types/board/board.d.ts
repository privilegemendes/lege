export = Board;
/**
 * This class represents a puzzle board and includes the dimensions (rows and columns),
 * clues, and cell data.  Cell data may or may not include unknowns.  Also supported
 * are color nonograms, where each cell can contain colors other than black.
 *
 * Board data is accessible at the `data` property and is a single-dimensional array
 * of data.  Accessors should be used to access elements.
 *
 * Dimensions are available as the `rows` and `cols` properties.
 *
 * Clues are accessible at the `rowClues` and `colClues` properties.  These are arrays
 * such that the array index corresponds to the number of row or column.  0,0 is at
 * the upper-left of the puzzle.  This array contains arrays of clue objects, where
 * each clue object looks like `{ value: 1, run: 3 }`.  `value` represents the color of
 * the clue, and is always 1 for black-and-white puzzles.  `run` is the count of the clue.
 *
 * Values in the data (and the clues) are represented as numbers.  0 is 'blank', and 1+
 * are cell colors.  The special value `null` can be used in the data (but not in the clues)
 * to represent an unknown cell.
 *
 * @class Board
 * @constructor
 * @param {number} rows - number of rows, ie, height
 * @param {number} cols - number of columns, ie, width
 */
declare class Board {
    constructor(rows: number, cols: number);
    rows: number;
    cols: number;
    rowClues: number[][];
    colClues: number[][];

    /**
     * Method to generate random board data.
     *
     * @method makeRandomBoard
     * @static
     * @param {number} rows - number of rows
     * @param {number} cols - number of columns
     * @param {number} [values=1] - number of values, 1 for black-and-white
     * @param {number} [density=null] - Density of filled-in cells.  Default is to pick at random between 0.2 and 0.8 .
     * @return {Board}
     */
    static makeRandomBoard(rows: number, cols: number, values?: number | undefined, density?: number | undefined): Board;
    static deserialize(str: string): Board;

    /**
     * Resizes the board
     *
     * @method resize
     * @param {number} newRows
     * @param {number} newCols
     * @param {number} defaultValue
     */
    resize(newRows: number, newCols: number, defaultValue?: number): void;
    data: unknown;
    /**
     * Fills the board data with all of the same value.
     *
     * @method clearData
     * @param {number} [value=null] - Value to set
     */
    clearData(value?: number | null): void;
    /**
     * Creates a string token that uniquely represents the full state of board data.
     *
     * @method makeToken
     */
    makeToken(): string;
    /**
     * Take the board data and compute the board clues from it.
     *
     * @method buildCluesFromData
     */
    buildCluesFromData(): void;
    _makeCluesFromData(includeBlanks?: boolean, countUnknownAsBlank?: boolean): {
        rowClues: {
            value: number;
            run: number;
        }[][];
        colClues: {
            value: number;
            run: number;
        }[][];
    };
    /**
     * Returns true if there are no unknowns
     *
     * @method isComplete
     * @return {Boolean}
     */
    isComplete(): boolean;
    /**
     * Checks for a valid solution.  Returns true if valid.
     *
     * @method validate
     * @return {Boolean}
     */
    validate(countUnknownAsBlank?: boolean): boolean;
    get(row: number, col: number): number;
    set(row: number, col: number, value: number): void;
    getRow(row: number): number[];
    getCol(col: number): number[];
    setRow(row: number, line: number): void;
    setCol(col: number, line: number): void;
    /**
     * Computes and returns the maximum value present across clues and data.
     *
     * @method getMaxValue()
     * @return {number}
     */
    getMaxValue(): number;
    /**
     * Prints to the console a textual representation of this board.
     *
     * @method printBoard
     * @param {String} [blankStr='X'] - Character to use for blank cells
     * @param {String} [unknownStr=' '] - Character to use for unknown cells
     */
    printBoard(blankStr?: string | undefined, unknownStr?: string | undefined): void;
    serialize(): string;
}
//# sourceMappingURL=board.d.ts.map