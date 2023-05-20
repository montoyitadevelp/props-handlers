type Commit = {
    name: string;
    uid: string; //Typealias
}

type Props = {
    commit?: Commit //Opcional | undefined
}

export const WhatObj = (props: Props) => {
    const { commit } = props

    if (!commit) {
        return <h1 className="text-2xl">If the plan doesnt work</h1>
    }

    return (
        <div className=" divide-y divide-slate-400/20 rounded-lg text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 mt-5 mr-96">
            <div className="flex items-center p-4">
                <img src="https://th.bing.com/th/id/OIP.e3ATU44bf0kuJLmmGhjSOAHaE8?pid=ImgDet&rs=1" alt="" className="h-10 w-10 flex-none rounded-full" 
                />
                <div className="ml-4 flex-auto">
                    <div className="font-medium">{commit.name}</div>
                    <div className="mt-1 text-slate-700">{commit.uid}</div>
                </div>
                <div className="pointer-events-auto ml-4 flex-none rounded-md py-1 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                    Looking here
                </div>
            </div>
        </div>
    )
}