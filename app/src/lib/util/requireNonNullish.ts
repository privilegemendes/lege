export function requireNonNullish<T>(value: T | null | undefined): T
{
    if (value === null || value === undefined)
        throw new Error(`Value should be non-nullish, found ${value}`);
    return value;
}