// 1 
// a. Was gibt folgender Code aus?

for(var i=0;i<4;i++){
    window.setTimeout(()=>{
        window.alert(i)
    }, 2000)
}

// b. Wie kann ich das Programm ändern, damit es tut was es tun sollte.

for(var i=0;i<4;i++){
    let x = i
    window.setTimeout(()=>{
        window.alert(x)
    }, 2000)
}

for(let i=0;i<4;i++){
    window.setTimeout(()=>{
        window.alert(i)
    }, 2000)
}

for(var i=0;i<4;i++){
    window.setTimeout((idx)=>{
        window.alert(idx)
    }.bind(null, i), 2000)
}

for(var i=0;i<4;i++){
    let fn = (idx)=>{
        window.alert(idx)
    }
    let fnWithIBound = fn.bind(null, i)
    window.setTimeout(fnWithIBound, 2000)
}
