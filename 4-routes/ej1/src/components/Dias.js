function Dias (){
    let dias = {
        uno: 'Lunes',
        dos: 'Martes',
        tres: 'Miércoles',
        cuatro: 'Jueves',
        cinco: 'Viernes',
        seis: 'Sábado',
        siete: 'Domingo',
    }
    
   
    
    
    let diasLi=[]
    for (const dia in dias) {
        diasLi.push((dias[dia]))
    
            
        }
    
    
    return (
        <>
        <ul>
            {diasLi.map((dia) =><li>{dia}</li>)}   
        </ul>
        </>
    
    );
    }
    export default Dias