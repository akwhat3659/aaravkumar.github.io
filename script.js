let output = document.querySelector("#output")
let input = document.querySelector("#input")
let transBtn = document.querySelector("#transBtn")
let select = document.getElementById("select")
let lgInput = document.getElementById("lgInput")
{var languages = [
	  {
		language: "en",
		name: "English"
	  },
	  {
		language: "af",
		name: "Afrikaans"
	  },
	  {
		language: "sq",
		name: "Albanian"
	  },
	  {
		language: "am",
		name: "Amharic"
	  },
	  {
		language: "ar",
		name: "Arabic"
	  },
	  {
		language: "hy",
		name: "Armenian"
	  },
	  {
		language: "as",
		name: "Assamese"
	  },
	  {
		language: "az",
		name: "Azerbaijani"
	  },
	  {
		language: "eu",
		name: "Basque"
	  },
	  {
		language: "be",
		name: "Belarusian"
	  },
	  {
		language: "bn",
		name: "Bengali"
	  },
	  {
		language: "bs",
		name: "Bosnian"
	  },
	  {
		language: "bg",
		name: "Bulgarian"
	  },
	  {
		language: "yue",
		name: "Cantonese"
	  },
	  {
		language: "ca",
		name: "Catalan"
	  },
	  {
		language: "ceb",
		name: "Cebuano"
	  },
	  {
		language: "chr",
		name: "Cherokee"
	  },
	  {
		language: "ny",
		name: "Chichewa"
	  },
	  {
		language: "zh-CN",
		name: "Chinese (Simplified)"
	  },
	  {
		language: "zh-TW",
		name: "Chinese (Traditional)"
	  },
	  {
		language: "co",
		name: "Corsican"
	  },
	  {
		language: "hr",
		name: "Croatian"
	  },
	  {
		language: "cs",
		name: "Czech"
	  },
	  {
		language: "da",
		name: "Danish"
	  },
	  {
		language: "nl",
		name: "Dutch"
	  },
	  {
		language: "dz",
		name: "Dzongkha"
	  },
	  {
		language: "eo",
		name: "Esperanto"
	  },
	  {
		language: "et",
		name: "Estonian"
	  },
	  {
		language: "fil",
		name: "Filipino"
	  },
	  {
		language: "fi",
		name: "Finnish"
	  },
	  {
		language: "fr",
		name: "French"
	  },
	  {
		language: "fy",
		name: "Frisian"
	  },
	  {
		language: "gl",
		name: "Galician"
	  },
	  {
		language: "ka",
		name: "Georgian"
	  },
	  {
		language: "de",
		name: "German"
	  },
	  {
		language: "el",
		name: "Greek"
	  },
	  {
		language: "gn",
		name: "Guarani"
	  },
	  {
		language: "gu",
		name: "Gujarati"
	  },
	  {
		language: "ht",
		name: "Haitian Creole"
	  },
	  {
		language: "ha",
		name: "Hausa"
	  },
	  {
		language: "haw",
		name: "Hawaiian"
	  },
	  {
		language: "iw",
		name: "Hebrew"
	  },
	  {
		language: "hi",
		name: "Hindi"
	  },
	  {
		language: "hmn",
		name: "Hmong"
	  },
	  {
		language: "hu",
		name: "Hungarian"
	  },
	  {
		language: "is",
		name: "Icelandic"
	  },
	  {
		language: "ig",
		name: "Igbo"
	  },
	  {
		language: "id",
		name: "Indonesian"
	  },
	  {
		language: "ga",
		name: "Irish"
	  },
	  {
		language: "it",
		name: "Italian"
	  },
	  {
		language: "ja",
		name: "Japanese"
	  },
	  {
		language: "jv",
		name: "Javanese"
	  },
	  {
		language: "kn",
		name: "Kannada"
	  },
	  {
		language: "kk",
		name: "Kazakh"
	  },
	  {
		language: "km",
		name: "Khmer"
	  },
	  {
		language: "rw",
		name: "Kinyarwanda"
	  },
	  {
		language: "ko",
		name: "Korean"
	  },
	  {
		language: "ku",
		name: "Kurdish (Kurmanji)"
	  },
	  {
		language: "ckb",
		name: "Kurdish (Sorani)"
	  },
	  {
		language: "ky",
		name: "Kyrgyz"
	  },
	  {
		language: "lo",
		name: "Lao"
	  },
	  {
		language: "la",
		name: "Latin"
	  },
	  {
		language: "lv",
		name: "Latvian"
	  },
	  {
		language: "lt",
		name: "Lithuanian"
	  },
	  {
		language: "lb",
		name: "Luxembourgish"
	  },
	  {
		language: "mk",
		name: "Macedonian"
	  },
	  {
		language: "mg",
		name: "Malagasy"
	  },
	  {
		language: "ms",
		name: "Malay"
	  },
	  {
		language: "ml",
		name: "Malayalam"
	  },
	  {
		language: "mt",
		name: "Maltese"
	  },
	  {
		language: "mi",
		name: "Maori"
	  },
	  {
		language: "mr",
		name: "Marathi"
	  },
	  {
		language: "mn",
		name: "Mongolian"
	  },
	  {
		language: "my",
		name: "Myanmar (Burmese)"
	  },
	  {
		language: "ne",
		name: "Nepali"
	  },
	  {
		language: "no",
		name: "Norwegian"
	  },
	  {
		language: "or",
		name: "Odia (Oriya)"
	  },
	  {
		language: "ps",
		name: "Pashto"
	  },
	  {
		language: "fa",
		name: "Persian"
	  },
	  {
		language: "pl",
		name: "Polish"
	  },
	  {
		language: "pt",
		name: "Portuguese"
	  },
	  {
		language: "pa",
		name: "Punjabi"
	  },
	  {
		language: "ro",
		name: "Romanian"
	  },
	  {
		language: "rm",
		name: "Romansh"
	  },
	  {
		language: "ru",
		name: "Russian"
	  },
	  {
		language: "sm",
		name: "Samoan"
	  },
	  {
		language: "gd",
		name: "Scots Gaelic"
	  },
	  {
		language: "sr",
		name: "Serbian"
	  },
	  {
		language: "ser",
		name: "Serrano"
	  },
	  {
		language: "st",
		name: "Sesotho"
	  },
	  {
		language: "sn",
		name: "Shona"
	  },
	  {
		language: "scn",
		name: "Sicilian"
	  },
	  {
		language: "sd",
		name: "Sindhi"
	  },
	  {
		language: "si",
		name: "Sinhala"
	  },
	  {
		language: "sk",
		name: "Slovak"
	  },
	  {
		language: "sl",
		name: "Slovenian"
	  },
	  {
		language: "so",
		name: "Somali"
	  },
	  {
		language: "es",
		name: "Spanish"
	  },
	  {
		language: "su",
		name: "Sundanese"
	  },
	  {
		language: "sw",
		name: "Swahili"
	  },
	  {
		language: "sv",
		name: "Swedish"
	  },
	  {
		language: "tg",
		name: "Tajik"
	  },
	  {
		language: "ber",
		name: "Tamazight"
	  },
	  {
		language: "ta",
		name: "Tamil"
	  },
	  {
		language: "tt",
		name: "Tatar"
	  },
	  {
		language: "te",
		name: "Telugu"
	  },
	  {
		language: "th",
		name: "Thai"
	  },
	  {
		language: "bo",
		name: "Tibetan"
	  },
	  {
		language: "tr",
		name: "Turkish"
	  },
	  {
		language: "tk",
		name: "Turkmen"
	  },
	  {
		language: "uk",
		name: "Ukrainian"
	  },
	  {
		language: "ur",
		name: "Urdu"
	  },
	  {
		language: "ug",
		name: "Uyghur"
	  },
	  {
		language: "uz",
		name: "Uzbek"
	  },
	  {
		language: "vi",
		name: "Vietnamese"
	  },
	  {
		language: "cy",
		name: "Welsh"
	  },
	  {
		language: "wo",
		name: "Wolof"
	  },
	  {
		language: "xh",
		name: "Xhosa"
	  },
	  {
		language: "yi",
		name: "Yiddish"
	  },
	  {
		language: "yo",
		name: "Yoruba"
	  },
	  {
		language: "zu",
		name: "Zulu"
	  }
	]
}

