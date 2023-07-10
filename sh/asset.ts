// @ts-ignore
const assetsFS = require('fs');

let imageFiles = assetsFS.readdirSync('public/images');
function isPic(filename:string):boolean {
    return ["png","jpg","svg"].includes(filename.slice(-3))
}
let str = ""
const arr = []
for (let i=0,len=imageFiles.length;i<len;i++){
    const data = imageFiles[i]
    if(isPic(data)){
        const noType = data.slice(0,-4)
        str += `const ${noType} = '/images/${data}';`
        str += "\r\n"
        arr.push(noType)
    }
}
str += "\r\n"
str += `const ImageCommon:any = {`
str += "\r\n  "
str += arr.join(",\r\n  ")
str += "\r\n"
str += `}`
str += "\r\n"
str += `export default ImageCommon;`
//把处理后的数据写入文件
assetsFS.writeFileSync('public/images/ImageCommon.ts',str)
console.log(`执行assets命令完成✅`)
console.log(`总共${arr.length}张图片`)
