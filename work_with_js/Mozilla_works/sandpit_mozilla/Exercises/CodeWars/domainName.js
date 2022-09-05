function domainName(url){

    if (url.includes('https://') || url.includes('http://')) {
        let obj = new URL(url);
        let sliceObj = obj.hostname.replace('www.', '');
        let pos = sliceObj.indexOf('.');
    
        console.log(sliceObj.slice(0, pos));
    } else {
        let replaceL = url.replace("www.", '');
        let pos = replaceL.indexOf('.');
    
        console.log(replaceL.slice(0, pos));

    }



}


domainName('http://google.co.jp');

domainName("www.xakerp.ru");
domainName('https://twitter.com/explore');
domainName('https://github.com/thepracticaldev/dev.to');
domainName("https://www.youtube.com");