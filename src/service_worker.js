import random from 'random'
import checkUrl from './checkUrl';
import getRenderUrl from './getRenderUrl';

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