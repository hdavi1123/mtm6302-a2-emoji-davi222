const emojiCodes = [
    128512,
    128514,
    128525,
    129409,
    128054,
    127829,
    127790,
    128293,
    128640,
    127752,
    127775,
    127881,
    127808
]

const gallery = document.getElementById('gallery')

function showEmojis(count =emojiCodes.length) {
    gallery.innerHTML = ''

    for (let i = 0; i < count; i++) {
        const code = emojiCodes[i]

        const card = document.createElement('div')
        card.className = 'card'

        const emoji = document.createElement('span')
        emoji.className = 'emoji'
        emoji.textContent = String.fromCodePoint(code)

        const codeText = document.createElement('span')
        codeText.className = 'code'
        codeText.textContent = code
        
        card.appendChild(emoji)
        card.appendChild(codeText)
        gallery.appendChild(card)
    }
}

showEmojis()