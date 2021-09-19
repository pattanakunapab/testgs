
function testGS(){

const url = "https://script.google.com/macros/s/AKfycbwQwd5EBUeOOD1kZaB0QnI1x9YOwOUInIw9aUNAtVWWXUHG7e9S7DPlrkQeiQ4ebWpRgw/exec"

        fetch(url)
            .then(d => d.json())
            .then(d => {
                document.getElementById("app").textContent = d[0].status; 
        });

}

document.getElementById("btn").addEventListener("click",testGS);