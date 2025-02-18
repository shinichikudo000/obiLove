import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import SearchBar, { searchIconAnim } from './searchBar'
import { useDebounce } from '@/hooks/useDebounce'

const ObituarySearchBar = () => {
    const [search, setSearch] = useState<string>()

    const debouncedSearch = useDebounce(search, 500)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { status, error, data, isFetching } = useQuery({
        queryKey: ['search', debouncedSearch],
        queryFn: () => {
            if (!debouncedSearch) {
                return null;
            }
    
            const data = searchMovie({ q: debouncedSearch, page: 1 });
            return data ?? null;
        },
        staleTime: 60000,
        gcTime: 1000 * 6 * 5
    })

    const isLoading = status === 'pending' || isFetching

    const searchResultAnim = {
        hidden: {
            opacity: 0,
            y: -30,
        },
        visible: {
            opacity: 1,
            y: 0,
            marginTop: 16
        },
    }

    return (
        <div className={
            `bg-background
            min-h-[40px]
            h-full
            sm:w-[400px] 
            cursor-pointer
            md:cursor-text
            sm:px-4
            py-2
            mb-auto
            z-50
            ${isOpen ? 'shadow-shadow rounded-b-lg w-[300px] px-4' : 'w-[40px]'}`
        }>  
            <div className="h-[50px] flex justify-stretch">
                <div className="overflow-hidden h-full flex justify-center items-center">
                    <motion.div
                        initial="hidden"
                        animate={isOpen ? 'visible' : 'hidden'}
                        variants={searchIconAnim('right')}
                    >
                        <ArrowLeft onClick={() => setIsOpen(false)} className='cursor-pointer'/> 
                        {/* onClickFn={() => setIsOpen(false)} */}
                    </motion.div>
                </div>
                <SearchBar 
                    id="movie-search"
                    value={search || ''} 
                    placeholder="Search" 
                    onChange={setSearch} 
                    onFocus={() => setIsOpen(true)}
                    isOpen={isOpen}
                />
            </div>
            <motion.div variants={searchResultAnim} initial="hidden" animate={isOpen ?  'visible' : 'hidden'} className={`${isOpen ? 'block' : 'hidden'}`}>
                {
                    search ? (
                        isLoading ? (
                            <div className='w-full flex justify-center items-center px-4 py-2'>
                                {/* <LoadingAnimation /> */}
                            </div>
                        ) : (
                            error? (
                                <div className='w-full flex justify-center items-center px-4 py-2'>
                                    <p>No results found.</p>
                                </div>
                            ) : (
                                data?.map(() => (
                                    // <MovieSearchResult key={movie.id} movie={movie} onClick={() => setIsOpen(false)}/>
                                    <div></div>
                                ))
                            )
                        )
                    ) : (
                        <div>

                        </div>
                    )
                }
            </motion.div>
        </div>
    )
}

export default ObituarySearchBar


// {
//     search ? (
//         isLoading ? (
//             <div className='w-full flex justify-center items-center px-4 py-2'>
//                 {/* <LoadingAnimation /> */}
//             </div>
//         ) : (
//             error? (
//                 <div className='w-full flex justify-center items-center px-4 py-2'>
//                     <p>No results found.</p>
//                 </div>
//             ) : (
//                 data?.map(() => (
//                     // <MovieSearchResult key={movie.id} movie={movie} onClick={() => setIsOpen(false)}/>
//                 ))
//             )
//         )
//     ) : (
//         <></>
//     )
// }