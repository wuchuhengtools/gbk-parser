import chineseDic from "./chineseDic"
import chineseDic2 from "./chineseDic2"
import chineseDic3 from "./chineseDic3"
import chineseDic4 from "./chineseDic4"
import chineseDic5 from "./chineseDic5"
import asciiDic from "./asciiDic"


export const decodeByHex = (hex: string): string => {
    let isSlicing = true
    let res = []
    let sliceStart = 0
    while (isSlicing) {
        let e = hex.slice(sliceStart, sliceStart + 2)
        // ascii 表
        let key = `00${e}`
        let chart: string
        if (asciiDic.hasOwnProperty(key)) {
            sliceStart += 2
            // @ts-ignore
            chart = asciiDic[key]
        } else {
            // 汉字码表
            e = hex.slice(sliceStart, sliceStart + 4)
            // @ts-ignore
            if (chineseDic.hasOwnProperty(e)) {
                // @ts-ignore
                chart = chineseDic[e]
            } else if (chineseDic2.hasOwnProperty(e)) {
                // @ts-ignore
                chart = chineseDic2[e]
            } else if (chineseDic3.hasOwnProperty(e)) {
                // @ts-ignore
                chart = chineseDic3[e]
            } else if (chineseDic4.hasOwnProperty(e)) {
                // @ts-ignore
                chart = chineseDic5[e]
            } else {
                // @ts-ignore
                chart = chineseDic5[e]
            }
            sliceStart += 4
        }
        res.push(chart)
        if (sliceStart >= hex.length) isSlicing = false
    }
    return res.join('')
}