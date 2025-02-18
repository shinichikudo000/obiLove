
import { motion } from 'motion/react'
import { Search } from 'lucide-react'


interface SearchBarProps {
    id: string,
    value: string,
    placeholder: string,
    onChange: (value: string) => void,
    onFocus: () => void,
    isOpen: boolean
}

const searchBarAnim = {
    open: {
        width: '85%'
    }, 
    close: {
        width: '100%'
    },
}

export const searchIconAnim = (direction: 'left' | 'right') => ({
    hidden: {
        opacity: 0,
        x: direction === 'left' ? -20 : 20
    }, 
    visible: {
        opacity: 1,
        x: 0
    },
})
// reusable search bar component
const SearchBar = ({ id, value, placeholder, onChange, onFocus, isOpen }: SearchBarProps) => {
    return (
    <motion.div 
        id={`${id}-form-container`}
        initial="close"
        animate={isOpen ? "open" : "close"}
        variants={searchBarAnim}
        className={`sm:w-full h-full flex justify-stretch items-center bg-accent rounded-full ml-auto
            ${isOpen ? 'w-[300px] px-4 ' : 'w-[40px] px-2'}
            `}>
        <motion.div
            initial="visible" 
            animate={isOpen ? "hidden" : "visible"}
            variants={searchIconAnim('left')}
            className={`${isOpen ? 'hidden' : 'block'}`}
            onClick={() => onFocus()}
        >
            <Search />
        </motion.div>
        <form id={`${id}-form`} onSubmit={(e) => e.preventDefault()} className={`ml-4 w-[80%] sm:block ${isOpen ? 'block' : 'hidden'}`}>
            <input
                id={`${id}-query-input`}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => {
                    onFocus()
                }}
                placeholder={placeholder}
                aria-label="Search"
                className="bg-[var(--neutral-light)] focus:outline-none w-full"
            />
        </form>
    </motion.div>
    )
}

export default SearchBar