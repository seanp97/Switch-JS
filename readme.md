Switch JS is a small lightweight library which has a lot of functions which simplifies web development.

To use Switch JS we can create an instance.

const $ = new Switch();


Methods.

$.Query(el) --- $.Query('p') 

- selects the element of the page so we can use like $.Query('p').innerText = "Hello World";

$.Query(el) = document.querySelector(el) --- document.querySelector('p') 

----------------------

$.QueryAll(el) // $.Query('p') 

- selects all element of element passed in.

$.QueryAll(el) = document.querySelectorAll(el) --- document.querySelectorAll('p') 

----------------------

$.InputText(el, val)

If used like: $.InputText('input') - Retrieves the value of the input box

Else if used like: $.InputText('input', 'Enter name...') - Sets input box value

----------------------

$.OnMobile()

Returns true or false if user is on mobile device

if($.OnMobile()) {
    // do something
}

----------------------

$.ImgSrc(el, src)

If used like: $.ImgSrc('img') - Retrieves the img src of the img

Else if used like: $.ImgSrc('img', 'hello.png') - Sets img src

----------------------

$.RemoveChildren(el) 

Removes all the children elements of element

$.RemoveChildren('#parent') - Removes all children of #parent element

----------------------

$.Delay(timoutMs, callback)

Does something after given ms

Example: alert "Hello World" after 1000 ms

$.Delay(1000, function() {
    alert("Hello World");
})

----------------------

$.Interval(timoutMs, callback)

Does something repeatedly of interval

Example: alert "Hello World" constantly after 1000 ms

$.Interval(1000, function() {
    alert("Hello World");
})

----------------------

$.InnerHTML(el, html)

If used like: $.InnerHTML('p') - Retrieves the value of the html

Else if used like: $.InnerHTML('p', '<p>Hello World</p>') - Sets elements html

----------------------

$.Text(el, val)

If used like: $.Text('p') - Retrieves the text of the element

Else if used like: $.Text('p', 'Hello World') - Sets elements text

----------------------

$.AddClass(el, className)

$.AddClass('p', 'new-class') - Sets elements class of argument

----------------------

$.RemoveClass(el, className)

$.RemoveClass('p', 'new-class') - Removes elements class of argument

----------------------

$.ToggleClass(el, className)

$.ToggleClass('p', 'new-class') - Toggles class name

----------------------

$.Href(el, link)

If used like: $.Href('a') - Retrieves the href of element

Else if used like: $.Href('a', 'https://github.com/') - Sets href to link

----------------------

$.ParentNode(el)

Returns parent node

----------------------

$.GetAttr(el, attr)

// <div data-attr="Hello World"></div>

$.GetAttr('#attr', 'data-attr') - Returns the attribute

----------------------

$.SetAttr(el, attr, attrValue)

// <div id="attr" data-attr="Hello World"></div>

$.SetAttr('#attr', 'data-attr', 'New Attribute') - Sets the attribute to the element

// -> <div id="attr" data-attr="New Attribute"></div>

----------------------

$.Event(el, event, cb)

// The event can be any accepted event E.G onmouseover, onkeydown, onmouseup ETC...

$.Event('button', 'click', function() {
    alert("Hello World")
})

----------------------

$.Resize(cb)

// Do something on resize

$.Resize(function() {
    alert("Resizing...")
})

----------------------

$.Scroll(cb)

// Do something on scroll

$.Scroll(function() {
    alert("Scrolling")
})

----------------------

$.OnLoad(cb)

// Do something on onload

$.OnLoad(function() {
    alert("On load...")
})

----------------------

$.WinInnerHeight() - return window inner height

----------------------

$.WinInnerWidth() - return window inner width

----------------------

$.WinOuterHeight() - return window outer height

----------------------

$.WinOuterWidth() - return window outer height

----------------------

$.ScrollTo(top = 0, left = 0, behaviour = "smooth")

Scroll to part of webpage

Example

$.ScrollTo(300) - Will scroll down by 300, left = 0 by default, and behaviour is smooth by default

----------------------

$.OffsetTop(el)

Returns the elements offset from the top

Example

$.OffsetTop('p')

----------------------

$.OffsetLeft(el)

Returns the elements offset from the left

Example

$.OffsetLeft('p')

----------------------

$.Hide(el)

Hides the element

$.Hide('p')

----------------------

$.Show(el)

Show the element

$.Show('p')

----------------------

$.ToggleShow(el)

toggles the hide show of the element

$.ToggleShow('p')

----------------------

$.HasClass(el, className)

Returns if the element has the class

$.HasClass('p', 'new-class')

----------------------

$.Remove(el)

Removes the elements

$.Remove('p')

----------------------

$.ElemWidth(el, width)

If used like: $.ElemWidth('p') - Retrieves the elements width

Else if used like: $.ElemWidth('p', 300) - Sets the elements width

----------------------

$.ElemHeight(el, height)

If used like: $.ElemHeight('p') - Retrieves the elements height

Else if used like: $.ElemHeight('p', 300) - Sets the elements height

----------------------

$.ElemLength(el)

$.ElemLength('div') // Returns the number of elements length

