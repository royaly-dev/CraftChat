window.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById("music")
    music.volume = 1
    music.play()

    const closeButton = document.getElementById("close")
    closeButton.addEventListener("click", () => {
      window.close()
    })
    const calloutButton = document.querySelector(".CraftChatMainButton button:nth-child(3)")
    calloutButton.addEventListener("click", () => {
      window.close()
    })

    const callButton = document.querySelector(".CraftChatMainButton button:nth-child(2)")
    callButton.addEventListener("click", () => {
      const hello = document.getElementById("hello")
      hello.volume = 1
      hello.play()
      music.pause()
      document.querySelector('.CraftChatMain button:nth-child(2)').style.display = 'none'
      document.querySelector('.CraftChatMain button:nth-child(1)').style.display = 'none'
    })

    const camButton = document.querySelector(".CraftChatMainButton button:nth-child(1)")
    camButton.addEventListener("click", () => {
      const video = document.querySelector("video")
      video.style.display = "block"
      video.play()
      music.pause()
      setTimeout(() => {
        window.close()
      }, video.duration * 1000)
    })
})