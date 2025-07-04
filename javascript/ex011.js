var idade = 66
console.log(`voce tem ${idade} anos`)
if (idade < 16){
    console.log(`nao vota`)
}else{
    if (idade < 18 || idade > 65){
        console.log('voto opcional')
    }else{
        console.log('vota')
    }
}

var agora = new Date()
var hora = agora.getHours()
console.log(`agora sao exatamente ${hora} horas`)
if(hora < 12){
    console.log(`bom dia`)
}else if( hora < 18){
    console.log(`boa tarde`)
}else{
    console.log(`boa noite`)
}