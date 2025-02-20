import { useEffect, useState } from "react";

// debounce hook to delay the search query
export const useDebounce = <T>(value: T, delay: number = 500) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)
        return () => clearTimeout(timeout)
    }, [value, delay])

    return debouncedValue
}