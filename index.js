const divElement = document.querySelector('#div-element')
const paragraphElement = document.querySelector('#paragraph-element')

const dangerArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧌", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
];

function saveSanta(arr) {

    const filterArray = ['👺', '👹', '🦁', '🐻', '🧌', '🐯', '😈']
    
    // Flatten dangerArray
    const flatArray = arr.flat(Infinity);
    
    // Filter flatArray
    const filteredArray = flatArray.filter(e => !filterArray.includes(e))
   
    // Map over filtered array and save as html code
    const emojiHTML = filteredArray.map(emoji => `<p class="emoji-item">${emoji}</p>`)

    //Add emojiHTML to div
    divElement.innerHTML = emojiHTML.join('')

    return filteredArray;
}

// Check the returned results from saveSanta()
console.log(saveSanta(dangerArray))
