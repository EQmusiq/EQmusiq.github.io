function Load() {
 let load = document.getElementById("Load")
 let loadCont = document.getElementsByClassName('load-content')[0]
 let loadImg = document.getElementById("logo-load")
 let spin = document.getElementById('spin')
 setTimeout(() => {
        loadCont.style.opacity= "1";
        setTimeout(() => {
            loadImg.style.width = "12.5rem"
            setTimeout(() => {
                spin.style.opacity= "1";
                setTimeout(() => {
                    spin.style.opacity= "0";
                    setTimeout(() => {
                        setTimeout(() => {
                            loadImg.style.transform = "translateY(-12.5%)"
                            loadImg.style.width = "20rem"
                            spin.style.display= "none";
                            document.body.style.overflow = 'auto'
                            document.body.style.overflowX = 'hidden'
                            setTimeout(() => {
                                document.getElementById('nav').style.marginTop = "0"
                                document.getElementById('nav').style.opacity = "1"
                                setTimeout(() => {
                                    document.getElementById('loadH3').style.opacity = '1'
                                    document.getElementById('loadH3').style.marginTop = "-27.5%"
                                    document.getElementById('scrollImg').style.opacity = '1'
                                }, 300);
                            }, 500);
                        }, 500);
                    }, 1000);
                }, 4000);
            }, 850);
        }, 1000);
    }, 500);
}

function nav(){
    let nav = document.getElementById('mobNav')

    if(nav.style.height == "100dvh"){
        nav.style.height = "0dvh"
        nav.style.pointerEvents = "none"
        document.getElementById('ham').classList.remove('click')
    }
    else{
        nav.style.height = "100dvh"
        nav.style.pointerEvents = "all"
        document.getElementById('ham').classList.add('click')
    }
}