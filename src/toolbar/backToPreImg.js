export default function backToPreImg (me) {
    let ctx = me.rectangleCanvas.getContext("2d")

    ctx.drawImage(me.currentImgDom, 0, 0, me.width, me.height, 0, 0, me.width, me.height)
} 