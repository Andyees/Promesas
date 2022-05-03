const mensaje =function(){
    console.log("este mensaje se muestra despues de 5 segundos")
}

// setTimeout(function (){
//     console.log("este mensaje se muestra despues de 5 segundos")
// },5000)


let x=10
const saludar=(nombre)=>{

    return new Promise((res,reject)=>{

        if(x==10){
         reject("error no puedo responder")
        }
        else{
        let persona={
            nombre: nombre,
            Apellido:"Agudelo",
            edad:23,
        }
        setTimeout(()=>{
            res(persona)
        },1)
    }})}

    const saludar2=()=>{

        return new Promise((res,reject)=>{
    
            if(x==10){
             reject("error no puedo responder")
            }
            else{
            let persona={
                nombre: "Victor",
                Apellido:"Perez",
                edad:23,
            }
            setTimeout(()=>{
                res(persona)
            },1)
        }})}


saludar("andres").then(res=>{
    console.log(res)

    let responder =  "Hola "+res.nombre+" "+res.Apellido +" como vas"
    console.log (responder)
}).then

console.log("Esto se debe imprimir antes de que se resuelva la promesa")

