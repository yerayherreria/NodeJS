module.exports= function() {
    const VALORES = "0123456789ABCDEF";
    let color = "";
    for (let i=0; i<6; i++) {
      color += VALORES[Math.floor(Math.random()*16)];
    }
    return "#"+color;
}
