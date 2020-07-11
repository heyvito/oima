((w, d) => {
    setTimeout(() => {
        const n = w.location.href.replace(/^https?/, "itmss");
        const e = d.createElement("iframe");
        e.id = "amlinks-autoopen";
        e.style.display = "none";
        d.body.appendChild(e);
        e.contentWindow.location.href = n;
    }, 1000);
})(window, document);
