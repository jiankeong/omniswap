// @ts-ignore
const tokenfs = require('fs');

let tokenfiles = tokenfs.readdirSync('public/tokens');

function isTokenPic(filename:string):boolean {
    return ["png","jpg","svg"].includes(filename.slice(-3))
}
let tokenstr = ""
const tokenarr = []
for (let i=0,len=tokenfiles.length;i<len;i++){
    const data = tokenfiles[i]
    if(isTokenPic(data)){
        const noType = data.slice(0,-4)
        tokenstr += `const ${noType} = '/tokens/${data}';`
        tokenstr += "\r\n"
        tokenarr.push(noType)
    }
}
tokenstr += "\r\n"
tokenstr += `const ImageToken:any = {`
tokenstr += "\r\n  "
tokenstr += tokenarr.join(",\r\n  ")
tokenstr += "\r\n"
tokenstr += `}`
tokenstr += "\r\n"
tokenstr += `export default ImageToken;`
//把处理后的数据写入文件
tokenfs.writeFileSync('public/tokens/ImageToken.ts',tokenstr)
console.log(`执行tokens命令完成✅`)
console.log(`总共${tokenarr.length}张图片`)
