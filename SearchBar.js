const SayingsSearched = document.getElementById('SayingsSearched');
const SearchBar = document.getElementById('SearchBar');
let SearchedShown = document.getElementById("SayingsSearched")
let Sayings = [];

SearchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    
    if (searchString.length >= 1){SayingsSearched.style.display = "block"}
    if (searchString.length <= 1){SayingsSearched.style.display = "none"}
   

    const FilteredSayings = Sayings.filter((character) => {
        return (
            character.saying.toLowerCase().includes(searchString) ||
            character.theme.toLowerCase().includes(searchString)
        );
    });
    DisplaySayings(FilteredSayings);
});

const loadCharacters = async () => {
    try {
        const res = await fetch("http://runi01613.web.techcollege.dk/Ordatok_api.html");
        Sayings = await res.json();
        DisplaySayings(Sayings);
    } catch (err) {
        console.error(err);
    }
};

const DisplaySayings = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="SayingsSearched">
                <h6>${character.saying}</h6>
                <p><i>evni: ${character.theme}</i></p>
            </li>
        `;
        })
        .join('');
    SayingsSearched.innerHTML = htmlString;

};

loadCharacters();
