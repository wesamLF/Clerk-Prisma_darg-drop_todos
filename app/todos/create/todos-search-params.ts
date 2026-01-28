import { createLoader, parseAsBoolean, parseAsString, parseAsStringEnum } from 'nuqs/server'





export const searchParamsLoader = createLoader({
    query: parseAsString.withOptions({ shallow: false, }),
    completed: parseAsBoolean.withOptions({ shallow: false, })


})

