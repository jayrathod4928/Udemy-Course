export default function TabButton ({ children, onSelect, isSelected, ...props }) {
    console.log('TABBUTTON Component Executing');
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>
                {children}
        </button>
        </li>
);
}