----------------------

$.Year()

Returns the current year

----------------------

$.Month()

Returns the current month

----------------------

$.Day()

Returns the current day

----------------------

$.Round(val)

Round the number

$.Round(2.3) - Returns 2

----------------------

$.MaxVal(a, b)

Returns the biggest integer value

----------------------

$.MinVal(a, b)

Returns the lowest integer value

----------------------

$.CopyToClipboard(text)

Copies the tex to the users clipboard

$.CopyToClipboard("Hello World") copies "Hello World" to clipboard

----------------------

$.RGBToHex(r, g, b)

Returns RBG to Hex

$.RGBToHex(235, 64, 52) // Returns #eb4034

----------------------

$.IsAppleDevice()

Returns true or false if user is on apple device

----------------------

$.StripHTML(el)

Strips elements HTML

<p>Hello World</p>

$.StripHTML('p') // Returns Hello World

----------------------

$.ReverseStr(str)

Returns the string reversed

----------------------

$.Capitalize(str)

Returns string capitalized

----------------------

$.Upper(str)

Returns string to upper case

----------------------

$.Lower(str)

Returns string to lower case

----------------------

$.RoundTo(n, d)

Rounds the number to decimal place

$.RoundTo(5.1234, 2) // Returns 5.12

----------------------

$.WindowHREF()

Returns the window href

----------------------

$.WindowHostName()

Returns the window hostname

----------------------

$.WindowPathName()

Returns the window pathname

----------------------

$.WindowProtocol()

Returns the window protocol

----------------------

$.WindowPort()

Returns the port

----------------------

$.Redirect(url)

Redirects to the url

$.Redirect('https://github.com/') // Redirects to Github

----------------------

$.QueryParams(url)

Returns the params of the url

$.QueryParams('https://www.google.com/search?q=javascript') // Returns {q: 'javascript'}

----------------------

$.SetCookie(name, value, days)

Sets a cookie name with the value and expiration in days passed in

$.SetCookie("name", "Hello", 7)

----------------------

$.GetCookie(name)

returns the value of the cookie

$.GetCookie("name") // "Hello"  - from example above

----------------------

$.ClearCookies()

Clears cookies

----------------------

$.RemoveDuplicatesArray(arr)

Remove all duplicates in array and return back

----------------------

$.IsOpera()

Returns if user on opera browser

----------------------

$.IsEdge()

Returns if user on edge browser

----------------------

$.IsChrome()

Returns if user on chrome browser

----------------------

$.IsSafari()

Returns if user on safari browser

----------------------

$.IsFireFox()

Returns if user on firefox browser

----------------------

$.IsIE()

Returns if user on IE browser

----------------------

$.HistoryBack()

Go back in history

----------------------

$.HistoryForward()

Go forward in history

----------------------

$.HistoryLength()

Returns history length

----------------------

$.Reload()

Reloads the page

----------------------

$.UserAgent()

Returns the user agent

----------------------

$.AvailHeight()

Returns the avial height

----------------------

$.AvailWidth()

Returns the avial width

----------------------

$.ColorDepth()

Returns the color depth

----------------------

$.ScreenHeight()

Returns the screen height

----------------------

$.ScreenWidth()

Returns the screen width

----------------------

$.FullScreenVideo(el)

Sets video to fullscreen

$.FullScreenVideo('#my-video')

----------------------

$.InViewPort(el)

Returns true of false if element is in viewport

$.InViewPort('section') 

if($.InViewPort('section)) {
    alert("In view")
}

----------------------

$.PostJSON(url, data)

Posts JSON data 

$.PostJSON('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
});

----------------------

$.GetJSON(url)

Gets JSON data 

async function JSONPlaceHolderPosts() {
    const data = await $.GetJSON('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
}

----------------------

$.RemoveDOM()

Removes entire DOM

----------------------

$.CheckValidation(el)

<input type="number" min="100" max="300" required>

$.CheckValidation('input') // Returns true of false

----------------------

$.LSSetItem(name, value)

Sets Local Storage

$.LSSetItem("name", "Hello World")

----------------------

$.LSGetItem(name)

Gets Local Storage value

$.LSGetItem("name") // Returns "Hello World" example above

----------------------

$.Platform()

Returns platform

----------------------

$.EmptyElem(el)

Returns true or false if element is empty

----------------------

$.TopOfPage()

Returns true or false if user is at top of page

----------------------

$.Hash(str)

Returns hash of string passed in

$.Hash("Hello World") // Returns -862545276

----------------------

$.WindowSizeGreater(val)

Returns true of false of window size is greater than val

----------------------

$.WindowSizeLower(val)

Returns true of false of window size is lower than val

----------------------

$.VoidLink(el)

Replaces link with void link

$.VoidLink('a') // Outputs javascript:void(0) to href

----------------------

$.GetCssProperty(el, cssValue)

Returns the css value on the element

$.GetCssProperty('p', 'color') // Returns the color of p element

----------------------

$.Unresponsive()

Makes page unresponisve - Sets while true loop

----------------------

$.JSONStringify(obj)

Returns object passed in as JSON stringified
