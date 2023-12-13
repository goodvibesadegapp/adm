const btn=document.getElementById('btn-notification')

btn.style.cssText='position:relative;z-index:9999'

btn.addEventListener('click',()=>{
    Notification.requestPermission().then(perm =>{
        new Notification('Notification Show')
    })

})