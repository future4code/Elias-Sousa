function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 
const salarioFixo = 2000
const comissao = (valorTotalVendas*5) /100
const salarioFinal = salarioFixo + comissao + (100*qtdeCarrosVendidos)

return salarioFinal


}