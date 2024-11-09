const topbarText = document.querySelector('#topbarContent')
fetch('topbar.html')
.then(res=>res.text())
.then(data=>{
    topbarText.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
});

const navbarText = document.querySelector('#navbarContent')
fetch('navbar.html')
.then(res=>res.text())
.then(data=>{
    navbarText.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
});


const nav = document.querySelector('#footerContent')
fetch('footer.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})