document.addEventListener("keypress", keyPressed)

function keyPressed(e){
	if(e.code == 13){getTranslation()}
}
transBtn.onclick = getTranslation

function getTranslation(){
	console.log(input.value)
    const data = JSON.stringify({
        "q": input.value,
        "source": lgInput.value,
        "target": select.value
    });
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

	xhr.onload = showTranslation;
    
    xhr.open("POST", "https://deep-translate1.p.rapidapi.com/language/translate/v2");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-rapidapi-key", "b32f1d10b4msh0b053f6854455a2p126be4jsn37c9d350d76b");
    xhr.setRequestHeader("x-rapidapi-host", "deep-translate1.p.rapidapi.com");
    
    xhr.send(data);
}

function showTranslation(e){
	let xhr = e.target;
	let obj = JSON.parse(xhr.responseText)

	let trans = obj.data.translations.translatedText

	output.innerHTML = trans

}


console.log(select.value)


function dropdown(selector){
	for(let o of languages){
		let option = document.createElement("option")
		option.value = o.language
		option.innerHTML = o.name
// console.log(o.name)
		selector.appendChild(option)
	}
}


// function dropdown2(){
// 	for(let e of languages){
// 		let choose = document.createElement("choose")
// 		choose.value = e.language
// 		choose.innerHTML = e.name
// // console.log(e.name)
// 		lgInput.appendChild(choose)
// 	}
// }

window.addEventListener("load",onLoad)

function onLoad(){
console.log("load")
dropdown(select)
dropdown(lgInput)
}