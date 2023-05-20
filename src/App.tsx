import { Props } from "./components/Props";
import { WhatObj } from "./components/PropsObj";
import { What } from "./components/PropsOp";
import { Fahrenheit, Kelvin, Math } from "./components/TypesFunctions"


function App () {
  return (
    <>
      <h1 className="text-2xl mt-10 ml-10">Props con tipos de datos</h1>
      <hr />

      <Props />
  
      <What name="Its my own example" task="by MontoyitaDev" />

      <WhatObj commit={{ name: "MontoyitaDev", uid: "Desarrollador front-end"}}/>

      <div className=" w-48 divide-slate-400/20 rounded-lg text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 mt-5">
        <h1 className="font-medium text-slate-900 ml-3">Convert temperature 💡</h1>
        <Math
          reactValue={(value) => (
            <>
              <Kelvin value={+value} />
              <Fahrenheit value={+value} />
            </>
          )}
         />
      </div>
    </>
  )
}

export default App;


