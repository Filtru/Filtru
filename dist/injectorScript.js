(()=>{function e(e){let t="";let n=0;for(;n<e;)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random())),n+=1;return t}!async function(){console.log("wsg"),setTimeout((async()=>{for(var t=document.getElementsByTagName("img"),n=0,a=t.length;n<a;n++)if(/\.(jpg|png|jpeg|webp)$/im.test(t[n].getAttribute("src"))){var r=t[n].id;t[n].id||(r="FILTRU_IMAGE_IDENTIFICATION_SYSTEM_"+e(32),t[n].id=r),await chrome.runtime.sendMessage({FILTRU_scanImage:{id:r,src:t[n].src}})}}),5e3)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0b3JTY3JpcHQuanMiLCJtYXBwaW5ncyI6Ik1Ba0RBLFNBQVNBLEVBQU9DLEdBQ1osSUFBSUMsRUFBUyxHQUdiLElBQUlDLEVBQVUsRUFDZCxLQUFPQSxFQUFVRixHQUNmQyxHQUppQixpRUFJSUUsT0FBT0MsS0FBS0MsTUFIVkMsR0FHZ0JGLEtBQUtHLFdBQzVDTCxHQUFXLEVBRWIsT0FBT0QsQ0FDWCxFQW5DQU8saUJBQ0lDLFFBQVFDLElBQUksT0FDWkMsWUFBV0gsVUFFUCxJQURBLElBQUlJLEVBQUVDLFNBQVNDLHFCQUFxQixPQUMzQkMsRUFBRSxFQUFFQyxFQUFFSixFQUFFWixPQUFPZSxFQUFFQyxFQUFFRCxJQUV4QixHQUFJLDJCQUEyQkUsS0FBS0wsRUFBRUcsR0FBR0csYUFBYSxRQUN0RCxDQUNJLElBQUlDLEVBQUtQLEVBQUVHLEdBQUdJLEdBQ1ZQLEVBQUVHLEdBQUdJLEtBQ0xBLEVBQUssc0NBQXNDcEIsRUFBTyxJQUNsRGEsRUFBRUcsR0FBR0ksR0FBS0EsU0FFUkMsT0FBT0MsUUFBUUMsWUFBWSxDQUFDQyxpQkFBa0IsQ0FBQ0osR0FBR0EsRUFBSUssSUFBSVosRUFBRUcsR0FBR1MsTUFPekUsQ0FDSixHQUNELElBQ1AsQ0FjQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbHRydS8uL3NyYy9pbmplY3RvclNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3luYyBmdW5jdGlvbiBpbmplY3RvclNjcmlwdCgpe1xyXG4vLyAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJzY3JpcHQgaW5nZWN0ZWRcIik7XHJcbi8vICAgICAgICAgdmFyIGFsbEltYWdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIikpXHJcblxyXG4vLyAgICAgICAgIGFsbEltYWdlcy5mb3JFYWNoKGFzeW5jIGVsZW1lbnQgPT4ge1xyXG4vLyAgICAgICAgICAgICB2YXIgaWQgPSBlbGVtZW50LmlkXHJcbi8vICAgICAgICAgICAgIGlmKCFlbGVtZW50LmlkKXtcclxuLy8gICAgICAgICAgICAgICAgIGlkID0gYEZJTFRSVV9JTUFHRV9JREVOVElGSUNBVElPTl9TWVNURU1fYCttYWtlaWQoMzIpXHJcbi8vICAgICAgICAgICAgICAgICBlbGVtZW50LmlkID0gaWRcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe0ZJTFRSVV9zY2FuSW1hZ2U6IGAke2VsZW1lbnQuc3JjfWB9KTtcclxuLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuLy8gICAgICAgICAgICAgfSwgNTAwMCk7XHJcbi8vICAgICAgICAgICAgIC8vIGlmKHJlc3BvbnNlLnNpbXBsZSA9PT0gJ2NsYXNzaWZpZWRBc05zZncnKXtcclxuLy8gICAgICAgICAgICAgLy8gICAgIGVsZW1lbnQuc3JjID0gYGh0dHBzOi8vZmlsdHJ1Lnh5ei9hcGkvY2RuL25vaXNlLnBuZ2BcclxuLy8gICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSW1hZ2UgaXMgb2theVwiKVxyXG4vLyAgICAgICAgICAgICAvLyB9XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9LCAyMDAwKTtcclxuLy8gfVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5qZWN0b3JTY3JpcHQoKXtcclxuICAgIGNvbnNvbGUubG9nKCd3c2cnKVxyXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGE9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xyXG4gICAgICAgIGZvciAodmFyIGk9MCxsPWEubGVuZ3RoO2k8bDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoL1xcLihqcGd8cG5nfGpwZWd8d2VicCkkL2ltLnRlc3QoYVtpXS5nZXRBdHRyaWJ1dGUoJ3NyYycpKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gYVtpXS5pZFxyXG4gICAgICAgICAgICAgICAgaWYoIWFbaV0uaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkID0gYEZJTFRSVV9JTUFHRV9JREVOVElGSUNBVElPTl9TWVNURU1fYCttYWtlaWQoMzIpXHJcbiAgICAgICAgICAgICAgICAgICAgYVtpXS5pZCA9IGlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7RklMVFJVX3NjYW5JbWFnZToge2lkOmlkLCBzcmM6YVtpXS5zcmN9fSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZighbXNnLmNsYXNzZXNbMF0uY2xhc3NOYW1lID09PSBcIk5ldXRyYWxcIiB8fCAhbXNnLmNsYXNzZXNbMF0uY2xhc3NOYW1lID09PSBcIkRyYXdpbmdcIil7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYVtpXS5zcmMgPSBgaHR0cHM6Ly9maWx0cnUueHl6L2FwaS9jZG4vbm9pc2UucG5nYFxyXG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhgaW1hZ2UgaXMgb2shYClcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhtc2cpXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCA1MDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZWlkKGxlbmd0aCkge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgY29uc3QgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XHJcbiAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICB3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xyXG4gICAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xyXG4gICAgICBjb3VudGVyICs9IDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiAgXHJcbmluamVjdG9yU2NyaXB0KCkiXSwibmFtZXMiOlsibWFrZWlkIiwibGVuZ3RoIiwicmVzdWx0IiwiY291bnRlciIsImNoYXJBdCIsIk1hdGgiLCJmbG9vciIsImNoYXJhY3RlcnMiLCJyYW5kb20iLCJhc3luYyIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiYSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpIiwibCIsInRlc3QiLCJnZXRBdHRyaWJ1dGUiLCJpZCIsImNocm9tZSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsIkZJTFRSVV9zY2FuSW1hZ2UiLCJzcmMiLCJpbmplY3RvclNjcmlwdCJdLCJzb3VyY2VSb290IjoiIn0=