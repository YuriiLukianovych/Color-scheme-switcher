// ==================  Theme Selection ============================

const themeInputs = document.querySelectorAll("input[data-theme]");
const themePreviewCards = document.querySelectorAll("li[data-theme]");

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

// 02 listen clicks in preview card
themePreviewCards.forEach((card) => {
    card.addEventListener("click", () => {
        // remove previous theme from BODY
        Object.values(Theme).forEach((el) => {
            document.body.classList.remove(el);
        });

        // get theme key from data-atribute from selected card
        const theme = card.dataset.theme;

        // put 'checked = true' for input in card
        const input = [...themeInputs].filter(
            (el) => el.dataset.theme === theme
        );
        input[0].checked = true;

        // add selected theme on BODY
        document.body.classList.add(Theme[theme]);

        // save the selected value in the localStorage with the key 'theme'
        localStorage.setItem("theme", theme);
    });
});

function themeCustomization() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        //if in locolStorage saved theme
        // remove default theme
        document.body.classList.remove("default");
        // add theme from localStorage
        document.body.classList.add(Theme[savedTheme]);

        // put 'checked = true' for an input of the loaded theme from localStorage
        const input = document.querySelector(
            `input[data-theme="${savedTheme}"]`
        );
        console.log("from localStorage - input => ", input);
        input.checked = true;
    }
}
// ==================== Custom Color Selection (positive|negative) ========================
const positiveInputColor = document.querySelector(
    'input[name="positive-color"]'
);
const negativeInputColor = document.querySelector(
    'input[name="negative-color"]'
);
const positiveTextList = document.querySelectorAll(".positive");
const negativeTextList = document.querySelectorAll(".negative");

// 01 loading user selected colors from localStorage
colorCustomization();

// 02 listen input changes
positiveInputColor.addEventListener("input", () => {
    // saves the selected value for the positive color in the localStorage
    localStorage.setItem("positive-color", positiveInputColor.value);

    // for all text with .positive class change color on selected
    positiveTextList.forEach((el) => {
        el.style.color = positiveInputColor.value;
    });
});

negativeInputColor.addEventListener("input", () => {
    // saves the selected value for the negative color in the localStorage
    localStorage.setItem("negative-color", negativeInputColor.value);

    // for all text with .negative class change color on selected
    negativeTextList.forEach((el) => {
        el.style.color = negativeInputColor.value;
    });
});

// function colorCustomization
function colorCustomization() {
    const savedPositiveColor = localStorage.getItem("positive-color");
    const savedNegativeColor = localStorage.getItem("negative-color");

    if (savedPositiveColor) {
        // add color from localStorage
        positiveTextList.forEach((el) => {
            el.style.color = savedPositiveColor;
        });
        // change input value to loaded color from localStorage
        positiveInputColor.value = savedPositiveColor;
    }

    if (savedNegativeColor) {
        // add color from localStorage
        negativeTextList.forEach((el) => {
            el.style.color = savedNegativeColor;
        });
        // change input value to loaded color from localStorage
        negativeInputColor.value = savedNegativeColor;
    }
}
