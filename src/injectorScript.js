// async function injectorScript(){
//     setTimeout(async () => {
//         console.log("script ingected");
//         var allImages = Array.from(document.getElementsByTagName("img"))

//         allImages.forEach(async element => {
//             var id = element.id
//             if(!element.id){
//                 id = `FILTRU_IMAGE_IDENTIFICATION_SYSTEM_`+makeid(32)
//                 element.id = id
//             }

//             let response = await chrome.runtime.sendMessage({FILTRU_scanImage: `${element.src}`});
//             setTimeout(() => {
//                 console.log(response)
//             }, 5000);
//             // if(response.simple === 'classifiedAsNsfw'){
//             //     element.src = `https://filtru.xyz/api/cdn/noise.png`
//             // } else {
//             //     console.log("Image is okay")
//             // }
//         });
//     }, 2000);
// }

async function injectorScript(){
    console.log('wsg')
    setTimeout(async () => {
        var a=document.getElementsByTagName('img');
        for (var i=0,l=a.length;i<l;i++)
        {
            if (/\.(jpg|png|jpeg|webp)$/im.test(a[i].getAttribute('src')))
            {
                var id = a[i].id
                if(!a[i].id){
                    id = `FILTRU_IMAGE_IDENTIFICATION_SYSTEM_`+makeid(32)
                    a[i].id = id
                }
                await chrome.runtime.sendMessage({FILTRU_scanImage: {id:id, src:a[i].src}});
                // if(!msg.classes[0].className === "Neutral" || !msg.classes[0].className === "Drawing"){
                //     a[i].src = `https://filtru.xyz/api/cdn/noise.png`
                // } else {
                //     console.log(`image is ok!`)
                //     console.log(msg)
                // }
            }
        }
    }, 5000);
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
  
injectorScript()