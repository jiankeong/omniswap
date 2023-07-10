export default function getContent() {
    // return
    const obj:any = {}
    const root = document.getElementById("__next")
    // for(let i=0,len=root.childNodes.length;i<len;i++){
    //     console.log(root.childNodes[i].nodeType)
    // }
    getNodesText(root)
    console.log(obj)
    function getNodesText(ele: any) {
        if(!ele) return
        if(ele.nodeType === Node.TEXT_NODE){
            const str = ele.data
            const reg = /\s/g
            const matchRes = str.match(reg)
            const areg = /^[a-zA-Z]/
            if(areg.test(str)){
                if(matchRes && matchRes.length>=3){
                    let first = str.indexOf(" ")
                    let second = str.indexOf(" ",first+1)
                    let third  = str.indexOf(" ",second+1)

                    const key = str.slice(0,third)
                    obj[key] = str
                }else {
                    obj[str] = str
                }
            }
        }
        for(let i=0,len=ele.childNodes.length;i<len;i++){
            getNodesText(ele.childNodes[i])
        }

    }
}

