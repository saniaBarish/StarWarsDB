var str = "gender";

f = (str) => {
    const arr = str.split("");
    const idx = arr.findIndex(item => item === item.toUpperCase())
    
    if(idx !== -1){
        const beforIdx = arr.slice(1, idx);
        const afterIdx = arr.slice(idx);
        return [arr[0].toUpperCase()].concat(beforIdx, [" "], afterIdx).join("")
    }
    else {
        return [arr[0].toUpperCase()].concat(arr.slice(1)).join("")
    }
}

console.log(f(str));
