export const formatData = (data) => {
  let i = 0;
  return data.reduce((acc, curr) => {
    if (curr.ccy === 'BTC') return acc
    acc.push({
      curr: curr.ccy,
      buy: Number(curr.buy).toFixed(2),
      sell: Number(curr.sale).toFixed(2),
      _id: i++
    });
    return acc
  }, [])
}
