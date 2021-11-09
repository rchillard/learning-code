function tumbler() {
  let fruit = ["🍒","🍊","🍇"];
  let randomNumber= Math.floor(Math.random() * 3);
  return fruit[randomNumber];
}

function judge() {
  let tumbler1 = tumbler()
  let tumbler2 = tumbler()
  let tumbler3 = tumbler()
  let result = `${tumbler1} ${tumbler2} ${tumbler3}`

  if(tumbler1 === tumbler2 && tumbler2 === tumbler3) {
    return `${result} means you win!`
  } else {
    return `${result} means you lose!`
  }
}

class Machine extends React.Component {
  render() {
    return (
      <div>{ judge() }</div>
    )
  }
}