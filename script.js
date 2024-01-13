import { videos } from "./data/videos.js";

const videosP = document.querySelector(".videos")

let html = '';
renderHTML()

videosP.innerHTML = html;

function renderHTML() {
    videos.forEach(video => {
        html += `
        <div class="video">
                    <div class="img">
                        <img src="${video.img}" alt="">
                    </div>
                    <div class="detail">
                        <div class="clogo">
                            <img src="${video.clogo}" alt="">
                        </div>
                        <div class="title">
                            <h3>${video.title}</h3>
                            <p>${video.cname}</p>
                            <p><span>${video.views}</span> views • <span>${video.utime}</span> ago</p>
                        </div>
                    </div>
                </div>
        `
    })
    return html
}

let menuOpen = true;

document.querySelector(".menu").addEventListener("click", () => {
    if (menuOpen === true) {
        gsap.to(".menu-options-active", {
            x: 230,
        })

        menuOpen = false
    } else {
        gsap.to(".menu-options-active", {
            x: -230,
        })

        menuOpen = true
    }
})

gsap.from(".video", {
    opacity: 0,
    y: 100,
})

gsap.from(".video .img img", {
    width: "0%"
})

gsap.to(".video .img img", {
    width: "100%"
})

gsap.from(".menu-options", {
    opacity: 0,
    y: 120,
})

gsap.from(".category", {
    opacity: 0,
    y: 200
})

gsap.from(".nav", {
    opacity: 0
})