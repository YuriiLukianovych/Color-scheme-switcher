const themeInputs = document.querySelectorAll("input[data-theme]");

// object with themes
const Theme = {
    "theme-1": "default",
    "theme-2": "midnight-blue",
    "theme-3": "deep-ocean",
    "theme-4": "monochrome",
    "theme-5": "pitch-black",
    "theme-6": "other-theme",
};

// 01 loading user selected theme from localStorage
themeCustomization();

// 02
themeInputs.forEach((input) => {
    input.addEventListener("change", changeThemeFn);
});

// functions
function changeThemeFn(e) {
    // remove previous theme from BODY
    Object.values(Theme).forEach((el) => {
        document.body.classList.remove(el);
    });

    // get theme key from data-atribute from selected input
    const theme = e.target.dataset.theme;

    // add selected theme on BODY
    document.body.classList.add(Theme[theme]);

    // save the selected value in the localStorage with the key 'theme'
    localStorage.setItem("theme", theme);
}

function themeCustomization() {
    const savedTheme = localStorage.getItem("theme");
    console.log(savedTheme);
    if (savedTheme) {
        //if in locolStorage saved theme
        // remove default theme
        document.body.classList.remove("default");
        // add theme from localStorage
        document.body.classList.add(Theme[savedTheme]);
    }
}
