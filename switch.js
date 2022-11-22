class Switch {

    Query(el) {
        this._el = el;
        return document.querySelector(this._el);
    }

    QueryAll(el) {
        this._el = el;
        return document.querySelectorAll(this._el);
    }

    InputText(el, inputVal) {
        this._elInputEl = el;
        this.inputValue = inputVal;

        if(this.inputValue == null || this.inputValue == "") {
            return document.querySelector(this._elInputEl).value;
        }
        else {
            document.querySelector(this._elInputEl).value = this.inputValue;
        }
    } 
    
    ExtractNumber(text) {
        this._text = text;
        this._number = this._text.match(/\d/g);
        this._number = this._number.join('');
        return this._number;
    }

    IsNumber(int) {
        this._int = int;
        return isNaN(this._int) ? false : true; 
    }

    IsString(str) {
        this._str = str;
        if(typeof this._str === 'string' || this._str instanceof String) {
            return true;
        }
        return false;
    }

    IsBoolean(bool) {
        this._bool = bool;
        if(typeof this._bool === 'boolean' || this._bool instanceof Boolean) {
            return true;
        }
        return false;
    }

    IsLocalHost() {
        if (location.hostname === "localhost" || location.hostname === "127.0.0.1") return true;
        return false;
    }

    IsMobile() {
        this.toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];
        
        return this.toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }

    ImgSrc(el, src) {
        this._elImgSrc = el;
        this._src = src;
        this.selector = document.querySelector(this._elImgSrc);

        if(this._src == null || this._src == "") {
            return this.selector.src;
        }
        else {
            this.selector.src = this._src;
        }
    }

    RemoveChildren(el) {
        this._elChildren = el;
        this.selector = document.querySelector(this._elChildren);
        this.selector.innerHTML = "";
    }

    Delay(timeoutMs, cb) {
        this._cb = cb;
        this._timout = timeoutMs;
        setTimeout(this._cb, this._timout);
    }

    NewWindow(url) {
        this._url = url;
        window.open(this._url);
    }

    Interval(timeoutMs, cb) {
        this._cb = cb;
        this._timout = timeoutMs;
        setInterval(this._cb, this._timout);
    }

    InnerHTML(el, html) {
        this._elHTML = el;
        this._html = html;
        this.selector = document.querySelector(this._elHTML);

        if(this._html == null || this._html == "") {
            return this.selector;
        }
        else {
            this.selector.innerHTML = this._html;
        }
    }

    Text(el, val) {
        this._elRender = el;
        this._val = val;
        this.selector = document.querySelector(this._elRender);

        if(this._val == null || this._val == "") {
            return this.selector.innerText;
        }
        else {
            this.selector.innerText = String(this._val);
        }
    }

    AddClass(el, className) {
        this._elClassName = el;
        this.selector = document.querySelector(this._elClassName);

        if(className != null || className != "") {
            this.selector.classList.add(className);
        }
    }

    RemoveClass(el, className) {
        this._elClassName = el;
        this.selector = document.querySelector(this._elClassName);

        if(className != null || className != "") {
            this.selector.classList.remove(className);
        }
    }

    ToggleClass(el, className) {
        this._elToggleClass = el;
        this.toggledClass = className;
        this.selector = document.querySelector(this._elToggleClass);

        if(this.selector.classList.contains(this.toggledClass)) {
            this.selector.classList.remove(this.toggledClass);
        }
        else {
            this.selector.classList.add(this.toggledClass);
        }
    }

    Href(el, link) {
        this._elHref = el;
        this._link = link;
        this.selector = document.querySelector(this._elHref);

        if(this._link == null || this._link == "") {
            return this.selector.getAttribute("href"); ;
        }
        else {
            this.selector.href = this._link;
        }
    }

    ParentNode(el) {
        this._elParentNode = el;
        return document.querySelector(this._elParentNode).parentNode;
    }

    GetAttr(el, attr) {
        this._elGetAttr = el;
        this._attr = attr;
        this.selector = document.querySelector(this._elGetAttr);
        return this.selector.getAttribute(this._attr);
    }

    SetAttr(el, attr, attrValue) {
        this._elSetAttr = el;
        this._attr = attr;
        this._attrValue = attrValue;
        document.querySelector(this._elSetAttr).setAttribute(this._attr, this._attrValue); 
    }

    Event(el, event, cb) {
        this.elEvent = el;
        this._event = event;
        this._cb = cb;
        document.querySelector(this.elEvent).addEventListener(`${this._event}`, this._cb);
    }

    Resize(cb) {
        this._cb = cb;
        window.addEventListener('resize', this._cb);
    }

    Scroll(cb) {
        this._cb = cb;
        window.addEventListener('scroll', this._cb);
    }

    OnLoad(cb) {
        this._cb = cb;
        window.addEventListener('load', this._cb);
    }

    WinInnerHeight() {
        return window.innerHeight;
    }

    WinInnerWidth() {
        return window.innerWidth;
    }

    WinOuterHeight() {
        return window.outerHeight;
    }

    WinOuterWidth() {
        return window.outerWidth;
    }

    ScrollTo(top = 0, left = 0, behaviour = "smooth") {
        this._top = top;
        this._left = left;
        this._behaviour = behaviour;

        window.scrollTo({
            top: this._top,
            left: this._left,
            behavior: `${this._behaviour}`
        });
    }

    OffsetTop(el) {
        this._elOffsetTop = el;
        this.selector = document.querySelector(this._elOffsetTop);
        this.rect = this.selector.getBoundingClientRect();
        return this.rect.top;
    }

    OffsetLeft(el) {
        this._elOffsetTop = el;
        this.selector = document.querySelector(this._elOffsetTop);
        this.rect = this.selector.getBoundingClientRect();
        return this.rect.left;
    }

    Hide(el) {
        this._elHide = el;
        this.selector = document.querySelector(this._elHide).style.display = "none";
    }

    Show(el) {
        this.elShow = el;
        this.selector = document.querySelector(this._elHide).style.display = "";
    }

    ToggleShow(el) {
        this._elToggleSHow = el;
        this.selector = document.querySelector(this._elToggleSHow);
        this.selector.style.display === "none" ? this.selector.style.display = "" : this.selector.style.display = "none";
    }

    HasClass(el, className) {
        this._elClassEx = el;
        this._className = className;
        this.selector = document.querySelector(this._elClassEx);

        return this.selector.classList.contains(this._className) ? true : false;
    }

    Remove(el) {
        this.elRemove = el;
        this.selector = document.querySelector(this.elRemove);
        this.selector.remove();
    }

    ElemWidth(el, width) {
        this._elElemWidth = el;
        this._width = width;

        if(this._width == null || this._width == "") {
            return document.querySelector(this._elElemWidth).offsetWidth;
        }
        else {
            document.querySelector(this._elElemWidth).style.width = `${this._width}px`;
        }
    }

    ElemHeight(el, height) {
        this._elElemHeight = el;
        this._height = height;

        if(this._height == null || this._height == "") {
            return document.querySelector(this._elElemHeight).offsetHeight;
        }
        else {
            document.querySelector(this._elElemHeight).style.height = `${this._height}px`;
        }
    }

    ElemLength(el) {
        this._elLen = el;
        this.selector = document.querySelectorAll(this._elLen);
        return this.selector.length;
    }

    Year() {
        this._year = new Date();
        return this._year.getFullYear();
    }

    Month() {
        this._date = new Date();
        this._months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        return this._months[this._date.getMonth()];
    }

    Day() {
        this._date = new Date();
        this._days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return this._days[this._date.getDay()];
    }

    Round(val) {
        this._val = val;
        return Math.round(this._val);
    }

    MaxVal(a, b) {
        this._a = a;
        this._b = b;
        return this._a > this._b ? this._a : this._b;
    }

    MinVal(a, b) {
        this._a = a;
        this._b = b;
        return this._a > this._b ? this._b : this._a;
    }

    CopyToClipboard(text) {
        this._text = text;
        navigator.clipboard.writeText(this._text);
    }

    RGBToHex(r, g, b) {
        this._r = r;
        this._g = g;
        this._b = b;
        return "#" + ((1 << 24) + (this._r << 16) + (this._g << 8) + this._b).toString(16).slice(1);
    }

    IsAppleDevice() {
        this._isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
        return this._isAppleDevice;
    }

    StripHTML(el) {
        this._elHTMLStrip = el;
        return (new DOMParser().parseFromString(this._elHTMLStrip, 'text/html')).body.textContent || '';
    }

    ReverseStr(str) {
        this._str = str;
        return this._str.split("").reverse().join("");
    }

    Capitalize(str) {
        this._str = str;
        return this._str.charAt(0).toUpperCase() + this._str.slice(1);
    } 

    Upper(str) {
        this._str = str;
        return this._str.toUpperCase();
    }

    Lower(str) {
        this._str = str;
        return this._str.toLowerCase();
    }

    RoundTo(n, d) {
        this._n = n;
        this._d = d;
        return Number(Math.round(this._n + "e" + this._d) + "e-" + this._d);
    }

    WindowHREF() {
        return window.location.href;
    }

    WindowHostName() {
        return window.location.hostname;
    }

    WindowPathName() {
        return window.location.pathname;
    }

    WindowProtocol() {
        return window.location.protocol;
    }

    WindowPort() {
        if (window.location.port != null || window.location.port != "" || window.location.port != 0) {
            return window.location.port;
        }
    }

    Redirect(url) {
        this._url = url;
        window.location.replace(this._url);
    }

    QueryParams(url) {
        this._url = url;
        return JSON.parse('{"' + decodeURI(this._url.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
    }

    SetCookie(name, value, days) {
        this._name = name;
        this._value = value;
        this._days = days;
        this.expires = "";

        if (this._days) {
            this.date = new Date();
            this.date.setTime(this.date.getTime() + (this._days*24*60*60*1000));
            this.expires = "; expires=" + this.date.toUTCString();
        }
        document.cookie = this._name + "=" + (this._value || "")  + this.expires + "; path=/";
    }

    GetCookie(name) {
        this._name = name;
        return  `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
    }

    ClearCookies() {
        document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
    }

    RemoveDuplicatesArray(arr) {
        this._arr = arr;
        return [...new Set(this._arr)];
    }

    IsOpera() {
        if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
        {
            return true;
        }
        return false;
    }

    IsEdge() {
        if(navigator.userAgent.indexOf("Edg") != -1 )
        {
            return true;
        }
        return false;
    }

    IsChrome() {
        if(navigator.userAgent.indexOf("Chrome") != -1 )
        {
           return true;
        }
        return false;
    }

    IsSafari() {
        if(navigator.userAgent.indexOf("Safari") != -1)
        {
            return true;
        }
        return false;
    }

    IsFireFox() {
        if(navigator.userAgent.indexOf("Firefox") != -1 ) 
        {
            return true;
        }
        return false;
    }

    IsIE() {
        if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
        {
           return true;
        }  
        return false;
    }

    HistoryBack() {
        history.back();
    }

    HistoryForward() {
        history.forward();
    }

    HistoryLength() {
        return window.history.length;
    }

    ReloadPage() {
        location.reload();
    }

    UserAgent() {
        return navigator.userAgent;
    }

    AvailHeight() {
        return screen.availHeight;
    }

    AvailWidth() {
        return screen.availWidth;
    }

    ColorDepth() {
        return screen.colorDepth;
    }

    ScreenHeight() {
        return screen.height;
    }

    ScreenWidth() {
        return screen.width;
    }

    FullScreenVideo(el) {
        this._el = el;
        this.selector = document.querySelector(this._el);

        if (this.selector.requestFullscreen) {
            this.selector.requestFullscreen();
        } else if (this.selector.webkitRequestFullscreen) {
            this.selector.webkitRequestFullscreen();
        } else if (this.selector.msRequestFullscreen) {
            this.selector.msRequestFullscreen();
        }
    }

    InViewPort(el) {
        this._el = el;
        this.selector = document.querySelector(this._el);
        this.rect = this.selector.getBoundingClientRect();

        return this.rect.bottom > 0 &&
            this.rect.right > 0 &&
            this.rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            this.rect.top < (window.innerHeight || document.documentElement.clientHeight);
    }

    PlayVideo(el) {
        this._el = el;
        this.selector = document.querySelector(this._el);
        this.selector.play();
    }

    PauseVideo(el) {
        this._el = el;
        this.selector = document.querySelector(this._el);
        this.selector.pause();
    }

    PlayPauseVideo(el) {
        this._el = el;
        this.selector = document.querySelector(this._el);
        this.selector.paused ? this.selector.play() : this.selector.pause()
    }

    PostJSON(url, data) {
        this.url = url;
        this._data = data;

        fetch(this.url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(this._data)
        }).then(res => {
            console.log(res);
        }).catch((err) => {
            console.log(err)
        });
    }

    async GetJSON(url) {
        this._url = url;
        this.response = await fetch(this._url);
        this.data = await this.response.json();
        return this.data;
    }

    RemoveDOM() {
        this._dom = document.querySelector('body');
        this._dom.remove();
    }

    CheckValidation(el) {
        this._el = el;
        this.selector = document.querySelector(this._el);

        if (!this.selector.checkValidity()) {
            return false;
        }
        return true;
    }

    LSSetItem(name, value) {
        this._name = name;
        this._value = value;
        localStorage.setItem(this._name, this._value);
    }

    LSGetItem(name) {
        this._name = name;
        return localStorage.getItem(this._name);
    }

    Platform() {
        return navigator.platform;
    }

    EmptyElem(el) {
        this._el = el;
        this.selector = document.querySelector(this._el);
        return this.selector.innerHTML === "" ? true : false;
    }

    TopOfPage() {
        return window.scrollY === 0 ? true : false;
    }

    Hash(str) {
        this._str = str;
        return this._str.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    }

    WindowSizeGreater(val) {
        this._val = val;

        if(window.innerWidth > this._val) {
            return true;
        }
        return false;
    }
    
    WindowSizeLower(val) {
        this._val = val;

        if(window.innerWidth < this._val) {
            return true;
        }
        return false;
    }

    VoidLink(el) {
        this._el = el;
        document.querySelector(this._el).href = "javascript:void(0)";
    }

    GetCssProperty(el, cssValue) {
        this._el = el;
        this._cssValue = cssValue;
        this.selector = document.querySelector(this._el);

        this.cssObj = window.getComputedStyle(this.selector, null);
        return this.cssObj.getPropertyValue(this._cssValue);
    }

    Unresponsive() {
        while(true){}
    }

    JSONStringify(obj) {
        this._obj = obj;
        return JSON.stringify(this._obj);
    }
}
