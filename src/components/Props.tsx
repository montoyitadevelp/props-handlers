type Props = {
    name: string;

}
//Functional component, validacion en la propiedad default props de React
const Homie: React.FC<Props> = props => {
    return <h1><li>Whats popping {props.name}</li></h1>
}
//Añadirle el tipo de datos a nuestras propiedades

export const Props = () => {
    
  return (
    <div className="Props " >
        <h3 className="mt-5 text-xl">
            Ejemplo:
        </h3>
        <Homie name="in your mind" />
    </div>
  )
}
