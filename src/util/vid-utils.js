
const Util = {

    // 15 Vids
    videos: [
        {
            title: "Space Traveling [Lo-Fi / Jazz Hop / Chill Mix",
            id: "3ST4fDVyAzA"
        },
        {
            title: "Purrple Cat - Distant Worlds 🪐 [lofi hip hop/relaxing beats]",
            id: "rHh1uQndXJ4"
        },
        {
            title: "5AM IN ＴＯＫＹＯ - Mellow chill ' jazz hip hop beats",
            id: "liHgt4CbodY"
        }, 
        {
            title: "ＳＰＡＣＥ　ＴＲＩＰ [ Chillwave - Synthwave - Retrowave Mix ]",
            id: "wOMwO5T3yT4"
        },
        {
            title: "Hardspace: Shipbreaker - Americana Beats to Chill to",
            id: "JxTyMVPaOXY"
        },
        {
            title: "Outer Wilds Soundtrack (Andrew Prahlow)",
            id: "JPyaFR7poL4"
        },
        {
            title: "Space Ambient Music • [ INTERSTELLAR SPACE JOURNEY ] •",
            id: "8wLwxmjrZj8"
        },
        {
            title: "КОСМИЧЕСКАЯ МУЗЫКА [ Space Galaxy Music ] Космос, Звезды, Планеты",
            id: "_hHwz1UWJmI"
        },
        {
            title: "COSMIC RELAXATION: 8 HOURS of 4K Deep Space NASA Footage + Chillout Music for Studying, Working, Etc",
            id: "Y_plhk1FUQA"
        },
        {
            title: "Ｓｐａｃｅ　Ｌｏｕｎｇｅ　|　Ｃｈｉｌｌ　Ｍｉｘ",
            id: "lG_sddVeoh0"
        },
        {
            title: "Just chilling...",
            id: "TdBSoy9F9NA"
        },
        {
            title: "Cowboy Bebop [Tributes Mix]*",
            id: "njxfE1qRA2g"
        },
        {
            title: "D.I.Y tuning - Vangelis - Blade Runner Blues 432Hz",
            id:"XB8EAWKXHsw"
        },
        {
            title: "Celeste - Complete Soundtrack - Full OST Album",
            id: "2JsYHpiH2xs"
        },
        {
            title: "Loscil - Endless Falls",
            id: "CgUacQ5cx_w"
        }
    ],
    opts: {
        width: "560",
        height: "315",
        playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            loop: 1
        }
    }
}

module.exports = Util;

// Older iterations of urls before using react-youtube
// [
//     // Space Traveling [Lo-Fi / Jazz Hop / Chill Mix]
//     "https://www.youtube.com/embed/3ST4fDVyAzA?&autoplay=1",
//     // Purrple Cat - Distant Worlds 🪐 [lofi hip hop/relaxing beats]
//     "https://www.youtube.com/embed/rHh1uQndXJ4?&autoplay=1",
//     // 5AM IN ＴＯＫＹＯ - Mellow chill ' jazz hip hop beats
//     "https://www.youtube.com/embed/liHgt4CbodY?&autoplay=1", 
//     // ＳＰＡＣＥ　ＴＲＩＰ [ Chillwave - Synthwave - Retrowave Mix ]
//     "https://www.youtube.com/embed/wOMwO5T3yT4?&autoplay=1",
//     // Hardspace: Shipbreaker - Americana Beats to Chill to
//     "https://www.youtube.com/embed/JxTyMVPaOXY?&autoplay=1",
//     // Outer Wilds Soundtrack (Andrew Prahlow)
//     "https://www.youtube.com/embed/JPyaFR7poL4?&autoplay=1",
//     // Space Ambient Music • [ INTERSTELLAR SPACE JOURNEY ] •
//     "https://www.youtube.com/embed/8wLwxmjrZj8?&autoplay=1",
//     // КОСМИЧЕСКАЯ МУЗЫКА [ Space Galaxy Music ] Космос, Звезды, Планеты
//     "https://www.youtube.com/embed/_hHwz1UWJmI?&autoplay=1",
//     // COSMIC RELAXATION: 8 HOURS of 4K Deep Space NASA Footage + Chillout Music for Studying, Working, Etc
//     "https://www.youtube.com/embed/Y_plhk1FUQA?&autoplay=1",
//     // Ｓｐａｃｅ　Ｌｏｕｎｇｅ　|　Ｃｈｉｌｌ　Ｍｉｘ
//     "https://www.youtube.com/embed/lG_sddVeoh0?&autoplay=1",
//     // Just chilling...
//     "https://www.youtube.com/embed/TdBSoy9F9NA?&autoplay=1",
//     // Cowboy Bebop [Tributes Mix]*
//     "https://www.youtube.com/embed/njxfE1qRA2g?&autoplay=1",
//     // D.I.Y tuning - Vangelis - Blade Runner Blues 432Hz
//     "https://www.youtube.com/embed/XB8EAWKXHsw?&autoplay=1",
//     // Celeste - Complete Soundtrack - Full OST Album
//     "https://www.youtube.com/embed/2JsYHpiH2xs?&autoplay=1",
// ]