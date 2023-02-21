//Tags
 const form = document.querySelector('#form')
 const vla = document.querySelector("#a")
 const vlb = document.querySelector("#b")
 const vlc = document.querySelector("#c")
 const delta = document.querySelector("#delta")
 const raiz_delta = document.querySelector("#raiz_delta")
 const botao = document.querySelector("#botao")
 const resultado1 = document.querySelector("#result1")
 const resultado2 = document.querySelector("#result2")
 const container_conta = document.querySelector("#conta")
 const container_resultado = document.querySelector("#resultado")
 //Calcular
 async function Calculo(a,b,c){
        const delta = (b**2)-4*(a*c)
        const x1 = (-b-Math.sqrt(delta))/(2*a)
        const x2 = (-b+Math.sqrt(delta))/(2*a)
    
        Resultado(x1,x2,delta)

 }
 //Mostrar Resultado
 async function Resultado(x1,x2,d){
    container_resultado.classList.remove("hide")    
    container_resultado.classList.add("resultado")

    delta.innerHTML=`Δ = ${d}`
    if(d < 0){
        raiz_delta.innerHTML = `Raiz Impossivel`

    }
    else if(d >= 0){
    raiz_delta.innerHTML=`√Δ = ${Math.sqrt(d)}` 
    resultado1.innerHTML = `x1 = ${x1}`
    resultado2.innerHTML = `x2 = ${x2}`
    }
 }

botao.addEventListener('click', (event)=>{
    const x = Number(vla.value)
    const y = Number(vlb.value)
    const z = Number(vlc.value)
    Calculo(x,y,z)
  
})
vlc.addEventListener('keyup', function(e){
    if (e.keyCode == 13) {
    const x = Number(vla.value)
    const y = Number(vlb.value)
    const z = Number(vlc.value)
    Calculo(x,y,z)}
  
})