import getRenderUrl from "./getRenderUrl";
import searchEngineCheck from "./searchEngineCheck";
import updateStatValue from "./updateStatValue";

export default function checkUrl() {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        
        try {
            let domain = (new URL(tab.url));
            domain = domain.hostname;

            fetchAndCheck(domain)
            searchEngineCheck(domain, tab.url)
        } catch (err) {

        }

        function fetchAndCheck(domainName){
            fetch('https://raw.githubusercontent.com/DestroyPorn/NSFW-Websites/main/Lists/simple-list.json') //a list of nsfw websites.
            .then((response) => response.json())
            .then((fetchedList) => {
                var domain = domainName.toString().split('.').reverse().splice(0,2).reverse().join('.')

                if(fetchedList.domains.includes(domain)){
                    updateStatValue('stat_WebsitesBlocked', 1)

                    chrome.tabs.query({ active: true }, function(tabs) {
                        chrome.tabs.update(tabs[0].id, { url: getRenderUrl('website-blocked', `&type=porn&domain=${domainName}`) });
                    });  

                    return;
                } else {
                    
                }
            });
        }

        function callbackFromClose(){
            console.info("DestroyPorn | This tab contained adult content.")
        }
    }); 
}