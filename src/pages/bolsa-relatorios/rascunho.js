const dadost = taxas.map((item, array, i) => {
  console.log(item);
  const id = taxas.findIndex((el) => el.titulo == item.titulo);
  console.log('dados');
  console.log(id);
  const quantidade = item.transactions.reduce((acc, item) => acc + parseInt(item.quantidade), 0);
  const preco = item.transactions.reduce((acc, item) => acc + parseFloat(item.preco), 0);
  const valor = item.transactions.reduce((acc, item) => acc + parseFloat(item.valor), 0);
  const avg = preco / item.transactions.length;

  /*
  const emoluentes = item.transactions.reduce((acc, item) => acc + parseFloat(item.tx_emolumento), 0);
  const taxas = item.transactions.reduce((acc, item) => acc + parseFloat(item.taxes), 0);
  const TaxasTotal = item.transactions.reduce((acc, item) => acc + parseFloat(item.taxes), 0);
  const taxasLiquida = item.transactions.reduce((acc, item) => acc + parseFloat(item.tx_liquid), 0);
  const taxasOperacao = item.transactions.reduce((acc, item) => acc + parseFloat(item.tx_impostos), 0);
  const taxasRegistro = item.transactions.reduce((acc, item) => acc + parseFloat(item.tx_registro), 0);
  const outras = item.transactions.reduce((acc, item) => acc + parseFloat(item.tx_outras), 0);
  */

  const tipo = item.transactions[0].tipo;
  const emolumentos = parseFloat(item.transactions[0].vlr_emolumentos);
  const taxas = parseFloat(item.transactions[0].vlr_tx_liquidacao);
  //const TaxasTotal = (parseFloat(item.transactions[0].vlr_total_liquido-parseFloat(item.transactions[0].vlr_liquido_operacoes));
  const taxasLiquida = parseFloat(item.transactions[0].vlr_tx_liquidacao);
  // const taxasOperacao = parseFloat(item.transactions[0].); -- operação remover
  const taxasRegistro = parseFloat(item.transactions[0].vlr_tx_registro);
  const outros = parseFloat(item.transactions[0].outros);
  const table = {
      id: id,
      paper: item.papper,
      quantity: quantidade,
      //vlr_unit: preco,
      vlr_unit: avg.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      price: valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      tipo: tipo,
      emolumnts: emolumentos.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      taxes: taxasLiquida.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      total_taxes: /** corrigir */ outros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      tx_liquid: 'a corrigir', //taxasLiquida.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      tx_operation: 'a corrigir', //taxasOperacao.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      tx_reg: taxasRegistro.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      others: outros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  };

  table2.push({
      id: 1,
      paper: 'titulo',
      tipo: 'tipo',
      quantity: 4,
      vlr_unit: 22,
      price: 88,
      //total
      liquid_taxes: 57,
      register_taxes: 44,
      emolumnts: 45,
      tx_operation: 22,
      others: 12
  });
  console.log(table2);
  return table2;
});