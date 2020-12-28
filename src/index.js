import './style.css';
window.addEventListener("DOMContentLoaded", function (event) {
    onLoad();
});

function onLoad() {
    const rawlist = document.getElementsByTagName("codebox");
    Array.from(rawlist).forEach(e => {
        var script;
        const attrScript = e.getAttribute("script");
        if (attrScript != null) {
            script = attrScript;
        }

        var atitle = "Example";
        const attrTitle = e.getAttribute("title");
        if (attrTitle != null) {
            atitle = attrTitle;
        }

        //Create CODEBOX DIV
        var box = document.createElement("div");
        box.classList.add("codebox");
        box.addEventListener("mouseover", function(e) {
            showOverlay(this)
        })
        box.addEventListener("mouseout", function(e) {
            freeOverlay(this)
        })

        var orientation;
        const attrBox = e.getAttribute("direction");
        if (attrBox == null) {
            orientation = "none";
        } else {
            if (attrBox === "left") {
                box.classList.add("codebox-left");
            } else if (attrBox === "right") {
                box.classList.add("codebox-right");
            }
        }

        //codeboxTitlebar
        var bar = document.createElement("div");
        bar.classList.add("codeboxTitlebar");

        var ballContainer = document.createElement("div");
        var ballA = document.createElement("div");
        var ballB = document.createElement("div");
        var ballC = document.createElement("div");
        ballA.classList.add("codeboxTitlebarBall");
        ballB.classList.add("codeboxTitlebarBall");
        ballC.classList.add("codeboxTitlebarBall");
        ballA.id = "ballA";
        ballB.id = "ballB";
        ballC.id = "ballC";
        ballContainer.appendChild(ballA);
        ballContainer.appendChild(ballB);
        ballContainer.appendChild(ballC);

        bar.appendChild(ballContainer);

        var title = document.createElement("a");
        title.innerHTML = atitle;
        title.classList.add("codeboxTitlebarTitle");
        bar.appendChild(title);

        if (e.getAttribute("ccopy") === "false") {
            bar.appendChild(document.createElement("div"));
        } else {
            var copyButton = document.createElement("a");
            copyButton.innerHTML = "COPY";
            copyButton.classList.add("codeboxTitlebarCopy");
            copyButton.addEventListener("click", function(e) {
                copyCode(this);
            });

            bar.appendChild(copyButton);
        }

        //codeboxTextbox
        var textbox = document.createElement("div");
        textbox.classList.add("codeboxTextbox");

        var pre = document.createElement("pre");

        var code = document.createElement("code");
        code.classList.add(script);

        code.innerHTML = e.innerText;

        if (e.getAttribute("cselect") === "true") {
            //idk how to do !equalsIgnoreCase in js sry
        } else {
            code.style.userSelect = "none";
        }

        pre.appendChild(code);
        textbox.appendChild(pre);

        if (e.getAttribute("color") != null) {
            box.style.backgroundColor = e.getAttribute("color");
        }
        if (e.getAttribute("textColor") != null) {
            box.style.color = e.getAttribute("textColor");
        }
        if (e.getAttribute("barColor") != null) {
            bar.style.backgroundColor = e.getAttribute("barColor");
        }
        if (e.getAttribute("radius") != null) {
            box.style.borderRadius = e.getAttribute("radius") + "px";
            bar.style.borderTopLeftRadius = e.getAttribute("radius") + "px";
            bar.style.borderTopRightRadius = e.getAttribute("radius") + "px";
        }

        box.appendChild(bar);
        box.appendChild(textbox);

        e.parentElement.insertBefore(box, e);
        e.remove();
    });
}

function copyCode(e) {
    var code = "";
    code = e.parentElement.parentElement.children[1].getElementsByTagName("code")[0].innerText;

    const el = document.createElement('textarea');
    el.value = code;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function showOverlay(e) {
    const titlebar = e.children[0];
    var btn = titlebar.children[titlebar.childElementCount - 1];
    btn.style.opacity = "1.0";
    btn.style.transitionDelay = "0.6s";
}

function freeOverlay(e) {
    const titlebar = e.children[0];
    var btn = titlebar.children[titlebar.childElementCount - 1];
    btn.style.opacity = "0.0";
    btn.style.transitionDelay = "0s";
}
