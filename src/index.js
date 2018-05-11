import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]

  /*return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osa1={osat[0].nimi} osa2={osat[1].nimi} osa3={osat[2].nimi} tehtavia1={osat[0].tehtavia} tehtavia2={osat[1].tehtavia} tehtavia3={osat[2].tehtavia}/>
      <Yhteensa tehtavia={osat[0].tehtavia+osat[1].tehtavia+osat[2].tehtavia}/>
    </div>
  )*/
  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={osat} />
      <Yhteensa osat={osat} />
    </div>
  )
}

const Otsikko = (props) => {
  return (
    <div>
      <p>{props.kurssi}</p>
    </div>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa osa={props.osat[0]}/>
      <Osa osa={props.osat[1]}/>
      <Osa osa={props.osat[2]}/>
    </div>
  )
}

const Osa = (props) => {
  return (
    <div>
      <p>{props.osa.nimi} {props.osa.tehtavia}</p>
    </div>
  )
}

const Yhteensa = (props) => {
  return (
    <div>
      <p>yhteensä {props.osat[0].tehtavia+props.osat[1].tehtavia+props.osat[2].tehtavia} tehtävää</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
