const Item = ({children}) =>{ 
    return(
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
        {children} 
        </a>
    ) //props texto ou children pode ser utilizado, depende da necessidade da sua programacao.
}

export default Item;