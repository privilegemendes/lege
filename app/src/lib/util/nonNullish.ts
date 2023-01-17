export function nonNullish<T>(value: T | undefined | null): value is T
{
    return value !== undefined && value !== null;
}