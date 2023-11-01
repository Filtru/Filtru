import random from 'random'
import checkUrl from './checkUrl';
import getRenderUrl from './getRenderUrl';
import updateStatValue from './updateStatValue';

chrome.runtime.onInstalled.addListener(async (details)=>{
    if(details.reason == "install"){
        chrome.tabs.create({url : getRenderUrl('installed')});    
        // await chrome.storage.local.set({module_nsfwblocker: `enabled`});
        // await chrome.storage.local.set({module_passwordadvisor: `enabled`});
    }
});

chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
      if (changeInfo.url) {
        checkUrl()
      }
    }
);

export async function getCurrentTabId(){
  try{
      let queryOptions = { active: true, lastFocusedWindow: true };
      let [tab] = await chrome.tabs.query(queryOptions);
      return tab.id;
  }catch(err){
      console.log(err)
  }
}


chrome.runtime.onMessageExternal.addListener(
  async function(request, sender, sendResponse) {
    if(request.extensionInstalled){
      try {
        sendResponse('true')
        console.log("h")
      } catch(error) {
        console.log(error);
      };
    }

    if(request.greeting){
      try {
        sendResponse('ok')
        console.log(request.greeting)
      } catch(error) {
        console.log(error);
        sendResponse(error)
      };
    }
  });

  // const axios = require('axios')
  // const tf = require('@tensorflow/tfjs')
  // const nsfw = require('@bakedpotatolord/nsfwjs')
  // const model = await nsfw.load()

  chrome.runtime.onMessage.addListener(
    async function(request, sender, sendResponse) {
      if(sender.tab){ //if from a content script
        if(request.FILTRU_scanImage){
          updateStatValue('stat_NsfwContentScanned', '1')
          console.log(request.FILTRU_scanImage)
          //const response = await fetch(`https://filtru.xyz/api/ai/v1/rate/?url=${request.FILTRU_scanImage.src}`);
          //const json = await response.json();
          //console.log(json)
        }
      }
    }
  );

//   chrome.tabs.onUpdated.addListener(async (tabId, info)=>{
//     console.log("detected tab update")
//     if (info.url) {
//       chrome.scripting.
//     executeScript({
//         target :{tabId: await getCurrentTabId()},
//         files: ["./dist/injectorScript.js"]
//     })
//     }
// })