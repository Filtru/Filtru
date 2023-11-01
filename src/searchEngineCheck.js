import getRenderUrl from "./getRenderUrl";
import updateStatValue from "./updateStatValue";

export default function searchEngineCheck(domain, url) {
    console.log(domain)
    console.log(url)
    var searchEngines = ['www.google', 'bing.com', 'duckduckgo.com', 'you.com'] //only these are supported
    var triggerKeywords = ['porn', 'sex', 'hentai', 'loli', 'bang', 'fuck', 'squirt', 'onlyfans', ' ph ', 'pron', 'the hub', 'masturbation', ' fap ', 'blowing', 'blowjob', 'blow job', 'handjob', 'hand job']

    if(url.includes("&FILTRUIGNORESEARCHENGINEBLOCKED=true")){
        return;
    }

    searchEngines.forEach(element => {
        if(domain.includes(element)){
            console.log('seach engine')
            triggerKeywords.forEach(keyword => {
                if(url.includes(keyword)){
                    chrome.tabs.query({ active: true }, function(tabs) {
                        chrome.tabs.update(tabs[0].id, { url: getRenderUrl('search-engine-blocked', `&type=nsfw&domain=${domain}&url=${url}&keyword=${keyword}`) });
                    });  

                    updateStatValue('stat_WebsitesBlocked', 1)
                } else {
                    return;
                }
            });
        } else {
            return;
        }
    });
}